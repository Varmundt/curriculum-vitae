        let lang = 'pt';

        const translations = {
            pt: {
                langBtn: 'EN',
                pdfBtn: 'PDF',
                age: '20 Anos',
                role: 'Desenvolvedor Back-End | C# • .NET • ASP.NET',
                aboutTitle: 'Sobre',
                aboutText: 'Estudante de Análise e Desenvolvimento de Sistemas com foco em back-end utilizando C# e .NET. Experiência complementar em front-end (HTML5, CSS3, JavaScript) e análise de dados com Power BI. Busco oportunidade de estágio para aplicar conhecimentos técnicos, contribuir em projetos desafiadores e crescer profissionalmente em um ambiente colaborativo.',
                skillsTitle: 'Habilidades Técnicas',
                skillCsharpLevel: '(Intermediário)',
                skillDotnetLevel: '(Básico)',
                skillOop: 'POO',
                skillOopLevel: '(Intermediário)',
                skillDb: 'MySQL / SQL',
                skillDbLevel: '(Básico)',
                skillPythonLevel: '(Básico)',
                skillHtmlLevel: '(Intermediário)',
                skillCssLevel: '(Intermediário)',
                skillJsLevel: '(Básico)',
                toolsTitle: 'Ferramentas',
                skillPowerbi: 'Power BI',
                skillVscode: 'VS Code / Visual Studio',
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
                role: 'Back-End Developer | C# • .NET • ASP.NET',
                aboutTitle: 'About',
                aboutText: 'Systems Analysis and Development student focused on back-end development using C# and .NET. Complementary experience in front-end (HTML5, CSS3, JavaScript) and data analysis with Power BI. Seeking internship opportunity to apply technical knowledge, contribute to challenging projects, and grow professionally in a collaborative environment.',
                skillsTitle: 'Technical Skills',
                skillCsharpLevel: '(Intermediate)',
                skillDotnetLevel: '(Basic)',
                skillOop: 'OOP',
                skillOopLevel: '(Intermediate)',
                skillDb: 'MySQL / SQL',
                skillDbLevel: '(Basic)',
                skillPythonLevel: '(Basic)',
                skillHtmlLevel: '(Intermediate)',
                skillCssLevel: '(Intermediate)',
                skillJsLevel: '(Basic)',
                toolsTitle: 'Tools',
                skillPowerbi: 'Power BI',
                skillVscode: 'VS Code / Visual Studio',
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

            document.getElementById('lang-btn').textContent = t.langBtn;
            document.getElementById('pdf-btn').textContent = t.pdfBtn;
            document.getElementById('age').textContent = t.age;
            document.getElementById('role').textContent = t.role;
            document.getElementById('about-title').textContent = t.aboutTitle;
            document.getElementById('about-text').textContent = t.aboutText;
            document.getElementById('skills-title').textContent = t.skillsTitle;
            document.getElementById('skill-csharp-level').textContent = t.skillCsharpLevel;
            document.getElementById('skill-dotnet-level').textContent = t.skillDotnetLevel;
            document.getElementById('skill-oop').textContent = t.skillOop;
            document.getElementById('skill-oop-level').textContent = t.skillOopLevel;
            document.getElementById('skill-db').textContent = t.skillDb;
            document.getElementById('skill-db-level').textContent = t.skillDbLevel;
            document.getElementById('skill-python-level').textContent = t.skillPythonLevel;
            document.getElementById('skill-html-level').textContent = t.skillHtmlLevel;
            document.getElementById('skill-css-level').textContent = t.skillCssLevel;
            document.getElementById('skill-js-level').textContent = t.skillJsLevel;
            document.getElementById('tools-title').textContent = t.toolsTitle;
            document.getElementById('skill-powerbi').textContent = t.skillPowerbi;
            document.getElementById('skill-vscode').textContent = t.skillVscode;
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
            document.getElementById('cert-org').textContent = t.certOrg;
            document.getElementById('cert-period').textContent = t.certPeriod;
            document.getElementById('cert-desc').textContent = t.certDesc;
            document.getElementById('lang-title').textContent = t.langTitle;
            document.getElementById('lang-portuguese').textContent = t.langPortuguese;
            document.getElementById('lang-portuguese-level').textContent = t.langPortugueseLevel;
            document.getElementById('lang-english').textContent = t.langEnglish;
            document.getElementById('lang-english-level').textContent = t.langEnglishLevel;
            document.getElementById('lang-japanese').textContent = t.langJapanese;
            document.getElementById('lang-japanese-level').textContent = t.langJapaneseLevel;
            document.getElementById('lang-spanish').textContent = t.langSpanish;
            document.getElementById('lang-spanish-level').textContent = t.langSpanishLevel;
        }

        function downloadPDF() {
            window.print();
        }