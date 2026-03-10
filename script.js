// script.js - Premium Interactions & i18n
/* --- TRANSLATION DICTIONARY --- */
const translations = {
    en: {
        navbar_about: "About",
        navbar_skills: "Skills",
        navbar_experience: "Experience",
        navbar_projects: "Projects",
        navbar_contact: "Get In Touch",

        hero_badge: "<span class='pulse'></span> Available for Work",
        hero_title: "Process <span>Optimizer</span> <br>& Visionary",
        hero_subtitle: "I am <strong style='color: white;'>Edinson Andrés Blanco Paul</strong>, an Industrial Engineer specializing in production management, quality control, and commercial coordination. I turn complex problems into streamlined solutions.",
        hero_btn_projects: "View Projects <i class='ri-arrow-right-line'></i>",
        hero_btn_cv: "Download CV <i class='ri-download-line'></i>",

        badge_engineer: "<i class='ri-briefcase-4-line'></i> Industrial Engineer",
        badge_efficiency: "<i class='ri-line-chart-line'></i> Efficiency",

        about_title: "Who I <span>Am</span>",
        about_desc: "My professional profile combining technical expertise and leadership.",
        about_story_title: "My Story",
        about_story_desc: "From my early academic projects to my professional career, I have always focused on efficiency, teamwork, and continuous improvement. My journey reflects a passion for solving problems and creating value in industrial and commercial environments. Leadership, negotiation, and data analysis are the pillars of my approach.",

        about_sg_title: "SG-SST",
        about_sg_desc: "Certified in Occupational Safety and Health protocols and documentation.",
        about_tech_title: "Tech Stack",

        about_edu_title: "Education",
        about_edu_1: "<strong>Industrial Engineer</strong><br><span class='muted'>UTS, 2025</span>",
        about_edu_2: "<strong>Production Technologist</strong><br><span class='muted'>UTS, 2023</span>",

        exp_title: "Professional <span>Journey</span>",
        exp_desc: "My track record of delivering measurable improvements.",
        exp_1_role: "Commercial & Portfolio Management Coordinator",
        exp_1_desc: "Coordinated commercial strategies resulting in portfolio growth. Optimized management processes significantly reducing recovery times. Led a high-performing team of agents to exceed daily KPIs.",
        exp_2_role: "Administrative Logistics Assistant",
        exp_2_desc: "Assisted in critical inventory management and comprehensive supply chain operations. Implemented robust stock control measures to drastically reduce discrepancies.",

        proj_title: "Academic <span>Projects</span>",
        proj_desc: "Key research and practical implementations developed at UTS.",
        proj_1_title: "Layout Optimization",
        proj_1_desc: "Optimization of industrial layouts to intuitively minimize transit times and maximize throughput.",
        proj_2_title: "Quality Control System",
        proj_2_desc: "Comprehensive quality control system implementation for complex manufacturing processes.",
        proj_3_title: "Logistics Improvement",
        proj_3_desc: "Strategic logistics improvement and restructuring in modern warehouse management.",
        proj_4_title: "SG-SST Protocol Design",
        proj_4_desc: "Design and documentation of comprehensive occupational safety and health protocols.",
        tech_stats: "Statistics",
        tech_logistics: "Logistics",
        tech_doc: "Documentation",
        contact_title: "Let's build something <span>great.</span>",
        contact_desc: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        contact_email: "Email Me",
        contact_form_title: "Send a Message",
        contact_form_name: "Your Name",
        contact_form_email: "Your Email",
        contact_form_msg: "Your Message",
        contact_form_submit: "Send Request <i class='ri-send-plane-fill'></i>",
        contact_form_success: "<i class='ri-checkbox-circle-fill'></i> Message sent successfully!"
    },
    es: {
        navbar_about: "Sobre Mí",
        navbar_skills: "Habilidades",
        navbar_experience: "Experiencia",
        navbar_projects: "Proyectos",
        navbar_contact: "Contacto",

        hero_badge: "<span class='pulse'></span> Disponible",
        hero_title: "Optimizador de <span>Procesos</span> <br>& Visionario",
        hero_subtitle: "Soy <strong style='color: white;'>Edinson Andrés Blanco Paul</strong>, Ingeniero Industrial especialista en gestión de la producción, control de calidad y coordinación comercial. Transformo problemas complejos en soluciones eficientes.",
        hero_btn_projects: "Ver Proyectos <i class='ri-arrow-right-line'></i>",
        hero_btn_cv: "Descargar CV <i class='ri-download-line'></i>",

        badge_engineer: "<i class='ri-briefcase-4-line'></i> Ing. Industrial",
        badge_efficiency: "<i class='ri-line-chart-line'></i> Eficiencia",

        about_title: "Quién <span>Soy</span>",
        about_desc: "Mi perfil profesional enfocado en experiencia técnica y liderazgo.",
        about_story_title: "Mi Historia",
        about_story_desc: "Desde mis primeros proyectos académicos hasta mi carrera profesional, siempre me he enfocado en la eficiencia, el trabajo en equipo y la mejora continua. Mi trayectoria refleja una pasión por resolver problemas y crear valor en entornos industriales y comerciales. Liderazgo, negociación y análisis de datos son los pilares de mi enfoque.",

        about_sg_title: "Protocolos SG-SST",
        about_sg_desc: "Certificado en protocolos y documentación de Seguridad y Salud en el Trabajo.",
        about_tech_title: "Tecnologías",

        about_edu_title: "Educación",
        about_edu_1: "<strong>Ingeniería Industrial</strong><br><span class='muted'>UTS, 2025</span>",
        about_edu_2: "<strong>Tecnólogo en Producción</strong><br><span class='muted'>UTS, 2023</span>",

        exp_title: "Trayectoria <span>Profesional</span>",
        exp_desc: "Mi historial creando mejoras medibles e impacto real.",
        exp_1_role: "Coordinador de Gestión Comercial y Cartera",
        exp_1_desc: "Coordiné estrategias comerciales logrando un sólido crecimiento de cartera. Optimicé procesos reduciendo significativamente los tiempos de retorno. Lideré un equipo de asesores de alto nivel para superar metas diarias.",
        exp_2_role: "Auxiliar Administrativo Logístico",
        exp_2_desc: "Apoyo clave en gestión de inventarios críticos y operaciones de cadena de suministro. Implementé controles estrictos reduciendo drásticamente las inconsistencias.",

        proj_title: "Proyectos <span>Académicos</span>",
        proj_desc: "Investigaciones e implementaciones técnicas en la UTS.",
        proj_1_title: "Optimización de Layout",
        proj_1_desc: "Mejora y diseño de layouts industriales para acortar tiempos y maximizar rendimiento.",
        proj_2_title: "Control de Calidad",
        proj_2_desc: "Implementación integral de sistemas de control de calidad para manufactura.",
        proj_3_title: "Mejora Logística",
        proj_3_desc: "Reestructuración estratégica y flujos logísticos en gestión de almacenes modernos.",
        proj_4_title: "Diseño Protocolos SG-SST",
        proj_4_desc: "Estructuración y levantamiento de normativas integrales de seguridad ocupacional.",
        tech_stats: "Estadística",
        tech_logistics: "Logística",
        tech_doc: "Documentación",
        contact_title: "Construyamos algo <span>increíble.</span>",
        contact_desc: "Siempre dispuesto a conversar sobre nuevas ideas, retos o formar parte de grandes visiones.",
        contact_email: "Envíame un Correo",
        contact_form_title: "Escríbeme",
        contact_form_name: "Tu Nombre",
        contact_form_email: "Tu Correo",
        contact_form_msg: "Tu Mensaje",
        contact_form_submit: "Enviar Mensaje <i class='ri-send-plane-fill'></i>",
        contact_form_success: "<i class='ri-checkbox-circle-fill'></i> ¡Mensaje enviado con éxito!"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    /* --- Language Translation Logic --- */
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    let currentLang = localStorage.getItem('portfolio-lang') || 'es'; // Default to Spanish as requested

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

        // Update Buttons Styling
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        }

        // Apply translations to DOM
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const prop = el.getAttribute('data-i18n-prop'); // e.g. for placeholder

            if (translations[lang][key]) {
                if (prop) {
                    el.setAttribute(prop, translations[lang][key]);
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    // Initialize Default Language
    setLanguage(currentLang);

    // Language Listeners
    if (btnEn && btnEs) {
        btnEn.addEventListener('click', () => setLanguage('en'));
        btnEs.addEventListener('click', () => setLanguage('es'));
    }

    /* --- Custom Cursor --- */
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (!isTouchDevice && cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        const interactables = document.querySelectorAll('a, button, input, textarea, .tilt-effect');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    } else if (cursorDot && cursorOutline) {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto';
    }

    /* --- Navbar Scroll Effect --- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Mobile Menu --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => mobileNav.classList.add('active'));
        closeMenu.addEventListener('click', () => mobileNav.classList.remove('active'));
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => mobileNav.classList.remove('active'));
        });
    }

    /* --- Scroll Reveal Animations (Intersection Observer) --- */
    const reveals = document.querySelectorAll('.reveal');
    const revealSettings = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealSettings);

    reveals.forEach(reveal => revealObserver.observe(reveal));

    /* --- 3D Tilt Effect on Cards (Vanilla JS) --- */
    const tiltElements = document.querySelectorAll('.tilt-effect');
    if (!isTouchDevice) {
        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                el.style.transition = 'none';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                el.style.transition = 'transform 0.5s ease';
            });
        });
    }

    /* --- Contact Form Interaction --- */
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            const loadStr = currentLang === 'es' ? 'Enviando...' : 'Sending...';
            submitBtn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> ${loadStr}`;
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    submitBtn.innerHTML = originalText;
                    successMsg.style.display = 'block';
                    contactForm.reset();

                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 4000);
                } else {
                    const errorStr = currentLang === 'es' ? 'Error al enviar' : 'Error sending message';
                    alert(errorStr);
                    submitBtn.innerHTML = originalText;
                }
            } catch (error) {
                const errorStr = currentLang === 'es' ? 'Error de conexión' : 'Connection error';
                alert(errorStr);
                submitBtn.innerHTML = originalText;
            } finally {
                submitBtn.disabled = false;
            }
        });
    }
});
