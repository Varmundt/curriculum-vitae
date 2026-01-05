        let lang = 'pt';

        const translations = {
            pt: {
                langBtn: 'EN',
                pdfBtn: 'PDF',
                age: '20 Anos',
                role: 'Desenvolvedor Back-End C# | .NET | Conhecimento em Front-End e Suporte Técnico',
                aboutTitle: 'Sobre',
                aboutText: 'Estudante de Análise e Desenvolvimento de Sistemas com foco full-stack: back-end em C# e front-end em HTML5, CSS3 e JavaScript. Domínio de inglês avançado (C1), conhecimento em Power BI e vivência comercial que reforçou minha comunicação e capacidade de resolver problemas sob pressão. Portfólio ativo no GitHub. Busco meu primeiro estágio para crescer tecnicamente e contribuir em um time colaborativo.',
                skillsTitle: 'Habilidades',
                skillDb: 'MySQL',
                skillOop: 'POO',
                frontendNote: 'Desenvolvimento WEB:',
                toolsTitle: 'Ferramentas',
                skillPowerbi: 'Power BI',
                skillEnglish: 'Inglês (C1)',
                skillJapanese: 'Japonês (N5)',
                skillSpanish: 'Espanhol (A1)',
                expTitle: 'Experiência',
                expRole: 'Operador de Caixa',
                expPeriod: 'Agosto 2023 - Maio 2025',
                expDesc: 'Responsável por atendimento ao cliente, controle de estoque, lançamento de notas fiscais no sistema e processamento de pagamentos. Onde desenvolvi habilidades de organização, atenção a detalhes e resolução de problemas em ambiente de alta demanda.',
                eduTitle: 'Educação',
                eduDegree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
                eduInstitution: 'UNINTER - Centro Universitário Internacional',
                eduPeriod: 'Maio 2025 - Jun 2027',
                eduDesc: 'HTML5, CSS3, Java, JavaScript, Python, Linux, POO, SQL, Design Responsivo, Análise de Requisitos, Versionamento.',
                certTitle: 'Certificações',
                certName: 'Fundamentos do Power BI (37h)',
                certPeriod: 'Jul - Ago 2025',
                certDesc: 'Análise e modelagem de dados, Power Query, DAX, dashboards interativos e boas práticas de visualização.'
            },
            en: {
                langBtn: 'PT',
                pdfBtn: 'PDF',
                age: '20 Years Old',
                role: 'Back-End C# Developer | .NET | Front-End and Technical Support Knowledge',
                aboutTitle: 'About',
                aboutText: 'Systems Analysis and Development student with full-stack focus: C# back-end and HTML5, CSS3, JavaScript front-end. Advanced English (C1), Power BI knowledge, and commercial experience that strengthened communication and problem-solving skills under pressure. Active GitHub portfolio. Seeking first internship to grow technically and contribute to a collaborative team.',
                skillsTitle: 'Skills',
                skillDb: 'MySQL',
                skillOop: 'OOP',
                frontendNote: 'WEB Development:',
                toolsTitle: 'Tools',
                skillPowerbi: 'Power BI',
                skillEnglish: 'English (C1)',
                skillJapanese: 'Japanese (N5)',
                skillSpanish: 'Spanish (A1)',
                expTitle: 'Experience',
                expRole: 'Cashier Operator',
                expPeriod: 'August 2023 - May 2025',
                expDesc: 'Responsible for customer service, inventory control, invoice entry and payment processing. Developed organizational skills, attention to detail and problem-solving in high-demand environment.',
                eduTitle: 'Education',
                eduDegree: 'Technologist in Systems Analysis and Development',
                eduInstitution: 'UNINTER - International University Center',
                eduPeriod: 'May 2025 - Jun 2027',
                eduDesc: 'HTML5, CSS3, Java, JavaScript, Python, Linux, OOP, SQL, Responsive Design, Requirements Analysis, Versioning.',
                certTitle: 'Certifications',
                certName: 'Power BI Fundamentals (37h)',
                certPeriod: 'Jul - Aug 2025',
                certDesc: 'Data analysis and modeling, Power Query, DAX, interactive dashboards and visualization best practices.'
            }
        };

        function toggleLang() {
            lang = lang === 'pt' ? 'en' : 'pt';
            const t = translations[lang];

            document.getElementById('lang-btn').textContent = t.langBtn;
            document.getElementById('pdf-btn').textContent = t.pdfBtn;
            document.getElementById('age').textContent = t.age;
            document.getElementById('role').textContent = t.role;
            document.getElementById('about-title').textContent = t.aboutTitle;
            document.getElementById('about-text').textContent = t.aboutText;
            document.getElementById('skills-title').textContent = t.skillsTitle;
            document.getElementById('skill-db').textContent = t.skillDb;
            document.getElementById('skill-oop').textContent = t.skillOop;
            document.getElementById('frontend-note').textContent = t.frontendNote;
            document.getElementById('tools-title').textContent = t.toolsTitle;
            document.getElementById('skill-powerbi').textContent = t.skillPowerbi;
            document.getElementById('skill-english').textContent = t.skillEnglish;
            document.getElementById('skill-japanese').textContent = t.skillJapanese;
            document.getElementById('skill-spanish').textContent = t.skillSpanish;
            document.getElementById('exp-title').textContent = t.expTitle;
            document.getElementById('exp-role').textContent = t.expRole;
            document.getElementById('exp-period').textContent = t.expPeriod;
            document.getElementById('exp-desc').textContent = t.expDesc;
            document.getElementById('edu-title').textContent = t.eduTitle;
            document.getElementById('edu-degree').textContent = t.eduDegree;
            document.getElementById('edu-institution').textContent = t.eduInstitution;
            document.getElementById('edu-period').textContent = t.eduPeriod;
            document.getElementById('edu-desc').textContent = t.eduDesc;
            document.getElementById('cert-title').textContent = t.certTitle;
            document.getElementById('cert-name').textContent = t.certName;
            document.getElementById('cert-period').textContent = t.certPeriod;
            document.getElementById('cert-desc').textContent = t.certDesc;
        }

        function downloadPDF() {
            window.print();
        }