# 🖥️ DESKTOP PAGES STANDARDIZATION

## 📋 Phân loại rõ ràng:

### **🖥️ DESKTOP PAGES** (Dashboard cho máy tính)
```
Hospital_Management/
├── index.html                  ← Main Dashboard
└── views/
    ├── patients.html          ← Quản lý Bệnh nhân
    ├── bed-map.html           ← Sơ đồ Giường bệnh
    ├── lab-tests.html         ← Xét nghiệm & CĐHA
    ├── pharmacy.html          ← Quản lý Kho dược
    ├── billing.html           ← Viện phí & BHYT
    ├── facility.html          ← 3D Facility Viewer
    └── audit.html             ← 83 Tiêu chí Chất lượng
```

### **📱 MOBILE APPS** (Demo trên điện thoại)
```
Hospital_Management/
├── show-app.html              ← Mobile App Hub (entry point)
└── pages/
    ├── bacsy.html            ← Bác sỹ app
    ├── dieuduong.html        ← Điều dưỡng app
    ├── kho.html              ← Kho app
    ├── bep.html              ← Bếp app
    ├── house_keeping.html    ← Vệ sinh app
    └── ... (12 apps total)
```

---

## 🎯 SIDEBAR CHUẨN cho Desktop Pages:

### **Mục tiêu:**
- ✅ Chỉ link giữa desktop pages với nhau
- ✅ Link đến Mobile Hub (`show-app.html`)
- ❌ KHÔNG link trực tiếp đến individual mobile apps

### **Sidebar Structure:**

```html
<nav class="flex-grow py-4 overflow-y-auto">
    <!-- HỆ THỐNG QUẢN TRỊ -->
    <div class="px-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Hệ thống quản trị
    </div>
    
    <a href="../index.html" class="nav-link flex items-center px-6 py-4">
        <i class="fas fa-chart-line mr-3 w-5 text-lg"></i> 
        Dashboard Overview
    </a>
    
    <a href="facility.html" class="nav-link flex items-center px-6 py-4">
        <i class="fas fa-layer-group mr-3 w-5 text-lg text-orange-500"></i> 
        Quản lý Cơ sở vật chất 
        <span class="ml-auto bg-orange-500 text-[8px] text-white px-1.5 py-0.5 rounded-full font-bold">3D</span>
    </a>
    
    <a href="audit.html" class="nav-link flex items-center px-6 py-4">
        <i class="fas fa-clipboard-check mr-3 w-5 text-lg text-teal-500"></i> 
        83 Tiêu chí Chất lượng
    </a>
    
    <!-- KHU VỰC CHUYÊN MÔN -->
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Khu vực chuyên môn
    </div>
    
    <a href="patients.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-user-injured mr-3 w-5"></i> 
        Danh sách bệnh nhân
    </a>
    
    <a href="bed-map.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-procedures mr-3 w-5"></i> 
        Sơ đồ giường bệnh
    </a>
    
    <a href="lab-tests.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-microscope mr-3 w-5"></i> 
        Xét nghiệm & CĐHA
    </a>
    
    <!-- VẬN HÀNH & HẬU CẦN -->
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Vận hành & Hậu cần
    </div>
    
    <a href="pharmacy.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-pills mr-3 w-5"></i> 
        Quản lý kho dược
    </a>
    
    <a href="billing.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-file-invoice-dollar mr-3 w-5"></i> 
        Viện phí & BHYT
    </a>
    
    <!-- MOBILE APPS -->
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Ứng dụng Mobile
    </div>
    
    <a href="../show-app.html" target="_blank" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-mobile-alt mr-3 w-5"></i> 
        Mobile App Hub
        <span class="ml-auto bg-blue-500 text-[8px] text-white px-1.5 py-0.5 rounded-full font-bold">12 APPS</span>
    </a>
</nav>
```

---

## 🔄 Path Adjustments:

### **For Pages in ROOT (index.html):**
```html
<a href="views/patients.html">...</a>
<a href="views/bed-map.html">...</a>
<a href="show-app.html">...</a>
```

### **For Pages in views/ folder:**
```html
<a href="../index.html">...</a>
<a href="patients.html">...</a>
<a href="../show-app.html">...</a>
```

---

## 📝 Implementation Steps:

### **Step 1: Save Standard Sidebar**
File: `shared/desktop-sidebar.html`

### **Step 2: Update Each Desktop Page**

**Pages to update (8 files):**
1. `index.html` (root)
2. `views/patients.html`
3. `views/bed-map.html`
4. `views/lab-tests.html`
5. `views/pharmacy.html`
6. `views/billing.html`
7. `views/facility.html`
8. `views/audit.html`

### **Step 3: Verification**
- [ ] All desktop pages have same sidebar
- [ ] Navigation works between desktop pages
- [ ] Mobile Hub link opens show-app.html
- [ ] No direct links to individual mobile apps
- [ ] Active class on current page

---

## 🚀 Quick Update Script:

```powershell
# Update-Desktop-Sidebars.ps1

$desktopSidebar = Get-Content 'shared\desktop-sidebar.html' -Raw

# Pages with ../ prefix (in views/)
$viewsPages = @{
    'views\patients.html' = 'patients.html'
    'views\bed-map.html' = 'bed-map.html'
    'views\lab-tests.html' = 'lab-tests.html'
    'views\pharmacy.html' = 'pharmacy.html'
    'views\billing.html' = 'billing.html'
    'views\facility.html' = 'facility.html'
    'views\audit.html' = 'audit.html'
}

foreach ($page in $viewsPages.Keys) {
    $content = Get-Content $page -Raw
    
    # Replace nav
    $content = $content -replace '(?s)<nav class="flex-grow.*?</nav>', $desktopSidebar
    
    # Set active
    $activePage = $viewsPages[$page]
    $content = $content -replace "href=`"$activePage`" class=`"nav-link", "href=`"$activePage`" class=`"nav-link active"
    
    $content | Out-File $page -Encoding UTF8 -NoNewline
    Write-Host "✅ Updated $page" -ForegroundColor Green
}

# Update index.html (different path structure)
$indexContent = Get-Content 'index.html' -Raw
$indexSidebar = $desktopSidebar -replace 'href="../index.html"', 'href="index.html"' `
                                  -replace 'href="', 'href="views/'
$indexSidebar = $indexSidebar -replace 'href="views/../show-app.html"', 'href="show-app.html"'
$indexContent = $indexContent -replace '(?s)<nav class="flex-grow.*?</nav>', $indexSidebar
$indexContent | Out-File 'index.html' -Encoding UTF8 -NoNewline
Write-Host "✅ Updated index.html" -ForegroundColor Green

Write-Host "`n🎉 All desktop pages updated!" -ForegroundColor Cyan
```

---

## ✨ Benefits:

✅ **Clear Separation**
- Desktop pages = Professional dashboard
- Mobile apps = Phone simulation

✅ **Consistent Navigation**
- Same menu everywhere
- Predictable UX

✅ **Easy Maintenance**
- Update sidebar once
- Apply to all

✅ **Professional**
- No confusion between desktop/mobile
- Clear purpose for each

---

## 📊 Final Structure:

```
🖥️ DESKTOP SYSTEM (Connected via Sidebar)
┌─────────────────────────────────────┐
│ index.html                          │
│   ↓ sidebar                         │
│ views/patients.html                 │
│ views/bed-map.html                  │
│ views/lab-tests.html                │
│ views/pharmacy.html                 │
│ views/billing.html                  │
│ views/facility.html                 │
│ views/audit.html                    │
└─────────────────────────────────────┘
         ↓ (link to Mobile Hub)
┌─────────────────────────────────────┐
│ 📱 MOBILE APPS (Separate)           │
│ show-app.html (Hub)                 │
│   ↓ app icons                       │
│ pages/bacsy.html                    │
│ pages/dieuduong.html                │
│ pages/kho.html                      │
│ pages/... (12 apps)                 │
└─────────────────────────────────────┘
```

---

**Next:** Tôi sẽ tạo sidebar chuẩn và script để update tất cả! 

Bạn OK với structure này không? 😊
