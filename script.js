function toggleDarkMode(element) {
    element.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.toggle-switch').classList.add('active');
    }
});

function scheduleCall() {
    alert('Opening calendar to schedule a call...');
}

function sendEmail() {
    alert('Opening email client...');
}

function visitCommunity() {
    alert('Redirecting to community page...');
}