// ================= 1. FUNGSI NAVIGASI TAB UTAMA =================
function switchTab(tabId) {
    // A. Menyembunyikan seluruh isi section tab yang terbuka
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active-tab');
    });

    // B. Menghilangkan status "active" (nyala) pada semua tombol navigasi atas
    const allBtns = document.querySelectorAll('.nav-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // C. Memunculkan section tab berdasarkan ID yang dipanggil
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
        // Memberi waktu 10ms agar efek transisi CSS (fadeIn) berjalan mulus
        setTimeout(() => {
            selectedTab.classList.add('active-tab');
        }, 10);
    }

    // D. Memberikan efek nyala (merah) pada tombol yang barusan ditekan
    const activeBtn = document.getElementById('nav-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// ================= 2. FUNGSI MENU KIRI-KANAN (SPLIT LAYOUT) =================
function showSplitContent(section, category, btnElement) {
    const container = document.getElementById(section + '-content');
    if (!container || !btnElement) return;

    // Matikan kelas 'active' dari semua tombol pada area sidebar spesifik tersebut
    const sidebar = btnElement.parentElement;
    const btns = sidebar.querySelectorAll('.sidebar-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    // Nyalakan warna pada tombol yang saat ini sedang diklik
    btnElement.classList.add('active');

    // Menampilkan (block) atau menyembunyikan (none) kotak sesuai kategorinya
    const items = container.querySelectorAll('.card-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            // Reset opacity agar animasi CSS masuk bisa teraplikasi ulang
            item.style.opacity = '0';
            setTimeout(() => item.style.opacity = '1', 10);
        } else {
            item.style.display = 'none';
        }
    });
}

// ================= 3. FUNGSI GANTI TEMA (DARK / LIGHT MODE) =================
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Memodifikasi atribut data-theme di root dokumen
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Mengganti ikon
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// ================= 4. MENENTUKAN HALAMAN AWAL =================
// Menjamin aplikasi web selalu me-*reset* ke halaman Home di awal pemuatan
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
});