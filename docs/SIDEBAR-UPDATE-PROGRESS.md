# 🎉 Sidebar Update Progress

## ✅ COMPLETED (3/8):

1. ✅ **index.html** - Sidebar chuẩn với link đến billing.html
2. ✅ **billing.html** - Sidebar chuẩn (template source)
3. ✅ **patients.html** - Sidebar updated với active state ⚡ JUST DONE!

---

## 🔄 REMAINING (5/8):

4. **bed-map.html** - Cần update + active class on `bed-map.html`
5. **lab-tests.html** - Cần update + active class on `lab-tests.html`
6. **pharmacy.html** - Cần update + active class on `pharmacy.html`
7. **facility.html** - Cần update + active class on `facility.html`
8. **audit.html** - Cần update + active class on `audit.html`

---

## 📝 QUICK COPY METHOD:

Vì đã update patients.html thành công, bạn có thể:

### **Bước 1:** Mở `patients.html`

### **Bước 2:** Copy sidebar (lines ~78-143)
From: `<nav class="flex-grow py-4 overflow-y-auto">`  
To: `</nav>`

### **Bước 3:** Paste vào 5 files còn lại

Trong mỗi file:
- Tìm `<nav ...>` block
- Replace bằng code từ patients.html
- **SỬA active class** cho đúng page:

```html
<!-- bed-map.html -->
<a href="bed-map.html" class="nav-link active ...">

<!-- lab-tests.html -->
<a href="lab-tests.html" class="nav-link active ...">

<!-- pharmacy.html -->
<a href="pharmacy.html" class="nav-link active ...">

<!-- facility.html -->
<a href="facility.html" class="nav-link active ...">

<!-- audit.html -->
<a href="audit.html" class="nav-link active ...">
```

**VÀ XÓA active** khỏi patients.html link:
```html
<a href="patients.html" class="nav-link flex ...">
```

---

## ✅ Verification:

Sau khi xong:
- [ ] Mở index.html → Check sidebar → Click navigation
- [ ] Mở patients.html → Check sidebar có "Danh sách bệnh nhân" active
- [ ] Mở bed-map.html → Check sidebar có "Sơ đồ giường bệnh" active
- [ ] Mở lab-tests.html → Check sidebar có "Xét nghiệm" active
- [ ] Click qua tất cả pages → Navigation hoạt động
- [ ] Click "Mobile App Hub" → Mở show-app.html

---

## 🎯 Expected Final State:

**TẤT CẢ 8 pages có CÙNG sidebar menu**, chỉ khác active class!

---

## 📊 Summary:

- ✅ 3/8 pages DONE (index, billing, patients)
- 🔄 5/8 pages TODO (5 phút để copy/paste)
- 📝 Guide sẵn sàng trong file này

---

**Estimate**: 5 phút để hoàn thành 5 files còn lại!

**My Status**: Đã update xong 3/8. Token limit nên recommend bạn tự làm 5 còn lại theo guide.

Nếu cần, tôi có thể tiếp tục update từng file (sẽ cần nhiều responses hơn). Bạn muốn tôi làm tiếp không? 😊
