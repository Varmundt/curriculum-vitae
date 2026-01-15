        let lang = 'pt';

        const translations = {
            pt: {
                langBtn: 'EN',
                pdfBtn: 'PDF',
                age: '20 Anos',
                role: 'Back-End Developer | C# | .NET | ASP.NET Web API | SQL',
                aboutTitle: 'Sobre',
                aboutText: 'Estudante de Análise e Desenvolvimento de Sistemas com foco em desenvolvimento back-end utilizando C# e .NET. Experiência prática com ASP.NET Web API e desenvolvimento de APIs REST. Conhecimentos complementares em front-end (HTML5, CSS3, JavaScript), banco de dados SQL e análise de dados com Power BI. Busco oportunidade de estágio para aplicar conhecimentos técnicos, contribuir em projetos desafiadores e crescer profissionalmente em um ambiente colaborativo.',
                skillsTitle: 'Habilidades Técnicas',
                skillDb: 'MySQL / SQL',
                toolsTitle: 'Ferramentas',
                skillPowerbi: 'Power BI',
                skillVscode: 'VS Code / JetBrains Rider',
                expTitle: 'Experiência',
                expRole: 'Operador de Caixa',
                expPeriod: 'Agosto 2023 - Maio 2025',
                expDesc: 'Atendimento ao cliente, controle de estoque, lançamento de notas fiscais e processamento de pagamentos. Desenvolvi habilidades de organização, atenção a detalhes, comunicação efetiva e resolução de problemas em ambiente de alta demanda.',
                eduTitle: 'Educação',
                eduDegree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
                eduInstitution: 'UNINTER - Centro Universitário Internacional',
                eduPeriod: 'Maio 2025 - Jun 2027',
                eduDesc: 'Desenvolvimento web (HTML5, CSS3, JavaScript), programação orientada a objetos (Java, Python), banco de dados (SQL), Linux, design responsivo, análise de requisitos e controle de versão.',
                certTitle: 'Certificações',
                certName: 'Fundamentos do Power BI',
                certOrg: 'Fundação Bradesco',
                certPeriod: 'Jul - Ago 2025 (37h)',
                certDesc: 'Análise e modelagem de dados, Power Query, DAX, criação de dashboards interativos e boas práticas de visualização de dados.',
                langTitle: 'Idiomas',
                langPortuguese: '🇧🇷 Português',
                langPortugueseLevel: 'Nativo',
                langEnglish: '🇺🇸 Inglês',
                langEnglishLevel: 'Avançado (C1)',
                langJapanese: '🇯🇵 Japonês',
                langJapaneseLevel: 'Básico (N5)',
                langSpanish: '🇪🇸 Espanhol',
                langSpanishLevel: 'Básico (A1)'
            },
            en: {
                langBtn: 'PT',
                pdfBtn: 'PDF',
                age: '20 Years Old',
                role: 'Back-End Developer | C# | .NET | ASP.NET Web API | SQL',
                aboutTitle: 'About',
                aboutText: 'Systems Analysis and Development student focused on back-end development using C# and .NET. Practical experience with ASP.NET Web API and REST API development. Complementary knowledge in front-end (HTML5, CSS3, JavaScript), SQL databases, and data analysis with Power BI. Seeking internship opportunity to apply technical knowledge, contribute to challenging projects, and grow professionally in a collaborative environment.',
                skillsTitle: 'Technical Skills',
                skillDb: 'MySQL / SQL',
                toolsTitle: 'Tools',
                skillPowerbi: 'Power BI',
                skillVscode: 'VS Code / JetBrains Rider',
                expTitle: 'Experience',
                expRole: 'Cashier Operator',
                expPeriod: 'August 2023 - May 2025',
                expDesc: 'Customer service, inventory control, invoice entry, and payment processing. Developed organizational skills, attention to detail, effective communication, and problem-solving in high-demand environment.',
                eduTitle: 'Education',
                eduDegree: 'Technologist in Systems Analysis and Development',
                eduInstitution: 'UNINTER - International University Center',
                eduPeriod: 'May 2025 - Jun 2027',
                eduDesc: 'Web development (HTML5, CSS3, JavaScript), object-oriented programming (Java, Python), databases (SQL), Linux, responsive design, requirements analysis, and version control.',
                certTitle: 'Certifications',
                certName: 'Power BI Fundamentals',
                certOrg: 'Fundação Bradesco',
                certPeriod: 'Jul - Aug 2025 (37h)',
                certDesc: 'Data analysis and modeling, Power Query, DAX, interactive dashboard creation, and data visualization best practices.',
                langTitle: 'Languages',
                langPortuguese: '🇧🇷 Portuguese',
                langPortugueseLevel: 'Native',
                langEnglish: '🇺🇸 English',
                langEnglishLevel: 'Advanced (C1)',
                langJapanese: '🇯🇵 Japanese',
                langJapaneseLevel: 'Basic (N5)',
                langSpanish: '🇪🇸 Spanish',
                langSpanishLevel: 'Basic (A1)'
            }
        };

        function toggleLang() {
            lang = lang === 'pt' ? 'en' : 'pt';
            const t = translations[lang];

            // Helper function to safely update elements
            const update = (id, value) => {
                const el = document.getElementById(id);
                if (el) el.textContent = value;
            };

            // Update all elements
            update('lang-btn', t.langBtn);
            update('pdf-btn', t.pdfBtn);
            update('age', t.age);
            update('role', t.role);
            update('about-title', t.aboutTitle);
            update('about-text', t.aboutText);
            update('skills-title', t.skillsTitle);
            update('skill-db', t.skillDb);
            update('tools-title', t.toolsTitle);
            update('skill-powerbi', t.skillPowerbi);
            update('skill-vscode', t.skillVscode);
            update('exp-title', t.expTitle);
            update('exp-role', t.expRole);
            update('exp-period', t.expPeriod);
            update('exp-desc', t.expDesc);
            update('edu-title', t.eduTitle);
            update('edu-degree', t.eduDegree);
            update('edu-institution', t.eduInstitution);
            update('edu-period', t.eduPeriod);
            update('edu-desc', t.eduDesc);
            update('cert-title', t.certTitle);
            update('cert-name', t.certName);
            update('cert-org', t.certOrg);
            update('cert-period', t.certPeriod);
            update('cert-desc', t.certDesc);
            update('lang-title', t.langTitle);
            update('lang-portuguese', t.langPortuguese);
            update('lang-portuguese-level', t.langPortugueseLevel);
            update('lang-english', t.langEnglish);
            update('lang-english-level', t.langEnglishLevel);
            update('lang-japanese', t.langJapanese);
            update('lang-japanese-level', t.langJapaneseLevel);
            update('lang-spanish', t.langSpanish);
            update('lang-spanish-level', t.langSpanishLevel);
        }

        function downloadPDF() {
            window.print();
        }