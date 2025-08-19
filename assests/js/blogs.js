// Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        e.target.reset();
    });

    // Blogs scroll functionality
    const blogsScrollContainer = document.getElementById('blogsScrollContainer');
    const blogsScrollProgress = document.getElementById('blogsScrollProgress');
    const blogsScrollUp = document.getElementById('blogsScrollUp');
    const blogsScrollDown = document.getElementById('blogsScrollDown');

    if (blogsScrollContainer && blogsScrollProgress) {
        // Update scroll progress
        function updateScrollProgress() {
            const scrollTop = blogsScrollContainer.scrollTop;
            const scrollHeight = blogsScrollContainer.scrollHeight - blogsScrollContainer.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            blogsScrollProgress.style.height = scrollPercentage + '%';
        }

        blogsScrollContainer.addEventListener('scroll', updateScrollProgress);

        // Scroll buttons
        if (blogsScrollUp) {
            blogsScrollUp.addEventListener('click', () => {
                blogsScrollContainer.scrollBy({
                    top: -200,
                    behavior: 'smooth'
                });
            });
        }

        if (blogsScrollDown) {
            blogsScrollDown.addEventListener('click', () => {
                blogsScrollContainer.scrollBy({
                    top: 200,
                    behavior: 'smooth'
                });
            });
        }
    }