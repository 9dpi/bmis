# 📋 Index Files Clarification

## ❓ Câu hỏi: Có 2 file index.html?

**Đúng vậy!** Có 2 files với mục đích khác nhau:

---

## 📍 File Locations:

### **1. ROOT index.html** ⭐ MAIN DASHBOARD
```
Hospital_Management/
└── index.html          ← 🎯 TRANG CHÍNH (CHUẨN!)
```

**Mục đích:**
- ✅ **Main Dashboard** của toàn bộ hệ thống
- ✅ Trang này là **entry point** chính
- ✅ Overview với charts, stats, housekeeping logs
- ✅ Sidebar menu đầy đủ
- ✅ **ĐÂY LÀ TRANG CHUẨN!**

**URL:** `http://localhost/Hospital_Management/index.html`

---

### **2. PAGES index.html** 📂 DIRECTORY LISTING
```
Hospital_Management/
└── pages/
    └── index.html      ← 📂 Directory Browser (PHỤ)
```

**Mục đích:**
- ✅ **Directory listing** cho thư mục pages/
- ✅ Trang điều hướng đẹp để browse 12 mobile apps
- ✅ Chỉ dùng khi muốn xem danh sách apps trong pages/
- ✅ **KHÔNG PHẢI TRANG CHÍNH**

**URL:** `http://localhost/Hospital_Management/pages/index.html`

---

## 🎯 Which One to Use?

### **Start Here:** ✅ ROOT `index.html`

```
Mở browser → index.html (root)
    ↓
Dashboard Overview
    ↓
Click Sidebar Menu
    ↓
Navigate to:
- Patients
- Bed Map
- Lab Tests
- Pharmacy
- Billing
- Etc.
```

### **Optional:** 📂 `pages/index.html`

```
Mở browser → pages/index.html
    ↓
Directory Browser
    ↓
Click vào app cần xem:
- Bác sỹ
- Điều dưỡng
- Kho
- Bếp
- Vệ sinh
- Etc.
```

---

## 📊 Comparison:

| Feature | ROOT index.html | pages/index.html |
|---------|-----------------|------------------|
| **Vai trò** | Main Dashboard | Directory Browser |
| **Sidebar** | ✅ Full navigation | ❌ Minimal |
| **Charts** | ✅ Có | ❌ Không |
| **Stats** | ✅ Có | ❌ Không |
| **Entry Point** | ✅ CHÍNH | ❌ Phụ |
| **URL** | `/index.html` | `/pages/index.html` |

---

## 🚀 Recommended Workflow:

### **1. Normal Use:**
```
START → index.html (Dashboard)
         ↓
    Click sidebar menu
         ↓
    Navigate to modules
```

### **2. Mobile Apps:**
```
START → show-app.html (App Hub)
         ↓
    Click app icon
         ↓
    Open specific app (từ pages/)
```

### **3. Browse Pages Directory (Optional):**
```
START → pages/index.html
         ↓
    View all 12 apps
         ↓
    Click to open
```

---

## ✅ ANSWER:

**TRANG CHUẨN:**
```
Hospital_Management/index.html
```

**MỞ TRANG NÀY ĐẦU TIÊN!**

---

## 🔗 Navigation Flow:

```
index.html (ROOT - MAIN) ← 🎯 START HERE!
│
├─ Sidebar Menu
│  ├─ Quản lý bệnh viện (current)
│  ├─ views/patients.html
│  ├─ views/bed-map.html
│  ├─ views/lab-tests.html
│  ├─ views/pharmacy.html
│  ├─ views/billing.html
│  ├─ views/facility.html
│  └─ views/audit.html
│
├─ Mobile Apps Hub
│  └─ show-app.html
│     └─ 12 apps in pages/
│
└─ pages/index.html (Optional directory browser)
```

---

## 💡 Tip:

Nếu muốn tránh nhầm lẫn, có thể:

### **Option 1: Rename**
```powershell
# Rename pages/index.html để rõ ràng hơn
Rename-Item "pages\index.html" "pages\directory.html"
```

### **Option 2: Add Comment**
Thêm comment vào đầu `pages/index.html`:
```html
<!-- 
    NOTE: This is a directory browser for pages/ folder
    Main dashboard is at: ../index.html
-->
```

---

## ✨ Summary:

**TL;DR:**
- ✅ **index.html** (ROOT) = TRANG CHÍNH - Mở đầu tiên!
- ✅ **pages/index.html** = Directory browser - Phụ, optional

**Test ngay:**
```
Mở: index.html
→ Xem Dashboard với charts
→ Click sidebar navigation
→ All working!
```

---

**ANSWER:** ROOT `index.html` là chuẩn! 🎯
