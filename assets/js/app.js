/* ============================================
   SCP HMIS - Main Application Script
   Initializes and manages the application
   ============================================ */

/**
 * Initialize PanZoom for 3D facility viewer
 */
function initPanZoom() {
    const elem = document.getElementById('panzoom-container');
    if (!elem) return;

    const panzoom = Panzoom(elem, {
        maxScale: 5,
        minScale: 0.5,
        contain: 'outside'
    });

    // Enable zoom with Shift + Mouse Wheel
    elem.parentElement.addEventListener('wheel', (event) => {
        if (!event.shiftKey) return;
        panzoom.zoomWithWheel(event);
    });
}

/**
 * Simulate real-time Housekeeping updates
 */
function startHKFlow(appData) {
    if (!window.HMISData) return;

    // Initial load
    appData.housekeepingLogs = window.HMISData.getHousekeeping();
    appData.lastHkUpdate = new Date().toLocaleTimeString();

    // Simulation interval
    setInterval(() => {
        const locations = ['Sảnh chính', 'Phòng Cấp cứu', 'Khu xét nghiệm', 'Phòng Mổ 01', 'Căng tin', 'Tầng 3 - Nội'];
        const statuses = ['Sạch', 'Đang dọn', 'Cần dọn', 'Đã khử khuẩn'];
        const staff = ['Lê Thị E', 'Nguyễn Văn G', 'Trần Thị H', 'Phạm Minh K'];

        const newLog = {
            loc: locations[Math.floor(Math.random() * locations.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            staff: staff[Math.floor(Math.random() * staff.length)],
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        appData.housekeepingLogs.unshift(newLog);
        if (appData.housekeepingLogs.length > 8) appData.housekeepingLogs.pop();
        appData.lastHkUpdate = new Date().toLocaleTimeString();

        // Update stats if needed
        if (appData.stats && window.HMISData) {
            appData.stats = window.HMISData.getStats();
        }
    }, 5000);
}

/**
 * Initialize all application components
 */
function initApp() {
    console.log('🏥 SCP HMIS - Initializing...');

    // Initialize charts
    if (typeof initCharts === 'function') {
        initCharts();
        console.log('✅ Charts initialized');
    }

    // Initialize PanZoom for 3D viewer
    if (typeof Panzoom !== 'undefined') {
        initPanZoom();
        console.log('✅ PanZoom initialized');
    }

    console.log('✅ SCP HMIS - Ready!');
}

// Initialize when DOM is loaded
window.addEventListener('load', initApp);

// Export for use in other modules
window.initApp = initApp;
window.startHKFlow = startHKFlow;
