// ──────────────────────────────────────────────
// i18n – PT ↔ EN language toggle
// ──────────────────────────────────────────────

const translations = {
    pt: {
        // Nav
        nav_home: 'Início',
        nav_about: 'Sobre',
        nav_skills: 'Habilidades',
        nav_projects: 'Projetos',
        nav_contact: 'Contato',

        // Hero
        hero_title: 'Olá, eu sou <span class="accent">Sulivando</span>',
        hero_desc: 'Construo sistemas eficientes e experiências digitais projetadas com cuidado.',
        hero_cta_work: 'Ver Meus Trabalhos',
        hero_cta_contact: 'Entre em Contato',

        // Typing effect
        typing_texts: ['Analista de Sistemas', 'Desenvolvedor Full Stack', 'Desenvolvedor Android', 'Engenheiro de Automação', 'Engenheiro DevOps', 'Entusiasta de Tecnologia'],

        // About
        about_title: 'Sobre <span class="accent">Mim</span>',
        about_role: 'Analista de Sistemas',
        about_p1: 'Sou Sulivando — desenvolvedor Full Stack focado em aplicações web e soluções automatizadas. Combino senso de design com engenharia para entregar produtos bem acabados.',
        about_p2: 'Acredito que a tecnologia pode transformar experiências. Gosto de construir aplicações performáticas, bem projetadas e contribuir com código aberto.',
        about_stat_projects: 'Projetos',
        about_stat_years: 'Anos Exp',
        about_stat_dedicated: 'Dedicação',

        // Skills
        skills_title: 'Minhas <span class="accent">Habilidades</span>',
        skills_technical: 'Habilidades Técnicas',
        skills_database: 'Banco de Dados',
        skills_tools: 'Tecnologias & Ferramentas',

        // Projects
        projects_title: 'Projetos em <span class="accent">Destaque</span>',
        project_demo: 'Demo',
        project_code: 'Código',
        projects_view_all: 'Ver Todos os Projetos <i class="fas fa-arrow-right"></i>',
        project3_title: 'Serviço Auto-Hospedado',
        project4_title: 'Página Pessoal',

        // Project descriptions
        project1_desc: 'O Somnacity é uma plataforma digital que centraliza a agenda de música ao vivo em bares e espaços de entretenimento de Fortaleza. O projeto funciona como um agregador inteligente que automatiza a coleta de informações, organiza os dados com apoio de IA e oferece ao usuário uma forma simples e rápida de descobrir onde está tocando na cidade.',
        project2_desc: 'Plataforma de áudio web com identidade inspirada na nostalgia digital, combinando design minimalista e interface direta. O projeto explora simplicidade intencional, onde o visual reduzido e o nome refletem a proposta central: abrir, dar play e ouvir, oferecendo uma experiência de áudio que é ao mesmo tempo moderna e evocativa de memórias passadas.',
        project3_desc: 'Projeto experimental que explora uma arquitetura alternativa de infraestrutura, na qual um smartphone Android é utilizado como plataforma para execução e exposição de serviços web completos. A proposta demonstra como um dispositivo móvel pode operar como um ambiente de hospedagem funcional, capaz de executar aplicações e disponibilizá-las publicamente',
        project4_desc: 'Site pessoal desenvolvido com foco em apresentar trabalhos, ideias e motivações profissionais de forma clara e objetiva. O projeto prioriza simplicidade, organização de conteúdo e uma experiência direta. Criado em 2023, funciona como um ponto central para reunir informações profissionais e facilitar conexões. Simples, mas com propósito e clareza.',

        // Contact
        contact_title: 'Entre em <span class="accent">Contato</span>',
        contact_subtitle: 'Vamos Conversar',
        contact_desc: 'Estou sempre interessado em conhecer novos projetos e oportunidades. Se você tem uma pergunta ou só quer dizer olá, fique à vontade para entrar em contato!',
        contact_name_ph: 'Seu Nome',
        contact_email_ph: 'Seu E-mail',
        contact_msg_ph: 'Sua Mensagem',
        contact_submit: 'Enviar Mensagem',

        // Footer
        footer_text: '&copy; 2025 Sulivando. Todos os direitos reservados. Feito com <i class="fas fa-heart accent"></i> e código.',

        // JS messages
        msg_fill_fields: 'Por favor, preencha todos os campos',
        msg_sending: 'Enviando...',
        msg_success: 'Mensagem enviada com sucesso!',
        msg_error: 'Falha ao enviar mensagem. Tente novamente.',
    },

    en: {
        // Nav
        nav_home: 'Home',
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_projects: 'Projects',
        nav_contact: 'Contact',

        // Hero
        hero_title: 'Hi, I\'m <span class="accent">Sulivando</span>',
        hero_desc: 'I build efficient systems and digital experiences thoughtfully designed.',
        hero_cta_work: 'View My Work',
        hero_cta_contact: 'Get In Touch',

        // Typing effect
        typing_texts: ['Systems Analyst', 'Full Stack Developer', 'Android Developer', 'Automation Engineer', 'DevOps Engineer', 'Tech Enthusiast'],

        // About
        about_title: 'About <span class="accent">Me</span>',
        about_role: 'Systems Analyst',
        about_p1: 'I\'m Sulivando — a Full Stack developer focused on web apps and automated solutions. I combine design sense with engineering to ship polished products.',
        about_p2: 'I believe technology can transform experiences. I enjoy building performant, well-designed applications and contributing to open source.',
        about_stat_projects: 'Projects',
        about_stat_years: 'Years Exp',
        about_stat_dedicated: 'Dedicated',

        // Skills
        skills_title: 'My <span class="accent">Skills</span>',
        skills_technical: 'Technical Skills',
        skills_database: 'Database',
        skills_tools: 'Technologies & Tools',

        // Projects
        projects_title: 'Featured <span class="accent">Projects</span>',
        project_demo: 'Demo',
        project_code: 'Code',
        projects_view_all: 'View All Projects <i class="fas fa-arrow-right"></i>',
        project3_title: 'Self-Hosted Service',
        project4_title: 'Personal Page',

        // Project descriptions
        project1_desc: 'Somnacity is a digital platform that centralizes the live music schedule in bars and entertainment venues in Fortaleza. The project works as an intelligent aggregator that automates information collection, organizes data with AI support, and offers users a simple and fast way to discover where live music is playing in the city.',
        project2_desc: 'A web audio platform with an identity inspired by digital nostalgia, combining minimalist design and a direct interface. The project explores intentional simplicity, where the reduced visual and name reflect the core proposition: open, play and listen, offering an audio experience that is both modern and evocative of past memories.',
        project3_desc: 'An experimental project that explores an alternative infrastructure architecture, in which an Android smartphone is used as a platform for running and exposing complete web services. The proposal demonstrates how a mobile device can operate as a functional hosting environment, capable of running applications and making them publicly available.',
        project4_desc: 'Personal website developed with a focus on presenting work, ideas, and professional motivations in a clear and objective way. The project prioritizes simplicity, content organization, and a direct experience. Created in 2023, it serves as a central point for gathering professional information and facilitating connections. Simple, but with purpose and clarity.',

        // Contact
        contact_title: 'Get In <span class="accent">Touch</span>',
        contact_subtitle: 'Let\'s Connect',
        contact_desc: 'I\'m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!',
        contact_name_ph: 'Your Name',
        contact_email_ph: 'Your Email',
        contact_msg_ph: 'Your Message',
        contact_submit: 'Send Message',

        // Footer
        footer_text: '&copy; 2025 Sulivando. All rights reserved. Built with <i class="fas fa-heart accent"></i> and code.',

        // JS messages
        msg_fill_fields: 'Please fill in all fields',
        msg_sending: 'Sending...',
        msg_success: 'Message sent successfully!',
        msg_error: 'Failed to send message. Please try again.',
    }
};

// ── State ──
let currentLang = localStorage.getItem('lang') || 'pt';

// ── Public getter for current language (used by other scripts) ──
function getLang() { return currentLang; }

// ── Get a translation string by key ──
function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

// ── Apply translations to all data-i18n elements ──
function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val !== key) el.textContent = val;
    });

    // innerHTML (for elements containing HTML like spans, icons)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = t(key);
        if (val !== key) el.innerHTML = val;
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = t(key);
        if (val !== key) el.setAttribute('placeholder', val);
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang === 'pt' ? 'pt-br' : 'en';

    // Update typing effect texts
    if (window.updateTypingTexts) {
        window.updateTypingTexts(translations[currentLang].typing_texts);
    }

    // Update toggle button state
    updateToggleButton();
}

// ── Update the toggle button appearance ──
function updateToggleButton() {
    const toggleBtns = document.querySelectorAll('.lang-toggle');
    toggleBtns.forEach(btn => {
        const ptLabel = btn.querySelector('.lang-pt');
        const enLabel = btn.querySelector('.lang-en');
        if (ptLabel && enLabel) {
            if (currentLang === 'pt') {
                ptLabel.classList.add('active');
                enLabel.classList.remove('active');
            } else {
                enLabel.classList.add('active');
                ptLabel.classList.remove('active');
            }
        }
    });
}

// ── Toggle language ──
function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
}

// ── Init on DOM ready ──
function initI18n() {
    applyTranslations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
