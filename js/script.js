// Burger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    const html = document.documentElement;
    const footer = document.querySelector('footer');

    // Check if elements exist
    if (!burgerMenu || !mobileMenu) {
        console.error('Required elements not found!');
        return;
    }

    // Check screen size and hide/show footer
    function handleFooterVisibility() {
        if (window.innerWidth <= 834) {
            if (footer) {
                footer.style.display = 'none';
            }
        } else {
            if (footer && !body.classList.contains('menu-open')) {
                footer.style.display = '';
            }
        }
    }

    // Initial check
    handleFooterVisibility();

    // Toggle burger menu
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Toggle active classes
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Toggle body class
        body.classList.toggle('menu-open');
        
        // Prevent scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
            body.style.height = '100vh';
            body.style.position = 'fixed';
            body.style.width = '100%';
            html.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
            body.style.height = '';
            body.style.position = '';
            body.style.width = '';
            html.style.overflow = '';
        }
    });

    // Handle auth buttons
    const authBtn = document.querySelector('.btn-authorization');
    const regBtn = document.querySelector('.btn-registration');
    
    if (authBtn) {
        authBtn.addEventListener('click', function() {
            window.location.href = 'pages/authorization.html';
        });
    }
    
    if (regBtn) {
        regBtn.addEventListener('click', function() {
            window.location.href = 'pages/registration.html';
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
            body.style.height = '';
            body.style.position = '';
            body.style.width = '';
            html.style.overflow = '';
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        handleFooterVisibility();
        
        if (window.innerWidth > 834) {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
            body.style.height = '';
            body.style.position = '';
            body.style.width = '';
            html.style.overflow = '';
        }
    });

    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
            body.style.overflow = '';
            body.style.height = '';
            body.style.position = '';
            body.style.width = '';
            html.style.overflow = '';
        }
    });

    // Prevent touchmove when menu is open
    mobileMenu.addEventListener('touchmove', function(e) {
        if (mobileMenu.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
});