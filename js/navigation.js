// Navigation handler

class Navigator {
    constructor() {
        this.currentPage = 'dashboard';
        this.pages = new Map();
        this.init();
    }
    
    init() {
        this.setupNavLinks();
        this.setupRouting();
    }
    
    setupNavLinks() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                if (page) this.navigate(page);
            });
        });
    }
    
    setupRouting() {
        window.addEventListener('hashchange', () => {
            const page = window.location.hash.slice(1) || 'dashboard';
            this.navigate(page);
        });
    }
    
    navigate(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // Remove active from nav links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        
        // Show target page
        const pageEl = document.getElementById(`page-${page}`);
        if (pageEl) {
            pageEl.classList.add('active');
        }
        
        // Update nav link
        const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }
        
        // Update page title
        this.updatePageTitle(page);
        
        // Store current page
        this.currentPage = page;
        window.location.hash = page;
        
        // Trigger page load event
        window.dispatchEvent(new CustomEvent('pageChanged', { detail: { page } }));
    }
    
    updatePageTitle(page) {
        const titles = {
            'dashboard': 'CEO Executive Dashboard',
            'alerts': 'Alerts & Escalations',
            'cpp-dashboard': 'CPP Operations Dashboard',
            'purchase-req': 'Purchase Requisitions',
            'purchase-orders': 'Purchase Orders',
            'grn': 'Goods Receipt Note',
            'hospital-dashboard': 'Hospital Dashboard',
            'inventory': 'Inventory View',
            'reports': 'Reports & Analytics',
            'settings': 'System Settings',
        };
        
        document.getElementById('page-title').textContent = titles[page] || page;
    }
}

// Initialize navigator
const navigator = new Navigator();
