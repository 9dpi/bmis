/**
 * SCP HMIS - Centralized Data Store
 * Single source of truth for all application data
 * Uses LocalStorage for persistence
 */

class HMISDataStore {
    constructor() {
        this.data = {
            // Patient Management
            patients: [
                { id: 'BN001', name: 'Nguyễn Văn A', age: 45, gender: 'Nam', room: '502-A', bed: 'A1', department: 'Nội Tổng Quát', diagnosis: 'Viêm phổi cấp', status: 'critical', admitDate: '2026-01-03', doctor: 'BS. Trần Thị B', bhyt: 'HS4010012345678', vitals: { temp: 38.5, bp: '140/90', hr: 95, spo2: 92 } },
                { id: 'BN002', name: 'Trần Thị B', age: 32, gender: 'Nữ', room: '301-B', bed: 'B2', department: 'Sản', diagnosis: 'Thai 38 tuần', status: 'stable', admitDate: '2026-01-04', doctor: 'BS. Lê Văn C', bhyt: 'HS4010087654321', vitals: { temp: 36.8, bp: '120/80', hr: 78, spo2: 98 } },
                { id: 'BN003', name: 'Lê Văn C', age: 67, gender: 'Nam', room: 'ICU-03', bed: 'ICU3', department: 'Hồi Sức', diagnosis: 'Nhồi máu cơ tim', status: 'critical', admitDate: '2026-01-02', doctor: 'BS. Phạm Minh D', bhyt: 'HS4010011111111', vitals: { temp: 37.2, bp: '160/95', hr: 110, spo2: 89 } },
                { id: 'BN004', name: 'Phạm Thị D', age: 28, gender: 'Nữ', room: '204-C', bed: 'C1', department: 'Ngoại Khoa', diagnosis: 'Viêm ruột thừa', status: 'recovering', admitDate: '2026-01-05', doctor: 'BS. Hoàng Văn E', bhyt: 'HS4010022222222', vitals: { temp: 37.0, bp: '118/75', hr: 72, spo2: 99 } },
                { id: 'BN005', name: 'Hoàng Văn E', age: 55, gender: 'Nam', room: '405-A', bed: 'A3', department: 'Tim Mạch', diagnosis: 'Tăng huyết áp', status: 'stable', admitDate: '2026-01-01', doctor: 'BS. Vũ Thị F', bhyt: 'HS4010033333333', vitals: { temp: 36.9, bp: '135/85', hr: 80, spo2: 97 } },
                { id: 'BN006', name: 'Ngô Văn G', age: 10, gender: 'Nam', room: '601-P', bed: 'P1', department: 'Nhi', diagnosis: 'Sốt xuất huyết', status: 'stable', admitDate: '2026-01-05', doctor: 'BS. Nguyễn Văn H', bhyt: 'HS4010044444444', vitals: { temp: 37.5, bp: '100/60', hr: 85, spo2: 98 } },
                { id: 'BN007', name: 'Lý Thị H', age: 42, gender: 'Nữ', room: '502-A', bed: 'A4', department: 'Nội Tổng Quát', diagnosis: 'Tiểu đường Type 2', status: 'stable', admitDate: '2026-01-02', doctor: 'BS. Trần Thị B', bhyt: 'HS4010055555555', vitals: { temp: 36.7, bp: '130/85', hr: 75, spo2: 97 } },
                { id: 'BN008', name: 'Phan Văn I', age: 22, gender: 'Nam', room: '204-C', bed: 'C2', department: 'Ngoại Khoa', diagnosis: 'Chấn thương chỉnh hình', status: 'recovering', admitDate: '2026-01-06', doctor: 'BS. Hoàng Văn E', bhyt: 'HS4010066666666', vitals: { temp: 36.8, bp: '122/80', hr: 70, spo2: 99 } },
                { id: 'BN009', name: 'Vũ Thị K', age: 35, gender: 'Nữ', room: '301-B', bed: 'B1', department: 'Sản', diagnosis: 'Kiểm tra định kỳ', status: 'stable', admitDate: '2026-01-06', doctor: 'BS. Lê Văn C', bhyt: 'HS4010077777777', vitals: { temp: 36.6, bp: '115/75', hr: 72, spo2: 98 } },
                { id: 'BN010', name: 'Đặng Văn L', age: 70, gender: 'Nam', room: 'ICU-03', bed: 'ICU4', department: 'Hồi Sức', diagnosis: 'Suy hô hấp', status: 'critical', admitDate: '2026-01-05', doctor: 'BS. Phạm Minh D', bhyt: 'HS4010088888888', vitals: { temp: 37.8, bp: '150/90', hr: 105, spo2: 85 } },
            ],

            // Bed Management
            beds: [
                { id: 'BED001', room: '502-A', bedNumber: 'A1', status: 'occupied', patientId: 'BN001', department: 'Nội Tổng Quát' },
                { id: 'BED002', room: '502-A', bedNumber: 'A2', status: 'available', patientId: null, department: 'Nội Tổng Quát' },
                { id: 'BED003', room: '502-A', bedNumber: 'A3', status: 'occupied', patientId: 'BN005', department: 'Nội Tổng Quát' },
                { id: 'BED004', room: '502-A', bedNumber: 'A4', status: 'occupied', patientId: 'BN007', department: 'Nội Tổng Quát' },
                { id: 'BED005', room: '301-B', bedNumber: 'B1', status: 'occupied', patientId: 'BN009', department: 'Sản' },
                { id: 'BED006', room: '301-B', bedNumber: 'B2', status: 'occupied', patientId: 'BN002', department: 'Sản' },
                { id: 'BED007', room: 'ICU-03', bedNumber: 'ICU1', status: 'available', patientId: null, department: 'Hồi Sức' },
                { id: 'BED008', room: 'ICU-03', bedNumber: 'ICU2', status: 'available', patientId: null, department: 'Hồi Sức' },
                { id: 'BED009', room: 'ICU-03', bedNumber: 'ICU3', status: 'occupied', patientId: 'BN003', department: 'Hồi Sức' },
                { id: 'BED010', room: 'ICU-03', bedNumber: 'ICU4', status: 'occupied', patientId: 'BN010', department: 'Hồi Sức' },
                { id: 'BED011', room: '204-C', bedNumber: 'C1', status: 'occupied', patientId: 'BN004', department: 'Ngoại Khoa' },
                { id: 'BED012', room: '204-C', bedNumber: 'C2', status: 'occupied', patientId: 'BN008', department: 'Ngoại Khoa' },
            ],

            // Lab Tests
            labTests: [
                { id: 'LAB001', patientId: 'BN001', testName: 'Xét nghiệm máu', type: 'Huyết học', status: 'completed', requestDate: '2026-01-03', resultDate: '2026-01-04', doctor: 'BS. Trần Thị B', result: 'WBC: 12.5 (cao), RBC: 4.5, Hb: 13.2' },
                { id: 'LAB002', patientId: 'BN001', testName: 'X-quang phổi', type: 'CĐHA', status: 'completed', requestDate: '2026-01-03', resultDate: '2026-01-03', doctor: 'BS. Trần Thị B', result: 'Có hình ảnh thâm nhiễm thùy dưới phổi phải' },
                { id: 'LAB003', patientId: 'BN003', testName: 'Điện tim', type: 'CĐHA', status: 'pending', requestDate: '2026-01-06', resultDate: null, doctor: 'BS. Phạm Minh D', result: null },
                { id: 'LAB004', patientId: 'BN006', testName: 'Test Dengue NS1', type: 'Miễn dịch', status: 'completed', requestDate: '2026-01-05', resultDate: '2026-01-05', doctor: 'BS. Nguyễn Văn H', result: 'Dương tính (+)' },
                { id: 'LAB005', patientId: 'BN010', testName: 'Khí máu động mạch', type: 'Hóa sinh', status: 'completed', requestDate: '2026-01-05', resultDate: '2026-01-05', doctor: 'BS. Phạm Minh D', result: 'PaO2 giảm, PaCO2 tăng (Suy hô hấp)' },
            ],

            // Inventory/Pharmacy
            inventory: [
                { id: 'MED001', name: 'Paracetamol 500mg', category: 'Hạ sốt', quantity: 5000, unit: 'viên', minStock: 1000, price: 500, supplier: 'Công ty Dược A' },
                { id: 'MED002', name: 'Amoxicillin 500mg', category: 'Kháng sinh', quantity: 750, unit: 'viên', minStock: 1000, price: 1200, supplier: 'Công ty Dược B' },
                { id: 'MED003', name: 'Glucose 5%', category: 'Dịch truyền', quantity: 2000, unit: 'chai', minStock: 500, price: 15000, supplier: 'Công ty Dược C' },
                { id: 'MED004', name: 'Insulin Mixtard 30', category: 'Tiểu đường', quantity: 120, unit: 'bút', minStock: 50, price: 250000, supplier: 'Công ty Novo' },
                { id: 'MED005', name: 'Salbutamol Nebulizer', category: 'Hô hấp', quantity: 300, unit: 'ống', minStock: 100, price: 8000, supplier: 'Công ty GSK' },
                { id: 'EQP001', name: 'Khẩu trang y tế', category: 'Vật tư', quantity: 10000, unit: 'cái', minStock: 5000, price: 2000, supplier: 'Công ty Y tế D' },
                { id: 'EQP002', name: 'Găng tay latex', category: 'Vật tư', quantity: 500, unit: 'hộp', minStock: 1000, price: 50000, supplier: 'Công ty Y tế E' },
            ],

            // Billing/Insurance
            billing: [
                { id: 'BILL001', patientId: 'BN001', patientName: 'Nguyễn Văn A', totalAmount: 15200000, bhytCovered: 12160000, selfPay: 3040000, status: 'pending', date: '2026-01-06', items: [{ service: 'Tiền giường', amount: 2000000 }, { service: 'Thuốc', amount: 5200000 }, { service: 'Xét nghiệm', amount: 3000000 }, { service: 'CĐHA', amount: 5000000 }] },
                { id: 'BILL002', patientId: 'BN002', patientName: 'Trần Thị B', totalAmount: 8500000, bhytCovered: 6800000, selfPay: 1700000, status: 'paid', date: '2026-01-05', items: [{ service: 'Khám thai', amount: 2000000 }, { service: 'Siêu âm', amount: 1500000 }, { service: 'Xét nghiệm', amount: 5000000 }] },
                { id: 'BILL003', patientId: 'BN003', patientName: 'Lê Văn C', totalAmount: 45000000, bhytCovered: 36000000, selfPay: 9000000, status: 'pending', date: '2026-01-06', items: [{ service: 'Hồi sức tích cực', amount: 25000000 }, { service: 'Thuốc đặc trị', amount: 15000000 }, { service: 'Can thiệp mạch', amount: 5000000 }] },
                { id: 'BILL004', patientId: 'BN004', patientName: 'Phạm Thị D', totalAmount: 12000000, bhytCovered: 9600000, selfPay: 2400000, status: 'paid', date: '2026-01-05', items: [{ service: 'Tiền giường', amount: 3000000 }, { service: 'Phẫu thuật', amount: 7000000 }, { service: 'Thuốc', amount: 2000000 }] },
                { id: 'BILL005', patientId: 'BN006', patientName: 'Ngô Văn G', totalAmount: 4200000, bhytCovered: 3360000, selfPay: 840000, status: 'paid', date: '2026-01-06', items: [{ service: 'Khám nhi', amount: 500000 }, { service: 'Xét nghiệm Dengue', amount: 700000 }, { service: 'Thuốc & Truyền dịch', amount: 3000000 }] },
            ],

            // Staff
            staff: [
                { id: 'NV001', name: 'BS. Trần Thị B', role: 'Bác sỹ', department: 'Nội Tổng Quát', shift: 'Sáng', phone: '0901234567', specialized: 'Nội Tổng Quát' },
                { id: 'NV002', name: 'BS. Lê Văn C', role: 'Bác sỹ', department: 'Sản', shift: 'Chiều', phone: '0902345678', specialized: 'Sản Phụ Khoa' },
                { id: 'NV003', name: 'ĐD. Nguyễn Văn D', role: 'Điều dưỡng', department: 'Hồi Sức', shift: 'Đêm', phone: '0903456789', specialized: 'Hồi sức cấp cứu' },
                { id: 'NV004', name: 'Lê Thị E', role: 'Vệ sinh', department: 'Hậu cần', shift: 'Sáng', phone: '0904567890', specialized: 'Vệ sinh khử khuẩn' },
                { id: 'NV005', name: 'Phạm Văn F', role: 'An ninh', department: 'Bảo vệ', shift: 'Đêm', phone: '0905678901', specialized: 'An ninh bệnh viện' },
                { id: 'NV006', name: 'BS. Phạm Minh D', role: 'Bác sỹ', department: 'Hồi Sức', shift: 'Sáng', phone: '0906789012', specialized: 'Hồi sức cấp cứu' },
                { id: 'NV007', name: 'ĐD. Vũ Thị H', role: 'Điều dưỡng', department: 'Sản', shift: 'Sáng', phone: '0907890123', specialized: 'Sản khoa' },
                { id: 'NV008', name: 'KTV. Hoàng Văn K', role: 'Kỹ thuật viên', department: 'CĐHA', shift: 'Chiều', phone: '0908901234', specialized: 'Chẩn đoán hình ảnh' },
            ],

            // Security
            securityLogs: [
                { id: 'SEC001', timestamp: '2026-01-06 02:30', location: 'Cổng chính', event: 'Phát hiện người lạ', status: 'resolved', guard: 'Phạm Văn F', action: 'Đã xác minh, người nhà BN' },
                { id: 'SEC002', timestamp: '2026-01-06 14:15', location: 'Khoa Cấp cứu', event: 'Xung đột gia đình BN', status: 'monitoring', guard: 'Nguyễn Văn G', action: 'Đang theo dõi' },
                { id: 'SEC003', timestamp: '2026-01-06 16:45', location: 'Khu vực cách ly', event: 'Cảnh báo ra vào trái phép', status: 'resolved', guard: 'Lê Văn L', action: 'Đã đưa ra khỏi khu vực' },
            ],

            // Housekeeping
            housekeeping: [
                { loc: 'Sảnh chính', status: 'Sạch', staff: 'Lê Thị E', time: '17:30' },
                { loc: 'Khoa Cấp cứu', status: 'Đang dọn', staff: 'Nguyễn Thị H', time: '17:40' },
                { loc: 'Phòng Mổ 02', status: 'Sạch', staff: 'Trần Văn K', time: '17:15' },
                { loc: 'Khu vệ sinh tầng 2', status: 'Cần dọn', staff: 'Lý Thị M', time: '17:50' },
            ],

            // Equipment
            equipment: [
                { id: 'EQP001', name: 'Máy thở High-End', department: 'Hồi Sức', status: 'operational', lastMaintenance: '2025-12-15', nextMaintenance: '2026-03-15' },
                { id: 'EQP002', name: 'Máy X-quang di động', department: 'CĐHA', status: 'maintenance', lastMaintenance: '2026-01-05', nextMaintenance: '2026-01-20' },
                { id: 'EQP003', name: 'Máy siêu âm màu 4D', department: 'Sản', status: 'operational', lastMaintenance: '2025-11-20', nextMaintenance: '2026-02-20' },
                { id: 'EQP004', name: 'Máy MRI 3.0T', department: 'CĐHA', status: 'operational', lastMaintenance: '2025-12-01', nextMaintenance: '2026-03-01' },
                { id: 'EQP005', name: 'Máy CT Scanner 128 lát', department: 'CĐHA', status: 'faulty', lastMaintenance: '2026-01-02', nextMaintenance: '2026-01-15' },
                { id: 'EQP006', name: 'Hệ thống Monitor theo dõi', department: 'Cấp cứu', status: 'operational', lastMaintenance: '2025-12-28', nextMaintenance: '2026-03-28' },
                { id: 'EQP007', name: 'Máy lọc máu liên tục', department: 'Hồi Sức', status: 'operational', lastMaintenance: '2025-12-10', nextMaintenance: '2026-03-10' },
            ],

            // Statistics for dashboard
            stats: {
                totalPatients: 1240,
                critical: 45,
                stable: 850,
                recovering: 345,
                totalBeds: 500,
                occupiedBeds: 458,
                availableBeds: 42,
                totalRevenue: 845000000,
                admissionsToday: 444,
                nurseCalls: 2
            }
        };

        // Load from localStorage if exists
        this.loadFromLocalStorage();
    }

    // === PATIENT METHODS ===
    getPatients() { return this.data.patients; }
    getPatient(id) { return this.data.patients.find(p => p.id === id); }
    addPatient(patient) {
        this.data.patients.push(patient);
        this.saveToLocalStorage();
        this.updateStats();
    }

    // === BED METHODS ===
    getBeds() { return this.data.beds; }
    getBedsByDepartment(dept) { return this.data.beds.filter(b => b.department === dept); }
    getAvailableBeds() { return this.data.beds.filter(b => b.status === 'available'); }

    // === LAB METHODS ===
    getLabTests() { return this.data.labTests; }
    getLabTestsByPatient(patientId) { return this.data.labTests.filter(t => t.patientId === patientId); }

    // === INVENTORY METHODS ===
    getInventory() { return this.data.inventory; }
    getLowStockItems() { return this.data.inventory.filter(i => i.quantity < i.minStock); }

    // === BILLING METHODS ===
    getBilling() { return this.data.billing; }
    getBillingByPatient(patientId) { return this.data.billing.filter(b => b.patientId === patientId); }

    // === STAFF METHODS ===
    getStaff() { return this.data.staff; }
    getStaffByRole(role) { return this.data.staff.filter(s => s.role === role); }

    // === SECURITY METHODS ===
    getSecurityLogs() { return this.data.securityLogs; }
    addSecurityLog(log) {
        this.data.securityLogs.push(log);
        this.saveToLocalStorage();
    }

    // === HOUSEKEEPING METHODS ===
    getHousekeeping() { return this.data.housekeeping; }
    addHousekeepingLog(log) {
        this.data.housekeeping.unshift(log);
        this.saveToLocalStorage();
    }

    // === EQUIPMENT METHODS ===
    getEquipment() { return this.data.equipment; }
    getEquipmentByStatus(status) { return this.data.equipment.filter(e => e.status === status); }

    // === STATS METHODS ===
    getStats() { return this.data.stats; }
    updateStats() {
        this.data.stats = {
            totalPatients: this.data.patients.length,
            critical: this.data.patients.filter(p => p.status === 'critical').length,
            stable: this.data.patients.filter(p => p.status === 'stable').length,
            recovering: this.data.patients.filter(p => p.status === 'recovering').length,
            totalBeds: this.data.beds.length,
            occupiedBeds: this.data.beds.filter(b => b.status === 'occupied').length,
            availableBeds: this.data.beds.filter(b => b.status === 'available').length,
            totalRevenue: this.data.billing.reduce((sum, b) => sum + b.totalAmount, 0),
            bhytRevenue: this.data.billing.reduce((sum, b) => sum + b.bhytCovered, 0),
            selfPayRevenue: this.data.billing.reduce((sum, b) => sum + b.selfPay, 0)
        };
        this.saveToLocalStorage();
    }

    // === PERSISTENCE ===
    saveToLocalStorage() {
        try {
            localStorage.setItem('hmis_data', JSON.stringify(this.data));
            console.log('✅ Data saved to LocalStorage');
        } catch (e) {
            console.error('❌ Error saving to LocalStorage:', e);
        }
    }

    loadFromLocalStorage() {
        try {
            const stored = localStorage.getItem('hmis_data');
            if (stored) {
                this.data = JSON.parse(stored);
                console.log('✅ Data loaded from LocalStorage');
            } else {
                console.log('ℹ️ No stored data, using defaults');
            }
        } catch (e) {
            console.error('❌ Error loading from LocalStorage:', e);
        }
    }

    // Reset to defaults
    reset() {
        localStorage.removeItem('hmis_data');
        location.reload();
    }
}

// Create global instance
window.HMISData = new HMISDataStore();

console.log('🏥 SCP HMIS Data Store initialized');
console.log('📊 Total Patients:', window.HMISData.getPatients().length);
console.log('🛏️ Available Beds:', window.HMISData.getAvailableBeds().length);
