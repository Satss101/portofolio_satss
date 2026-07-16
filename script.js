// ================= 1. KONTROL TINGKAT SKILL DIAGRAM RADAR =================
// Mengubah bentuk koordinat poligon merah secara dinamis skala (1.0 s/d 5.0)
const skillLevels = {
    A_Electrical: 4.5,
    B_Mechanical: 3.5,
    C_Firmware: 4.9,
    D_Software: 4.2,
    E_Systems: 4.7
};

function calculateRadarPoints() {
    const center = 50;
    const maxRadius = 40;
    const maxScale = 5;

    const rA = (skillLevels.A_Electrical / maxScale) * maxRadius;
    const rB = (skillLevels.B_Mechanical / maxScale) * maxRadius;
    const rC = (skillLevels.C_Firmware / maxScale) * maxRadius;
    const rD = (skillLevels.D_Software / maxScale) * maxRadius;
    const rE = (skillLevels.E_Systems / maxScale) * maxRadius;

    const pA = `${center},${center - rA}`;
    const pB = `${center + rB * Math.cos(18 * Math.PI / 180)},${center - rB * Math.sin(18 * Math.PI / 180)}`;
    const pC = `${center + rC * Math.cos(54 * Math.PI / 180)},${center + rC * Math.sin(54 * Math.PI / 180)}`;
    const pD = `${center - rD * Math.cos(54 * Math.PI / 180)},${center + rD * Math.sin(54 * Math.PI / 180)}`;
    const pE = `${center - rE * Math.cos(18 * Math.PI / 180)},${center - rE * Math.sin(18 * Math.PI / 180)}`;

    const polygon = document.getElementById("skill-polygon");
    if(polygon) polygon.setAttribute("points", `${pA} ${pB} ${pC} ${pD} ${pE}`);
}

// ================= 2. SISTEM PERGANTIAN TAB (SPA) =================
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active-tab'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active-tab');
    
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn'))
        .find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) activeBtn.classList.add('active');
}

// ================= 3. FILTER PORTFOLIO EXPERIENCE =================
function filterExperience(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.exp-card').forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' ');
        if (category === 'all' || cardCategories.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ================= 4. SWITCH TEMA DARK / LIGHT =================
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// ================= 5. DATABASE DENGAN HOVER EXPERTISE UNTUK MODAL POP-UP =================
const experiencesDatabase = {
    'physiotrack': {
        title: "PhysioTrack: Smart Assistance for Stroke Therapy",
        subtitle: "Samsung Innovation Campus Indonesia Batch 7 (1st Best Group)",
        description: "Sistem monitoring kesehatan digital terintegrasi untuk membantu pemulihan pasien pasca stroke secara berkala menggunakan kecerdasan buatan terapan.",
        tools: [
            { name: "Python", exp: "Expertise: Pose Estimation AI Model" },
            { name: "TensorFlow", exp: "Expertise: Neural Network Training" },
            { name: "ESP32", exp: "Expertise: Sensor Data Streaming via Wi-Fi" }
        ]
    },
    'modbus-monitor': {
        title: "Biomedical Multi-Sensor Monitoring Platform",
        subtitle: "Research Project (2026)",
        description: "Perangkat pemantau parameter medis esensial (Heart Rate, Kelembaban tubuh, SpO2, dan GSR) secara tersinkronisasi.",
        tools: [
            { name: "Modbus TCP", exp: "Expertise: Industrial Networking Protocol" },
            { name: "MySQL", exp: "Expertise: Database Management & Querying" },
            { name: "Telegram API", exp: "Expertise: Automated Emergency Alert Bot" }
        ]
    },
    'microgrid-stm32': {
        title: "Synchronization and Protection System for Microgrid",
        subtitle: "STM32 Control Engineering (2025)",
        description: "Merancang sistem proteksi jaringan mikro cerdas terpadu menggunakan komputasi tangguh ARM Cortex-M4 untuk menjaga stabilitas tegangan sistem.",
        tools: [
            { name: "STM32", exp: "Expertise: Bare-Metal Control Systems" },
            { name: "Cortex M4", exp: "Expertise: Register-Level Optimization" },
            { name: "PCB Design", exp: "Expertise: Layer Isolation & Protection" }
        ]
    },
    'emergency-button': {
        title: "Emergency Wireless Button for Hospital Rooms",
        subtitle: "Product Development (2025)",
        description: "Membuat modul tombol darurat nirkabel handal untuk kamar inap pasien rumah sakit yang terkoneksi ke pusat perawat.",
        tools: [
            { name: "STM32", exp: "Expertise: Low-Power Peripheral Modes" },
            { name: "Custom Circuit", exp: "Expertise: Hardware Power Management" }
        ]
    },
    'yolo-ginger': {
        title: "Disease Detection on Ginger Emprit Leaves",
        subtitle: "Bachelor Thesis Project (2025)",
        description: "Penelitian akhir untuk mendeteksi dini klasifikasi infeksi penyakit daun jahe menggunakan visualisasi komputer canggih.",
        tools: [
            { name: "YOLOv8", exp: "Expertise: Custom Dataset Fine-Tuning" },
            { name: "YOLO11", exp: "Expertise: Real-Time Speed Benchmark" },
            { name: "Computer Vision", exp: "Expertise: Image Preprocessing Pipeline" }
        ]
    },
    'hexapod-kri': {
        title: "Rescue Hexapod Robot Project",
        subtitle: "Robotic Research Center - Top 16 KRI National",
        description: "Mengembangkan algoritma kinematika pergerakan robot berkaki enam agar mampu melewati rintangan medan secara otonom.",
        tools: [
            { name: "Inverse Kinematics", exp: "Expertise: 3-DOF Geometric Equations" },
            { name: "Arduino/C++", exp: "Expertise: Direct Actuator Signal Array" },
            { name: "Sensors Integration", exp: "Expertise: Real-Time Inertial Measurement" }
        ]
    }
};

function openModal(id) {
    const data = experiencesDatabase[id];
    if (!data) return;

    const modal = document.getElementById('details-modal');
    const contentContainer = document.getElementById('modal-body-content');

    let toolsHTML = '';
    data.tools.forEach(tool => {
        // data-expertise diisi teks dinamis untuk ditangkap CSS tooltip (.tool-icon:hover::after)
        toolsHTML += `<span class="tool-icon" data-expertise="${tool.exp}">${tool.name}</span>`;
    });

    contentContainer.innerHTML = `
        <h2 style="margin-bottom: 5px; color: var(--text-color);">${data.title}</h2>
        <h4 style="color: var(--primary-red); margin-bottom: 12px; font-weight: 500;">${data.subtitle}</h4>
        <p style="margin: 15px 0; line-height: 1.6; color: var(--text-color); opacity: 0.9;">${data.description}</p>
        
        <p style="font-weight: 600; margin-top: 15px; margin-bottom: 8px;">Aplikasi / Tools Usages (Dekatkan kursor untuk detail):</p>
        <div class="tech-tools">
            ${toolsHTML}
        </div>
    `;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target == modal) modal.style.display = 'none';
};

window.onload = () => {
    calculateRadarPoints();
};
