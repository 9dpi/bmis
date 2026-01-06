# 🚀 Implementation Plan - Complete HMIS Dashboard System

## ✅ Phase 1: Foundation (COMPLETED)

- [x] Centralized Data Store (`assets/js/data-store.js`)
- [x] Shared Components (sidebar, header)
- [x] Base CSS & Navigation
- [x] Patient Management Page

---

## 📋 Phase 2: Core Dashboard Pages (IN PROGRESS)

### Priority 1 - Critical Pages:

#### 1. **Sơ đồ Giường bệnh** (`views/bed-map.html`) ⭐⭐⭐
- Visual bed layout
- Color-coded status (occupied/available/maintenance)
- Real-time occupancy
- Patient assignment

#### 2. **Xét nghiệm & CĐHA** (`views/lab-tests.html`) ⭐⭐⭐  
- Test requests
- Results tracking
- Pending tests
- Patient test history

#### 3. **Qu

ản lý Kho Dược** (`views/pharmacy.html`) ⭐⭐⭐
- Inventory list
- Low stock alerts
- Stock in/out
- Supplier management

#### 4. **Viện phí & BHYT** (`views/billing.html`) ⭐⭐⭐
- Patient billing
- Insurance coverage
- Payment status
- Revenue reports

---

### Priority 2 - Support Pages:

#### 5. **An ninh Bảo vệ** (`views/security.html`) ⭐⭐
- Security logs
- Incident reports
- Guard schedules
- Camera monitoring

#### 6. **Vệ sinh** (`views/housekeeping.html`) ⭐⭐
- Cleaning schedules
- Area status
- Staff assignment
- QR check-in

#### 7. **Quản lý Thiết bị** (`views/equipment.html`) ⭐⭐
- Equipment inventory
- Maintenance schedule
- Status tracking
- Repair logs

#### 8. **Quản lý Nhân sự** (`views/staff.html`) ⭐⭐
- Staff directory
- Shift schedules
- Department assignment
- Contact info

---

## 🔗 Phase 3: Integration & Links

### Navigation Updates:
- [ ] Update all sidebar menus
- [ ] Add breadcrumbs
- [ ] Cross-page navigation
- [ ] Quick actions menu

### Data Integration:
- [x] Centralized data store
- [ ] Load data-store.js in all pages
- [ ] Update pages to use HMISData
- [ ] Cross-reference between entities

---

## 📊 Page Details

### **1. Sơ đồ Giường bệnh** (Bed Map)
**URL**: `views/bed-map.html`

**Features**:
- Grid layout showing all beds
- Color coding:
  - 🟢 Green = Available
  - 🔴 Red = Occupied
  - 🟡 Yellow = Maintenance
- Click bed → See patient details
- Filter by department
- Occupancy statistics

**Data Source**: `HMISData.getBeds()`

---

### **2. Xét nghiệm & CĐHA** (Lab Tests)
**URL**: `views/lab-tests.html`

**Features**:
- List of all test requests
- Status badges (pending/completed)
- Filter by patient, type, status
- View results
- Request new tests
- Export results

**Data Source**: `HMISData.getLabTests()`

---

### **3. Quản lý Kho Dược** (Pharmacy)
**URL**: `views/pharmacy.html`

**Features**:
- Inventory table
- Low stock alerts (red badges)
- Search by name/category
- Stock in/out transactions
- Supplier info
- Price tracking

**Data Source**: `HMISData.getInventory()`

---

### **4. Viện phí & BHYT** (Billing)
**URL**: `views/billing.html`

**Features**:
- Patient billing list
- Total/BHYT/Self-pay breakdown
- Payment status
- Detailed bill items
- Export invoices
- Revenue statistics

**Data Source**: `HMISData.getBilling()`

---

### **5. An ninh Bảo vệ** (Security)
**URL**: `views/security.html`

**Features**:
- Security incident log
- Real-time alerts
- Guard assignment
- Location tracking
- Incident resolution
- Statistics

**Data Source**: `HMISData.getSecurityLogs()`

---

### **6. Vệ sinh** (Housekeeping)
**URL**: `views/housekeeping.html`

**Features**:
- Cleaning schedule
- Area completion status
- Staff assignment
- QR code check-in
- Real-time updates (Google Sheets)
- Performance tracking

**Data Source**: `HMISData.getHousekeeping()` + Google Sheets API

---

### **7. Quản lý Thiết bị** (Equipment)
**URL**: `views/equipment.html`

**Features**:
- Equipment inventory
- Status (operational/maintenance/broken)
- Maintenance schedule
- Department assignment
- Next service date
- Alerts for upcoming maintenance

**Data Source**: `HMISData.getEquipment()`

---

### **8. Quản lý Nhân sự** (Staff)
**URL**: `views/staff.html`

**Features**:
- Staff directory
- Role filters (Bác sỹ, Điều dưỡng, etc.)
- Department assignment
- Shift schedules
- Contact information
- Specializations

**Data Source**: `HMISData.getStaff()`

---

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────┐
│     All Dashboard Pages             │
│  (index, patients, beds, lab, etc)  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│    assets/js/data-store.js          │
│    window.HMISData (Global)         │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│    LocalStorage (Browser Cache)     │
│    Key: 'hmis_data'                 │
└─────────────────────────────────────┘
```

---

## 🎯 Implementation Timeline

### **Today (Jan 6):**
- ✅ Data Store created
- 🔄 Create 4 core pages (Priority 1)
  - Bed Map
  - Lab Tests
  - Pharmacy
  - Billing

### **Next Session:**
- 🔄 Create 4 support pages (Priority 2)
  - Security
  - Housekeeping
  - Equipment
  - Staff

### **Final Polish:**
- Update all navigation links
- Test data flow between pages
- Add quick actions
- Final testing

---

## 📝 Page Template Structure

All pages will follow this consistent structure:

```html
<!DOCTYPE html>
<html lang="vi" x-data="pageData()">
<head>
    <!-- Common headers -->
    <script src="../assets/js/data-store.js"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <!-- Sidebar (consistent across all pages) -->
    <!-- Header (page-specific title) -->
    <!-- Stats Cards (page-specific metrics) -->
    <!-- Main Content (page-specific) -->
    
    <script>
        function pageData() {
            return {
                // Use centralized data
                data: window.HMISData.getXXX(),
                // Page-specific state
                ...
            }
        }
    </script>
</body>
</html>
```

---

## ✅ Success Criteria

- [ ] All 8 pages created
- [ ] All pages use HMISData
- [ ] Navigation links updated
- [ ] Data flows between pages
- [ ] Responsive on all devices
- [ ] Dark mode works
- [ ] Search/filter functions work
- [ ] Demo-ready

---

## 🚀 Let's Start!

**Next**: I'll create the 4 Priority 1 pages:
1. Bed Map
2. Lab Tests  
3. Pharmacy
4. Billing

**Ready to proceed?** 🎯
