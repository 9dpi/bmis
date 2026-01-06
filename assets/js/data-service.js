/* ============================================
   SCP HMIS - Data Service Module
   Handles data fetching from Google Sheets API
   ============================================ */

/**
 * Configuration for Google Sheets API
 */
const SHEETS_CONFIG = {
    SHEET_ID: '1_aMJkXZxN49COn9p2a64yNCtegPF1mlhL4M66q9JGfU',
    API_KEY: 'AIzaSyArA7XDisEHeSB3aiac7gv5F9KahiAZ0sU',
    RANGE: 'Sheet1!A2:G100'
};

/**
 * Fetch housekeeping data from Google Sheets
 * @returns {Promise<Array>} Array of housekeeping log entries
 */
async function fetchHousekeepingData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_CONFIG.SHEET_ID}/values/${SHEETS_CONFIG.RANGE}?key=${SHEETS_CONFIG.API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('Failed to fetch housekeeping data:', response.status);
            return [];
        }

        const data = await response.json();

        if (data.values && data.values.length > 0) {
            // Get last 8 entries and reverse them (newest first)
            return data.values
                .slice(-8)
                .reverse()
                .map(v => ({
                    time: v[0] || '---',
                    staff: v[1] || '---',
                    loc: v[2] || '---',
                    status: v[4] || 'OK'
                }));
        }

        return [];
    } catch (error) {
        console.error('Error fetching housekeeping data:', error);
        return [];
    }
}

/**
 * Start the housekeeping data flow
 * @param {Object} alpineData - Alpine.js data object
 */
function startHKFlow(alpineData) {
    const updateHK = async () => {
        const logs = await fetchHousekeepingData();

        if (logs.length > 0) {
            alpineData.housekeepingLogs = logs;
            alpineData.lastHkUpdate = logs[0].time;
        }
    };

    // Initial fetch
    updateHK();

    // Update every 15 seconds
    setInterval(updateHK, 15000);
}

// Make function available globally
window.startHKFlow = startHKFlow;
