function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Lưu dữ liệu vào dòng cuối cùng của Sheet
    sheet.appendRow([
      new Date(),
      data.type,
      data.date,
      data.result
    ]);

    return ContentService.createTextOutput("Success");
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.message);
  }
}

// Hàm bổ trợ để nhận request GET nếu cần test trình duyệt
function doGet(e) {
  return ContentService.createTextOutput("Server SMC đang hoạt động!");
}
// Thêm vào file Code.js hiện có
function fetchAIResponse(userMessage) {
  // Bản mẫu trả lời tự động dựa trên từ khóa (Có thể nâng cấp lên Gemini API sau)
  const message = userMessage.toLowerCase();

  if (message.includes("y tế") || message.includes("bệnh viện")) {
    return "SMC cung cấp 4 giải pháp y tế: Dưỡng lão Hiếu An, Bác sỹ gia đình, Dữ liệu y tế cơ sở và Tem nhãn JCI. Bạn muốn tìm hiểu mục nào?";
  }
  if (message.includes("liên hệ") || message.includes("số điện thoại")) {
    return "Bạn có thể liên hệ trực tiếp với anh Vũ Quang Cường qua số: 0912 580 018.";
  }
  if (message.includes("nhiệt độ") || message.includes("phú quốc")) {
    return "Hệ thống giám sát nhiệt độ tại Phú Quốc đang hoạt động ổn định và cảnh báo tức thời qua Telegram.";
  }

  return "Chào bạn, tôi là trợ lý ảo của Smart Connected Platform. Tôi có thể giúp gì cho bạn về các dự án Y tế, Vận hành hay AI?";
}

// Cập nhật lại doGet để nhận tin nhắn từ Chatbot
function doGet(e) {
  if (e.parameter.text) {
    return ContentService.createTextOutput(fetchAIResponse(e.parameter.text));
  }
  return ContentService.createTextOutput("SMC Server is Running...");
}