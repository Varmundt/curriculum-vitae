        var currentLang = 'pt';

        var translations = {
            pt: {
                pageTitle: 'Currículo',
                langBtn: 'EN',
                downloadBtn: 'Baixar PDF',
                profileAge: '20 Anos',
                profileRole: 'Estagiário Back-End C# | Conhecimento em Front-End e Suporte Técnico',
                aboutTitle: 'Sobre',
                aboutText: 'Estudante de Análise e Desenvolvimento de Sistemas com perfil full-stack: back-end em C# (POO, MySQL, Regex) e front-end com HTML5/CSS3/JavaScript. Diferenciais: inglês avançado (C1), Power BI para análise de dados e vivência comercial que desenvolveu habilidades de comunicação e resolução de problemas. Projetos disponíveis no GitHub. Busco primeira oportunidade de estágio para evoluir tecnicamente em um ambiente colaborativo.',
                skillsTitle: 'Habilidades',
                skillRegex: 'Estrutura de Regex',
                skillDb: 'Banco de Dados MySQL',
                skillOop: 'Programação Orientada a Objetos (POO)',
                frontendSubtitle: 'Experiência em desenvolvimento WEB utilizando:',
                toolsTitle: 'Ferramentas e Extras',
                skillPowerbi: 'Power BI Básico',
                skillEnglish: 'Inglês avançado (C1)',
                skillJapanese: 'Japonês básico (N5)',
                skillSpanish: 'Espanhol básico (A1)',
                experienceTitle: 'Experiência',
                expRole: 'Operador de Caixa',
                expPeriod: 'Agosto 2023 - Maio 2025',
                expDesc: 'Responsável por atendimento ao cliente, controle de estoque, lançamento de notas fiscais no sistema e processamento de pagamentos. Onde desenvolvi habilidades de organização, atenção a detalhes e resolução de problemas em ambiente de alta demanda.',
                educationTitle: 'Educação',
                eduDegree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
                eduInstitution: 'UNINTER - Centro Universitário Internacional',
                eduPeriod: 'Maio 2025 - Junho 2027 (em curso)',
                eduDetails: 'Conteúdos: HTML5, CSS3, Java, JavaScript, Python, Linux, Programação Orientada a Objetos, Banco de Dados SQL, Design Responsivo, Análise de Requisitos e Versionamento...',
                certTitle: 'Cursos e Certificações',
                certName: 'Fundamentos do Power BI (37 Horas)',
                certPeriod: 'Julho 2025 - Agosto 2025',
                certDesc: 'Formação voltada à análise e modelagem de dados com Power BI, incluindo coleta e transformação via Power Query, criação de medidas em DAX, desenvolvimento de dashboards interativos e aplicação de boas práticas de visualização e desempenho.'
            },
            en: {
                pageTitle: 'Resume',
                langBtn: 'PT',
                downloadBtn: 'Download PDF',
                profileAge: '20 Years Old',
                profileRole: 'Back-End C# Intern | Front-End and Technical Support Knowledge',
                aboutTitle: 'About',
                aboutText: 'Systems Analysis and Development student with full-stack profile: back-end in C# (OOP, MySQL, Regex) and front-end with HTML5/CSS3/JavaScript. Differentials: advanced English (C1), Power BI for data analysis and commercial experience that developed communication and problem-solving skills. Projects available on GitHub. Seeking first internship opportunity to evolve technically in a collaborative environment.',
                skillsTitle: 'Skills',
                skillRegex: 'Regex Structure',
                skillDb: 'MySQL Database',
                skillOop: 'Object-Oriented Programming (OOP)',
                frontendSubtitle: 'Experience in WEB development using:',
                toolsTitle: 'Tools and Extras',
                skillPowerbi: 'Basic Power BI',
                skillEnglish: 'Advanced English (C1)',
                skillJapanese: 'Basic Japanese (N5)',
                skillSpanish: 'Basic Spanish (A1)',
                experienceTitle: 'Experience',
                expRole: 'Cashier Operator',
                expPeriod: 'August 2023 - May 2025',
                expDesc: 'Responsible for customer service, inventory control, invoice entry in the system and payment processing. Where I developed organizational skills, attention to detail and problem solving in a high-demand environment.',
                educationTitle: 'Education',
                eduDegree: 'Technologist in Systems Analysis and Development',
                eduInstitution: 'UNINTER - International University Center',
                eduPeriod: 'May 2025 - June 2027 (ongoing)',
                eduDetails: 'Contents: HTML5, CSS3, Java, JavaScript, Python, Linux, Object-Oriented Programming, SQL Database, Responsive Design, Requirements Analysis and Versioning...',
                certTitle: 'Courses and Certifications',
                certName: 'Power BI Fundamentals (37 Hours)',
                certPeriod: 'July 2025 - August 2025',
                certDesc: 'Training focused on data analysis and modeling with Power BI, including collection and transformation via Power Query, creation of measures in DAX, development of interactive dashboards and application of best practices in visualization and performance.'
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            var t = translations[currentLang];

            document.getElementById('page-title').textContent = t.pageTitle;
            document.getElementById('lang-btn-text').textContent = t.langBtn;
            document.getElementById('download-btn-text').textContent = t.downloadBtn;
            document.getElementById('profile-age').textContent = t.profileAge;
            document.getElementById('profile-role').textContent = t.profileRole;
            document.getElementById('about-title').textContent = t.aboutTitle;
            document.getElementById('about-text').textContent = t.aboutText;
            document.getElementById('skills-title').textContent = t.skillsTitle;
            document.getElementById('skill-regex').textContent = t.skillRegex;
            document.getElementById('skill-db').textContent = t.skillDb;
            document.getElementById('skill-oop').textContent = t.skillOop;
            document.getElementById('frontend-subtitle').textContent = t.frontendSubtitle;
            document.getElementById('tools-title').textContent = t.toolsTitle;
            document.getElementById('skill-powerbi').textContent = t.skillPowerbi;
            document.getElementById('skill-english').textContent = t.skillEnglish;
            document.getElementById('skill-japanese').textContent = t.skillJapanese;
            document.getElementById('skill-spanish').textContent = t.skillSpanish;
            document.getElementById('experience-title').textContent = t.experienceTitle;
            document.getElementById('exp-role').textContent = t.expRole;
            document.getElementById('exp-period').textContent = t.expPeriod;
            document.getElementById('exp-desc').textContent = t.expDesc;
            document.getElementById('education-title').textContent = t.educationTitle;
            document.getElementById('edu-degree').textContent = t.eduDegree;
            document.getElementById('edu-institution').textContent = t.eduInstitution;
            document.getElementById('edu-period').textContent = t.eduPeriod;
            document.getElementById('edu-details').textContent = t.eduDetails;
            document.getElementById('cert-title').textContent = t.certTitle;
            document.getElementById('cert-name').textContent = t.certName;
            document.getElementById('cert-period').textContent = t.certPeriod;
            document.getElementById('cert-desc').textContent = t.certDesc;
        }

        function downloadPDF() {
            var msg = currentLang === 'pt' 
                ? 'Use Ctrl+P (ou Cmd+P no Mac) e selecione "Salvar como PDF" para baixar seu currículo!' 
                : 'Use Ctrl+P (or Cmd+P on Mac) and select "Save as PDF" to download your resume!';
            alert(msg);
            window.print();
        }