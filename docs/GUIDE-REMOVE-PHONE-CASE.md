# 📱 Cập nhật: Bỏ khung điện thoại - Hướng dẫn

## ✅ Đã hoàn thành:
1. ✅ **house_keeping.html** - Đã OK sẵn
2. ✅ **bacsy.html** - Vừa cập nhật xong

## 🔄 Cần cập nhật (9 files còn lại):
1. benh_nhan.html
2. bep.html
3. dieuduong.html
4. kehoach_tonghop.html
5. kho.html
6. laixe_capcuu.html
7. nhanvien_kythat_thietbi.html
8. quanly.html
9. quanly_chatluong.html
10. anninh_baove.html

---

## 🛠️ Thay đổi cần thực hiện:

### **1. CSS Changes (trong <styl>)</style>:**

#### **TRƯỚC (có phone case):**
```css
body {
    font-family: 'Inter', sans-serif;
    background: #e2e8f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.phone-case {
    width: 375px;
    height: 812px;
    border: 12px solid #1e293b;
    border-radius: 55px;
    position: relative;
    box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 28px;
    background: #1e293b;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    z-index: 100;
}

.app-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.bottom-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    z-index: 50;
}
```

#### **SAU (không có phone case):**
```css
body {
    font-family: 'Inter', sans-serif;
    -webkit-user-select: none;
    user-select: none;
}

.app-container {
    max-width: 450px;
    margin: 0 auto;
    background: white;
    min-height: 100vh;
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 450px;
    height: 90px;
    z-index: 50;
}
```

**XÓA HOÀN TOÀN:**
- `.phone-case`
- `.notch`

---

### **2. HTML Body Changes:**

#### **TRƯỚC:**
```html
<body :class="darkMode ? 'dark bg-slate-900' : 'bg-slate-200'">

    <div class="phone-case" :class="darkMode ? 'border-slate-800' : 'border-slate-900'">
        <div class="notch"></div>

        <div class="app-container transition-colors duration-300" :class="darkMode ? 'bg-[#030712]' : 'bg-slate-50'">
```

#### **SAU:**
```html
<body class="bg-slate-100" oncontextmenu="return false;">

    <div class="app-container relative shadow-2xl overflow-hidden transition-colors duration-300" :class="darkMode ? 'bg-[#030712]' : 'bg-slate-50'">
```

**XÓA:**
- `<div class="phone-case">` wrapper
- `<div class="notch"></div>`

---

### **3. Closing tags:**

#### **TRƯỚC (có 2 closing divs):**
```html
        </div>
    </div>  <!-- closing phone-case -->

    <script>
```

#### **SAU (chỉ 1 closing div):**
```html
        </div>
    </div>  <!-- closing app-container -->

    <script>
```

---

## 🚀 Áp dụng tự động

Nếu muốn update tất cả cùng lúc, có thể dùng Find & Replace trong VS Code:

### **Step 1: Update CSS**
Search (Regex):
```
body \{[\s\S]*?margin: 0;\s*\}[\s\S]*?\.notch \{[\s\S]*?\}
```

Replace with:
```
body {
    font-family: 'Inter', sans-serif;
    -webkit-user-select: none;
    user-select: none;
}
```

### **Step 2: Update .app-container**
Search:
```
.app-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
}
```

Replace:
```
.app-container {
    max-width: 450px;
    margin: 0 auto;
    background: white;
    min-height: 100vh;
}
```

### **Step 3: Update .bottom-nav**
Search:
```
.bottom-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
```

Replace:
```
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 450px;
```

---

## ✨ Kết quả mong đợi

Sau khi cập nhật:
- ✅ Không còn khung điện thoại xung quanh
- ✅ App hiển thị full screen trên mobile
- ✅ Responsive và centered trên desktop
- ✅ Bottom navigation fixed đúng vị trí
- ✅ Consistent với house_keeping.html

---

## 📊 Tracking Progress

- [x] house_keeping.html
- [x] bacsy.html
- [ ] benh_nhan.html
- [ ] bep.html
- [ ] dieuduong.html
- [ ] kehoach_tonghop.html
- [ ] kho.html
- [ ] laixe_capcuu.html
- [ ] nhanvien_kythat_thietbi.html
- [ ] quanly.html
- [ ] quanly_chatluong.html
- [ ] anninh_baove.html

---

**Bạn muốn tôi tiếp tục update từng file một không?** 🤔
Hoặc bạn có thể tự apply theo hướng dẫn trên! 
