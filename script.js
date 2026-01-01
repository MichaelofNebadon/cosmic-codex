// THE COSMIC CODEX - Sovereign Interaction
// Debt-Free, Self-Contained JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ====================
    // ZONE NAVIGATION
    // ====================
    const navItems = document.querySelectorAll('.nav-item');
    const zoneContents = document.querySelectorAll('.zone-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const zone = this.getAttribute('data-zone');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding zone content
            zoneContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${zone}-zone`) {
                    content.classList.add('active');
                }
            });
            
            // Update browser history (for bookmarking/deep linking)
            history.pushState({}, '', `#${zone}`);
        });
    });
    
    // Check for hash on load (e.g., someone visits #observatory directly)
    const hash = window.location.hash.substring(1);
    if (hash && ['library', 'observatory', 'anchor'].includes(hash)) {
        const correspondingNav = document.querySelector(`.nav-item[data-zone="${hash}"]`);
        if (correspondingNav) {
            correspondingNav.click();
        }
    }
    
    // ====================
    // HIGH CONTRAST TOGGLE
    // ====================
    const toggleButton = document.getElementById('toggle-contrast');
    if (toggleButton) {
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('high-contrast');
            
            // Save preference to localStorage
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('cosmicCodexHighContrast', 'enabled');
                this.textContent = 'Toggle Normal View';
            } else {
                localStorage.setItem('cosmicCodexHighContrast', 'disabled');
                this.textContent = 'Toggle High Contrast';
            }
        });
        
        // Load saved preference
        if (localStorage.getItem('cosmicCodexHighContrast') === 'enabled') {
            document.body.classList.add('high-contrast');
            toggleButton.textContent = 'Toggle Normal View';
        }
    }
    
    // ====================
    // ANCHOR ZONE PROTOTYPE INTERACTIONS
    // ====================
    const declareButton = document.querySelector('.declare-button');
    if (declareButton) {
        declareButton.addEventListener('click', function() {
            if (!this.disabled) {
                // In Phase 2, this will connect to a backend or localStorage
                const now = new Date();
                const timestamp = now.toISOString();
                
                alert(`Declaration timestamp logged: ${timestamp}\n\nFull backend integration will be implemented in Phase 2 (Observatory Zone tools).`);
                
                // Visual feedback
                this.textContent = 'DECLARATION LOGGED';
                this.style.backgroundColor = '#4CAF50';
                setTimeout(() => {
                    this.textContent = 'Declare Opening Salvo';
                    this.style.backgroundColor = '';
                }, 2000);
            }
        });
    }
    
    // ====================
    // SIMPLE GLYPH INDEX PREVIEW (for Appendix A link)
    // ====================
    // This is a placeholder for the actual Glyph Index page functionality
    console.log('Cosmic Codex Architecture Loaded.');
    console.log('Current Portal Status: ACTIVE');
    console.log('Sovereign Build: v1.0.0-alpha');
});
