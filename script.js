// ================= DATABASES STRUKTUR DATA UTAMA PORTFOLIO =================
const SkillLevelsData = {
    A_Electrical: 4.6,
    B_Mechanical: 3.5,
    C_Firmware: 4.9,
    D_Software: 4.2,
    E_Systems: 4.8
};

const SkillTooltipsDatabase = {
    'C/C++': { name: 'C/C++ Language', level: 'Expertise / Pro', stars: '★★★★★', icon: 'fas fa-code', desc: 'Digunakan penuh pada arsitektur bare-metal STM32 dan modul firmware cerdas.' },
    'Python': { name: 'Python Engineering', level: 'Advanced / Mentoring', stars: '★★★★★', icon: 'fab fa-python', desc: 'Pemrosesan Custom AI Object Detection, data engineering, dan computer vision script.' },
    'STM32': { name: 'ARM Cortex M4 STM32', level: 'Expertise', stars: '★★★★★', icon: 'fas fa-microchip', desc: 'Pengembangan bare-metal register-level programming, DSP, dan sistem sinkronisasi microgrid.' },
    'Bare-Metal': { name: 'Bare-Metal Architecture', level: 'Expertise', stars: '★★★★★', icon: 'fas fa-terminal', desc: 'Pemrograman mikrokontroler tanpa OS untuk mempercepat waktu eksekusi & reduksi biaya.' },
    'TensorFlow': { name: 'TensorFlow / AI', level: 'Intermediate', stars: '★★★★☆', icon: 'fas fa-brain', desc: 'Melatih model estimasi pose dan klasifikasi daun herbal terapan.' },
    'YOLOv8': { name: 'YOLO Framework v8/v11', level: 'Advanced', stars: '★★★★★', icon: 'fas fa-eye', desc: 'Penerapan real-time vision system untuk deteksi dini penyakit tanaman.' },
    'IIoT': { name: 'Industrial IoT Systems', level: 'Expertise', stars: '★★★★★', icon: 'fas fa-industry', desc: 'Integrasi sistem lantai produksi manufaktur menggunakan Modbus TCP, Node-RED, dan MySQL.' },
    'PCB Design': { name: 'PCB Architectural Layout', level: 'Advanced', stars: '★★★★☆', icon: 'fas fa-layer-group', desc: 'Desain skematik multi-layer khusus untuk JIG Function audio checker modular.' },
    'Node-RED': { name: 'Node-RED Automation', level: 'Advanced', stars: '★★★★☆', icon: 'fas fa-network-wired', desc: 'Dashboard monitoring visual data produksi dan alur logika otomatisasi.' },
    'Vue.js': { name: 'Vue.js Analytics', level: 'Intermediate', stars: '★★★☆☆', icon: 'fab fa-vuejs', desc: 'Penyusunan antarmuka monitoring web terintegrasi platform data.' }
};

const ExperienceAndProjectsDatabase = [
    // {
    //     id: 'polytron-fulltime',
    //     type: 'experience',
    //     category: 'iot',
    //     title: 'Fulltime Manufacturing Engineer',
    //     company: 'PT Hartono Istana Teknologi (Polytron)',
    //     location: 'Kudus, Indonesia',
    //     date: 'Januari 2026 – Present',
    //     context: 'Bertanggung jawab dalam modernisasi divisi lantai produksi manufaktur menuju ekosistem digitalisasi Industri 4.0.',
    //     whatIDid: [
    //         'Menganalisis alur kerja bersama tim lintas fungsi produksi guna mengidentifikasi peluang perbaikan proses dan optimalisasi efisiensi pabrik.',
    //         'Merancang dan mengimplementasikan arsitektur Industrial IoT (IIoT) dengan mengintegrasikan mesin produksi ke pelaporan basis data terpusat.',
    //         'Melakukan studi kelayakan investasi ekonomi dan analisis biaya (cost analysis) pada proyek inisiatif otomatisasi manufaktur.'
    //     ],
    //     impact: [
    //         'Meningkatkan transparansi data real-time mesin produksi secara akurat.',
    //         'Meminimalisir waktu henti mesin (downtime) lewat visualisasi prediktif dashboard.'
    //     ],
    //     techs: ['IIoT', 'Python', 'Node-RED', 'Bare-Metal'],
    //     docs: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80']
    // },
    {
        id: 'physiotrack-sic',
        type: 'project',
        category: 'featured ml iot',
        title: 'PhysioTrack: Smart Assistance for Stroke Therapy',
        company: 'Samsung Innovation Campus Batch 7',
        location: 'Indonesia Category',
        date: 'Februari 2026',
        context: 'Proyek inovasi wearable pintar untuk monitoring pemulihan terapis mandiri bagi pasien pasca-stroke berbasis kecerdasan buatan.',
        whatIDid: [
            'Merancang modul sensor IoT terintegrasi untuk membaca akselerasi dan bio-metrik tubuh pasien secara berkala.',
            'Membangun model kecerdasan buatan terapan berbasis kerangka kerja pose estimation untuk memberikan koreksi gerakan terapi secara langsung (real-time).',
            'Menyusun pengiriman data hemat daya menggunakan protokol komunikasi nirkabel terenkripsi.'
        ],
        impact: [
            'Dinobatkan sebagai Pemenang Pertama (1st Best Group) kategori Universitas di Samsung Innovation Campus Batch 7.',
            'Membantu meningkatkan efektivitas pemulihan terapi fisik mandiri di rumah.'
        ],
        techs: ['Python', 'TensorFlow', 'YOLOv8', 'IIoT'],
        docs: [
            'https://images.unsplash.com/photo-1516062423079-7ca13cca7c5b?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80'
        ]
    },
    // {
    //     id: 'polytron-intern',
    //     type: 'experience',
    //     category: 'iot',
    //     title: 'Intern Research Function Checker Module Audio',
    //     company: 'PT Hartono Istana Teknologi (Polytron)',
    //     location: 'Kudus, Indonesia',
    //     date: 'September 2024 – Maret 2025',
    //     context: 'Riset instrumen pengecekan fungsionalitas elektronik sirkuit kartu audio produksi sebelum perakitan akhir.',
    //     whatIDid: [
    //         'Mengembangkan program firmware pengujian otomatis menggunakan bahasa pemrograman C murni tingkat register (bare-metal programming) pada chip ARM Cortex M4.',
    //         'Bekerja sama merancang custom PCB circuit pengujian terintegrasi untuk menggantikan komponen impor eksternal bernilai tinggi.'
    //     ],
    //     impact: [
    //         'Berhasil memotong pengeluaran biaya pembuatan modul testing checker (Cost Reduction) hingga 94%.',
    //         'Mempercepat durasi siklus waktu pengujian kualitas komponen audio (Testing Time) sebesar 62% lebih ringkas.'
    //     ],
    //     techs: ['STM32', 'C/C++', 'Bare-Metal', 'PCB Design'],
    //     docs: ['https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=80']
    // },
    {
        id: 'thesis-yolo',
        type: 'project',
        category: 'ml',
        title: 'Disease Detection on Ginger Emprit Leaves Using YOLO Algorithm',
        company: 'Satya Wacana Christian University',
        location: 'Salatiga, Indonesia',
        date: '2025',
        context: 'Tugas akhir riset akademis S1 untuk modernisasi pertanian komoditas lokal lewat computer vision.',
        whatIDid: [
            'Mengumpulkan dan melakukan pelabelan mandiri pada ribuan dataset citra daun jahe emprit.',
            'Melatih arsitektur jaringan saraf tiruan YOLOv8 dan YOLO11 guna mengenali gejala bercak penyakit tanaman secara presisi.'
        ],
        impact: [
            'Mencapai akurasi deteksi mAP yang optimal, mempermudah langkah pencegahan gagal panen bagi petani.'
        ],
        techs: ['Python', 'YOLOv8', 'TensorFlow'],
        docs: ['https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80']
    },
    // {
    //     id: 'dicoding-reviewer',
    //     type: 'experience',
    //     category: 'ml',
    //     title: 'Freelance External Academy Code Reviewer at Machine Learning',
    //     company: 'PT Dicoding Akademi Indonesia',
    //     location: 'Bandung, Remote',
    //     date: 'Agustus 2025 – Present',
    //     context: 'Membimbing dan mengawal standarisasi industri kurikulum pemrograman kecerdasan buatan.',
    //     whatIDid: [
    //         'Memeriksa secara ketat ratusan proyek pengumpulan kode Python dan implementasi model machine learning milik peserta.',
    //         'Memberikan ulasan terstruktur, debugging log, serta saran optimasi arsitektur komputasi.'
    //     ],
    //     impact: [
    //         'Membantu meningkatkan tingkat penyelesaian materi (completion rate) siswa di platform.'
    //     ],
    //     techs: ['Python', 'TensorFlow'],
    //     docs: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80']
    // },
    {
        id: 'hexapod-robot',
        type: 'project',
        category: 'robotics',
        title: 'Hexapod Robot with Six Legs Development',
        company: 'Robotics Lab UKSW',
        location: 'Salatiga',
        date: '2024',
        context: 'Pengembangan purwarupa robot berkaki enam untuk navigasi area medan ekstrem non-linear.',
        whatIDid: [
            'Menghitung kinematika pergerakan kaki (Inverse Kinematics) agar manuver jalan robot stabil.',
            'Mengonfigurasi servo controller terdistribusi menggunakan mikrokontroler.'
        ],
        impact: [
            'Berhasil mendemonstrasikan stabilitas jelajah tinggi pada sudut kemiringan permukaan hingga 30 derajat.'
        ],
        techs: ['C/C++', 'PCB Design'],
        docs: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80']
    }
];

const AwardsDatabase = [
    { id: 'aw-sic', title: '1st Best Group National Category', org: 'Samsung Innovation Campus Batch 7', date: 'Februari 2026', desc: 'Penghargaan tertinggi tingkat nasional atas keunggulan inovasi AI & IoT untuk kesehatan pada sistem alat bantu terapi stroke PhysioTrack.' },
    { id: 'aw-mentor', title: 'Juara 3 Lomba Kreativitas & Inovasi', org: 'Bappeda Kabupaten Semarang', date: '2023', desc: 'Bertindak sebagai Freelance Robotic Mentor bagi siswa SMK Telekomunikasi Tunas Harapan dalam penyusunan karya tulis dan alat robotik.' }
];

const CertificationsDatabase = [
    { id: 'c-dsp', title: 'DSP From Ground Up™ on ARM Processor', org: 'Udemy Embedded Credential', date: '2025', desc: 'Spesialisasi algoritma Digital Signal Processing langsung pada core arsitektur prosesor ARM.' },
    { id: 'c-metal-adv', title: 'Advanced Embedded Systems Bare Metal Programming', org: 'Ground Up™ Course', date: '2024', desc: 'Pendalaman penulisan driver periferal interupsi, DMA, dan manajemen memori tanpa bantuan RTOS.' },
    { id: 'c-yolo', title: 'YOLOv8 & YOLO11: Custom Object Detection & Web Apps', org: 'Vision Learning Academy', date: '2025', desc: 'Sertifikasi implementasi computer vision modern dan deployment web service AI.' }
];

// ================= INTERFACE CONTROL SPA ENGINE =================
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active-tab');
    
    const clickedBtn = document.getElementById(`nav-${tabId}`);
    if (clickedBtn) clickedBtn.classList.add('active');

    // Render ulang konten split layout secara otomatis jika berpindah tab terkait
    if (tabId === 'experience') {
        renderSplitLayoutList('all');
    } else if (tabId === 'awards') {
        renderAwardsLayout();
    } else if (tabId === 'certification') {
        renderCertificationsLayout();
    }
}

// ================= THEME CONTROLLER (DARK / LIGHT) =================
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const rootElement = document.documentElement;
        const currentTheme = rootElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        rootElement.setAttribute('data-theme', nextTheme);
        themeToggleBtn.innerHTML = nextTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// ================= JOURNEY VISUAL MATH: RADAR CHART =================
function drawRadarChart() {
    const center = 50;
    const maxRadius = 40;
    const maxVal = 5;

    const rA = (SkillLevelsData.A_Electrical / maxVal) * maxRadius;
    const rB = (SkillLevelsData.B_Mechanical / maxVal) * maxRadius;
    const rC = (SkillLevelsData.C_Firmware / maxVal) * maxRadius;
    const rD = (SkillLevelsData.D_Software / maxVal) * maxRadius;
    const rE = (SkillLevelsData.E_Systems / maxVal) * maxRadius;

    const ptA = `${center},${center - rA}`;
    const ptB = `${center + rB * Math.cos(18 * Math.PI / 180)},${center - rB * Math.sin(18 * Math.PI / 180)}`;
    const ptC = `${center + rC * Math.cos(54 * Math.PI / 180)},${center + rC * Math.sin(54 * Math.PI / 180)}`;
    const ptD = `${center - rD * Math.cos(54 * Math.PI / 180)},${center + rD * Math.sin(54 * Math.PI / 180)}`;
    const ptE = `${center - rE * Math.cos(18 * Math.PI / 180)},${center - rE * Math.sin(18 * Math.PI / 180)}`;

    const polygon = document.getElementById("skill-polygon");
    if (polygon) {
        polygon.setAttribute("points", `${ptA} ${ptB} ${ptC} ${ptD} ${ptE}`);
    }
}

function showTimelineSkills(timelineId) {
    // Sesuai prompt, memunculkan info spesifikasi skill dinamis saat kursor menyentuh kartu di tab journey
    console.log(`Hovering active timeline track: ${timelineId}`);
}

// ================= EXPERIENCE & PROJECT SPLIT SCREEN RENDERER =================
function renderSplitLayoutList(filterType) {
    const sidebar = document.getElementById('experience-list-sidebar');
    if (!sidebar) return;
    
    sidebar.innerHTML = '';
    
    const filteredData = ExperienceAndProjectsDatabase.filter(item => {
        if (filterType === 'all') return true;
        if (filterType === 'featured') return item.category.includes('featured');
        return item.category.includes(filterType);
    });

    if(filteredData.length === 0) {
        sidebar.innerHTML = '<p style="padding:15px; font-size:0.85rem; color:var(--text-muted)">Tidak ada data.</p>';
        return;
    }

    filteredData.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'compact-menu-item';
        itemCard.innerHTML = `
            <h4>${item.title}</h4>
            <p><i class="fas fa-building"></i> ${item.company}</p>
            <p><i class="far fa-calendar-alt"></i> ${item.date} <span style="float:right; text-transform:uppercase; font-size:0.7rem; color:var(--primary-red); font-weight:700;">${item.type}</span></p>
        `;
        
        itemCard.addEventListener('click', () => {
            // Hapus kelas aktif di semua item sidebar sebelah kiri
            document.querySelectorAll('.compact-menu-item').forEach(c => c.classList.remove('active'));
            itemCard.classList.add('active');
            
            // Tampilkan data di sisi kanan (Split Main Display)
            loadMainDisplayDetails(item);
        });
        
        sidebar.appendChild(itemCard);
    });
}

function filterProjectCategory(category, buttonElement) {
    document.querySelectorAll('.filter-tab-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    renderSplitLayoutList(category);
    
    // Reset Main Display ke bentuk instruksi awal kosong
    document.getElementById('experience-main-view').innerHTML = `
        <div class="empty-placeholder">
            <i class="fas fa-arrow-left animate-bounce-x"></i>
            <p>Pilih salah satu item dari daftar kategori '${category}' di sisi kiri untuk memuat detail.</p>
        </div>
    `;
}

function loadMainDisplayDetails(data) {
    const displayArea = document.getElementById('experience-main-view');
    if (!displayArea) return;

    // Generate List Pekerjaan / Aktivitas
    let tasksHTML = '';
    data.whatIDid.forEach(task => { tasksHTML += `<li>${task}</li>`; });

    // Generate List Dampak / Impact
    let impactHTML = '';
    data.impact.forEach(imp => { impactHTML += `<li><i class="fas fa-check-circle" style="color:var(--primary-red)"></i> ${imp}</li>`; });

    // Generate Tech Badges (Dengan Pemicu Tooltip Hover)
    let techHTML = '';
    data.techs.forEach(t => { 
        techHTML += `<span class="tech-pill" onmouseenter="triggerSkillTooltip(event, '${t}')" onmouseleave="hideSkillTooltip()">${t}</span>`; 
    });

    // Jalankan struktur render terperinci sesuai blueprint halaman 2 & 6 pdf
    displayArea.innerHTML = `
        <div class="detail-main-header">
            <span class="study-year-badge" style="margin-bottom:8px;">${data.type.toUpperCase()} VIEW</span>
            <h3>${data.title}</h3>
            <div class="detail-meta-row">
                <span><strong><i class="fas fa-building"></i> ${data.company}</strong></span>
                <span><i class="far fa-calendar-alt"></i> ${data.date} | ${data.location}</span>
            </div>
        </div>

        <div class="detail-body-section">
            <h5>Context / Latar Belakang</h5>
            <p>${data.context}</p>
        </div>

        <div class="detail-body-section">
            <h5>What I Did (Kontribusi Teknis)</h5>
            <ul>${tasksHTML}</ul>
        </div>

        <div class="detail-body-section">
            <h5>Impact / Hasil Nyata</h5>
            <ul style="list-style:none; padding-left:0;">${impactHTML}</ul>
        </div>

        <div class="detail-body-section">
            <h5>Technology Used (Sentuh untuk melihat level keahlian)</h5>
            <div class="tech-badging-group">${techHTML}</div>
        </div>

        <div class="detail-body-section">
            <h5>Documentation & Media</h5>
            <div class="gallery-scroll-wrapper">
                ${data.docs.map((d, index) => `
                    <div class="gallery-img-card">
                        <img src="${d}" alt="Dokumentasi ${index+1}">
                        <span>Media #${index+1}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <button class="action-btn-primary" style="margin-top:20px; width:100%;" onclick="launchModalPopupEngine('${data.id}')">
            Buka Sebagai Modal Fullscreen Overlay <i class="fas fa-expand-arrows-alt"></i>
        </button>
    `;
}

// ================= RENDER TABS LAINNYA (AWARDS & CERTIFICATION) =================
function renderAwardsLayout() {
    const sidebar = document.getElementById('awards-sidebar');
    const view = document.getElementById('awards-main-view');
    if (!sidebar) return;

    sidebar.innerHTML = '';
    AwardsDatabase.forEach(aw => {
        const div = document.createElement('div');
        div.className = 'compact-menu-item';
        div.innerHTML = `<h4>${aw.title}</h4><p>${aw.org} (${aw.date})</p>`;
        div.addEventListener('click', () => {
            document.querySelectorAll('#awards-sidebar .compact-menu-item').forEach(c => c.classList.remove('active'));
            div.classList.add('active');
            view.innerHTML = `
                <div class="detail-main-header">
                    <h3>${aw.title}</h3>
                    <p style="color:var(--text-muted)">${aw.org} | Issued Date: ${aw.date}</p>
                </div>
                <div class="detail-body-section">
                    <h5>Deskripsi Pencapaian</h5>
                    <p>${aw.desc}</p>
                </div>
            `;
        });
        sidebar.appendChild(div);
    });
}

function renderCertificationsLayout() {
    const sidebar = document.getElementById('cert-sidebar');
    const view = document.getElementById('cert-main-view');
    if (!sidebar) return;

    sidebar.innerHTML = '';
    CertificationsDatabase.forEach(c => {
        const div = document.createElement('div');
        div.className = 'compact-menu-item';
        div.innerHTML = `<h4>${c.title}</h4><p>${c.org}</p>`;
        div.addEventListener('click', () => {
            document.querySelectorAll('#cert-sidebar .compact-menu-item').forEach(c => c.classList.remove('active'));
            div.classList.add('active');
            view.innerHTML = `
                <div class="detail-main-header">
                    <h3>${c.title}</h3>
                    <p style="color:var(--text-muted)">Penyelenggara: ${c.org} (${c.date})</p>
                </div>
                <div class="detail-body-section">
                    <h5>Kompetensi Tersertifikasi</h5>
                    <p>${c.desc}</p>
                </div>
            `;
        });
        sidebar.appendChild(div);
    });
}

// ================= MODAL FULLSCREEN POPUP OVERLAY ENGINE =================
function launchModalPopupEngine(itemId) {
    const matchedItem = ExperienceAndProjectsDatabase.find(x => x.id === itemId);
    if (!matchedItem) return;

    const modalBody = document.getElementById('modal-dynamic-body-injector');
    const modalWrapper = document.getElementById('global-detail-modal');
    
    let bullets = matchedItem.whatIDid.map(b => `<li>${b}</li>`).join('');
    let impacts = matchedItem.impact.map(i => `<li><i class="fas fa-check-circle" style="color:var(--primary-red)"></i> ${i}</li>`).join('');

    modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
            <span class="study-year-badge">${matchedItem.type.toUpperCase()} ARCHIVE</span>
            <h2 style="margin-top:10px; font-size:1.8rem;">${matchedItem.title}</h2>
            <p style="color:var(--text-muted); font-size:0.9rem;">${matchedItem.company} &bull; ${matchedItem.date}</p>
        </div>
        <hr style="border:0; border-top:1px solid var(--border-color); margin-bottom:20px;">
        
        <div style="display:flex; flex-direction:column; gap:20px;">
            <div>
                <h4 style="color:var(--primary-red); margin-bottom:5px;">KONTEKS</h4>
                <p>${matchedItem.context}</p>
            </div>
            <div>
                <h4 style="color:var(--primary-red); margin-bottom:5px;">TUGAS UTAMA</h4>
                <ul>${bullets}</ul>
            </div>
            <div>
                <h4 style="color:var(--primary-red); margin-bottom:5px;">DAMPAK PROYEK</h4>
                <ul style="list-style:none; padding-left:0;">${impacts}</ul>
            </div>
            <div>
                <h4 style="color:var(--primary-red); margin-bottom:5px;">DOKUMENTASI LENGKAP (SCROLLABLE)</h4>
                <div class="gallery-scroll-wrapper">
                    ${matchedItem.docs.map(d => `<img src="${d}" style="width:280px; height:180px; object-fit:cover; border-radius:8px;">`).join('')}
                </div>
            </div>
        </div>
    `;

    modalWrapper.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Kunci scroll halaman utama
}

function hideActiveModal() {
    document.getElementById('global-detail-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closePopupModal(event) {
    // Kembali ke view jika area samping blur diklik (Sesuai PDF Halaman 2)
    if(event.target.classList.contains('modal-backdrop-blur')) {
        hideActiveModal();
    }
}

// ================= SKILL HOVER TOOLTIP MOUSE TRACKER SYSTEM =================
const tooltipBox = document.getElementById('skill-hover-tooltip');

function triggerSkillTooltip(event, techKey) {
    const dataset = SkillTooltipsDatabase[techKey] || { name: techKey, level: 'Competent', stars: '★★★★☆', icon: 'fas fa-cog', desc: 'Industrial standard engineering application.' };
    
    document.getElementById('tt-icon').innerHTML = `<i class="${dataset.icon}"></i>`;
    document.getElementById('tt-name').innerText = dataset.name;
    document.getElementById('tt-level').innerText = dataset.level;
    document.getElementById('tt-stars').innerText = dataset.stars;
    document.getElementById('tt-desc').innerText = dataset.desc;
    
    tooltipBox.style.display = 'block';
    tooltipBox.style.opacity = '1';
    
    moveTooltip(event);
}

function moveTooltip(event) {
    // Posisikan kotak melayang tipis di dekat koordinat kursor mouse
    const xOffset = 15;
    const yOffset = 15;
    tooltipBox.style.left = (event.clientX + xOffset) + 'px';
    tooltipBox.style.top = (event.clientY + yOffset) + 'px';
}

function hideSkillTooltip() {
    tooltipBox.style.display = 'none';
    tooltipBox.style.opacity = '0';
}

// Jalankan fungsi inisialisasi awal saat dokumen web siap dimuat
window.addEventListener('DOMContentLoaded', () => {
    drawRadarChart();
    renderSplitLayoutList('all');
});

// ================= EVENT LISTENER UNTUK TRACKING MOUSE TOOLTIP =================
document.addEventListener('mousemove', (event) => {
    if (tooltipBox && tooltipBox.style.display === 'block') {
        moveTooltip(event);
    }
});

// Memastikan fungsi tutup modal bekerja ketika menekan tombol Escape di keyboard
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideActiveModal();
    }
});

// Handler tambahan jika gambar dalam galeri gagal dimuat (fallback placeholder)
document.addEventListener('error', function (e) {
    if (e.target.tagName.toLowerCase() === 'img' && !e.target.src.includes('unsplash')) {
        e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80';
    }
}, true);