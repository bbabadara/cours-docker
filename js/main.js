document.addEventListener('DOMContentLoaded', () => {
    const sections = CourseContent.getSections();
    Navigation.init(sections.length);
    Renderer.init();

    // Navigation buttons
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    if (prevBtn) prevBtn.addEventListener('click', () => Navigation.prevSection());
    if (nextBtn) nextBtn.addEventListener('click', () => Navigation.nextSection());

    // Scroll to top
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Update button labels
    updateButtonLabels();
});

function updateButtonLabels() {
    const sections = CourseContent.getSections();
    const currentIndex = Navigation.getCurrentIndex();

    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    if (prevBtn && currentIndex > 0) {
        prevBtn.querySelector('.btn-text').textContent = sections[currentIndex - 1].title;
    }

    if (nextBtn && currentIndex < sections.length - 1) {
        nextBtn.querySelector('.btn-text').textContent = sections[currentIndex + 1].title;
    }
}

// Override Navigation.goToSection to also update button labels
const origGoTo = Navigation.goToSection.bind(Navigation);
Navigation.goToSection = function(index) {
    origGoTo(index);
    updateButtonLabels();
};
