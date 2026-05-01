/**
 * =========================================================================
 * ONYX | DATA REGISTRY v3.0
 * -------------------------------------------------------------------------
 * ARCHIVE: DIGITAL SOVEREIGNTY ASSETS
 * STATUS: SECURED | ENCRYPTED | READY FOR DEPLOYMENT
 * * DESCRIPTION:
 * This file acts as the primary configuration object for the Onyx Engine.
 * Each entry includes metadata for scalability, search indexing, and 
 * high-fidelity rendering.
 * * SCHEMA DEFINITION:
 * - id: Unique identifier for the asset
 * - image: Path to the visual source file
 * - title: Display header for the UI
 * - description: Contextual metadata for the user
 * - category: Classification for future filtering modules
 * - priority: Logic-based sorting (1 = Critical, 10 = Standard)
 * =========================================================================
 */

const projectData = [
    {
        id: "ONX-001",
        image: "pics/img1.png",
        title: "QUANTUM INTERFACE",
        description: "Mobile-first architectural framework for high-frequency trading dashboards.",
        category: "FINTECH",
        priority: 1
    },
    {
        id: "ONX-002",
        image: "pics/img2.png",
        title: "ONYX CONCIERGE",
        description: "Private boutique management system with automated lead generation protocols.",
        category: "STRATEGY",
        priority: 2
    },
    {
        id: "ONX-003",
        image: "pics/img3.png",
        title: "NEURAL NETWORK UI",
        description: "Visualizer logic for complex data streams, designed for terminal-based displays.",
        category: "VISUALIZATION",
        priority: 3
    },
    {
        id: "ONX-004",
        image: "pics/img4.png",
        title: "AUTHORITY AUDIT",
        description: "Strategic growth documentation for enterprise-level B2B positioning.",
        category: "STRATEGY",
        priority: 2
    },
    {
        id: "ONX-005",
        image: "pics/img5.png",
        title: "SOURCING ENGINE",
        description: "Procurement mapping for international commodity distribution networks.",
        category: "LOGIC",
        priority: 4
    },
    {
        id: "ONX-006",
        image: "pics/img6.png",
        title: "MOBILE UX REDESIGN",
        description: "Viewport-interaction conflict resolution for high-traffic mobile applications.",
        category: "OPTIMIZATION",
        priority: 1
    },
    {
        id: "ONX-007",
        image: "pics/img7.png",
        title: "GITHUB AUTHORITY",
        description: "Sales engine integration for developer portfolios to capture lead traffic.",
        category: "STRATEGY",
        priority: 3
    },
    {
        id: "ONX-008",
        image: "pics/img8.png",
        title: "SONIC VISUALIZER",
        description: "Interactive music visualizer leveraging dynamic DOM manipulation.",
        category: "FRONTEND",
        priority: 5
    },
    {
        id: "ONX-009",
        image: "pics/img9.png",
        title: "DERMA PROTOCOL",
        description: "Algorithm-based routine layering for specialized dermatological needs.",
        category: "CONSUMER",
        priority: 5
    },
    {
        id: "ONX-010",
        image: "pics/img10.png",
        title: "AFROBEATS ANALYTICS",
        description: "Twitter growth engine tracking engagement trends for music industry icons.",
        category: "ANALYTICS",
        priority: 4
    }
];

// HEARTBEAT CHECK
console.log(`[ONYX ENGINE] Data Registry Loaded: ${projectData.length} records active.`);
            
