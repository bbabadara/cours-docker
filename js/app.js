import { getSections, getSectionByIndex, getCategories } from './content.js';

// ==========================================
// STATE
// ==========================================
let currentSection = 0;
const totalSections = getSections().length;

// ==========================================
// NAVIGATION
// ==========================================
function init() {
    currentSection = parseInt(localStorage.getItem('docker-course-section') || '0');
    if (currentSection >= totalSections) currentSection = 0;

    renderSidebar();
    renderContent();
    updateUI();

    document.getElementById('btn-prev').addEventListener('click', prevSection);
    document.getElementById('btn-next').addEventListener('click', nextSection);
    document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
    document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);
    document.getElementById('scroll-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('keydown', handleKeyboard);
    window.addEventListener('scroll', handleScroll);
}

function goToSection(index) {
    if (index < 0 || index >= totalSections) return;
    currentSection = index;
    localStorage.setItem('docker-course-section', index);

    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`section-${index}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', parseInt(item.dataset.index) === index);
    });

    updateUI();
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextSection() {
    if (currentSection < totalSections - 1) goToSection(currentSection + 1);
}

function prevSection() {
    if (currentSection > 0) goToSection(currentSection - 1);
}

// ==========================================
// RENDERING
// ==========================================
function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    const categories = getCategories();
    let html = '';

    for (const [category, secs] of Object.entries(categories)) {
        html += `<div class="nav-section-title">${category}</div>`;
        secs.forEach(section => {
            const index = getSections().indexOf(section);
            const active = index === currentSection ? 'active' : '';
            html += `
                <button class="nav-item ${active}" data-index="${index}">
                    <span class="nav-icon">${section.icon}</span>
                    <span>${section.title}</span>
                    <span class="nav-number">${section.number}</span>
                </button>`;
        });
    }

    nav.innerHTML = html;
    nav.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => goToSection(parseInt(btn.dataset.index)));
    });
}

function renderContent() {
    const container = document.getElementById('content-container');
    const secs = getSections();
    let html = '';

    secs.forEach((section, index) => {
        const active = index === currentSection ? 'active' : '';
        html += `
            <div class="section-content ${active}" id="section-${index}">
                <h1 class="section-title">${section.icon} ${section.title}</h1>
                <p class="section-subtitle">${section.subtitle}</p>
                ${section.html}
            </div>`;
    });

    container.innerHTML = html;
}

function updateUI() {
    // Breadcrumb
    const section = getSectionByIndex(currentSection);
    if (section) {
        document.getElementById('breadcrumb').innerHTML =
            `<span>${section.category}</span> / <strong>${section.title}</strong>`;
    }

    // Buttons
    document.getElementById('btn-prev').disabled = currentSection === 0;
    document.getElementById('btn-next').disabled = currentSection === totalSections - 1;

    // Button labels
    if (currentSection > 0) {
        document.querySelector('#btn-prev .btn-text').textContent = getSectionByIndex(currentSection - 1).title;
    }
    if (currentSection < totalSections - 1) {
        document.querySelector('#btn-next .btn-text').textContent = getSectionByIndex(currentSection + 1).title;
    }

    // Progress
    const pct = ((currentSection + 1) / totalSections) * 100;
    document.getElementById('progress-fill').style.width = `${pct}%`;
}

// ==========================================
// UI HELPERS
// ==========================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('active');
}

function handleKeyboard(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextSection();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSection();
    }
}

function handleScroll() {
    const btn = document.getElementById('scroll-top');
    btn.classList.toggle('visible', window.scrollY > 300);
}

// ==========================================
// INIT
// ==========================================
init();
