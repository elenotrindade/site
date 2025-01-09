window.addEventListener('load', () => {
    const cssLoaded = document.createElement('div');
    cssLoaded.id = 'css-loaded';
    cssLoaded.style.display = 'none';
    document.body.appendChild(cssLoaded);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/website.css';
    link.onload = () => {
        cssLoaded.style.display = 'block';
        const spinner = document.querySelector('.spinner');
        if (spinner) {
            spinner.style.display = 'none';
        }
        const landingPage = document.querySelector('.landing-page');
        if (landingPage) {
            landingPage.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    document.head.appendChild(link);
});