# 🔗 Kiến trúc Liên kết Dữ liệu - SCP HMIS

## 🎯 Vấn đề hiện tại

### ❌ Trạng thái hiện tại (Mock Data):
```
index.html          → housekeepingLogs: []
patients.html       → patients: [12 objects]
bacsy.html          → patients: [different data]
facility.html       → pcccIssue: {...}
```

**Vấn đề:**
- Dữ liệu phân tán ở từng page
- Không đồng bộ giữa các trang
- Không có single source of truth
- Khó maintain và scale

---

## ✅ Giải pháp: Kiến trúc 3 Tầng

### **Tầng 1: Frontend (Hiện tại)**
```
Browser
├── index.html (Dashboard)
├── patients.html (Patient Management)
├── facility.html (Facility 3D)
└── bacsy.html, dieuduong.html, etc.
```

### **Tầng 2: Centralized Data Store (Cần tạo)**
```javascript
// assets/js/data-store.js
const DataStore = {
    patients: [],
    housekeeping: [],
    facility: {},
    vitals: {},
    // ... more entities
}
```

### **Tầng 3: Backend API (Tương lai)**
```
Backend Server (Node.js / Python / .NET)
├── REST API
├── Database (MySQL / PostgreSQL / MongoDB)
├── Real-time sync (WebSocket)
└── Authentication
```

---

## 🏗️ Roadmap Implementation

### **Phase 1: Centralized Data Store (Immediate)**
Tạo một file JavaScript chung để quản lý data:

**File: `assets/js/data-store.js`**
```javascript
// Centralized Data Store
class HMISDataStore {
    constructor() {
        this.data = {
            patients: [],
            housekeeping: [],
            facility: {},
            vitals: {},
            staff: {},
            inventory: {}
        };
        
        // Load from localStorage if exists
        this.loadFromLocalStorage();
    }
    
    // Patient Management
    getPatients() { return this.data.patients; }
    getPatient(id) { return this.data.patients.find(p => p.id === id); }
    addPatient(patient) { 
        this.data.patients.push(patient);
        this.saveToLocalStorage();
    }
    updatePatient(id, updates) {
        const index = this.data.patients.findIndex(p => p.id === id);
        if (index !== -1) {
            this.data.patients[index] = { ...this.data.patients[index], ...updates };
            this.saveToLocalStorage();
        }
    }
    
    // Housekeeping Management
    getHousekeepingLogs() { return this.data.housekeeping; }
    addHousekeepingLog(log) {
        this.data.housekeeping.push(log);
        this.saveToLocalStorage();
    }
    
    // Persistence
    saveToLocalStorage() {
        localStorage.setItem('hmis_data', JSON.stringify(this.data));
    }
    
    loadFromLocalStorage() {
        const stored = localStorage.getItem('hmis_data');
        if (stored) {
            this.data = JSON.parse(stored);
        }
    }
    
    // Sync with backend (future)
    async syncWithBackend() {
        // Will implement when backend ready
    }
}

// Global instance
window.HMISData = new HMISDataStore();
```

**Sử dụng trong các pages:**
```html
<!-- patients.html -->
<script>
    // Instead of local data
    const patients = window.HMISData.getPatients();
</script>
```

---

### **Phase 2: Backend API (Future)**

#### **Option A: Google Sheets API** (Đơn giản, đang dùng cho housekeeping)
✅ Pros:
- Dễ setup
- Miễn phí
- Real-time collaboration
- Đã có sẵn ví dụ (housekeeping)

❌ Cons:
- Giới hạn performance
- Không phù hợp cho production scale
- Security limitations

**Mở rộng Google Sheets:**
```javascript
// Tạo multiple sheets cho từng entity
Spreadsheet: SCP_HMIS_Database
├── Sheet1: Patients
├── Sheet2: Housekeeping
├── Sheet3: Inventory
├── Sheet4: Staff
└── Sheet5: Vitals
```

---

#### **Option B: Firebase** (Khuyến nghị cho MVP)
✅ Pros:
- Real-time database
- Easy authentication
- Scalable
- Free tier generous
- Quick setup

❌ Cons:
- Vendor lock-in
- Learning curve

**Setup:**
```javascript
// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "scp-hmis.firebaseapp.com",
    projectId: "scp-hmis",
    // ...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Usage
import { collection, getDocs } from 'firebase/firestore';

async function getPatients() {
    const querySnapshot = await getDocs(collection(db, 'patients'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
```

---

#### **Option C: Custom Backend API** (Production Ready)
✅ Pros:
- Full control
- Custom business logic
- Optimal performance
- Enterprise ready

❌ Cons:
- More complex
- Hosting costs
- Maintenance

**Tech Stack đề xuất:**
```
Backend: Node.js + Express.js
Database: PostgreSQL
ORM: Prisma
Auth: JWT
Real-time: Socket.io
```

**API Endpoints:**
```
GET    /api/patients              → Get all patients
GET    /api/patients/:id          → Get patient by ID
POST   /api/patients              → Create patient
PUT    /api/patients/:id          → Update patient
DELETE /api/patients/:id          → Delete patient

GET    /api/housekeeping          → Get logs
POST   /api/housekeeping          → Add log

GET    /api/vitals/:patientId     → Get vitals
POST   /api/vitals                → Add vital reading

// ... more endpoints
```

---

## 🔄 Data Flow Architecture

### **Current State (Mock Data):**
```
┌─────────────┐
│ patients.   │  ← Static array
│   html      │
└─────────────┘

┌─────────────┐
│ index.html  │  ← Different array
└─────────────┘
```

### **Phase 1 (LocalStorage):**
```
┌─────────────┐
│ patients.   │──┐
│   html      │  │
└─────────────┘  │
                 ├──→ ┌──────────────┐
┌─────────────┐  │    │ LocalStorage │
│ index.html  │──┘    │   (Shared)   │
└─────────────┘       └──────────────┘
```

### **Phase 2 (Backend API):**
```
┌─────────────┐                    ┌──────────┐
│ patients.   │──┐                 │          │
│   html      │  │                 │ Backend  │
└─────────────┘  │    ┌─────────┐  │   API    │
                 ├───→│ API Call│─→│          │
┌─────────────┐  │    └─────────┘  │          │
│ index.html  │──┘                 │          │
└─────────────┘                    └────┬─────┘
                                        │
                                   ┌────▼─────┐
                                   │ Database │
                                   └──────────┘
```

---

## 📋 Implementation Plan

### **Week 1-2: Phase 1**
- [ ] Tạo `assets/js/data-store.js`
- [ ] Define data models
- [ ] Implement LocalStorage persistence
- [ ] Update all pages to use DataStore
- [ ] Test cross-page data sync

### **Week 3-4: Phase 2A (Google Sheets)**
- [ ] Extend current Google Sheets integration
- [ ] Create sheets for all entities
- [ ] Implement read/write operations
- [ ] Handle real-time sync
- [ ] Error handling

### **Month 2: Phase 2B (Firebase - Optional)**
- [ ] Setup Firebase project
- [ ] Define Firestore collections
- [ ] Implement authentication
- [ ] Migrate data from Sheets
- [ ] Real-time listeners

### **Month 3+: Phase 3 (Custom Backend)**
- [ ] Design database schema
- [ ] Setup backend server
- [ ] Implement REST API
- [ ] Authentication & Authorization
- [ ] Real-time WebSocket
- [ ] Production deployment

---

## 🗄️ Database Schema (Tương lai)

### **Patients Table**
```sql
CREATE TABLE patients (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    gender VARCHAR(10),
    room VARCHAR(20),
    department VARCHAR(50),
    diagnosis TEXT,
    status VARCHAR(20),
    admit_date DATE,
    doctor_id VARCHAR(10),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    
    FOREIGN KEY (doctor_id) REFERENCES staff(id)
);
```

### **Vitals Table**
```sql
CREATE TABLE vitals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id VARCHAR(10),
    temperature DECIMAL(4,1),
    blood_pressure VARCHAR(10),
    heart_rate INT,
    spo2 INT,
    recorded_at TIMESTAMP,
    
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);
```

### **Housekeeping Table**
```sql
CREATE TABLE housekeeping_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    staff_name VARCHAR(100),
    location VARCHAR(100),
    status VARCHAR(50),
    timestamp TIMESTAMP,
    notes TEXT
);
```

---

## 🔐 Security Considerations

### **Phase 1 (LocalStorage):**
- ⚠️ Data stored in browser (not secure)
- ⚠️ Can be cleared by user
- ⚠️ No authentication
- ✅ Good for testing/demo

### **Phase 2+ (Backend):**
- ✅ JWT authentication
- ✅ Role-based access control
- ✅ HTTPS encryption
- ✅ Data backup
- ✅ Audit logging

---

## 📊 Data Relations

```
┌──────────┐         ┌──────────┐
│ Patients │─────────│  Vitals  │
└────┬─────┘         └──────────┘
     │
     │ Many-to-One
     │
┌────▼─────┐
│  Staff   │
│(Doctors) │
└──────────┘

┌────────────┐
│Housekeeping│ (Independent)
└────────────┘

┌──────────┐
│ Facility │ (Independent)
└──────────┘
```

---

## 🚀 Quick Start (Phase 1)

Tôi có thể tạo ngay file `data-store.js` với:
1. Centralized data management
2. LocalStorage persistence
3. Event system for real-time updates
4. Easy migration path to backend

**Bạn có muốn tôi tạo ngay không?** 

Hoặc bạn muốn:
- A. Tạo data-store.js với LocalStorage
- B. Mở rộng Google Sheets integration
- C. Setup Firebase
- D. Giữ nguyên mock data (demo only)

---

**Khuyến nghị:** Bắt đầu với **Option A** (data-store.js + LocalStorage) để test, sau đó migrate sang **Option B** (Google Sheets) cho production nhẹ, hoặc **Option C** (Custom Backend) cho enterprise.
