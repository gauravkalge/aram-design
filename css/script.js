window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 3000); // Adjust the time to match the fadeOut duration in CSS

    preloader.addEventListener('animationend', () => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    });
});
