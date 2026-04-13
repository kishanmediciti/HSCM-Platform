// Dashboard Page Handler

class Dashboard {
    constructor() {
        this.kpis = [];
        this.alerts = [];
        this.init();
    }
    
    init() {
        window.addEventListener('pageChanged', (e) => {
            if (e.detail.page === 'dashboard') {
                this.load();
            }
        });
    }
    
    async load() {
        console.log('Loading Dashboard...');
        this.loadKPIs();
        this.loadAlerts();
    }
    
    loadKPIs() {
        // Mock KPI data
        this.kpis = [
            { label: 'Network Stock Value', value: '₹4.82 Cr', trend: '↑ 3.2%' },
            { label: 'Procurement Spend YTD', value: '₹18.4 Cr', trend: '↑ 8.4%' },
            { label: 'Stockout Incidents', value: '3', trend: '↑ 2' },
            { label: 'PO Cycle Time', value: '1.8 d', trend: '↓ 68%' },
        ];
        
        console.log('KPIs loaded:', this.kpis);
    }
    
    loadAlerts() {
        // Mock alert data
        this.alerts = [
            { type: 'stockout', message: 'Paracetamol IV 500mg', location: 'Apollo' },
            { type: 'approval', message: 'PO #PO-2847', value: '₹6,20,000' },
            { type: 'expiry', message: '12 items', location: 'CPP' },
        ];
        
        console.log('Alerts loaded:', this.alerts);
    }
}

// Initialize dashboard
const dashboard = new Dashboard();
