/**
 * ONYX PROFESSIONAL CORE | v3.0.0
 * -------------------------------------------------------------------------
 * HIGH-PERFORMANCE RENDERING ENGINE
 * * Features:
 * - Intersection Observer API: Detects scroll position for reveal triggers.
 * - Hardware Accelerated Batched Rendering: Minimizes CPU layout thrashing.
 * - Asset Sanitization: Prevents broken layouts via auto-fallback logic.
 * - Dynamic Stagger Pipeline: Logic-based entrance delays for a premium feel.
 */

class OnyxGallery {
    constructor(options = {}) {
        this.container = document.getElementById(options.targetId || 'gallery');
        this.data = options.dataSource || [];
        this.observer = null;
        
        // Configuration for the "Premium" feel
        this.config = {
            revealThreshold: 0.15, // Percent of item visible before reveal
            staggerDelay: 120,      // Milliseconds between item entrances
            fallbackImg: 'pics/placeholder.png' 
        };

        this.init();
    }

    /**
     * Initializes the lifecycle of the gallery engine.
     */
    async init() {
        if (!this.container) {
            console.warn('[Onyx] Target container not found in DOM.');
            return;
        }

        if (!this.data || this.data.length === 0) {
            this.renderEmptyState();
            return;
        }

        this.setupObserver();
        this.renderGallery();
    }

    /**
     * Sets up the Intersection Observer for high-end scroll reveals.
     */
    setupObserver() {
        const observerOptions = {
            root: null, // Watch the viewport
            threshold: this.config.revealThreshold
        };

        this.observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const delay = target.getAttribute('data-delay');
                    
                    // Trigger the animation after the calculated stagger delay
                    setTimeout(() => {
                        target.classList.add('is-visible');
                    }, delay);

                    // Stop watching once it has been revealed
                    observer.unobserve(target);
                }
            });
        }, observerOptions);
    }

    /**
     * Generates the semantic HTML structure for each portfolio item.
     */
    createItemNode(item, index) {
        const card = document.createElement('article');
        card.className = 'onyx-card scroll-reveal';
        
        // Calculate stagger delay based on its position in the list
        card.setAttribute('data-delay', index * this.config.staggerDelay);

        card.innerHTML = `
            <div class="onyx-card-inner">
                <div class="image-viewport">
                    <img 
                        src="${item.image || this.config.fallbackImg}" 
                        alt="${item.title}" 
                        class="onyx-asset"
                        loading="lazy"
                        onerror="this.src='${this.config.fallbackImg}'; this.classList.add('asset-error');"
                    >
                    <div class="asset-overlay"></div>
                </div>
                <div class="onyx-details">
                    <span class="category-tag">Premium Service</span>
                    <h3 class="onyx-title">${item.title}</h3>
                    <p class="onyx-description">${item.description || 'Professional execution and strategy.'}</p>
                    <div class="onyx-action-line"></div>
                </div>
            </div>
        `;

        return card;
    }

    /**
     * Performs a batch-render to the DOM and attaches the scroll observers.
     */
    renderGallery() {
        // Use DocumentFragment for a single "paint" operation (Better performance)
        const fragment = document.createDocumentFragment();

        this.data.forEach((item, index) => {
            const node = this.createItemNode(item, index);
            fragment.appendChild(node);
            this.observer.observe(node);
        });

        // Clear existing content and inject the new premium structure
        this.container.innerHTML = '';
        this.container.appendChild(fragment);
        console.log(`[Onyx] Engine online. ${this.data.length} items rendered.`);
    }

    renderEmptyState() {
        this.container.innerHTML = `
            <div class="onyx-empty">
                <p>Establishing connection to portfolio data...</p>
            </div>
        `;
    }
}

/**
 * APPLICATION START
 * Standardizes the launch sequence for the ONYX project
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check if the global projectData from data.js is accessible
    if (typeof projectData !== 'undefined') {
        window.OnyxApp = new OnyxGallery({
            targetId: 'gallery',
            dataSource: projectData
        });
    } else {
        console.error('[Onyx] Data bridge failure: Check if js/data.js is linked in index.html.');
    }
});
          
