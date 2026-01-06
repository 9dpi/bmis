$viewsPath = "d:\Dropbox\Project\Smart Medial Connect\Hospital_Management\views"
$files = Get-ChildItem -Path $viewsPath -Filter "*.html"

$standardSidebar = @"
            <nav class="flex-grow py-4 overflow-y-auto">
                <div class="px-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hệ thống quản trị</div>
                
                <a href="../index.html" class="nav-link flex items-center px-6 py-4">
                    <i class="fas fa-chart-line mr-3 w-5 text-lg"></i> Quản lý bệnh viện
                </a>
                
                <a href="facility.html" class="nav-link [[ACTIVE_FACILITY]] flex items-center px-6 py-4">
                    <i class="fas fa-layer-group mr-3 w-5 text-lg text-orange-500"></i>
                    Quản lý Cơ sở vật chất
                    <span class="ml-auto bg-orange-500 text-[8px] text-white px-1.5 py-0.5 rounded-full font-bold">3D LAB</span>
                </a>
                
                <a href="audit.html" class="nav-link [[ACTIVE_AUDIT]] flex items-center px-6 py-4">
                    <i class="fas fa-clipboard-check mr-3 w-5 text-lg text-teal-500"></i>
                    83 Tiêu chí Chất lượng
                </a>
                
                <a href="../show-app.html" target="_blank" class="nav-link flex items-center px-6 py-4 no-underline">
                    <i class="fas fa-notes-medical mr-3 w-5 text-lg"></i>
                    Ứng dụng Mobile App
                </a>
                
                <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Khu vực chuyên môn</div>
                
                <a href="patients.html" class="nav-link [[ACTIVE_PATIENTS]] flex items-center px-6 py-3">
                    <i class="fas fa-user-injured mr-3 w-5"></i> Danh sách bệnh nhân
                </a>
                <a href="bed-map.html" class="nav-link [[ACTIVE_BED]] flex items-center px-6 py-3">
                    <i class="fas fa-procedures mr-3 w-5"></i> Sơ đồ giường bệnh
                </a>
                <a href="lab-tests.html" class="nav-link [[ACTIVE_LAB]] flex items-center px-6 py-3">
                    <i class="fas fa-microscope mr-3 w-5"></i> Xét nghiệm & CĐHA
                </a>
                
                <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vận hành & Hậu cần</div>
                
                <a href="pharmacy.html" class="nav-link [[ACTIVE_PHARMACY]] flex items-center px-6 py-3">
                    <i class="fas fa-pills mr-3 w-5"></i> Quản lý kho dược
                </a>
                <a href="billing.html" class="nav-link [[ACTIVE_BILLING]] flex items-center px-6 py-3">
                    <i class="fas fa-file-invoice-dollar mr-3 w-5"></i> Viện phí & BHYT
                </a>
                <a href="equipment.html" class="nav-link [[ACTIVE_EQUIP]] flex items-center px-6 py-3">
                    <i class="fas fa-tools mr-3 w-5"></i> Quản lý thiết bị
                </a>
                
                <div class="px-6 mt-6 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quản lý & Hỗ trợ</div>
                
                <a href="staff.html" class="nav-link [[ACTIVE_STAFF]] flex items-center px-6 py-3">
                    <i class="fas fa-user-tie mr-3 w-5"></i> Quản lý nhân sự
                </a>
                <a href="housekeeping.html" class="nav-link [[ACTIVE_HOUSE]] flex items-center px-6 py-3">
                    <i class="fas fa-broom mr-3 w-5"></i> Vệ sinh
                </a>
                <a href="security.html" class="nav-link [[ACTIVE_SECURITY]] flex items-center px-6 py-3">
                    <i class="fas fa-shield-alt mr-3 w-5"></i> An ninh bảo vệ
                </a>
            </nav>
"@

$darkModeLogic = @"
    <script>
        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
        }
    </script>
"@

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 1. Inject Dark Mode script into <head> if not exists
    if ($content -notmatch "localStorage.getItem\('darkMode'\)") {
        $content = $content -replace "<head>", "<head>`n$darkModeLogic"
    }
    
    # 2. Update x-data for persistence
    $content = $content -replace 'x-data="\{ darkMode: false', 'x-data="{ darkMode: localStorage.getItem(''darkMode'') === ''true'''
    if ($content -notmatch 'x-init="\$watch') {
        $content = $content -replace '<html (.*?)>', '<html `$1 x-init="`$watch(''darkMode'', val => localStorage.setItem(''darkMode'', val))">'
    }

    # 3. Replace Sidebar
    $pageSidebar = $standardSidebar
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_FACILITY\]\]", ($file.Name -eq "facility.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_AUDIT\]\]", ($file.Name -eq "audit.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_PATIENTS\]\]", ($file.Name -eq "patients.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_BED\]\]", ($file.Name -eq "bed-map.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_LAB\]\]", ($file.Name -eq "lab-tests.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_PHARMACY\]\]", ($file.Name -eq "pharmacy.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_BILLING\]\]", ($file.Name -eq "billing.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_EQUIP\]\]", ($file.Name -eq "equipment.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_STAFF\]\]", ($file.Name -eq "staff.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_HOUSE\]\]", ($file.Name -eq "housekeeping.html" ? "active" : "")
    $pageSidebar = $pageSidebar -replace "\[\[ACTIVE_SECURITY\]\]", ($file.Name -eq "security.html" ? "active" : "")

    # Target the entire <nav> block
    $content = $content -replace '(?s)<nav class="flex-grow py-4 overflow-y-auto">.*?</nav>', $pageSidebar
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated $($file.Name)"
}
