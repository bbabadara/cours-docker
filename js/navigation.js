const Navigation = (() => {
    let currentSection = 0;
    let totalSections = 0;
    let sidebarOpen = false;

    function init(total) {
        totalSections = total;
        currentSection = parseInt(localStorage.getItem('docker-course-section') || '0');
        if (currentSection >= totalSections) currentSection = 0;

        const overlay = document.getElementById('sidebar-overlay');
        const toggle = document.getElementById('menu-toggle');

        if (overlay) {
            overlay.addEventListener('click', closeSidebar);
        }

        if (toggle) {
            toggle.addEventListener('click', toggleSidebar);
        }

        document.addEventListener('keydown', handleKeyboard);
        window.addEventListener('scroll', handleScroll);
    }

    function getCurrentIndex() {
        return currentSection;
    }

    function goToSection(index) {
        if (index < 0 || index >= totalSections) return;
        currentSection = index;
        localStorage.setItem('docker-course-section', index);

        document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(`section-${index}`);
        if (target) {
            target.classList.add('active');
        }

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.index) === index) {
                item.classList.add('active');
            }
        });

        updateNavButtons();
        updateBreadcrumb();
        updateProgress();
        closeSidebar();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function nextSection() {
        if (currentSection < totalSections - 1) {
            goToSection(currentSection + 1);
        }
    }

    function prevSection() {
        if (currentSection > 0) {
            goToSection(currentSection - 1);
        }
    }

    function updateNavButtons() {
        const prevBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');
        if (prevBtn) prevBtn.disabled = currentSection === 0;
        if (nextBtn) nextBtn.disabled = currentSection === totalSections - 1;
    }

    function updateBreadcrumb() {
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb) {
            const section = CourseContent.getSectionByIndex(currentSection);
            if (section) {
                breadcrumb.innerHTML = `<span>${section.category}</span> / <strong>${section.title}</strong>`;
            }
        }
    }

    function updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            const pct = ((currentSection + 1) / totalSections) * 100;
            progressFill.style.width = `${pct}%`;
        }
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
        if (btn) {
            if (window.scrollY > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }
    }

    function toggleSidebar() {
        sidebarOpen ? closeSidebar() : openSidebar();
    }

    function openSidebar() {
        sidebarOpen = true;
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('active');
    }

    function closeSidebar() {
        sidebarOpen = false;
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
    }

    return {
        init,
        getCurrentIndex,
        goToSection,
        nextSection,
        prevSection,
        updateNavButtons,
        updateBreadcrumb,
        updateProgress
    };
})();
