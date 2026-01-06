# 🔄 Standardized Sidebar - Unified Navigation

## ⚠️ Vấn đề:

Hiện tại mỗi trang có sidebar khác nhau:
- `index.html` - Có đầy đủ menu mới nhất
- `bed-map.html` - Thiếu một số menu items
- `lab-tests.html` - Thiếu một số menu items
- `pharmacy.html` - Thiếu một số menu items
- `patients.html` - Menu cũ
- `facility.html` - Menu cũ
- `audit.html` - Menu cũ

---

## ✅ Giải pháp:

### **Option 1: Shared Sidebar Component** (Recommended)
Tạo `shared/sidebar.html` với menu chuẩn, load vào mỗi trang.

**Pros:**
- ✅ Update 1 lần, áp dụng toàn bộ
- ✅ Dễ maintain

**Cons:**
- ❌ Cần web server để load HTML
- ❌ Hoặc dùng JavaScript fetch

---

### **Option 2: Manual Update Each Page** (Fast)
Copy sidebar từ `index.html` sang tất cả pages.

**Pros:**
- ✅ Hoạt động ngay không cần server
- ✅ Self-contained pages

**Cons:**
- ❌ Phải update 9 files khi thay đổi menu

---

### **Option 3: Template Generator Script**
PowerShell script tự động update sidebar cho tất cả pages.

---

## 📋 Sidebar Chuẩn (từ index.html):

```html
<nav class="flex-grow py-4 overflow-y-auto">
    <!-- Hệ thống quản trị -->
    <div class="px-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Hệ thống quản trị
    </div>
    <a href="../index.html" class="nav-link flex items-center px-6 py-4">
        <i class="fas fa-chart-line mr-3 w-5 text-lg"></i> Quản lý bệnh viện
    </a>
    <a href="facility.html" class="nav-link flex items-center px-6 py-4">
        <i class="fas fa-layer-group mr-3 w-5 text-lg text-orange-500"></i> 
        Quản lý Cơ sở vật chất 
        <span class="ml-auto bg-orange-500 text-[8px] text-white px-1.5 py-0.5 rounded-full font-bold">3D LAB</span>
    </a>
    <a href="audit.html" class="nav-link flex items-center px-6 py-4">
        <i class="fas fa-clipboard-check mr-3 w-5 text-lg text-teal-500"></i> 
        83 Tiêu chí Chất lượng
    </a>
    <a href="../show-app.html" target="_blank" class="nav-link flex items-center px-6 py-4 no-underline">
        <i class="fas fa-notes-medical mr-3 w-5 text-lg"></i> 
        Ứng dụng Mobile App
    </a>

    <!-- Khu vực chuyên môn -->
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Khu vực chuyên môn
    </div>
    <a href="patients.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-user-injured mr-3 w-5"></i> Danh sách bệnh nhân
    </a>
    <a href="bed-map.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-procedures mr-3 w-5"></i> Sơ đồ giường bệnh
    </a>
    <a href="lab-tests.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-microscope mr-3 w-5"></i> Xét nghiệm & CĐHA
    </a>

    <!-- Vận hành & Hậu cần -->
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Vận hành & Hậu cần
    </div>
    <a href="pharmacy.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-pills mr-3 w-5"></i> Quản lý kho dược
    </a>
    <a href="../pages/kho.html" class="nav-link flex items-center px-6 py-3" style="padding-left: 3rem;">
        <i class="fas fa-box mr-3 w-5 text-xs"></i> Kho (Mobile App)
    </a>
    <a href="#" class="nav-link flex items-center px-6 py-3 opacity-50 cursor-not-allowed">
        <i class="fas fa-file-invoice-dollar mr-3 w-5"></i> Viện phí & BHYT
        <span class="ml-auto bg-yellow-500 text-[7px] text-white px-1.5 py-0.5 rounded-full font-bold">Soon</span>
    </a>

    <!-- Quản lý & Hỗ trợ -->
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Quản lý & Hỗ trợ
    </div>
    <a href="#" class="nav-link flex items-center px-6 py-3 opacity-50 cursor-not-allowed">
        <i class="fas fa-user-tie mr-3 w-5"></i> Quản lý nhân sự
        <span class="ml-auto bg-yellow-500 text-[7px] text-white px-1.5 py-0.5 rounded-full font-bold">Soon</span>
    </a>
    <a href="../pages/house_keeping.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-broom mr-3 w-5"></i> Vệ sinh
    </a>
    <a href="#" class="nav-link flex items-center px-6 py-3 opacity-50 cursor-not-allowed">
        <i class="fas fa-shield-alt mr-3 w-5"></i> An ninh bảo vệ
        <span class="ml-auto bg-yellow-500 text-[7px] text-white px-1.5 py-0.5 rounded-full font-bold">Soon</span>
    </a>
</nav>
```

---

## 📊 Pages cần update:

1. ✅ `index.html` - Đã có sidebar mới nhất
2. 🔄 `views/patients.html` - Cần update
3. 🔄 `views/bed-map.html` - Cần update (thiếu menu Quản lý & Hỗ trợ)
4. 🔄 `views/lab-tests.html` - Cần update (thiếu menu Quản lý & Hỗ trợ)
5. 🔄 `views/pharmacy.html` - Cần update (thiếu menu Quản lý & Hỗ trợ)
6. 🔄 `views/facility.html` - Cần update
7. 🔄 `views/audit.html` - Cần update

---

## 🚀 Action Plan:

**Khuyến nghị: Option 2 - Manual Update**

Tôi sẽ:
1. Tạo PowerShell script để update sidebar tự động
2. Apply cho tất cả 7 pages
3. Đảm bảo relative paths đúng (../ cho views/)
4. Active state tự động dựa trên current page

---

**Bạn muốn tôi:**
- **A.** Tạo script và update tất cả pages ngay ⚡
- **B.** Update từng page thủ công (chậm hơn)
- **C.** Tạo shared sidebar component (cần server để test)

Khuyến nghị **Option A** - nhanh và hiệu quả! Tôi làm luôn nhé? 😊
