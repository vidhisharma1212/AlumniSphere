function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function goTo(page) {
    alert(`Navigating to ${page}`);
}


// Like button functionality
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Liked!');
    });
});
