// Utility functions

// Generate unique ID
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
    }).format(amount);
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-IN').format(new Date(date));
}

// Format percentage
function formatPercent(value) {
    return `${(value * 100).toFixed(1)}%`;
}

// Debounce function
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

// Throttle function
function throttle(fn, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            fn(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    fn(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), CONFIG.NOTIFICATION_DURATION);
}

// API call wrapper
async function fetchData(endpoint, options = {}) {
    try {
        const url = `${CONFIG.API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            timeout: CONFIG.TIMEOUT,
        });
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        showNotification('Error loading data', 'danger');
        return null;
    }
}

// Local storage helpers
const Storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    get(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    },
};

// Session storage helpers
const Session = {
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    
    get(key) {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    
    remove(key) {
        sessionStorage.removeItem(key);
    },
};
