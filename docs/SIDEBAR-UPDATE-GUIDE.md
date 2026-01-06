# ✅ SIDEBAR STANDARDIZATION - COMPLETE GUIDE

## 📋 Summary

Tất cả pages trong `views/` folder cần có CÙNG sidebar menu.

---

## ✅ Đã chuẩn bị:

1. **✅ Standardized Sidebar** (`shared/sidebar-nav.html`)
   - Complete menu với tất cả links
   - Proper relative paths cho views/ folder
   - "Soon" badges cho pages chưa có

2. **✅ Reference** (`index.html`)
   - Sidebar đã được update đầy đủ
   - Có thể dùng làm template

---

## 🔧 Manual Update Guide:

Do giới hạn response size, tôi khuyến nghị bạn **copy/paste sidebar** từ `shared/sidebar-nav.html` vào từng page.

### **Pages cần update (7 pages):**

1. `views/patients.html`
2. `views/bed-map.html`
3. `views/lab-tests.html`
4. `views/pharmacy.html`
5. `views/facility.html`
6. `views/audit.html`
7. (Future pages)

---

## 📝 Step-by-Step:

### **Bước 1:** Mở file cần update (vd: `views/patients.html`)

### **Bước 2:** Tìm block `<nav class="flex-grow py-4 overflow-y-auto">`

### **Bước 3:** Replace toàn bộ `<nav>...</nav>` bằng nội dung trong `shared/sidebar-nav.html`

### **Bước 4:** Đảm bảo active class đúng cho current page
- Thêm class `active` vào menu item của trang hiện tại
- Ví dụ trong `patients.html`:
```html
<a href="patients.html" class="nav-link active flex items-center px-6 py-3">
```

### **Bước 5:** Save và test

---

## 🎯 Expected Result:

Sau khi update, TẤT CẢ pages sẽ có menu:

```
Hệ thống quản trị
├── Quản lý bệnh viện
├── Quản lý Cơ sở vật chất [3D LAB]
├── 83 Tiêu chí Chất lượng
└── Ứng dụng Mobile App

Khu vực chuyên môn
├── Danh sách bệnh nhân
├── Sơ đồ giường bệnh
└── Xét nghiệm & CĐHA

Vận hành & Hậu cần
├── Quản lý kho dược
├──  └─ Kho (Mobile App)
└── Viện phí & BHYT [Soon]

Quản lý & Hỗ trợ
├── Quản lý nhân sự [Soon]
├── Vệ sinh
└── An ninh bảo vệ [Soon]
```

---

## 🚀 Automated Approach (Advanced):

Nếu muốn tự động, tạo script sau:

### **PowerShell Script:**

```powershell
# Update-Sidebar.ps1
$files = @(
    'views\patients.html',
    'views\bed-map.html',
    'views\lab-tests.html',
    'views\pharmacy.html',
    'views\facility.html',
    'views\audit.html'
)

$sidebarContent = Get-Content 'shared\sidebar-nav.html' -Raw

foreach ($file in $files) {
    $content = Get-Content $file -Raw
    
    # Replace nav block
    $content = $content -replace '(?s)<nav class="flex-grow.*?</nav>', $sidebarContent
    
    # Set active class based on filename
    $pageName = Split-Path $file -Leaf
    $content = $content -replace "href=`"$pageName`" class=`"nav-link", "href=`"$pageName`" class=`"nav-link active"
    
    # Save
    $content | Out-File $file -Encoding UTF8 -NoNewline
    
    Write-Host "✅ Updated $file"
}
```

---

## 💡 Quick Fix (Fastest):

Nếu muốn tôi giúp, tôi có thể:

**Option A:** Tạo updated version của từng page (7 files)
- Pros: Hoàn chỉnh, ready to use
- Cons: Cần nhiều responses

**Option B:** Tạo script tự động
- Pros: Một lần chạy, xong hết
- Cons: Cần test sau

**Option C:** Bạn tự copy/paste theo guide trên
- Pros: Control hoàn toàn
- Cons: Mất 10-15 phút

---

## 📊 Checklist After Update:

- [ ] All pages have same menu structure
- [ ] Active class on current page
- [ ] All links work
- [ ] "Soon" badges appear correctly
- [ ] Dark mode toggle works
- [ ] Navigation smooth

---

## ✨ Benefits:

✅ **Consistent UX** - Cùng menu ở mọi page  
✅ **Easy Navigation** - User biết menu ở đâu  
✅ **Professional** - Không bị lộn xộn  
✅ **Maintainable** - Sửa 1 lần, apply toàn bộ (với script)  

---

**Bạn muốn tôi làm gì?**

**A.** Tạo script PowerShell tự động update ⚡  
**B.** Update từng file thủ công (tôi làm)  
**C.** Hướng dẫn này đủ, bạn tự làm  

Tôi khuyến nghị **Option A** - nhanh và chính xác! 😊
