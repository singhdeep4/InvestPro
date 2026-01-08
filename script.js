/* ==========================================================================
   1. HOMEPAGE ANIMATIONS (Typewriter & Scroll)
   ========================================================================== */

// --- Typewriter Effect for Landing Page ---
const textToType = "Welcome to the Future of Investing.";
const typeWriterElement = document.getElementById('typewriter');
let charIndex = 0;

function typeWriter() {
    if (typeWriterElement && charIndex < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Speed of typing (ms)
    }
}

// --- Scroll Animation (Fade In Elements) ---
// This watches for elements with class 'hidden' and adds 'show' when they scroll into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // CSS handles the fade-in
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Start animations when page loads
window.onload = function() {
    typeWriter();
};


/* ==========================================================================
   2. AUTHENTICATION SYSTEM (Login & Register)
   ========================================================================== */

// --- Toggle Password Visibility (Eye Icon) ---
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// --- Input Validation (Regex) ---
// Validates Email format and Password strength (8 chars, 1 number, 1 special char)
function validateInputs() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submit-btn');

    // Regex Patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    // Enable button only if both are valid
    if (emailPattern.test(email) && passPattern.test(password)) {
        submitBtn.removeAttribute('disabled');
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
    } else {
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.style.opacity = "0.5";
        submitBtn.style.cursor = "not-allowed";
    }
}

// --- Mock Login Redirect ---
// Simulates a login by redirecting to the dashboard
function handleLogin(event) {
    event.preventDefault(); // Stop form from actually submitting to a server
    // In a real app, you would check credentials here.
    window.location.href = "profile.html"; 
}


/* ==========================================================================
   3. DASHBOARD LOGIC (Tabs & Privacy)
   ========================================================================== */

// --- Switch Tabs (Mission, Portfolio, Market, Settings) ---
function showSection(sectionId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(sec => sec.style.display = 'none');

    // 2. Show the selected section
    const activeSection = document.getElementById('section-' + sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // 3. Update Title
    const titles = {
        'mission': 'MISSION CONTROL',
        'portfolio': 'MY PORTFOLIO',
        'market': 'MARKET FEED',
        'settings': 'SYSTEM SETTINGS'
    };
    const titleElement = document.getElementById('page-title');
    if (titleElement) titleElement.innerText = titles[sectionId];

    // 4. Update Sidebar Active State
    const buttons = document.querySelectorAll('.side-menu li');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.getElementById('btn-' + sectionId);
    if (activeBtn) activeBtn.classList.add('active');
}

// --- Privacy Mode (Hide Money) ---
function togglePrivacy() {
    const isPrivate = document.getElementById('privacy-toggle').checked;
    const invested = document.getElementById('balance-invested');
    const current = document.getElementById('balance-current');

    // Safety check in case elements don't exist
    if (!invested || !current) return;

    if (isPrivate) {
        // Store original values in data attributes if not already stored
        if (!invested.dataset.original) invested.dataset.original = invested.innerText;
        if (!current.dataset.original) current.dataset.original = current.innerText;

        // Mask the values
        invested.innerText = '₹ ••••••';
        current.innerText = '₹ ••••••';
        invested.style.color = '#888';
        current.style.color = '#888';
    } else {
        // Restore original values
        if (invested.dataset.original) invested.innerText = invested.dataset.original;
        if (current.dataset.original) current.innerText = current.dataset.original;
        
        invested.style.color = 'white';
        current.style.color = 'white';
    }
}


/* ==========================================================================
   4. UI INTERACTIVITY (Modals & Alerts)
   ========================================================================== */

// --- Close Top Warning Bar ---
function closeAlert() {
    const alertBar = document.getElementById('dev-warning');
    if (alertBar) {
        alertBar.style.display = 'none';
    }
    // Remove the 'push down' class from body so navbar slides up
    document.body.classList.remove('has-alert');
}

// --- Invest Future Vision Modal ---
function openInvestModal() {
    const modal = document.getElementById('invest-modal');
    if (modal) modal.style.display = 'flex';
}

function closeInvestModal() {
    const modal = document.getElementById('invest-modal');
    if (modal) modal.style.display = 'none';
}