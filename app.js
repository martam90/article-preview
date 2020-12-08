(function () {
    const toggleBtn = document.getElementById('open-btn');
    const state = document.querySelector('.state');

    toggleBtn.addEventListener('click', () => {
        state.classList.toggle('active');
    });

    const closeBtn = document.getElementById('close-btn');

    closeBtn.addEventListener('click', () => {
        state.classList.toggle('active');
    });
}) ();



