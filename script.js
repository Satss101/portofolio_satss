// ================= DATABASE EXPERIENCE =================
const ExperienceDatabase = [
    {
        id: 'exp-polytron-full',
        type: 'fulltime',
        logo: 'resources/photos/polytron/polytron.jpg',
        position: 'Manufacturing Engineer',
        company: 'PT Hartono Istana Teknologi (Polytron)',
        location: 'Kudus, Indonesia',
        date: 'Januari 2026 – Present',
        tagline: 'Merancang solusi Industri 4.0 lewat implementasi teknologi automasi dan arsitektur IIoT skala pabrik.',
        context: 'Bertanggung jawab dalam modernisasi divisi lantai produksi manufaktur menuju ekosistem digitalisasi Industri 4.0.',
        whatIDid: [
            'Menganalisis alur kerja bersama tim lintas fungsi produksi guna mengidentifikasi peluang perbaikan proses.',
            'Merancang dan mengimplementasikan arsitektur IIoT yang mengintegrasikan mesin produksi ke basis data terpusat.',
            'Melakukan studi kelayakan investasi ekonomi dan analisis biaya pada proyek inisiatif otomatisasi manufaktur.'
        ],
        impact: [
            'Meningkatkan transparansi data real-time mesin produksi secara akurat.',
            'Meminimalisir waktu henti mesin (downtime) lewat visualisasi prediktif dashboard.'
        ],
        techs: ['IIoT', 'Python', 'ARM Robot'],
        docs: [
            'resources/photos/polytron/dokumentasi.jpg',
            'resources/photos/polytron/sertif_polytron.jpg'
        ]
    },
    {
        id: 'exp-dicoding',
        type: 'parttime',
        logo: 'resources/photos/dicoding/dicoding.png',
        position: 'External Code Reviewer Machine Learning',
        company: 'PT Dicoding Akademi Indonesia',
        location: 'Bandung, Indonesia',
        date: 'Agustus 2025 – Present',
        tagline: 'Mengevaluasi standarisasi, skalabilitas, dan kebersihan kode Machine Learning ribuan developer.',
        context: 'Membimbing dan mengawal standarisasi industri kurikulum pemrograman kecerdasan buatan.',
        whatIDid: [
            'Memeriksa secara ketat ratusan proyek pengumpulan kode Python dan implementasi model machine learning.',
            'Memberikan ulasan terstruktur, debugging log, serta saran optimasi arsitektur komputasi.'
        ],
        impact: [
            'Membantu meningkatkan tingkat penyelesaian materi (completion rate) siswa di platform.'
        ],
        techs: ['Python', 'TensorFlow'],
        docs: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
        ]
    },
    {
        id: 'exp-polytron-intern',
        type: 'internship',
        logo: 'resources/photos/polytron/polytron.jpg',
        position: 'Intern Research Function Checker Audio',
        company: 'PT Hartono Istana Teknologi (Polytron)',
        location: 'Kudus, Indonesia',
        date: 'September 2024 – Maret 2025',
        tagline: 'Membangun perangkat Function Checker audio berbasis microchip bare-metal dengan pemotongan biaya produksi masif.',
        context: 'Riset instrumen pengecekan fungsionalitas elektronik sirkuit kartu audio produksi sebelum perakitan akhir.',
        whatIDid: [
            'Mengembangkan program firmware pengujian otomatis menggunakan bahasa C murni tingkat register (bare-metal) pada chip ARM Cortex M4.',
            'Merancang custom PCB circuit pengujian terintegrasi untuk menggantikan komponen impor eksternal bernilai tinggi.'
        ],
        impact: [
            'Berhasil memotong pengeluaran biaya pembuatan modul testing checker (Cost Reduction) hingga 94%.',
            'Mempercepat durasi siklus waktu pengujian kualitas komponen audio sebesar 62% lebih ringkas.'
        ],
        techs: ['STM32', 'C/C++', 'Bare-Metal', 'PCB Design', '3D Modeling'],
        docs: [
            'resources/photos/polytron/dokumentasi.jpg',
            'resources/photos/polytron/sertif_polytron.jpg'
        ]
    },
    {
        id: 'exp-inahef',
        type: 'internship',
        logo: 'resources/photos/inahef/inahef.jpg',
        position: 'Intern Information Engineer',
        company: 'PTPI (Indonesia Herbal)',
        location: 'Indonesia',
        date: 'Januari 2026 – Present',
        tagline: 'Merancang solusi automasi dan arsitektur IIoT skala industri.',
        context: 'Bertanggung jawab dalam perancangan solusi teknologi informasi untuk mendukung operasional industri.',
        whatIDid: [
            'Merancang arsitektur IIoT untuk monitoring sistem produksi secara real-time.',
            'Mengoptimalkan workflow dan alur kerja internal perusahaan menggunakan teknologi modern.'
        ],
        impact: [
            'Meningkatkan efisiensi operasional melalui digitalisasi proses produksi.'
        ],
        techs: ['IIoT', 'Node-RED', 'Python'],
        docs: [
            'resources/photos/inahef/sertif.jpg',
        ]
    },
    {
        id: 'exp-fds',
        type: 'internship',
        logo: 'resources/photos/fds/full_drone_solutions_logo.jpg',
        position: 'Intern Electronic Engineer',
        company: 'PT Full Drone Solutions',
        location: 'Indonesia',
        date: 'Januari 2026 – Present',
        tagline: 'Merancang arsitektur sistem elektronik untuk platform drone industri.',
        context: 'Bertanggung jawab dalam penelitian dan pengembangan sistem elektronik untuk drone industri.',
        whatIDid: [
            'Merancang dan mengembangkan sistem elektronik embedded untuk platform drone.',
            'Melakukan pengujian dan validasi komponen elektronik drone secara komprehensif.'
        ],
        impact: [
            'Berkontribusi dalam pengembangan platform drone generasi berikutnya.'
        ],
        techs: ['C/C++', 'Bare-Metal', 'PCB Design'],
        docs: [
            'resources/photos/fds/sertif1.jpg',
            'resources/photos/fds/sertif2.jpg'
        ]
    }
];

// ================= DATABASE PROJECTS =================
const ProjectsDatabase = [
    {
        id: 'proj-physiotrack',
        category: ['all', 'featured', 'ml', 'iot'],
        title: 'PhysioTrack: Smart Assistance for Stroke Therapy',
        about: 'Proyek inovasi wearable pintar untuk monitoring pemulihan terapis mandiri bagi pasien pasca-stroke berbasis kecerdasan buatan. Dikembangkan dalam rangka Samsung Innovation Campus Batch 7.',
        coverImg: 'https://images.unsplash.com/photo-1516062423079-7ca13cca7c5b?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Dinobatkan sebagai Pemenang Pertama (1st Best Group) kategori Universitas di Samsung Innovation Campus Batch 7.',
            'Membantu meningkatkan efektivitas pemulihan terapi fisik mandiri di rumah.',
            'Integrasi AI pose estimation real-time dengan akurasi tinggi.',
            'Komunikasi nirkabel terenkripsi hemat daya.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1516062423079-7ca13cca7c5b?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['Python', 'TensorFlow', 'YOLOv8', 'IIoT']
    },
    {
        id: 'proj-yolo-ginger',
        category: ['all', 'featured', 'ml'],
        title: 'Disease Detection on Ginger Emprit Leaves Using YOLO',
        about: 'The emprit ginger plant (Zingiber officinale var. amarum) has high economic value but is vulnerable to diseases that can reduce productivity. Manual detection methods are often inefficient due to time and labor limitations, making technology-based solutions necessary. This study employs the You Only Look Once (YOLOv11) algorithm to automatically detect diseases on emprit ginger leaves. The dataset consists of 1,149 images, which were augmented to 2,130 images. The model was trained using a GPU with the AdamW optimizer, a batch size of 16, 100 epochs, and an image resolution of 640×640 pixels. Testing with the test set achieved a precision of 0.85, recall of 0.96, F1-score of 0.90, mAP_0.5 of 0.93, and mAP_0.5:0.95 of 0.72. The detection speed reached an average of 54.53 ms per frame. The model still has limitations regarding variations in shooting distance and lighting conditions. This study demonstrates that the YOLOv11 algorithm can serve as a solution to assist farmers in detecting diseases in emprit ginger plants.',
        coverImg: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Mencapai akurasi deteksi mAP yang optimal pada dataset tanaman jahe emprit.',
            'Berhasil mengumpulkan dan melabeli ribuan citra daun jahe secara mandiri.',
            'Membandingkan performa YOLOv8 vs YOLO11 secara komprehensif.',
            'Mempermudah pencegahan gagal panen bagi petani lokal.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['Python', 'YOLOv8', 'TensorFlow']
    },
    {
        id: 'proj-hexapod',
        category: ['all', 'robotics'],
        title: 'Hexapod Robot with Six Legs Development',
        about: 'Pengembangan purwarupa robot berkaki enam untuk navigasi area medan ekstrem non-linear. Menggunakan perhitungan Inverse Kinematics untuk menjamin stabilitas pergerakan.',
        coverImg: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Berhasil mendemonstrasikan stabilitas jelajah pada sudut kemiringan hingga 30 derajat.',
            'Implementasi Inverse Kinematics 6-DOF untuk manuver adaptif.',
            'Konfigurasi servo controller terdistribusi pada mikrokontroler.',
            'Navigasi pada medan tidak beraturan.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1561144257-e32e8506e3b6?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['C/C++', 'PCB Design', 'STM32']
    },
    {
        id: 'proj-quadruped',
        category: ['all', 'robotics'],
        title: 'Quadruped Robot with Four Legs Development',
        about: 'Pengembangan purwarupa robot berkaki empat untuk navigasi area medan ekstrem non-linear. Menggunakan perhitungan Inverse Kinematics untuk menjamin stabilitas pergerakan.',
        coverImg: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Berhasil mendemonstrasikan stabilitas jelajah pada sudut kemiringan hingga 30 derajat.',
            'Implementasi Inverse Kinematics 6-DOF untuk manuver adaptif.',
            'Konfigurasi servo controller terdistribusi pada mikrokontroler.',
            'Navigasi pada medan tidak beraturan.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1561144257-e32e8506e3b6?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['C/C++', 'PCB Design', 'STM32']
    },
    {
        id: 'proj-iiot-factory',
        category: ['all', 'iot'],
        title: 'Edge AI-Enabled Synchronization and Protection System with IoT-Based Monitoring for STM32 Microgrid Applications',
        about: 'The demand for a reliable, efficient, and environmentally friendly electrical power system has prompted the adoption of microgrids as a solution for renewable energy integration. This research presents the design of a low-cost and robust microgrid synchronization protection system based on the STM32F411CEU6 microcontroller',
        coverImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Integrasi penuh mesin produksi ke basis data MySQL terpusat.',
            'Dashboard real-time menggunakan Node-RED untuk monitoring produksi.',
            'Penerapan Modbus TCP untuk komunikasi industri handal.',
            'Pengurangan downtime mesin melalui predictive monitoring.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['IIoT', 'Node-RED', 'Python', 'Bare-Metal']
    },
    {
        id: 'proj-iiot-factory',
        category: ['all', 'iot'],
        title: 'Feeding Fish Monitoring System',
        about: 'Sistem monitoring lantai produksi berbasis IIoT yang mengintegrasikan mesin produksi ke dashboard terpusat menggunakan Modbus TCP dan Node-RED.',
        coverImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Integrasi penuh mesin produksi ke basis data MySQL terpusat.',
            'Dashboard real-time menggunakan Node-RED untuk monitoring produksi.',
            'Penerapan Modbus TCP untuk komunikasi industri handal.',
            'Pengurangan downtime mesin melalui predictive monitoring.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['IIoT', 'Node-RED', 'Python', 'Bare-Metal']
    },
    {
        id: 'proj-iiot-factory',
        category: ['all', 'iot'],
        title: 'Sawi Smartfarm Monitoring System',
        about: 'Sistem monitoring lantai produksi berbasis IIoT yang mengintegrasikan mesin produksi ke dashboard terpusat menggunakan Modbus TCP dan Node-RED.',
        coverImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Integrasi penuh mesin produksi ke basis data MySQL terpusat.',
            'Dashboard real-time menggunakan Node-RED untuk monitoring produksi.',
            'Penerapan Modbus TCP untuk komunikasi industri handal.',
            'Pengurangan downtime mesin melalui predictive monitoring.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['IIoT', 'Node-RED', 'Python', 'Bare-Metal']
    },
    {
        id: 'proj-iiot-factory',
        category: ['all', 'iot'],
        title: 'Papaya Smartfarm Monitoring System',
        about: 'Sistem monitoring lantai produksi berbasis IIoT yang mengintegrasikan mesin produksi ke dashboard terpusat menggunakan Modbus TCP dan Node-RED.',
        coverImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Integrasi penuh mesin produksi ke basis data MySQL terpusat.',
            'Dashboard real-time menggunakan Node-RED untuk monitoring produksi.',
            'Penerapan Modbus TCP untuk komunikasi industri handal.',
            'Pengurangan downtime mesin melalui predictive monitoring.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['IIoT', 'Node-RED', 'Python', 'Bare-Metal']
    },
    {
        id: 'proj-function-checker',
        category: ['all', 'iot'],
        title: 'Audio Function Checker Module (Bare-Metal)',
        about: 'Perangkat pengujian fungsionalitas audio berbasis microchip bare-metal yang menggantikan modul testing impor dengan solusi in-house berbiaya rendah untuk lini produksi Polytron.',
        coverImg: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Cost reduction hingga 94% dibandingkan modul testing impor.',
            'Mempercepat siklus waktu pengujian audio sebesar 62%.',
            'Firmware C murni tingkat register pada ARM Cortex M4.',
            'Custom PCB multi-layer untuk pengujian komponen audio.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['STM32', 'C/C++', 'Bare-Metal', 'PCB Design']
    },
    {
        id: 'proj-function-checker',
        category: ['all', 'iot'],
        title: 'HOVITROVITRA BBIYA',
        about: 'Most industrial machines use electric motors, with three-phase induction motors being the most common due to their simple operation and maintenance. However, they require regular monitoring to prevent faults such as bearing damage, misalignment, broken rotor bars, and unbalance, which can be identified through vibration analysis. Using the ISO-10816-1 vibration standard, sensor data is processed into sinusoidal waveforms and sent wirelessly to a smartphone. The application displays the waveforms, provides fault diagnosis suggestions, and monitors the MPU6050 module’s temperature to avoid errors from overheating.',
        coverImg: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Cost reduction hingga 94% dibandingkan modul testing impor.',
            'Mempercepat siklus waktu pengujian audio sebesar 62%.',
            'Firmware C murni tingkat register pada ARM Cortex M4.',
            'Custom PCB multi-layer untuk pengujian komponen audio.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['STM32', 'C/C++', 'Bare-Metal', 'PCB Design']
    }
];

// ================= SKILL ICONS DATA =================
const SkillIconsData = [
    { key: 'C/C++',      icon: 'fas fa-code',          label: 'C/C++' },
    { key: 'Python',     icon: 'fab fa-python',        label: 'Python' },
    { key: 'STM32',      icon: 'fas fa-microchip',     label: 'STM32' },
    { key: 'Bare-Metal', icon: 'fas fa-terminal',      label: 'Bare-Metal' },
    { key: 'TensorFlow', icon: 'fas fa-brain',         label: 'TensorFlow' },
    { key: 'YOLO',       icon: 'fas fa-eye',           label: 'YOLO' },
    { key: 'IIoT',       icon: 'fas fa-industry',      label: 'IIoT' },
    { key: 'PCB Design', icon: 'fas fa-layer-group',   label: 'PCB Design' },
    { key: 'Node-RED',   icon: 'fas fa-network-wired', label: 'Node-RED' },
    { key: 'Vue.js',     icon: 'fab fa-vuejs',         label: 'Vue.js' },
    { key: '3D Modeling', icon: 'fas fa-cube',         label: '3D Modeling' },
    { key: 'Robotics',   icon: 'fas fa-robot',         label: 'Robotics' },
    { key: 'Matlab',     icon: 'fas fa-calculator',    label: 'Matlab' },
    { key: 'ML',         icon: 'fas fa-robot',         label: 'Machine Learning' }
];

// ================= PROJECT CATEGORIES (Hard Skills & Soft Skills) =================
const ProjectCategoriesHard = [
    { id: 'all',      label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'ml',       label: 'Machine Learning' },
    { id: 'iot',      label: 'IoT & Embedded' },
    { id: 'robotics', label: 'Robotics' }
];

const ProjectCategoriesSoft = [
    { id: 'soft-all',       label: 'All' },
    { id: 'public-speaking', label: 'Public Speaking' },
    { id: 'leadership',      label: 'Leadership' },
    { id: 'mentoring',       label: 'Mentoring' }
];

// Legacy alias (kept for backward compat)
const ProjectCategories = ProjectCategoriesHard;

// ================= SKILL TOOLTIPS DATABASE =================
const SkillTooltipsDatabase = {
    'C/C++':        { name: 'C/C++ Language',           level: 'Expertise / Pro',        stars: '★★★★★', icon: 'fas fa-code',          desc: 'Digunakan penuh pada arsitektur bare-metal STM32 dan modul firmware cerdas.' },
    'Python':       { name: 'Python Engineering',       level: 'Advanced / Mentoring',   stars: '★★★★★', icon: 'fab fa-python',        desc: 'Pemrosesan Custom AI Object Detection, data engineering, dan computer vision script.' },
    'STM32':        { name: 'ARM Cortex M4 STM32',      level: 'Expertise',              stars: '★★★★★', icon: 'fas fa-microchip',     desc: 'Pengembangan bare-metal register-level programming, DSP, dan sistem sinkronisasi microgrid.' },
    'Bare-Metal':   { name: 'Bare-Metal Architecture',  level: 'Expertise',              stars: '★★★★★', icon: 'fas fa-terminal',      desc: 'Pemrograman mikrokontroler tanpa OS untuk mempercepat waktu eksekusi & reduksi biaya.' },
    'TensorFlow':   { name: 'TensorFlow / AI',          level: 'Intermediate',           stars: '★★★★☆', icon: 'fas fa-brain',         desc: 'Melatih model estimasi pose dan klasifikasi daun herbal terapan.' },
    'YOLOv8':       { name: 'YOLO Framework v8/v11',    level: 'Advanced',               stars: '★★★★★', icon: 'fas fa-eye',           desc: 'Penerapan real-time vision system untuk deteksi dini penyakit tanaman.' },
    'IIoT':         { name: 'Industrial IoT Systems',   level: 'Expertise',              stars: '★★★★★', icon: 'fas fa-industry',      desc: 'Integrasi sistem lantai produksi manufaktur menggunakan Modbus TCP, Node-RED, dan MySQL.' },
    'PCB Design':   { name: 'PCB Architectural Layout', level: 'Advanced',               stars: '★★★★☆', icon: 'fas fa-layer-group',   desc: 'Desain skematik multi-layer khusus untuk JIG Function audio checker modular.' },
    'Node-RED':     { name: 'Node-RED Automation',      level: 'Advanced',               stars: '★★★★☆', icon: 'fas fa-network-wired', desc: 'Dashboard monitoring visual data produksi dan alur logika otomatisasi.' },
    'Vue.js':       { name: 'Vue.js Analytics',         level: 'Intermediate',           stars: '★★★☆☆', icon: 'fab fa-vuejs',         desc: 'Penyusunan antarmuka monitoring web terintegrasi platform data.' },
    '3D Modeling':  { name: '3D Modeling & CAD',        level: 'Intermediate',           stars: '★★★☆☆', icon: 'fas fa-cube',          desc: 'Pemodelan 3D untuk casing alat bantu terapi stroke dan komponen robotik.' },
    'Robotics':     { name: 'Robotics Engineering',      level: 'Intermediate',           stars: '★★★☆☆', icon: 'fas fa-robot',         desc: 'Pengembangan robotik berkaki enam (hexapod) untuk navigasi medan ekstrem.' },
    'Matlab':       { name: 'Matlab Simulation',        level: 'Intermediate',           stars: '★★★☆☆', icon: 'fas fa-calculator',    desc: 'Simulasi sistem kontrol dan pemodelan matematis untuk optimasi proses industri.' },
    'ML':           { name: 'Machine Learning',         level: 'Intermediate',           stars: '★★★☆☆', icon: 'fas fa-robot',         desc: 'Implementasi algoritma pembelajaran mesin untuk klasifikasi dan prediksi data.' }
};

// ================= AWARDS & CERTIFICATIONS DATABASES =================
const AwardsDatabase = [
    { id: 'aw-sic',    title: '1st Best Group National Category',     org: 'Samsung Innovation Campus Batch 7', date: 'Februari 2026', desc: 'Penghargaan tertinggi tingkat nasional atas keunggulan inovasi AI & IoT untuk kesehatan pada sistem alat bantu terapi stroke PhysioTrack.' },
    { id: 'aw-mentor', title: 'Juara 3 Lomba Kreativitas & Inovasi', org: 'Bappeda Kabupaten Semarang',        date: '2023',          desc: 'Bertindak sebagai Freelance Robotic Mentor bagi siswa SMK Telekomunikasi Tunas Harapan dalam penyusunan karya tulis dan alat robotik.' }
];

const CertificationsDatabase = [
    { id: 'c-dsp',      title: 'DSP From Ground Up™ on ARM Processor',               org: 'Udemy Embedded Credential', date: '2025', skillType: 'hard', category: ['all-hard', 'embedded'], coverImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', desc: 'Spesialisasi algoritma Digital Signal Processing langsung pada core arsitektur prosesor ARM.', achievements: ['Implementasi FIR & IIR filter pada hardware ARM.', 'Optimasi algoritma DSP menggunakan CMSIS-DSP library.', 'Pemahaman mendalam tentang sampling theorem dan aliasing.', 'Pengembangan audio processing pipeline real-time.'], techs: ['STM32', 'C/C++', 'Bare-Metal'] },
    { id: 'c-metal-adv',title: 'Advanced Embedded Systems Bare Metal Programming',   org: 'Ground Up™ Course',         date: '2024', skillType: 'hard', category: ['all-hard', 'embedded'], coverImg: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=600&q=80', desc: 'Pendalaman penulisan driver periferal interupsi, DMA, dan manajemen memori tanpa bantuan RTOS.', achievements: ['Pengembangan driver periferal dari scratch tanpa HAL.', 'Manajemen DMA untuk transfer data berkecepatan tinggi.', 'Implementasi interrupt handler yang efisien.', 'Optimasi penggunaan memori embedded system.'], techs: ['STM32', 'C/C++', 'Bare-Metal'] },
    { id: 'c-yolo',     title: 'YOLOv8 & YOLO11: Custom Object Detection & Web Apps',org: 'Vision Learning Academy',   date: '2025', skillType: 'hard', category: ['all-hard', 'ml'],       coverImg: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80', desc: 'Sertifikasi implementasi computer vision modern dan deployment web service AI.', achievements: ['Training model YOLO custom dari dataset pribadi.', 'Deployment model ke web application berbasis Flask.', 'Optimasi inference speed untuk real-time detection.', 'Evaluasi model menggunakan mAP dan precision-recall.'], techs: ['Python', 'YOLOv8', 'TensorFlow'] }
];

// ================= CERTIFICATIONS SOFT SKILLS =================
const CertificationsDatabaseSoft = [
    { id: 'cs-sic-speaker', title: 'Public Speaking – Samsung Innovation Campus',     org: 'Samsung Innovation Campus', date: '2026', skillType: 'soft', category: ['soft-all', 'public-speaking'], coverImg: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', desc: 'Pengalaman presentasi hasil inovasi di hadapan juri nasional tingkat universitas.', achievements: ['Mempresentasikan proyek PhysioTrack di depan panel juri nasional.', 'Menyampaikan technical pitch yang jelas dan persuasif.', 'Menjawab sesi QA dari para ahli industri.', 'Dinobatkan sebagai 1st Best Group.'], techs: ['Public Speaking', 'Technical Presentation'] },
    { id: 'cs-mentor',     title: 'Robotic Mentoring – SMK Telekomunikasi',           org: 'Bappeda Semarang',          date: '2023', skillType: 'soft', category: ['soft-all', 'mentoring'],       coverImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', desc: 'Membimbing siswa SMK dalam penyusunan karya tulis ilmiah dan pembuatan alat robotik.', achievements: ['Membimbing tim siswa SMK hingga meraih Juara 3 Bappeda.', 'Merancang kurikulum pelatihan robotika dasar.', 'Mengajarkan konsep elektronika dan pemrograman.', 'Membangun kepercayaan diri peserta dalam kompetisi.'], techs: ['Leadership', 'Teaching', 'Mentoring'] },
    { id: 'cs-leadership', title: 'Leadership in Engineering Team',                   org: 'UKSW Robotics Lab',         date: '2024', skillType: 'soft', category: ['soft-all', 'leadership'],      coverImg: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80', desc: 'Memimpin tim pengembangan robot hexapod di laboratorium robotika UKSW.', achievements: ['Koordinasi tim lintas keahlian (firmware, mekanik, kontrol).', 'Manajemen timeline proyek robotika.', 'Problem solving kolaboratif dalam situasi teknis kritis.', 'Dokumentasi dan knowledge transfer antar anggota tim.'], techs: ['Leadership', 'Project Management', 'Teamwork'] }
];

// ================= SOFT SKILL PROJECTS =================
const SoftProjectsDatabase = [
    {
        id: 'sproj-sic-presentation',
        category: ['soft-all', 'public-speaking'],
        title: 'National Pitch – Samsung Innovation Campus Batch 7',
        about: 'Membawakan presentasi teknis PhysioTrack di hadapan panel juri nasional Samsung Innovation Campus. Menyampaikan konsep AI & IoT secara persuasif kepada audiens non-teknis dan teknis sekaligus.',
        coverImg: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Presentasi di depan panel juri nasional tingkat universitas.',
            'Memenangkan 1st Best Group dari seluruh universitas peserta.',
            'Mampu menyampaikan pitch teknis yang mudah dipahami semua kalangan.',
            'Sesi QA yang dinamis dengan para ahli industri Samsung.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['Public Speaking', 'Technical Presentation', 'Storytelling']
    },
    {
        id: 'sproj-robotic-mentor',
        category: ['soft-all', 'mentoring', 'leadership'],
        title: 'Freelance Robotic Mentor – SMK Tunas Harapan',
        about: 'Membimbing siswa SMK Telekomunikasi Tunas Harapan dalam mengembangkan karya tulis ilmiah dan alat robotik untuk kompetisi Lomba Kreativitas & Inovasi Bappeda Kabupaten Semarang.',
        coverImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Membimbing tim siswa hingga meraih Juara 3 kompetisi Bappeda.',
            'Merancang kurikulum pelatihan robotika dan elektronika dasar.',
            'Mengembangkan kemampuan problem-solving mandiri peserta didik.',
            'Menyusun dokumentasi teknis dan laporan karya ilmiah.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['Mentoring', 'Teaching', 'Leadership', 'Curriculum Design']
    },
    {
        id: 'sproj-hexapod-team',
        category: ['soft-all', 'leadership'],
        title: 'Team Lead – Hexapod Robot Development',
        about: 'Memimpin tim pengembangan robot hexapod di laboratorium robotika UKSW, mengkoordinasikan divisi firmware, mekanikal, dan kontrol untuk menghasilkan prototipe navigasi medan ekstrem.',
        coverImg: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
        achievements: [
            'Koordinasi tim lintas keahlian: firmware, mekanik, dan kontrol.',
            'Manajemen timeline dan deliverable proyek robotika.',
            'Problem solving kolaboratif dalam situasi teknis kritis.',
            'Knowledge transfer dan dokumentasi menyeluruh antar anggota tim.'
        ],
        docs: [
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80'
        ],
        techs: ['Leadership', 'Project Management', 'Teamwork', 'Communication']
    }
];

// Cert categories
const CertCategoriesHard = [
    { id: 'all-hard', label: 'All Certifications' },
    { id: 'embedded', label: 'Embedded Systems' },
    { id: 'ml',       label: 'Machine Learning' }
];

const CertCategoriesSoft = [
    { id: 'soft-all',        label: 'All' },
    { id: 'public-speaking', label: 'Public Speaking' },
    { id: 'mentoring',       label: 'Mentoring' },
    { id: 'leadership',      label: 'Leadership' }
];
const SkillLevelsData = {
    A_Electrical: 4.6,
    B_Mechanical: 3.5,
    C_Firmware: 4.9,
    D_Software: 4.2,
    E_Systems: 4.8
};

// ================= SPA TAB CONTROLLER =================
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) target.classList.add('active-tab');
    const btn = document.getElementById('nav-' + tabId);
    if (btn) btn.classList.add('active');

    if (tabId === 'experience') {
        renderExperienceTab('all');
        renderSkillsIconGrid();
    } else if (tabId === 'projects') {
        projectsSkillMode = 'hard';
        renderProjectsSidebar('hard');
    } else if (tabId === 'awards') {
        renderAwardsLayout();
    } else if (tabId === 'certification') {
        certSkillMode = 'hard';
        renderCertificationsLayout('hard');
    }
}

// ================= THEME TOGGLE =================
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        themeToggleBtn.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// ================= RADAR CHART =================
function drawRadarChart() {
    const c = 50, maxR = 40, maxV = 5;
    const rA = (SkillLevelsData.A_Electrical / maxV) * maxR;
    const rB = (SkillLevelsData.B_Mechanical / maxV) * maxR;
    const rC = (SkillLevelsData.C_Firmware / maxV) * maxR;
    const rD = (SkillLevelsData.D_Software / maxV) * maxR;
    const rE = (SkillLevelsData.E_Systems / maxV) * maxR;
    const pts = [
        `${c},${c - rA}`,
        `${c + rB * Math.cos(18 * Math.PI / 180)},${c - rB * Math.sin(18 * Math.PI / 180)}`,
        `${c + rC * Math.cos(54 * Math.PI / 180)},${c + rC * Math.sin(54 * Math.PI / 180)}`,
        `${c - rD * Math.cos(54 * Math.PI / 180)},${c + rD * Math.sin(54 * Math.PI / 180)}`,
        `${c - rE * Math.cos(18 * Math.PI / 180)},${c - rE * Math.sin(18 * Math.PI / 180)}`
    ].join(' ');
    const poly = document.getElementById('skill-polygon');
    if (poly) poly.setAttribute('points', pts);
}

function showTimelineSkills(id) { console.log('Timeline hover: ' + id); }

// ================= EXPERIENCE TAB =================
function renderExperienceTab(filterType) {
    const list = document.getElementById('exp-cards-list');
    if (!list) return;

    ['fulltime', 'parttime', 'internship'].forEach(t => {
        const el = document.getElementById('count-' + t);
        if (el) el.textContent = ExperienceDatabase.filter(e => e.type === t).length;
    });

    const data = filterType === 'all' ? ExperienceDatabase : ExperienceDatabase.filter(e => e.type === filterType);
    list.innerHTML = '';

    data.forEach(exp => {
        const badgeClass = { fulltime: 'badge-fulltime', parttime: 'badge-parttime', internship: 'badge-internship' }[exp.type];
        const badgeLabel = { fulltime: 'Full-time', parttime: 'Part-time', internship: 'Internship' }[exp.type];
        const card = document.createElement('div');
        card.className = 'exp-card';
        card.innerHTML = `
            <div class="exp-card-header">
                <div class="exp-logo-box">
                    <img src="${exp.logo}" alt="${exp.company}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-building\\' style=\\'font-size:1.4rem;color:var(--text-muted)\\'></i>'">
                </div>
                <div class="exp-card-info">
                    <div class="exp-card-title-row">
                        <span class="exp-position-name" onclick="openExpModal('${exp.id}')">${exp.position}</span>
                        <div class="exp-badge-row">
                            <span class="exp-type-badge ${badgeClass}"><i class="fas fa-briefcase"></i> ${badgeLabel}</span>
                            <button class="exp-details-btn" onclick="openExpModal('${exp.id}')"><i class="fas fa-eye"></i> Details</button>
                        </div>
                    </div>
                    <div class="exp-meta-line">
                        <span><i class="fas fa-building"></i> <strong>${exp.company}</strong></span>
                        <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
                        <span><i class="far fa-calendar-alt"></i> ${exp.date}</span>
                    </div>
                </div>
            </div>
            <p class="exp-card-tagline">${exp.tagline}</p>
        `;
        list.appendChild(card);
    });
}

function filterExperience(type, btn) {
    document.querySelectorAll('.exp-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderExperienceTab(type);
}

function openExpModal(expId) {
    const exp = ExperienceDatabase.find(e => e.id === expId);
    if (!exp) return;
    const badgeClass = { fulltime: 'badge-fulltime', parttime: 'badge-parttime', internship: 'badge-internship' }[exp.type];
    const badgeLabel = { fulltime: 'Full-time', parttime: 'Part-time', internship: 'Internship' }[exp.type];
    const didHTML  = exp.whatIDid.map(d => `<li>${d}</li>`).join('');
    const impHTML  = exp.impact.map(i => `<li>${i}</li>`).join('');
    const docsHTML = exp.docs.map(d => `<img class="exp-modal-doc-img" src="${d}" alt="doc">`).join('');
    const techHTML = exp.techs.map(t => `<span class="exp-modal-tech-pill">${t}</span>`).join('');

    document.getElementById('modal-dynamic-body-injector').innerHTML = `
        <div class="exp-modal-top">
            <div class="exp-modal-logo">
                <img src="${exp.logo}" alt="${exp.company}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-building\\' style=\\'font-size:1.6rem;color:var(--text-muted);padding:14px\\'></i>'">
            </div>
            <div class="exp-modal-title-block">
                <span class="exp-type-badge ${badgeClass}" style="margin-bottom:8px;display:inline-flex;"><i class="fas fa-briefcase"></i> ${badgeLabel}</span>
                <h2>${exp.position}</h2>
                <div class="exp-modal-meta">
                    <span><i class="fas fa-building"></i> <strong>${exp.company}</strong></span>
                    <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
                    <span><i class="far fa-calendar-alt"></i> ${exp.date}</span>
                </div>
            </div>
        </div>
        <p class="modal-section-label" style="margin-top:20px;">Context</p>
        <p style="font-size:0.92rem;line-height:1.7;margin-bottom:20px;color:var(--text-muted);">${exp.context}</p>
        <div class="exp-modal-columns">
            <div class="exp-modal-col"><h5>What I Did</h5><ul>${didHTML}</ul></div>
            <div class="exp-modal-col impact"><h5>Impact</h5><ul>${impHTML}</ul></div>
        </div>
        <p class="modal-section-label">Documentation</p>
        <div class="exp-modal-docs" style="margin-bottom:20px;">${docsHTML}</div>
        <p class="modal-section-label">Technology Used</p>
        <div class="exp-modal-tech-pills">${techHTML}</div>
    `;
    document.getElementById('global-detail-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ================= SKILLS ICON GRID =================
function renderSkillsIconGrid() {
    const grid = document.getElementById('skills-icon-grid');
    if (!grid) return;
    grid.innerHTML = '';
    SkillIconsData.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-icon-item';
        item.innerHTML = `<i class="${skill.icon}"></i><span>${skill.label}</span>`;
        item.addEventListener('mouseenter', e => triggerSkillTooltip(e, skill.key));
        item.addEventListener('mouseleave', hideSkillTooltip);
        grid.appendChild(item);
    });
}

// ================= PROJECTS TAB =================
let projectsSkillMode = 'hard';

function renderProjectsSidebar(mode) {
    if (mode) projectsSkillMode = mode;
    const sidebar = document.getElementById('projects-sidebar-inner');
    if (!sidebar) return;

    const cats      = projectsSkillMode === 'hard' ? ProjectCategoriesHard : ProjectCategoriesSoft;
    const db        = projectsSkillMode === 'hard' ? ProjectsDatabase       : SoftProjectsDatabase;
    const defaultId = projectsSkillMode === 'hard' ? 'all'                  : 'soft-all';

    sidebar.innerHTML = `
        <div class="proj-skill-toggle">
            <button class="proj-skill-btn ${projectsSkillMode === 'hard' ? 'active' : ''}"
                    onclick="renderProjectsSidebar('hard')">
                <i class="fas fa-microchip"></i> Hard Skills
            </button>
            <button class="proj-skill-btn ${projectsSkillMode === 'soft' ? 'active' : ''}"
                    onclick="renderProjectsSidebar('soft')">
                <i class="fas fa-users"></i> Soft Skills
            </button>
        </div>
        <div class="proj-sidebar-header">Browse by Category</div>
    `;

    cats.forEach(cat => {
        const count = (cat.id === 'all' || cat.id === 'soft-all')
            ? db.length
            : db.filter(p => p.category.includes(cat.id)).length;
        const btn = document.createElement('button');
        btn.className = 'proj-cat-btn' + (cat.id === defaultId ? ' active' : '');
        btn.innerHTML = `${cat.label} <span class="proj-cat-count">${count}</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#projects-sidebar-inner .proj-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjectsGrid(cat.id);
        });
        sidebar.appendChild(btn);
    });

    renderProjectsGrid(defaultId);
}

function renderProjectsGrid(categoryId) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const db    = projectsSkillMode === 'hard' ? ProjectsDatabase : SoftProjectsDatabase;
    const isAll = categoryId === 'all' || categoryId === 'soft-all';
    const data  = isAll ? db : db.filter(p => p.category.includes(categoryId));
    grid.innerHTML = '';
    if (data.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted);padding:20px;grid-column:1/-1;">Belum ada proyek untuk kategori ini.</p>';
        return;
    }
    data.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'proj-card';
        card.innerHTML = `
            <img class="proj-card-img" src="${proj.coverImg}" alt="${proj.title}" onerror="this.style.background='var(--border-color)'">
            <div class="proj-card-body">
                <div class="proj-card-name">${proj.title}</div>
                <div class="proj-card-about">${proj.about.substring(0, 100)}...</div>
            </div>
        `;
        card.addEventListener('click', () => openProjectModal(proj.id));
        grid.appendChild(card);
    });
}

function openProjectModal(projId) {
    const proj = [...ProjectsDatabase, ...SoftProjectsDatabase].find(p => p.id === projId);
    if (!proj) return;
    const achHTML  = proj.achievements.map(a => `<div class="proj-achievement-item">${a}</div>`).join('');
    const docsHTML = proj.docs.map(d => `<img class="proj-modal-doc-img" src="${d}" alt="doc">`).join('');
    const techHTML = proj.techs.map(t => {
        const sk = SkillTooltipsDatabase[t] || {};
        return `<span class="proj-modal-tech-item"><i class="${sk.icon || 'fas fa-star'}"></i> ${t}</span>`;
    }).join('');
    document.getElementById('modal-dynamic-body-injector').innerHTML = `
        <img class="proj-modal-img" src="${proj.coverImg}" alt="${proj.title}">
        <h2 class="proj-modal-title">${proj.title}</h2>
        <p class="modal-section-label">About</p>
        <div class="proj-modal-about">${proj.about}</div>
        <p class="modal-section-label">Key Achievements</p>
        <div class="proj-modal-achievements-grid">${achHTML}</div>
        <div class="proj-modal-doc-section">
            <p class="modal-section-label">Documentation</p>
            <div class="proj-modal-doc-grid">${docsHTML}</div>
        </div>
        <div class="proj-modal-tech-section">
            <p class="modal-section-label">Skills Used</p>
            <div class="proj-modal-tech-grid">${techHTML}</div>
        </div>
    `;
    document.getElementById('global-detail-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ================= AWARDS & CERTIFICATIONS =================
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
                <div class="detail-main-header"><h3>${aw.title}</h3><p style="color:var(--text-muted)">${aw.org} | ${aw.date}</p></div>
                <div class="detail-body-section"><h5>Deskripsi Pencapaian</h5><p>${aw.desc}</p></div>`;
        });
        sidebar.appendChild(div);
    });
}

// ================= CERTIFICATIONS – layout sama persis dengan Projects =================
let certSkillMode = 'hard';

function renderCertificationsLayout(mode) {
    if (mode) certSkillMode = mode;
    const section = document.getElementById('certification');
    if (!section) return;
    section.innerHTML = `
        <h2 class="section-title">Professional <span class="highlight">Certifications</span></h2>
        <p class="chart-desc">Verified credentials across embedded systems, AI, and personal development.</p>
        <div class="projects-layout">
            <div class="projects-sidebar">
                <div class="projects-sidebar-inner" id="cert-sidebar-inner"></div>
            </div>
            <div class="projects-grid-area">
                <div class="projects-grid" id="cert-grid"></div>
            </div>
        </div>
    `;
    _buildCertSidebar();
}

function _buildCertSidebar() {
    const sidebar = document.getElementById('cert-sidebar-inner');
    if (!sidebar) return;
    const cats      = certSkillMode === 'hard' ? CertCategoriesHard    : CertCategoriesSoft;
    const db        = certSkillMode === 'hard' ? CertificationsDatabase : CertificationsDatabaseSoft;
    const defaultId = certSkillMode === 'hard' ? 'all-hard'             : 'soft-all';

    sidebar.innerHTML = `
        <div class="proj-skill-toggle">
            <button class="proj-skill-btn ${certSkillMode === 'hard' ? 'active' : ''}"
                    onclick="renderCertificationsLayout('hard')">
                <i class="fas fa-microchip"></i> Hard Skills
            </button>
            <button class="proj-skill-btn ${certSkillMode === 'soft' ? 'active' : ''}"
                    onclick="renderCertificationsLayout('soft')">
                <i class="fas fa-users"></i> Soft Skills
            </button>
        </div>
        <div class="proj-sidebar-header">Browse by Category</div>
    `;

    cats.forEach(cat => {
        const count = (cat.id === 'all-hard' || cat.id === 'soft-all')
            ? db.length
            : db.filter(c => c.category.includes(cat.id)).length;
        const btn = document.createElement('button');
        btn.className = 'proj-cat-btn' + (cat.id === defaultId ? ' active' : '');
        btn.innerHTML = `${cat.label} <span class="proj-cat-count">${count}</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#cert-sidebar-inner .proj-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            _renderCertGrid(cat.id);
        });
        sidebar.appendChild(btn);
    });

    _renderCertGrid(defaultId);
}

function _renderCertGrid(categoryId) {
    const grid = document.getElementById('cert-grid');
    if (!grid) return;
    const db    = certSkillMode === 'hard' ? CertificationsDatabase : CertificationsDatabaseSoft;
    const isAll = categoryId === 'all-hard' || categoryId === 'soft-all';
    const data  = isAll ? db : db.filter(c => c.category.includes(categoryId));
    grid.innerHTML = '';
    if (data.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted);padding:20px;grid-column:1/-1;">Belum ada sertifikasi untuk kategori ini.</p>';
        return;
    }
    data.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'proj-card';
        card.innerHTML = `
            <img class="proj-card-img" src="${cert.coverImg}" alt="${cert.title}" onerror="this.style.background='var(--border-color)'">
            <div class="proj-card-body">
                <div class="proj-card-name">${cert.title}</div>
                <div class="proj-card-about">${cert.org} &bull; ${cert.date}</div>
            </div>
        `;
        card.addEventListener('click', () => openCertModal(cert.id));
        grid.appendChild(card);
    });
}

function openCertModal(certId) {
    const cert = [...CertificationsDatabase, ...CertificationsDatabaseSoft].find(c => c.id === certId);
    if (!cert) return;
    const achHTML  = cert.achievements.map(a => `<div class="proj-achievement-item">${a}</div>`).join('');
    const techHTML = cert.techs.map(t => {
        const sk = SkillTooltipsDatabase[t] || {};
        return `<span class="proj-modal-tech-item"><i class="${sk.icon || 'fas fa-certificate'}"></i> ${t}</span>`;
    }).join('');
    document.getElementById('modal-dynamic-body-injector').innerHTML = `
        <img class="proj-modal-img" src="${cert.coverImg}" alt="${cert.title}" onerror="this.style.background='var(--border-color)'">
        <h2 class="proj-modal-title">${cert.title}</h2>
        <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:20px;">
            <i class="fas fa-building"></i> ${cert.org} &nbsp;&bull;&nbsp;
            <i class="far fa-calendar-alt"></i> ${cert.date}
        </p>
        <p class="modal-section-label">Description</p>
        <div class="proj-modal-about">${cert.desc}</div>
        <p class="modal-section-label">Key Competencies</p>
        <div class="proj-modal-achievements-grid">${achHTML}</div>
        <div class="proj-modal-tech-section">
            <p class="modal-section-label">Skills Covered</p>
            <div class="proj-modal-tech-grid">${techHTML}</div>
        </div>
    `;
    document.getElementById('global-detail-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ================= MODAL CONTROLS =================
function hideActiveModal() {
    document.getElementById('global-detail-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closePopupModal(event) {
    if (event.target.classList.contains('modal-backdrop-blur')) hideActiveModal();
}

// ================= SKILL TOOLTIP =================
const tooltipBox = document.getElementById('skill-hover-tooltip');

function triggerSkillTooltip(event, techKey) {
    const d = SkillTooltipsDatabase[techKey] || { name: techKey, level: 'Competent', stars: '★★★★☆', icon: 'fas fa-cog', desc: 'Industrial standard engineering application.' };
    document.getElementById('tt-icon').innerHTML  = `<i class="${d.icon}"></i>`;
    document.getElementById('tt-name').innerText  = d.name;
    document.getElementById('tt-level').innerText = d.level;
    document.getElementById('tt-stars').innerText = d.stars;
    document.getElementById('tt-desc').innerText  = d.desc;
    tooltipBox.style.display = 'block';
    tooltipBox.style.opacity = '1';
    moveTooltip(event);
}

function moveTooltip(event) {
    tooltipBox.style.left = (event.clientX + 15) + 'px';
    tooltipBox.style.top  = (event.clientY + 15) + 'px';
}

function hideSkillTooltip() {
    tooltipBox.style.display = 'none';
    tooltipBox.style.opacity = '0';
}

// ================= INIT =================
window.addEventListener('DOMContentLoaded', () => {
    drawRadarChart();
    renderExperienceTab('all');
    renderSkillsIconGrid();
    renderProjectsSidebar('hard');
    renderAwardsLayout();
    renderCertificationsLayout('hard');
});

document.addEventListener('mousemove', event => {
    if (tooltipBox && tooltipBox.style.display === 'block') moveTooltip(event);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') hideActiveModal();
});

document.addEventListener('error', e => {
    if (e.target.tagName.toLowerCase() === 'img' && !e.target.src.includes('unsplash')) {
        e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80';
    }
}, true);
