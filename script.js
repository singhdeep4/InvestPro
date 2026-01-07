// PART 1: TYPEWRITER EFFECT
// This types out "WHO WE ARE" letter by letter
const textElement = document.getElementById('typewriter');
const textToType = "Who we are?";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Speed: 150ms per letter
    }
}

// Start typing when page loads
window.onload = typeWriter;


// PART 2: SCROLL ANIMATION OBSERVER
// This watches for when the Safety Cards enter the screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Make visible
        }
    });
});

// Find all hidden elements and tell the observer to watch them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* =========================================
   CUSTOM CURSOR LOGIC
   ========================================= */
const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Moves the ring to where your mouse is
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add a click effect (Shrink when clicking)
document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

/* =========================================
   SHOW/HIDE PASSWORD LOGIC
   ========================================= */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('pass1');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordInput.type === "password") {
        // Show Password
        passwordInput.type = "text";
        
        // Change Icon to "Eye Slash" (Closed)
        eyeIcon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M1 1l22 22"></path>
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
        `;
    } else {
        // Hide Password
        passwordInput.type = "password";
        
        // Change Icon back to "Eye Open"
        eyeIcon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        `;
    }
}

/* =========================================
   DASHBOARD TABS LOGIC
   ========================================= */
function showSection(sectionId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(sec => sec.style.display = 'none');

    // 2. Show the selected section
    const activeSection = document.getElementById('section-' + sectionId);
    if(activeSection) {
        activeSection.style.display = 'block';
    }

    // 3. Update Title
    const titles = {
        'mission': 'MISSION CONTROL',
        'portfolio': 'MY PORTFOLIO',
        'market': 'MARKET FEED',
        'settings': 'SYSTEM SETTINGS'
    };
    document.getElementById('page-title').innerText = titles[sectionId];

    // 4. Update Sidebar Active State
    const buttons = document.querySelectorAll('.side-menu li');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + sectionId).classList.add('active');
}

/* =========================================
   DASHBOARD TABS LOGIC
   ========================================= */
function showSection(sectionId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(sec => sec.style.display = 'none');

    // 2. Show the selected section
    const activeSection = document.getElementById('section-' + sectionId);
    if(activeSection) {
        activeSection.style.display = 'block';
    }

    // 3. Update Title
    const titles = {
        'mission': 'MISSION CONTROL',
        'portfolio': 'MY PORTFOLIO',
        'market': 'MARKET FEED',
        'settings': 'SYSTEM SETTINGS'
    };
    document.getElementById('page-title').innerText = titles[sectionId];

    // 4. Update Sidebar Active State
    const buttons = document.querySelectorAll('.side-menu li');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + sectionId).classList.add('active');
}

/* =========================================
   CLOSE WARNING BAR LOGIC
   ========================================= */
function closeAlert() {
    const alertBar = document.getElementById('dev-warning');
    
    // 1. Remove the bar
    if (alertBar) {
        alertBar.style.display = 'none';
    }
    
    // 2. Move navbar back up (remove the gap)
    document.body.classList.remove('has-alert');
}

/* =========================================
   PRIVACY MODE LOGIC
   ========================================= */
function togglePrivacy() {
    const isPrivate = document.getElementById('privacy-toggle').checked;
    const invested = document.getElementById('balance-invested');
    const current = document.getElementById('balance-current');

    // 1. If switching to Privacy Mode (ON)
    if (isPrivate) {
        // Save the real numbers in a 'data-value' attribute so we don't lose them
        if (!invested.dataset.original) invested.dataset.original = invested.innerText;
        if (!current.dataset.original) current.dataset.original = current.innerText;

        // Change text to hidden dots
        invested.innerText = '₹ ••••xx';
        current.innerText = '₹ ••••xx';
        
        // Optional: Change color to gray to look "muted"
        invested.style.color = '#888';
        current.style.color = '#888';
    } 
    // 2. If switching to Normal Mode (OFF)
    else {
        // Restore the original numbers
        if (invested.dataset.original) invested.innerText = invested.dataset.original;
        if (current.dataset.original) current.innerText = current.dataset.original;

        // Restore white color
        invested.style.color = 'white';
        current.style.color = 'white';
    }
}

/* =========================================
   INVEST MODAL LOGIC
   ========================================= */
function openInvestModal() {
    const modal = document.getElementById('invest-modal');
    modal.style.display = 'flex'; // Shows the modal
}

function closeInvestModal() {
    const modal = document.getElementById('invest-modal');
    modal.style.display = 'none'; // Hides the modal
}

