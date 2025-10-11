function tabSwitch(tabId, contentId) {
    document.querySelectorAll('.tabs li a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.getElementById(contentId).classList.add('active');
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

function showModal() {
    document.getElementById('myModal').style.display = 'flex';
}
function closeModal(event) {
    if (event.target.id === 'myModal' || event.target.classList.contains('modal-close')) {
        document.getElementById('myModal').style.display = 'none';
    }
}

function toggleBurger() {
    document.querySelector('.nav-links').classList.toggle('active');
}