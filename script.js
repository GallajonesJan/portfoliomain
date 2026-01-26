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
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gallajonesjanlauren@gmail.com&su=Schedule a Call Request&body=Hi Jan Lauren,%0D%0A%0D%0AI would like to schedule a call with you.%0D%0A%0D%0APreferred Date:%0D%0APreferred Time:%0D%0A%0D%0A', '_blank');
}

function sendEmail() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gallajonesjanlauren@gmail.com&su=Contact from Portfolio&body=Hi Jan Lauren,%0D%0A%0D%0AI would like to get in touch with you.%0D%0A%0D%0A', '_blank');
}

function visitCommunity() {
    alert('Redirecting to community page...');
}


