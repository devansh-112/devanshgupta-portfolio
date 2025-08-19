
// Tech Projects page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Projects scroll functionality
    const projectsScrollContainer = document.getElementById('projectsScrollContainer');
    const projectsScrollProgress = document.getElementById('projectsScrollProgress');
    const projectsScrollUp = document.getElementById('projectsScrollUp');
    const projectsScrollDown = document.getElementById('projectsScrollDown');

    if (projectsScrollContainer && projectsScrollProgress) {
        // Update scroll progress
        function updateScrollProgress() {
            const scrollTop = projectsScrollContainer.scrollTop;
            const scrollHeight = projectsScrollContainer.scrollHeight - projectsScrollContainer.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            projectsScrollProgress.style.height = scrollPercentage + '%';
        }

        projectsScrollContainer.addEventListener('scroll', updateScrollProgress);

        // Scroll buttons
        if (projectsScrollUp) {
            projectsScrollUp.addEventListener('click', () => {
                projectsScrollContainer.scrollBy({
                    top: -200,
                    behavior: 'smooth'
                });
            });
        }

        if (projectsScrollDown) {
            projectsScrollDown.addEventListener('click', () => {
                projectsScrollContainer.scrollBy({
                    top: 200,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Certification scroll functionality for recruiters page
    const certScrollContainer = document.getElementById('certScrollContainer');
    const certScrollProgress = document.getElementById('certScrollProgress');
    const certScrollUp = document.getElementById('certScrollUp');
    const certScrollDown = document.getElementById('certScrollDown');

    if (certScrollContainer && certScrollProgress) {
        // Update scroll progress
        function updateCertScrollProgress() {
            const scrollTop = certScrollContainer.scrollTop;
            const scrollHeight = certScrollContainer.scrollHeight - certScrollContainer.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            certScrollProgress.style.height = scrollPercentage + '%';
        }

        certScrollContainer.addEventListener('scroll', updateCertScrollProgress);

        // Scroll buttons
        if (certScrollUp) {
            certScrollUp.addEventListener('click', () => {
                certScrollContainer.scrollBy({
                    top: -150,
                    behavior: 'smooth'
                });
            });
        }

        if (certScrollDown) {
            certScrollDown.addEventListener('click', () => {
                certScrollContainer.scrollBy({
                    top: 150,
                    behavior: 'smooth'
                });
            });
        }
    }
});
