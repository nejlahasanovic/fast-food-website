
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

