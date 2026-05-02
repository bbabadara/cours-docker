const Renderer = (() => {

    function init() {
        renderSidebar();
        renderContent();
        updateNavButtons();
        updateBreadcrumb();
        updateProgress();
    }

    function renderSidebar() {
        const nav = document.getElementById('sidebar-nav');
        if (!nav) return;

        const categories = CourseContent.getCategories();
        const currentIndex = Navigation.getCurrentIndex();

        let html = '';

        for (const [category, sections] of Object.entries(categories)) {
            html += `<div class="nav-section-title">${category}</div>`;

            sections.forEach(section => {
                const index = CourseContent.getSections().indexOf(section);
                const isActive = index === currentIndex ? 'active' : '';

                html += `
                    <button class="nav-item ${isActive}" data-index="${index}" data-section="${section.id}">
                        <span class="nav-icon">${section.icon}</span>
                        <span>${section.title}</span>
                        <span class="nav-number">${section.number}</span>
                    </button>`;
            });
        }

        nav.innerHTML = html;

        // Attach click handlers
        nav.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                Navigation.goToSection(index);
            });
        });
    }

    function renderContent() {
        const container = document.getElementById('content-container');
        if (!container) return;

        const sections = CourseContent.getSections();
        const currentIndex = Navigation.getCurrentIndex();

        let html = '';

        sections.forEach((section, index) => {
            const isActive = index === currentIndex ? 'active' : '';

            html += `
                <div class="section-content ${isActive}" id="section-${index}">
                    <h1 class="section-title">${section.icon} ${section.title}</h1>
                    <p class="section-subtitle">${section.subtitle}</p>
                    ${section.html}
                </div>`;
        });

        container.innerHTML = html;
    }

    function updateNavButtons() {
        Navigation.updateNavButtons();
    }

    function updateBreadcrumb() {
        Navigation.updateBreadcrumb();
    }

    function updateProgress() {
        Navigation.updateProgress();
    }

    return {
        init
    };
})();
