const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const parallaxItems = [...document.querySelectorAll("[data-speed]")];
const cursorGlow = document.querySelector(".cursor-glow");
const langButtons = [...document.querySelectorAll(".lang-btn")];

const i18n = {
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.mylettering": "MyLettering",
    "nav.initiative": "Initiative",
    "nav.timeline": "Timeline",
    "nav.connect": "Connect",
    "nav.email": "Email",
    "hero.eyebrow": "Creative Direction • Brand Strategy • Education • Digital Marketing",
    "hero.title1": "Ideas into influence.",
    "hero.title2": "Brands into momentum.",
    "hero.title3": "Talent into outcomes.",
    "hero.copy":
      "I help brands and institutions transform fragmented communication into <strong>high-performing creative systems</strong> people remember and trust.",
    "hero.subcopy":
      "<strong>15+ years teaching</strong>, now integrating <strong>AI</strong> inside my classes to help students go further. My privilege is helping their <strong>talent blow up</strong>.",
    "hero.hireNote":
      "For brands hiring creative leadership: I bridge <strong>strategy</strong>, <strong>content</strong>, and <strong>execution</strong> end to end.",
    "hero.ctaPrimary": "Start a Project",
    "hero.ctaInstagram": "Instagram",
    "hero.ctaLinkedIn": "LinkedIn",
    "hero.wordmark": "STRATEGY + STORY + EXECUTION",
    "scan.eyebrow": "Recruiter Snapshot",
    "scan.roleLabel": "Role Fit",
    "scan.roleValue": "Creative Director / <strong>Brand Strategy Lead</strong>",
    "scan.impactLabel": "Proven Impact",
    "scan.impactValue": "<strong>30K+</strong> books, <strong>70K+</strong> community, <strong>15+ years</strong> teaching",
    "scan.edgeLabel": "Differentiator",
    "scan.edgeValue": "<strong>Brand strategy</strong> + <strong>AI education</strong> + execution",
    "scan.availabilityLabel": "Availability",
    "scan.availabilityValue": "<strong>Full-time</strong>, fractional leadership, or consulting",
    "marquee.line":
      "CREATIVE STRATEGY • AI-POWERED LEARNING • GAMIFIED ENGAGEMENT • BRAND SYSTEMS • EDUCATIONAL INNOVATION •",
    "proof.item1": "Years teaching design, communication, and UX/UI.",
    "proof.item2": "Books sold from the Lettering sin limites trilogy.",
    "proof.item3": "Community built around My Lettering.",
    "proof.item4": "Students trained in workshops and online programs.",
    "about.eyebrow": "About",
    "about.title": "Bruto pero decidido: from designer to builder of creative ecosystems.",
    "about.p1":
      "My path into teaching started unexpectedly when I stepped into a classroom to help a friend. That first class changed everything.",
    "about.p2":
      "Today I combine <strong>design</strong>, <strong>strategy</strong>, and <strong>AI-assisted learning</strong> so students and teams reach deeper skills, faster.",
    "about.p3":
      "My privilege is to identify talent and multiply it until it becomes visible, valuable, and unstoppable.",
    "about.listTitle": "Core Outcomes I Build:",
    "about.li1": "Clear brand positioning tied to business goals.",
    "about.li2": "Campaigns that work across digital and physical spaces.",
    "about.li3": "Content systems that grow audience, trust, and conversion.",
    "about.li4": "Educational products that turn intuition into repeatable method.",
    "narrative.eyebrow": "Storyline",
    "narrative.title":
      "The story I build for every client is simple: clarity first, distinction second, growth always.",
    "narrative.copy":
      "Whether it is a brand launch, an educational platform, or a digital campaign, I design creative ecosystems that move people from attention to action.",
    "narrative.step1.kicker": "Step 01",
    "narrative.step1.title": "Find the strategic truth.",
    "narrative.step1.copy":
      "Diagnose market tension, audience behavior, and business ambition to define what should never be generic.",
    "narrative.step2.kicker": "Step 02",
    "narrative.step2.title": "Shape the narrative system.",
    "narrative.step2.copy":
      "Build positioning, creative direction, and message architecture that teams can scale without dilution.",
    "narrative.step3.kicker": "Step 03",
    "narrative.step3.title": "Activate and optimize.",
    "narrative.step3.copy":
      "Launch campaigns, learning experiences, and growth loops with measurable outcomes and continuous iteration.",
    "work.eyebrow": "Selected Work",
    "work.title": "Three systems. Three contexts. One principle: clarity drives growth.",
    "work.case1.kicker": "Case 01 • My Lettering",
    "work.case1.title": "Creation and Expansion Strategy",
    "work.case1.copy":
      "Built a lettering ecosystem from zero: community, books, online programs, and brand collaborations across Latin America and the U.S.",
    "work.case1.li1": "70,000+ social followers and 45,000+ potential-client database.",
    "work.case1.li2": "3 published books with 30,000+ copies sold.",
    "work.case1.li3": "Collaborations with Adidas, Noel, Cafe Matiz, Panamericana, and more.",
    "work.case2.kicker": "Case 02 • edding LatAm",
    "work.case2.title": "Content Strategy and Audience Growth",
    "work.case2.copy":
      "Led social content strategy and creative execution for Colombia and Argentina, connecting brand value with creator communities and product relevance.",
    "work.case2.li1": "40% growth on Instagram and Facebook with optimized campaigns.",
    "work.case2.li2": "Stronger engagement and expanded regional relevance.",
    "work.case2.li3": "Influencer and event activations to scale awareness.",
    "work.case3.kicker": "Case 03 • UDES",
    "work.case3.title": '"Aprende, Aplica, Avanza" Launch Campaign',
    "work.case3.copy":
      "Creative consulting for the technical-program launch campaign, translating academic value into bold, youth-relevant visual communication.",
    "work.case3.li1": "Integrated concept for OOH and digital touchpoints.",
    "work.case3.li2": "Visual narrative built for immediate recall and aspiration.",
    "work.case3.li3": "Campaign live in 2025.",
    "initiative.eyebrow": "Current Initiative (Under Approval)",
    "initiative.title": "Certeza Creativa: enrollment ecosystem design for 2026.",
    "initiative.p1":
      "I am currently building a growth ecosystem for admissions that blends strategic storytelling, gamification mechanics, and AI-assisted decision support.",
    "initiative.p2":
      "Project details are confidential during approval. The public scope reflects my core capabilities: acquisition architecture, conversion journeys, and educational positioning.",
    "initiative.cta": "Request Portfolio Deck",
    "initiative.card1.title": "Enrollment Architecture",
    "initiative.card1.copy": "From awareness to application with coherent message flow.",
    "initiative.card2.title": "Gamified Journeys",
    "initiative.card2.copy": "Progress loops that increase motivation and completion.",
    "initiative.card3.title": "AI Integration",
    "initiative.card3.copy": "Smarter guidance, feedback, and learning personalization.",
    "initiative.card4.title": "Content Orchestration",
    "initiative.card4.copy": "Cross-channel creative systems for sustained growth.",
    "services.eyebrow": "Services",
    "services.title": "What I build with teams.",
    "services.card1.title": "Brand Strategy",
    "services.card1.copy": "Positioning, narrative architecture, and identity direction.",
    "services.card2.title": "Creative Direction",
    "services.card2.copy": "Campaign concepts and multi-platform creative alignment.",
    "services.card3.title": "Growth Marketing",
    "services.card3.copy": "Performance-minded communication for modern channels.",
    "services.card4.title": "Education Design",
    "services.card4.copy": "Learning experiences enhanced with AI and participation systems.",
    "mylettering.eyebrow": "Vision",
    "mylettering.title": "My Lettering: from hobby to movement.",
    "mylettering.p1":
      "One day our first book entered the top five best-selling titles. That moment confirmed: when passion meets disciplined execution, ideas scale.",
    "mylettering.p2":
      "Together with my wife, we built My Lettering into a platform helping thousands reconnect with creativity through books, workshops, and community.",
    "mylettering.authorNote": "Published author and creative entrepreneur with proven editorial traction.",
    "mylettering.book1": "Lettering sin limites",
    "mylettering.book2": "Lettering sin limites 2",
    "mylettering.book3": "Lettering sin limites 3",
    "mylettering.cta": "Visit @myLETTERING_CO",
    "timeline.eyebrow": "Experience",
    "timeline.title": "Work history grounded in creative leadership and education.",
    "timeline.item1.title": "Professor · Universidad Isthmus (Panama)",
    "timeline.item1.copy":
      "Teaching design, communication, UX/UI, and AI-assisted workflows to improve student outcomes and confidence.",
    "timeline.item2.title": "Cofounder & Creative Director · My Lettering S.A.S (Colombia)",
    "timeline.item2.copy":
      "Built community, products, alliances, and campaigns across publishing, workshops, and digital education.",
    "timeline.item3.title": "Social Media Manager & Content Creator · edding LatAm",
    "timeline.item3.copy":
      "Directed social strategy, creator collaborations, and campaign content to increase engagement and market penetration.",
    "timeline.item4.title": "Creative Director · Imagen Group (Colombia)",
    "timeline.item4.copy":
      "Led agency teams from concept to execution, overseeing quality, consistency, and strategic creative output.",
    "numbers.eyebrow": "Not to brag, but here are the numbers",
    "numbers.li1": "30,000+ books sold in Latin America and the United States.",
    "numbers.li2": "3 books published with Editorial Planeta.",
    "numbers.li3": "15+ years as a university professor.",
    "numbers.li4": "1,500+ students in workshops and online programs.",
    "numbers.li5": "40% social growth delivered for edding campaigns.",
    "numbers.li6": "15+ brand collaborations including Adidas, Ralph Lauren, and Noel.",
    "numbers.li7": "45,000+ leads generated through My Lettering ecosystem.",
    "numbers.li8": "Selected among 100 entrepreneurs in MinTic consolidation program.",
    "hire.eyebrow": "For Headhunters & Talent Experts",
    "hire.title": "Fast match framework for brands, teams, and recruiters.",
    "hire.note":
      "Open to strategic roles and consulting mandates where <strong>creative leadership</strong>, <strong>growth thinking</strong>, and <strong>education innovation</strong> are mission-critical.",
    "hire.signal1.kicker": "Role Fit",
    "hire.signal1.title": "Creative Director / Brand Strategy Lead",
    "hire.signal2.kicker": "Leadership",
    "hire.signal2.title": "Cross-functional teams, measurable outcomes",
    "hire.signal3.kicker": "Engagement",
    "hire.signal3.title": "Available for full-time, fractional, or consulting",
    "hire.card1.kicker": "Model 01",
    "hire.card1.title": "Brand Sprint",
    "hire.card1.copy":
      "Fast strategic alignment for teams needing clarity, positioning, and immediate communication upgrades.",
    "hire.card2.kicker": "Model 02",
    "hire.card2.title": "Campaign Architecture",
    "hire.card2.copy":
      "End-to-end creative direction for launch campaigns across digital, social, and physical touchpoints.",
    "hire.card3.kicker": "Model 03",
    "hire.card3.title": "Education & Innovation Lab",
    "hire.card3.copy":
      "AI-enhanced learning and gamification frameworks to improve engagement and conversion in education ecosystems.",
    "hire.card4.kicker": "Model 04",
    "hire.card4.title": "Executive Creative Placement",
    "hire.card4.copy":
      "Ideal fit for Creative Director, Brand Strategy Lead, and Education Innovation roles requiring both strategic thinking and hands-on delivery.",
    "process.eyebrow": "Method",
    "process.title": "How projects move from idea to traction.",
    "process.item1.title": "Diagnosis",
    "process.item1.copy": "Understand business context, audience reality, and market tensions.",
    "process.item2.title": "Positioning",
    "process.item2.copy": "Define narrative territory and strategic pillars.",
    "process.item3.title": "Creative Build",
    "process.item3.copy": "Design assets, message systems, and experiences.",
    "process.item4.title": "Activation",
    "process.item4.copy": "Launch with measurable goals and iterate with data.",
    "contact.eyebrow": "Open to Collaborate",
    "contact.title": "If you need a creative partner who can think and execute, let us talk.",
    "contact.copy": "Share your challenge, timeline, and ambition. I will reply with a clear roadmap and first move.",
    "contact.instagram": "Instagram",
    "contact.linkedin": "LinkedIn",
    "footer.copy": "Portfolio of Luis Miguel Caamano",
    "alt.orange": "Luis Miguel Caamano portrait in warm orange tones",
    "alt.dark": "Black and white portrait of Luis Miguel Caamano",
    "alt.seated": "Luis Miguel Caamano seated portrait in studio",
    "alt.darkArt": "Artistic portrait of Luis Miguel Caamano in black and white",
    "alt.books": "Lettering sin limites books collection by Luis Miguel Caamano and Alejandra Perdomo"
  },
  es: {
    "nav.about": "Perfil",
    "nav.work": "Proyectos",
    "nav.mylettering": "MyLettering",
    "nav.initiative": "Iniciativa",
    "nav.timeline": "Trayectoria",
    "nav.connect": "Contacto",
    "nav.email": "Correo",
    "hero.eyebrow": "Dirección Creativa • Estrategia de Marca • Educación • Marketing Digital",
    "hero.title1": "Ideas con influencia.",
    "hero.title2": "Marcas con impulso.",
    "hero.title3": "Talento con resultados.",
    "hero.copy":
      "Ayudo a marcas e instituciones a convertir comunicación fragmentada en <strong>sistemas creativos de alto rendimiento</strong> que la gente recuerda y en los que confía.",
    "hero.subcopy":
      "<strong>Más de 15 años enseñando</strong>, ahora integrando <strong>IA</strong> en clase para llevar más lejos a mis estudiantes. Mi privilegio es hacer que su <strong>talento explote</strong>.",
    "hero.hireNote":
      "Para marcas que buscan liderazgo creativo: conecto <strong>estrategia</strong>, <strong>contenido</strong> y <strong>ejecución</strong> de punta a punta.",
    "hero.ctaPrimary": "Iniciar Proyecto",
    "hero.ctaInstagram": "Instagram",
    "hero.ctaLinkedIn": "LinkedIn",
    "hero.wordmark": "ESTRATEGIA + HISTORIA + EJECUCION",
    "scan.eyebrow": "Resumen para Recruiters",
    "scan.roleLabel": "Rol Objetivo",
    "scan.roleValue": "Director Creativo / <strong>Líder de Estrategia de Marca</strong>",
    "scan.impactLabel": "Impacto Probado",
    "scan.impactValue": "<strong>30K+</strong> libros, <strong>70K+</strong> comunidad, <strong>15+ años</strong> enseñando",
    "scan.edgeLabel": "Diferenciador",
    "scan.edgeValue": "<strong>Estrategia de marca</strong> + <strong>educación con IA</strong> + ejecución",
    "scan.availabilityLabel": "Disponibilidad",
    "scan.availabilityValue": "<strong>Full-time</strong>, liderazgo fraccional o consultoría",
    "marquee.line":
      "ESTRATEGIA CREATIVA • APRENDIZAJE POTENCIADO CON IA • GAMIFICACION • SISTEMAS DE MARCA • INNOVACION EDUCATIVA •",
    "proof.item1": "Años enseñando diseño, comunicación y UX/UI.",
    "proof.item2": "Libros vendidos de la trilogía Lettering sin limites.",
    "proof.item3": "Comunidad construida alrededor de My Lettering.",
    "proof.item4": "Estudiantes formados en talleres y programas online.",
    "about.eyebrow": "Perfil",
    "about.title": "Bruto pero decidido: de diseñador a constructor de ecosistemas creativos.",
    "about.p1":
      "Mi camino en la enseñanza comenzó de forma inesperada cuando entré a un aula para ayudar a un amigo. Esa primera clase lo cambió todo.",
    "about.p2":
      "Hoy combino <strong>diseño</strong>, <strong>estrategia</strong> y <strong>aprendizaje asistido por IA</strong> para que estudiantes y equipos avancen más rápido y mejor.",
    "about.p3":
      "Mi privilegio es detectar talento y multiplicarlo hasta volverlo visible, valioso e imparable.",
    "about.listTitle": "Resultados que construyo:",
    "about.li1": "Posicionamiento de marca claro conectado al objetivo de negocio.",
    "about.li2": "Campañas que funcionan en entornos digitales y físicos.",
    "about.li3": "Sistemas de contenido que elevan audiencia, confianza y conversión.",
    "about.li4": "Productos educativos que convierten intuición en método.",
    "narrative.eyebrow": "Narrativa",
    "narrative.title":
      "La historia que construyo para cada cliente es simple: primero claridad, luego diferenciación, siempre crecimiento.",
    "narrative.copy":
      "Sea un lanzamiento de marca, una plataforma educativa o una campaña digital, diseño ecosistemas creativos que llevan a las personas de la atención a la acción.",
    "narrative.step1.kicker": "Paso 01",
    "narrative.step1.title": "Encontrar la verdad estratégica.",
    "narrative.step1.copy":
      "Diagnosticar tensión de mercado, comportamiento de audiencia y ambición de negocio para definir lo que no puede ser genérico.",
    "narrative.step2.kicker": "Paso 02",
    "narrative.step2.title": "Diseñar el sistema narrativo.",
    "narrative.step2.copy":
      "Construir posicionamiento, dirección creativa y arquitectura de mensajes que escalen sin perder consistencia.",
    "narrative.step3.kicker": "Paso 03",
    "narrative.step3.title": "Activar y optimizar.",
    "narrative.step3.copy":
      "Lanzar campañas, experiencias de aprendizaje y bucles de crecimiento con resultados medibles e iteración constante.",
    "work.eyebrow": "Proyectos Destacados",
    "work.title": "Tres sistemas. Tres contextos. Un principio: la claridad acelera el crecimiento.",
    "work.case1.kicker": "Caso 01 • My Lettering",
    "work.case1.title": "Estrategia de Creación y Expansión",
    "work.case1.copy":
      "Construcción de un ecosistema de lettering desde cero: comunidad, libros, programas online y alianzas de marca en LATAM y EE. UU.",
    "work.case1.li1": "70.000+ seguidores y base de datos de 45.000+ potenciales clientes.",
    "work.case1.li2": "3 libros publicados con 30.000+ copias vendidas.",
    "work.case1.li3": "Alianzas con Adidas, Noel, Cafe Matiz, Panamericana y más.",
    "work.case2.kicker": "Caso 02 • edding LatAm",
    "work.case2.title": "Estrategia de Contenidos y Crecimiento de Audiencia",
    "work.case2.copy":
      "Lideré estrategia y ejecución de contenido para Colombia y Argentina, conectando valor de marca con comunidades creativas.",
    "work.case2.li1": "40% de crecimiento en Instagram y Facebook con campañas optimizadas.",
    "work.case2.li2": "Mayor engagement y expansión regional de relevancia.",
    "work.case2.li3": "Activaciones con influencers y eventos para escalar awareness.",
    "work.case3.kicker": "Caso 03 • UDES",
    "work.case3.title": 'Campaña "Aprende, Aplica, Avanza"',
    "work.case3.copy":
      "Consultoría creativa para programas técnicos, traduciendo valor académico en comunicación visual potente y memorable.",
    "work.case3.li1": "Concepto integrado para OOH y puntos digitales.",
    "work.case3.li2": "Narrativa visual diseñada para recordación inmediata.",
    "work.case3.li3": "Campaña lanzada en 2025.",
    "initiative.eyebrow": "Iniciativa Actual (En Aprobación)",
    "initiative.title": "Certeza Creativa: diseño de ecosistema de captación 2026.",
    "initiative.p1":
      "Actualmente desarrollo un ecosistema de crecimiento de matrículas que integra narrativa estratégica, mecánicas de gamificación e inteligencia artificial.",
    "initiative.p2":
      "Los detalles permanecen reservados durante aprobación. El alcance público refleja mis capacidades: arquitectura de adquisición, recorridos de conversión y posicionamiento educativo.",
    "initiative.cta": "Solicitar Portafolio",
    "initiative.card1.title": "Arquitectura de Matrícula",
    "initiative.card1.copy": "De awareness a aplicación con flujo coherente de mensajes.",
    "initiative.card2.title": "Recorridos Gamificados",
    "initiative.card2.copy": "Bucles de progreso que elevan motivación y finalización.",
    "initiative.card3.title": "Integración de IA",
    "initiative.card3.copy": "Orientación más inteligente, feedback y personalización.",
    "initiative.card4.title": "Orquestación de Contenido",
    "initiative.card4.copy": "Sistemas creativos cross-channel para crecimiento sostenido.",
    "services.eyebrow": "Servicios",
    "services.title": "Lo que construyo con equipos.",
    "services.card1.title": "Estrategia de Marca",
    "services.card1.copy": "Posicionamiento, arquitectura narrativa y dirección de identidad.",
    "services.card2.title": "Dirección Creativa",
    "services.card2.copy": "Conceptos de campaña y alineación creativa multiplataforma.",
    "services.card3.title": "Marketing de Crecimiento",
    "services.card3.copy": "Comunicación orientada a performance en canales actuales.",
    "services.card4.title": "Diseño Educativo",
    "services.card4.copy": "Experiencias de aprendizaje potenciadas con IA y participación.",
    "mylettering.eyebrow": "Vision",
    "mylettering.title": "My Lettering: de hobby a movimiento.",
    "mylettering.p1":
      "Un día nuestro primer libro entró al top de ventas. Ese momento confirmó que cuando la pasión se encuentra con la ejecución disciplinada, las ideas escalan.",
    "mylettering.p2":
      "Junto a mi esposa construimos My Lettering como plataforma para reconectar a miles de personas con su creatividad mediante libros, talleres y comunidad.",
    "mylettering.authorNote": "Autor publicado y emprendedor creativo con tracción editorial comprobada.",
    "mylettering.book1": "Lettering sin limites",
    "mylettering.book2": "Lettering sin limites 2",
    "mylettering.book3": "Lettering sin limites 3",
    "mylettering.cta": "Visitar @myLETTERING_CO",
    "timeline.eyebrow": "Trayectoria",
    "timeline.title": "Experiencia basada en liderazgo creativo y educación.",
    "timeline.item1.title": "Profesor · Universidad Isthmus (Panama)",
    "timeline.item1.copy":
      "Enseñando diseño, comunicación, UX/UI y flujos asistidos por IA para mejorar resultados y confianza de los estudiantes.",
    "timeline.item2.title": "Cofundador y Director Creativo · My Lettering S.A.S (Colombia)",
    "timeline.item2.copy":
      "Construcción de comunidad, productos, alianzas y campañas en publishing, talleres y educación digital.",
    "timeline.item3.title": "Social Media Manager y Creador de Contenido · edding LatAm",
    "timeline.item3.copy":
      "Dirección de estrategia social, colaboraciones e iniciativas de contenido para aumentar engagement y penetración.",
    "timeline.item4.title": "Director Creativo · Imagen Group (Colombia)",
    "timeline.item4.copy":
      "Liderazgo de equipos desde concepto hasta ejecución con foco en calidad, consistencia y visión estratégica.",
    "numbers.eyebrow": "No es por presumir, pero aquí están los números",
    "numbers.li1": "30.000+ libros vendidos en Latinoamérica y Estados Unidos.",
    "numbers.li2": "3 libros publicados con Editorial Planeta.",
    "numbers.li3": "15+ años como profesor universitario.",
    "numbers.li4": "1.500+ alumnos en talleres y programas online.",
    "numbers.li5": "40% de crecimiento social logrado en campañas para edding.",
    "numbers.li6": "15+ colaboraciones con marcas como Adidas, Ralph Lauren y Noel.",
    "numbers.li7": "45.000+ leads generados dentro del ecosistema My Lettering.",
    "numbers.li8": "Seleccionado entre 100 emprendedores en programa de consolidación MinTic.",
    "hire.eyebrow": "Para Headhunters y Expertos en Talento",
    "hire.title": "Framework rápido de vinculación para marcas, equipos y recruiters.",
    "hire.note":
      "Disponible para roles estratégicos y consultorías donde <strong>liderazgo creativo</strong>, <strong>visión de crecimiento</strong> e <strong>innovación educativa</strong> son clave.",
    "hire.signal1.kicker": "Rol Objetivo",
    "hire.signal1.title": "Director Creativo / Lider de Estrategia de Marca",
    "hire.signal2.kicker": "Liderazgo",
    "hire.signal2.title": "Equipos cross-funcionales y resultados medibles",
    "hire.signal3.kicker": "Modalidad",
    "hire.signal3.title": "Disponible full-time, fraccional o consultoría",
    "hire.card1.kicker": "Modelo 01",
    "hire.card1.title": "Brand Sprint",
    "hire.card1.copy":
      "Alineación estratégica rápida para equipos que necesitan claridad, posicionamiento y mejoras inmediatas de comunicación.",
    "hire.card2.kicker": "Modelo 02",
    "hire.card2.title": "Arquitectura de Campaña",
    "hire.card2.copy":
      "Dirección creativa de extremo a extremo para campañas de lanzamiento en entornos digitales, sociales y físicos.",
    "hire.card3.kicker": "Modelo 03",
    "hire.card3.title": "Education & Innovation Lab",
    "hire.card3.copy":
      "Frameworks de IA y gamificación para mejorar engagement y conversión en ecosistemas educativos.",
    "hire.card4.kicker": "Modelo 04",
    "hire.card4.title": "Vinculación Ejecutiva Creativa",
    "hire.card4.copy":
      "Encaje ideal para roles de Director Creativo, Lider de Estrategia de Marca e Innovación Educativa que requieren visión y ejecución.",
    "process.eyebrow": "Metodo",
    "process.title": "Como llevamos ideas a tracción real.",
    "process.item1.title": "Diagnostico",
    "process.item1.copy": "Entender contexto, audiencia y tensiones del mercado.",
    "process.item2.title": "Posicionamiento",
    "process.item2.copy": "Definir territorio narrativo y pilares estratégicos.",
    "process.item3.title": "Construccion Creativa",
    "process.item3.copy": "Diseñar activos, sistemas de mensaje y experiencias.",
    "process.item4.title": "Activacion",
    "process.item4.copy": "Lanzar con objetivos medibles e iteración con datos.",
    "contact.eyebrow": "Disponible para colaborar",
    "contact.title": "Si necesitas un socio creativo que piense y ejecute, conversemos.",
    "contact.copy": "Cuéntame tu reto, tiempos y objetivo. Te respondo con una hoja de ruta y primer movimiento.",
    "contact.instagram": "Instagram",
    "contact.linkedin": "LinkedIn",
    "footer.copy": "Portafolio de Luis Miguel Caamano",
    "alt.orange": "Retrato de Luis Miguel Caamano en tonos naranjas",
    "alt.dark": "Retrato en blanco y negro de Luis Miguel Caamano",
    "alt.seated": "Retrato sentado en estudio de Luis Miguel Caamano",
    "alt.darkArt": "Retrato artístico en blanco y negro de Luis Miguel Caamano",
    "alt.books": "Colección de libros Lettering sin limites de Luis Miguel Caamano y Alejandra Perdomo"
  }
};

let activeLanguage = "en";
let ticking = false;
let pointerX = window.innerWidth * 0.5;
let pointerY = window.innerHeight * 0.5;

function translatePage(lang) {
  const dict = i18n[lang] || i18n.en;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (dict[key]) {
      node.setAttribute("alt", dict[key]);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  activeLanguage = lang === "es" ? "es" : "en";
  localStorage.setItem("portfolio_language", activeLanguage);
  translatePage(activeLanguage);
}

function updateScrollEffects() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(2));

  if (!reduceMotion) {
    const normalizedX = window.innerWidth > 0 ? pointerX / window.innerWidth - 0.5 : 0;
    const normalizedY = window.innerHeight > 0 ? pointerY / window.innerHeight - 0.5 : 0;

    parallaxItems.forEach((item) => {
      const speedY = Number(item.dataset.speed || 0);
      const speedX = Number(item.dataset.speedX || 0);
      const rotateSpeed = Number(item.dataset.rotate || 0);
      const scaleSpeed = Number(item.dataset.scale || 0);
      const pointerFactor = Number(item.dataset.pointer || 1);

      const translateX = scrollTop * speedX + normalizedX * 28 * pointerFactor;
      const translateY = scrollTop * speedY + normalizedY * 18 * pointerFactor;
      const rotate = scrollTop * rotateSpeed + normalizedX * 5 * pointerFactor;
      const scale = 1 + scrollTop * scaleSpeed;

      item.style.transform =
        `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0) ` +
        `rotate(${rotate.toFixed(3)}deg) scale(${scale.toFixed(4)})`;
    });
  }

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.1
  }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

window.addEventListener("scroll", onScroll, { passive: true });
updateScrollEffects();

const savedLanguage = localStorage.getItem("portfolio_language");
setLanguage(savedLanguage || "en");

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

if (!reduceMotion && cursorGlow) {
  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursorGlow.style.transform = `translate(${pointerX}px, ${pointerY}px) translate(-50%, -50%)`;
      document.documentElement.style.setProperty("--mx", `${(pointerX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--my", `${(pointerY / window.innerHeight) * 100}%`);
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    },
    { passive: true }
  );
}

if (!reduceMotion) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 8;
      const rotateX = (0.5 - py) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
