// UI Event Handlers

function toggleNotifications() {
    const panel = document.getElementById('notif-panel');
    panel.classList.toggle('open');
}

function refreshData() {
    showNotification('Refreshing data...', 'info');
    // Add actual refresh logic
    setTimeout(() => {
        showNotification('Data refreshed', 'success');
    }, 1000);
}

function exportData() {
    showNotification('Exporting data...', 'info');
    // Add export logic
}

function createPR() {
    showNotification('Opening PR form...', 'info');
    // Open modal or navigate
}

function handleAction(action) {
    console.log('Action:', action);
    showNotification(`Action: ${action}`, 'info');
}

function emergencyIndent() {
    showNotification('Emergency indent created', 'success');
}

function approvePO() {
    showNotification('PO approval dialog opened', 'info');
}

function markAllRead() {
    showNotification('All notifications marked as read', 'success');
}

function viewItems() {
    navigator.navigate('inventory');
}

// Form handlers
function submitForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        const formData = new FormData(form);
        console.log('Form data:', Object.fromEntries(formData));
        showNotification('Form submitted', 'success');
    }
}

// Modal handlers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('open');
    }
}

// Table sorting
function sortTable(tableId, columnIndex) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        return aValue.localeCompare(bValue);
    });
    
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
}

// Pagination
class Pagination {
    constructor(containerId, itemsPerPage = CONFIG.ITEMS_PER_PAGE) {
        this.container = document.getElementById(containerId);
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
        this.totalItems = 0;
    }
    
    goToPage(pageNumber) {
        this.currentPage = pageNumber;
        this.render();
    }
    
    render() {
        const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        console.log(`Page ${this.currentPage} of ${totalPages}`);
    }
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}
