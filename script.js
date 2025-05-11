document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;

    darkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
});