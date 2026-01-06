/* ============================================
   SCP HMIS - Charts Module
   Handles all Chart.js visualizations
   ============================================ */

// Global charts object to store chart instances
let charts = {};

/**
 * Get theme-specific colors based on dark/light mode
 * @returns {Object} Chart.js configuration object
 */
const getColors = () => {
    const isDark = document.body.classList.contains('dark');
    return {
        grid: isDark ? '#334155' : '#e2e8f0',
        text: isDark ? '#94a3b8' : '#64748b'
    };
};

/**
 * Create configuration for mini line charts
 * @param {string} color - Border color for the chart line
 * @returns {Object} Chart.js configuration object
 */
const miniCfg = (color) => ({
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            borderColor: color,
            data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 10 + 20)),
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
});

/**
 * Initialize all charts on the page
 */
function initCharts() {
    const c = getColors();

    // Temperature Chart (Emerald)
    if (document.getElementById('chartTemp')) {
        charts.temp = new Chart(
            document.getElementById('chartTemp'),
            miniCfg('#10b981')
        );
    }

    // Humidity Chart (Blue)
    if (document.getElementById('chartHumid')) {
        charts.humid = new Chart(
            document.getElementById('chartHumid'),
            miniCfg('#3b82f6')
        );
    }

    // Air Quality Index Chart (Purple)
    if (document.getElementById('chartAQI')) {
        charts.aqi = new Chart(
            document.getElementById('chartAQI'),
            miniCfg('#8b5cf6')
        );
    }

    if (document.getElementById('chartRevenue')) {
        charts.revenue = new Chart(
            document.getElementById('chartRevenue'),
            miniCfg('#f97316')
        );
    }

    // Fee Chart (Orange) -> Now Revenue Chart mostly, keeping for legacy
    if (document.getElementById('chartFee')) {
        charts.fee = new Chart(
            document.getElementById('chartFee'),
            miniCfg('#f97316')
        );
    }

    // Elevator Chart (Blue bars)
    if (document.getElementById('chartElevator')) {
        charts.elevator = new Chart(
            document.getElementById('chartElevator'),
            {
                type: 'bar',
                data: {
                    labels: ['Sáng', 'Trưa', 'Chiều', 'Tối'],
                    datasets: [{
                        backgroundColor: '#3b82f6',
                        borderRadius: 4,
                        data: [12, 18, 15, 8]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { display: false },
                        x: {
                            grid: { display: false },
                            ticks: {
                                color: c.text,
                                font: {
                                    size: 8,
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                }
            }
        );
    }

    // Traffic Trend Chart (Blue Area)
    if (document.getElementById('chartTrafficTrend')) {
        charts.traffic = new Chart(
            document.getElementById('chartTrafficTrend'),
            {
                type: 'line',
                data: {
                    labels: ['06h', '10h', '14h', '18h'],
                    datasets: [{
                        fill: true,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderColor: '#3b82f6',
                        borderWidth: 2,
                        tension: 0.4,
                        data: [40, 120, 95, 150]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { display: false },
                        x: {
                            grid: { color: c.grid },
                            ticks: {
                                color: c.text,
                                font: {
                                    size: 8,
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                }
            }
        );
    }
}

/**
 * Update all charts when theme changes (dark/light mode)
 */
function updateCharts() {
    setTimeout(() => {
        const c = getColors();
        Object.values(charts).forEach(chart => {
            if (chart.options.scales?.x?.grid) {
                chart.options.scales.x.grid.color = c.grid;
            }
            if (chart.options.scales?.x?.ticks) {
                chart.options.scales.x.ticks.color = c.text;
            }
            chart.update();
        });
    }, 100);
}

// Make functions available globally
window.initCharts = initCharts;
window.updateCharts = updateCharts;
