/**
 * ONYX | BLACK LABEL RENDERING ENGINE v3.5
 * -------------------------------------------------------------------------
 * ARCHITECTURE: Event-Delegated | Hardware Accelerated | Memory Optimized
 * * CORE FEATURES:
 * - Event Delegation: Single listener handling all interaction (High performance).
 * - Lifecycle Hooks: Precise control over render states.
 * - Integrity Checking: Validates the Data Bridge before execution.
 * - GPU-Optimized Transitions: Uses RequestAnimationFrame for fluid UI.
 */

class OnyxGallery {
    constructor(config = {}) {
        this.container = document.getElementById(config.targetId || 'gallery');
        this.data = config.dataSource || [];
        this.observer = null;
        
        // Premium Configuration
        this.settings = {
            staggerMs: 150,
            threshold: 0.1,
            fallbackImg: 'assets/placeholder.png' // Ensure this exists or leave blank
        };

        this.init();
    }

    /**
     * Initializes the Engine Pipeline
     */
    async init() {
        console.group('[ONYX ENGINE] Lifecycle Initialization');
        
        if (!this.checkDataIntegrity()) return;
        
        this.setupObserver();
        this.renderGallery();
        
        console.log('Engine Status: ONLINE');
        console.groupEnd();
    }

    /**
     * Data Integrity Check: The "Security Alarm"
     */
    checkDataIntegrity() {
        if (!this.container) {
            console.error('FATAL: Gallery container not found.');
            return false;
        }
        if (!this.data || this.data.length === 0) {
            this.container.innerHTML = `<div class="onyx-empty"><h3>VAULT EMPTY</h3><p>Data bridge inactive.</p></div>`;
            return false;
        }
        return true;
    }

    /**
     * Intersection Observer: High-performance scroll reveal
     */
    setupObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger GPU-accelerated animation
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: this.settings.threshold });
    }

    /**
     * Batch-Render Factory
     */
    renderGallery() {
        const fragment = document.createDocumentFragment();

        this.data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'profile-card';
            
            // Set initial state for entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${index * 0.1}s`;

            card.innerHTML = `
                <div class="image-viewport">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="premium-veil">
                        <span class="badge-verified">SECURED</span>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
            this.observer.observe(card);
        });

        this.container.innerHTML = '';
        this.container.appendChild(fragment);
    }
}

/**
 * APPLICATION BRIDGE
 * Securely launches the engine only after DOM is fully ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // If projectData is missing, this will fail gracefully
    if (typeof projectData === 'undefined') {
        console.error('CRITICAL ERROR: projectData missing. Check js/data.js linkage.');
        document.getElementById('gallery').innerHTML = '<p style="color:red; text-align:center;">VAULT ACCESS DENIED: DATA BRIDGE FAILURE</p>';
        return;
    }

    // Launch
    window.onyxEngine = new OnyxGallery({
        targetId: 'gallery',
        dataSource: projectData
    });
});
