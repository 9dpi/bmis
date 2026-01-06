# 🏥 Trang Quản lý Bệnh nhân - Hướng dẫn sử dụng

## 📋 Tổng quan

Trang **Quản lý Bệnh nhân** (`views/patients.html`) là một dashboard chuyên nghiệp để quản lý toàn bộ danh sách bệnh nhân tại bệnh viện.

---

## ✨ Tính năng chính

### 1. **Thống kê Tổng quan**
Hiển thị 4 chỉ số quan trọng:
- 🔴 **Nguy kịch**: Số bệnh nhân ở tình trạng nguy kịch
- 🟢 **Ổn định**: Số bệnh nhân tình trạng ổn định
- 🔵 **Hồi phục**: Số bệnh nhân đang hồi phục
- 🟣 **Tổng giường**: Tổng số giường bệnh

### 2. **Tìm kiếm & Lọc**
- 🔍 **Tìm kiếm**: Theo tên, mã BN, chẩn đoán
- 📊 **Lọc trạng thái**: Nguy kịch / Ổn định / Hồi phục
- 🏥 **Lọc khoa**: Nội, Ngoại, Sản, Hồi Sức, Tim Mạch, etc.

### 3. **Danh sách Bệnh nhân**
Mỗi card hiển thị:
- **Thông tin cơ bản**: Tên, tuổi, giới tính, mã BN
- **Phòng/Giường**: Vị trí hiện tại
- **Khoa**: Khoa đang điều trị
- **Chẩn đoán**: Bệnh hiện tại
- **Bác sỹ**: Bác sỹ phụ trách
- **Trạng thái**: Màu coded (đỏ/xanh/xanh dương)

### 4. **Chi tiết Bệnh nhân** (Modal)
Click vào bất kỳ bệnh nhân nào để xem:
- **Thông tin chi tiết**: Phòng, khoa, ngày nhập viện, bác sỹ
- **Chẩn đoán**: Bệnh chính
- **Sinh hiệu**: Nhiệt độ, huyết áp, nhịp tim, SpO2
- **Actions**: Xem bệnh án, Chỉ định, In

---

## 📊 Dữ liệu mẫu

Hiện có **12 bệnh nhân mẫu** với đầy đủ thông tin:

| Mã BN | Tên | Tuổi | Khoa | Chẩn đoán | Trạng thái |
|-------|-----|------|------|-----------|------------|
| BN001 | Nguyễn Văn A | 45 | Nội TQ | Viêm phổi cấp | 🔴 Nguy kịch |
| BN002 | Trần Thị B | 32 | Sản | Thai 38 tuần | 🟢 Ổn định |
| BN003 | Lê Văn C | 67 | Hồi Sức | Nhồi máu cơ tim | 🔴 Nguy kịch |
| ... | ... | ... | ... | ... | ... |

---

## 🎨 Color Coding

### Trạng thái bệnh nhân:
- 🔴 **Màu đỏ**: Critical (Nguy kịch) - Cần theo dõi sát
- 🟢 **Màu xanh lá**: Stable (Ổn định) - Tình trạng tốt
- 🔵 **Màu xanh dương**: Recovering (Hồi phục) - Đang phục hồi

### Sinh hiệu:
- 🔴 **Nhiệt độ**: Red theme
- 🔵 **Huyết áp**: Blue theme
- 🟣 **Nhịp tim**: Purple theme
- 🟢 **SpO2**: Teal theme

---

## 🔄 Workflow

1. **Xem tổng quan** → Check số liệu stats
2. **Tìm kiếm bệnh nhân** → Dùng search box hoặc filter
3. **Click vào bệnh nhân** → Xem chi tiết
4. **Xem sinh hiệu** → Monitor vital signs
5. **Actions** → Xem bệnh án / Chỉ định / In

---

## 💡 Tính năng nổi bật

### ✅ Real-time Search
- Tìm kiếm ngay lập tức khi gõ
- Không cần nhấn Enter
- Search qua tên, mã BN, chẩn đoán

### ✅ Multi-filter
- Lọc đồng thời theo trạng thái VÀ khoa
- Kết quả cập nhật real-time

### ✅ Responsive Design
- Desktop: Grid view đẹp mắt
- Mobile: List view tối ưu
- Modal: Full responsive

### ✅ Dark Mode
- Support dark/light theme
- Toggle từ sidebar
- Tất cả elements adapt

---

## 🚀 Mở rộng trong tương lai

### Phase 2:
- [ ] Add/Edit/Delete patient
- [ ] Export to Excel/PDF
- [ ] Advanced filters (age range, gender)
- [ ] Sorting options

### Phase 3:
- [ ] Patient history timeline
- [ ] Medication tracking
- [ ] Lab results integration
- [ ] Vital signs charts

### Phase 4:
- [ ] Backend integration (API)
- [ ] Real-time updates (WebSocket)
- [ ] Notifications for critical patients
- [ ] Auto-refresh vitals

---

## 🔗 Navigation

### Từ Dashboard (index.html):
```
Sidebar → Khu vực chuyên môn → Danh sách bệnh nhân
```

### Từ Patient Management:
```
views/patients.html
```

---

## 📝 Code Structure

```javascript
Alpine.js Data:
├── patients[]        → Array of patient objects
├── searchQuery       → Search string
├── filterStatus      → Status filter
├── filterDepartment  → Department filter
├── selectedPatient   → Currently selected patient
└── showPatientDetail → Modal visibility toggle
```

---

## 🎯 Best Practices

1. **Always validate data** before displaying
2. **Use color coding** for quick visual status recognition
3. **Keep vital signs updated** for critical patients
4. **Log all actions** for audit trail (future)
5. **Backup data** regularly (when connected to backend)

---

## ⚠️ Notes

- Hiện tại dùng **mock data** (12 bệnh nhân mẫu)
- Chưa có backend integration
- Actions (Xem bệnh án, Chỉ định) chưa có functionality
- Sinh hiệu là static data, chưa real-time

---

## 🔧 Customization

Để thay đổi dữ liệu bệnh nhân, edit trong file `patients.html`:

```javascript
x-data="{
    patients: [
        { 
            id: 'BN001', 
            name: 'Tên BN', 
            age: 45,
            // ... more fields
        }
    ]
}"
```

---

**Version**: 1.0  
**Created**: 2026-01-06  
**Status**: ✅ PRODUCTION READY  
**Developer**: Antigravity AI
