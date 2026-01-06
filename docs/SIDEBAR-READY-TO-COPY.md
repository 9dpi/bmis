# 🚀 SIDEBAR UPDATE - READY TO COPY/PASTE

## ✅ Index.html đã chuẩn!

Sidebar trong index.html đã OK và link đến billing.html!

---

## 📋 SIDEBAR CHUẨN cho Views/ Pages

Copy code dưới đây và paste vào **TẤT CẢ 7 files** trong views/:

### **Files cần update:**
1. views/patients.html
2. views/bed-map.html
3. views/lab-tests.html
4. views/pharmacy.html
5. views/billing.html
6. views/facility.html
7. views/audit.html

---

## 📝 CODE ĐỂ COPY:

```html
<nav class="flex-grow py-4 overflow-y-auto">
    <div class="px-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hệ thống quản trị</div>
    
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
    
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Khu vực chuyên môn</div>
    
    <a href="patients.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-user-injured mr-3 w-5"></i> Danh sách bệnh nhân
    </a>
    <a href="bed-map.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-procedures mr-3 w-5"></i> Sơ đồ giường bệnh
    </a>
    <a href="lab-tests.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-microscope mr-3 w-5"></i> Xét nghiệm & CĐHA
    </a>
    
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vận hành & Hậu cần</div>
    
    <a href="pharmacy.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-pills mr-3 w-5"></i> Quản lý kho dược
    </a>
    <a href="../pages/kho.html" class="nav-link flex items-center px-6 py-3" style="padding-left: 3rem;">
        <i class="fas fa-box mr-3 w-5 text-xs"></i> Kho (Mobile App)
    </a>
    <a href="billing.html" class="nav-link flex items-center px-6 py-3">
        <i class="fas fa-file-invoice-dollar mr-3 w-5"></i> Viện phí & BHYT
    </a>
    
    <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quản lý & Hỗ trợ</div>
    
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

## ⭐ IMPORTANT: Add Active Class!

Sau khi paste vào từng file, nhớ thêm class `active` cho page hiện tại:

### **patients.html:**
```html
<a href="patients.html" class="nav-link active flex items-center px-6 py-3">
```

### **bed-map.html:**
```html
<a href="bed-map.html" class="nav-link active flex items-center px-6 py-3">
```

### **lab-tests.html:**
```html
<a href="lab-tests.html" class="nav-link active flex items-center px-6 py-3">
```

### **pharmacy.html:**
```html
<a href="pharmacy.html" class="nav-link active flex items-center px-6 py-3">
```

### **billing.html:**
```html
<a href="billing.html" class="nav-link active flex items-center px-6 py-3">
```

### **facility.html:**
```html
<a href="facility.html" class="nav-link active flex items-center px-6 py-4">
```

### **audit.html:**
```html
<a href="audit.html" class="nav-link active flex items-center px-6 py-4">
```

---

## 🎯 Quick Steps:

1. **Copy** sidebar code ở trên
2. **Mở** file đầu tiên (vd: patients.html)
3. **Tìm** `<nav class="flex-grow py-4 overflow-y-auto">`
4. **Select** từ `<nav>` đến `</nav>` (toàn bộ nav block)
5. **Paste** code đã copy
6. **Thêm** class `active` cho menu item của page hiện tại
7. **Save**
8. **Lặp lại** cho 6 files còn lại

---

## ✅ Expected Result:

Sau khi xong, tất cả 8 pages sẽ có **CÙNG menu structure**:

```
🖥️ HỆ THỐNG QUẢN TRỊ
├─ Quản lý bệnh viện
├─ Quản lý Cơ sở vật chất [3D LAB]
├─ 83 Tiêu chí Chất lượng
└─ Ứng dụng Mobile App

👨‍⚕️ KHU VỰC CHUYÊN MÔN
├─ Danh sách bệnh nhân
├─ Sơ đồ giường bệnh
└─ Xét nghiệm & CĐHA

💊 VẬN HÀNH & HẬU CẦN
├─ Quản lý kho dược
├──  └─ Kho (Mobile App)
└─ Viện phí & BHYT

🛡️ QUẢN LÝ & HỖ TRỢ
├─ Quản lý nhân sự [Soon]
├─ Vệ sinh
└─ An ninh bảo vệ [Soon]
```

---

## 📊 Progress Tracking:

- [x] index.html (ROOT) - ✅ DONE
- [ ] views/patients.html - TODO
- [ ] views/bed-map.html - TODO
- [ ] views/lab-tests.html - TODO
- [ ] views/pharmacy.html - TODO
- [ ] views/billing.html - TODO
- [ ] views/facility.html - TODO
- [ ] views/audit.html - TODO

---

## 💡 Estimate:

**Time needed:** 5-7 phút cho 7 files

**Per file:** ~1 phút (copy, paste, add active, save)

---

**Hoặc bạn muốn tôi update từng file thủ công?** 

Tôi sẽ update hết 7 files nếu bạn muốn! 😊
