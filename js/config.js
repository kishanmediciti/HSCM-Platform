// Configuration constants
const CONFIG = {
    APP_NAME: 'HSCM Platform',
    VERSION: '3.1',
    API_BASE_URL: 'https://api.hscm.local/v1',
    CACHE_TTL: 5 * 60 * 1000, // 5 minutes
    TIMEOUT: 30000, // 30 seconds
    
    // Pagination
    ITEMS_PER_PAGE: 25,
    
    // Notifications
    NOTIFICATION_DURATION: 4000,
    
    // Colors
    COLORS: {
        primary: '#00b4d8',
        success: '#2ec4b6',
        danger: '#e63946',
        warning: '#f4a261',
        info: '#00b4d8',
    },
    
    // Roles and permissions
    ROLES: {
        CEO: 'CEO',
        FINANCE_CONTROLLER: 'Finance Controller',
        PROCUREMENT_MANAGER: 'Procurement Manager',
        STORE_MANAGER: 'Store Manager',
        HOSPITAL_ADMIN: 'Hospital Admin',
    },
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
