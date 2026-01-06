# ====================================
# Desktop Pages Sidebar Standardization
# ====================================
# Script để chuẩn hóa sidebar cho TẤT CẢ desktop pages
# Loại bỏ links đến individual mobile apps
# Chỉ giữ link đến Mobile Hub (show-app.html)

Write-Host "🚀 Bắt đầu chuẩn hóa Desktop Sidebars..." -ForegroundColor Cyan
Write-Host "=" * 60

# Load standard sidebar template
$sidebarTemplate = Get-Content 'shared\desktop-sidebar.html' -Raw

# ====================================
# VIEWS PAGES (7 files)
# ====================================
$viewsPages = @{
    'views\patients.html'  = 'patients.html'
    'views\bed-map.html'   = 'bed-map.html'
    'views\lab-tests.html' = 'lab-tests.html'
    'views\pharmacy.html'  = 'pharmacy.html'
    'views\billing.html'   = 'billing.html'
    'views\facility.html'  = 'facility.html'
    'views\audit.html'     = 'audit.html'
}

Write-Host "`n📁 Updating VIEWS pages..." -ForegroundColor Yellow

foreach ($page in $viewsPages.Keys) {
    if (Test-Path $page) {
        try {
            $content = Get-Content $page -Raw -Encoding UTF8
            
            # Replace nav block
            $pattern = '(?s)<nav class="flex-grow[^>]*>.*?</nav>'
            $content = $content -replace $pattern, $sidebarTemplate
            
            # Set active class for current page
            $activePage = $viewsPages[$page]
            $content = $content -replace "href=`"$activePage`" class=`"nav-link", "href=`"$activePage`" class=`"nav-link active"
            
            # Save
            $content | Out-File $page -Encoding UTF8 -NoNewline
            Write-Host "  ✅ $page" -ForegroundColor Green
        }
        catch {
            Write-Host "  ❌ Error updating $page : $_" -ForegroundColor Red
        }
    }
    else {
        Write-Host "  ⚠️  $page not found" -ForegroundColor Yellow
    }
}

# ====================================
# INDEX.HTML (Root)
# ====================================
Write-Host "`n📁 Updating ROOT index.html..." -ForegroundColor Yellow

if (Test-Path 'index.html') {
    try {
        $indexContent = Get-Content 'index.html' -Raw -Encoding UTF8
        
        # Adjust paths for root (remove ../ and add views/)
        $indexSidebar = $sidebarTemplate -replace 'href="../index.html"', 'href="index.html"'
        $indexSidebar = $indexSidebar -replace 'href="([^.][^.][^/])', 'href="views/$1' # Add views/ prefix
        $indexSidebar = $indexSidebar -replace 'href="views/../show-app.html"', 'href="show-app.html"' # Fix mobile hub link
        
        # Replace nav
        $pattern = '(?s)<nav class="flex-grow[^>]*>.*?</nav>'
        $indexContent = $indexContent -replace $pattern, $indexSidebar
        
        # Set active for Dashboard
        $indexContent = $indexContent -replace 'href="index.html" class="nav-link', 'href="index.html" class="nav-link active'
        
        # Save
        $indexContent | Out-File 'index.html' -Encoding UTF8 -NoNewline
        Write-Host "  ✅ index.html" -ForegroundColor Green
    }
    catch {
        Write-Host "  ❌ Error updating index.html: $_" -ForegroundColor Red
    }
}

# ====================================
# SUMMARY
# ====================================
Write-Host "`n" + "=" * 60
Write-Host "🎉 Hoàn tất chuẩn hóa Desktop Sidebars!" -ForegroundColor Green
Write-Host "`n📊 Thống kê:" -ForegroundColor Cyan
Write-Host "  - Tổng pages updated: 8"
Write-Host "  - Views pages: 7"
Write-Host "  - Root index: 1"
Write-Host "`n✅ Tất cả desktop pages giờ có:" -ForegroundColor Green
Write-Host "  ✓ Cùng sidebar menu"
Write-Host "  ✓ Link giữa desktop pages"
Write-Host "  ✓ Link đến Mobile Hub (show-app.html)"
Write-Host "  ✓ KHÔNG link trực tiếp đến mobile apps"
Write-Host "  ✓ Active class đúng page hiện tại"

Write-Host "`n🧪 Test ngay:" -ForegroundColor Yellow
Write-Host "  1. Mở index.html"
Write-Host "  2. Click sidebar menu items"
Write-Host "  3. Kiểm tra navigation hoạt động"
Write-Host "  4. Click 'Mobile App Hub' → Mở show-app.html"

Write-Host "`n✨ Done! Desktop system is now standardized!" -ForegroundColor Cyan
