/* ============================================
   SCP HMIS - Layout Manager
   Loads shared components (sidebar, header)
   ============================================ */

/**
 * Load HTML component into target element
 * @param {string} componentPath - Path to component file
 * @param {string} targetSelector - CSS selector for target element
 */
async function loadComponent(componentPath, targetSelector) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            console.error(`Failed to load component: ${componentPath}`);
            return;
        }

        const html = await response.text();
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
            targetElement.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

/**
 * Initialize the layout with shared components
 */
async function initLayout() {
    // Determine the base path based on current location
    const isInSubfolder = window.location.pathname.includes('/views/') ||
        window.location.pathname.includes('/pages/');
    const basePath = isInSubfolder ? '../' : '';

    // Load sidebar and header components
    await Promise.all([
        loadComponent(`${basePath}shared/sidebar.html`, '#sidebar-container'),
        loadComponent(`${basePath}shared/header.html`, '#header-container')
    ]);

    console.log('✅ Layout components loaded');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
} else {
    initLayout();
}

// Export for manual use
window.initLayout = initLayout;
window.loadComponent = loadComponent;
