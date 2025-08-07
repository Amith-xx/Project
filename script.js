
// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get form elements
    const loginForm = document.getElementById('loginForm');
    const showRegisterLink = document.getElementById('showRegister');
    
    // Side Menu Elements
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuMains = document.querySelectorAll('.menu-main[data-menu]');
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Get form data
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // For now, just show success message
        alert('Login functionality will be connected to backend later!\nUsername: ' + username);
        
        // Clear form
        loginForm.reset();
    });
    
    // Handle register link click
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Register page will be created next!');
    });
    
    // Add some visual feedback for input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Side Menu Functionality
    menuToggle.addEventListener('click', function() {
        toggleMenu();
    });
    
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Handle dropdown menus
    menuMains.forEach(menuMain => {
        menuMain.addEventListener('click', function() {
            const menuType = this.getAttribute('data-menu');
            const submenu = document.getElementById(menuType + '-submenu');
            
            // Close other submenus
            document.querySelectorAll('.submenu.active').forEach(sm => {
                if (sm !== submenu) {
                    sm.classList.remove('active');
                    sm.parentElement.querySelector('.menu-main').classList.remove('active');
                }
            });
            
            // Toggle current submenu
            submenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    });
    
    function toggleMenu() {
        sideMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
    
    function closeMenu() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // Close all submenus
        document.querySelectorAll('.submenu.active').forEach(submenu => {
            submenu.classList.remove('active');
            submenu.parentElement.querySelector('.menu-main').classList.remove('active');
        });
    }
});
