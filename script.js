const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const parallaxItems = [...document.querySelectorAll("[data-speed]")];
const cursorGlow = document.querySelector(".cursor-glow");
const langButtons = [...document.querySelectorAll(".lang-btn")];

const i18n = {
  en: {
    "nav.work": "Work",
    "nav.now": "Now",
    "nav.mylettering": "MyLettering",
    "nav.about": "About",
    "nav.connect": "Contact",
    "nav.email": "Email",

    "hero.eyebrow": "Creative direction · Teaching · Made in LATAM",
    "hero.title1": "Creative direction,",
    "hero.title2": "teaching,",
    "hero.title3": "and the occasional experiment.",
    "hero.copy":
      "15 years helping design students and brands get specific about what they do and why it matters. Co-author of <em>Lettering sin límites</em> (30K copies), teaching design between <strong>Mexico and Panama</strong>, and currently leading an enrollment campaign for an architecture school.",
    "hero.ctaPrimary": "See the work",
    "hero.ctaSecondary": "Get in touch",

    "numbers.eyebrow": "The short receipt",
    "numbers.frame":
      "Fifteen years of teaching, writing, and brand work — the numbers that actually stuck.",
    "numbers.item1": "Years teaching design and communication.",
    "numbers.item2":
      "Copies sold of the <em>Lettering sin límites</em> trilogy.",
    "numbers.item3": "People in the My Lettering community.",
    "numbers.item4": "Students through workshops and courses.",

    "clients.eyebrow": "Trusted by",
    "clients.list":
      "Editorial Planeta · edding · Adidas · Universidad Isthmus · UDES · Noel · Café Matiz",

    "work.eyebrow": "Selected work",
    "work.title":
      "Five projects across teaching, brand work, and software I've built lately.",

    "work.mylettering.tag": "Community + publishing · 2017–now",
    "work.mylettering.title": "My Lettering",
    "work.mylettering.copy":
      "A trilogy of books, a 70K community, and a Latin-American lettering scene that didn't exist before. Built with my wife from a side project into a small publishing operation.",
    "work.mylettering.cta": "Read the story →",

    "work.edding.tag": "Content direction · 2022–2023",
    "work.edding.title": "edding LatAm",
    "work.edding.copy":
      "Content direction for the brand's LATAM relaunch — Colombia first, then Argentina and the US. The method was unromantic: buyer personas, a creative guidelines manual, and campaigns built around the illustrators and letterers who actually use the product instead of stock. The regional social channels grew 40%+ in eighteen months and the brand became something LATAM artists started talking about.",
    "work.edding.meta": "Content direction · LATAM",

    "work.udes.tag": "Campaign · 2024",
    "work.udes.title": "UDES — Aprende, Aplica, Avanza",
    "work.udes.copy":
      "Creative consulting on UDES's launch campaign for the technical programs — the ones that rarely get the budget. Market analysis first, then one concept across OOH, radio, and digital: <em>Aprende, Aplica, Avanza</em>. Written for 18-year-olds in Bucaramanga deciding in real time whether college is worth it; positioned around immediate employability, not prestige. On air.",
    "work.udes.meta": "Aprende · Aplica · Avanza",

    "work.parentmap.tag": "Software · 2026",
    "work.parentmap.title": "ParentMap",
    "work.parentmap.copy":
      "A placement test for LATAM homeschool families who don't know what to teach next. Spanish-first, simple, built on a weekend that became months. Live at parentmap.co.",

    "work.careerportrait.tag": "Software · 2026",
    "work.careerportrait.title": "Career Portrait",
    "work.careerportrait.copy":
      "Upload a résumé, get a career archetype and narrative back. Built to help people who feel stuck explain what they actually do. Live at careerportrait.co.",

    "mylettering.eyebrow": "My Lettering — the long version",
    "mylettering.title": "From a hobby to a small publishing operation.",
    "mylettering.p1":
      "One of our first books made it into a national bestseller list. That moment told us the appetite was real — there was no Spanish-language lettering scene at scale, and people wanted to learn.",
    "mylettering.p2":
      "Together with my wife Alejandra Perdomo, we built My Lettering into a platform of books, workshops, and community. Three titles with Editorial Planeta, brand work with Adidas and edding, and a community of 70K people who keep writing back.",
    "mylettering.book1": "Lettering sin límites",
    "mylettering.book2": "Lettering sin límites 2",
    "mylettering.book3": "Lettering sin límites 3",
    "mylettering.cta": "@myLETTERING_CO",

    "now.eyebrow": "Right now",
    "now.title": "Certeza Creativa.",
    "now.p1":
      "An enrollment campaign for two architecture schools — <strong>Isthmus in Panama</strong> and <strong>Isthmus Norte in Mexico</strong>. I'm helping them tell their own story better: to the students they want, in the language those students actually use. Strategy through first contact.",
    "now.p2":
      "Campaign details stay confidential while the work runs. If you're working on something similar, I'm happy to compare notes.",

    "about.eyebrow": "About",
    "about.title": "Bruto pero decidido.",
    "about.p1":
      "First class I ever taught, I was covering for a friend. I didn't know the students, didn't know the room, wasn't sure I'd come back the next week. Fifteen years later I'm still at it — now between Isthmus in Panama and Isthmus Norte in Mexico — design, communication, UX, and how to use AI without losing the craft.",
    "about.p2":
      "Outside the classroom: creative direction for brands like edding and UDES, three lettering books with my wife Alejandra at Editorial Planeta, and Certeza Creativa — the enrollment work I'm running right now for both schools. Short list. I prefer one thing done well to ten done badly.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk.",
    "contact.copy":
      "Whether you have a project, a question, or a half-formed idea — I'm good at helping those become something. Spanish or English.",
    "contact.instagram": "Instagram",
    "contact.linkedin": "LinkedIn",

    "footer.copy": "Luis Miguel Caamaño · Bogotá · Ciudad de México · Panamá",
    "footer.meta": "© 2026 · built in vanilla HTML",

    "alt.deskCamera":
      "Luis Miguel Caamaño at his desk, looking at the camera, with a notebook and pen in hand",
    "alt.team":
      "Luis Miguel Caamaño working with two collaborators around layouts and a sketchbook",
    "alt.deskSketch":
      "Luis Miguel Caamaño at his desk, sketching in a notebook",
    "alt.books":
      "Lettering sin límites books collection by Luis Miguel Caamaño and Alejandra Perdomo",
  },
  es: {
    "nav.work": "Proyectos",
    "nav.now": "Ahora",
    "nav.mylettering": "MyLettering",
    "nav.about": "Perfil",
    "nav.connect": "Contacto",
    "nav.email": "Correo",

    "hero.eyebrow": "Dirección creativa · Docencia · Hecho en LATAM",
    "hero.title1": "Dirección creativa,",
    "hero.title2": "docencia,",
    "hero.title3": "y algún experimento por ahí.",
    "hero.copy":
      "15 años ayudando a estudiantes de diseño y a marcas a ser específicos sobre lo que hacen y por qué importa. Coautor de <em>Lettering sin límites</em> (30K copias), enseñando diseño entre <strong>México y Panamá</strong>, y actualmente liderando una campaña de matrículas para una escuela de arquitectura.",
    "hero.ctaPrimary": "Ver el trabajo",
    "hero.ctaSecondary": "Escríbeme",

    "numbers.eyebrow": "El recibo corto",
    "numbers.frame":
      "Quince años entre aulas, libros y marcas — los números que sí se quedaron.",
    "numbers.item1": "Años enseñando diseño y comunicación.",
    "numbers.item2":
      "Copias vendidas de la trilogía <em>Lettering sin límites</em>.",
    "numbers.item3": "Personas en la comunidad My Lettering.",
    "numbers.item4": "Estudiantes en talleres y cursos.",

    "clients.eyebrow": "Han confiado",
    "clients.list":
      "Editorial Planeta · edding · Adidas · Universidad Isthmus · UDES · Noel · Café Matiz",

    "work.eyebrow": "Trabajo seleccionado",
    "work.title":
      "Cinco proyectos entre docencia, trabajo de marca y software que he hecho últimamente.",

    "work.mylettering.tag": "Comunidad + editorial · 2017–hoy",
    "work.mylettering.title": "My Lettering",
    "work.mylettering.copy":
      "Una trilogía de libros, una comunidad de 70K y una escena latinoamericana de lettering que antes no existía. Lo construimos con mi esposa desde un proyecto paralelo hasta una pequeña operación editorial.",
    "work.mylettering.cta": "Leer la historia →",

    "work.edding.tag": "Dirección de contenido · 2022–2023",
    "work.edding.title": "edding LatAm",
    "work.edding.copy":
      "Dirección de contenido para el relanzamiento LATAM de la marca — Colombia primero, luego Argentina y Estados Unidos. El método fue poco romántico: personas de marca, un manual de guías creativas y campañas construidas alrededor de los ilustradores y letteristas que de verdad usan el producto, en vez de stock. Los canales regionales crecieron 40%+ en dieciocho meses y la marca se volvió algo de lo que los artistas de LATAM empezaron a hablar.",
    "work.edding.meta": "Dirección de contenido · LATAM",

    "work.udes.tag": "Campaña · 2024",
    "work.udes.title": "UDES — Aprende, Aplica, Avanza",
    "work.udes.copy":
      "Consultoría creativa en la campaña de lanzamiento para los programas técnicos de UDES — esos que casi nunca reciben presupuesto. Primero análisis de mercado, luego un solo concepto en vallas, radio y digital: <em>Aprende, Aplica, Avanza</em>. Escrito para jóvenes de 18 años en Bucaramanga que deciden en tiempo real si la universidad vale la pena; posicionado alrededor de empleabilidad inmediata, no prestigio. Al aire.",
    "work.udes.meta": "Aprende · Aplica · Avanza",

    "work.parentmap.tag": "Software · 2026",
    "work.parentmap.title": "ParentMap",
    "work.parentmap.copy":
      "Una prueba de nivel para familias homeschool de LATAM que no saben qué enseñar después. En español, simple, hecho en un fin de semana que se volvieron meses. En vivo en parentmap.co.",

    "work.careerportrait.tag": "Software · 2026",
    "work.careerportrait.title": "Career Portrait",
    "work.careerportrait.copy":
      "Sube tu CV y obtén un arquetipo de carrera y una narrativa de regreso. Hecho para ayudar a quienes se sienten atascados a explicar lo que realmente hacen. En vivo en careerportrait.co.",

    "mylettering.eyebrow": "My Lettering — la versión larga",
    "mylettering.title": "De un hobby a una pequeña operación editorial.",
    "mylettering.p1":
      "Uno de nuestros primeros libros entró a una lista nacional de bestsellers. Ese momento nos dijo que el apetito era real — no existía una escena de lettering en español a esa escala y la gente quería aprender.",
    "mylettering.p2":
      "Junto con mi esposa Alejandra Perdomo, construimos My Lettering como una plataforma de libros, talleres y comunidad. Tres títulos con Editorial Planeta, trabajo de marca con Adidas y edding, y una comunidad de 70K personas que siguen escribiéndonos.",
    "mylettering.book1": "Lettering sin límites",
    "mylettering.book2": "Lettering sin límites 2",
    "mylettering.book3": "Lettering sin límites 3",
    "mylettering.cta": "@myLETTERING_CO",

    "now.eyebrow": "Ahora mismo",
    "now.title": "Certeza Creativa.",
    "now.p1":
      "Una campaña de matrículas para dos escuelas de arquitectura — <strong>Isthmus en Panamá</strong> e <strong>Isthmus Norte en México</strong>. Les estoy ayudando a contar mejor su propia historia: a los estudiantes que quieren, en el lenguaje que esos estudiantes de verdad usan. Desde la estrategia hasta el primer contacto.",
    "now.p2":
      "Los detalles de la campaña se mantienen reservados mientras avanza el trabajo. Si trabajas en algo parecido, me encanta comparar notas.",

    "about.eyebrow": "Perfil",
    "about.title": "Bruto pero decidido.",
    "about.p1":
      "La primera clase que di fue cubriendo a un amigo. No conocía a los estudiantes, no conocía el salón, no estaba seguro de volver la semana siguiente. Quince años después sigo en eso — ahora entre Isthmus en Panamá e Isthmus Norte en México — diseño, comunicación, UX y cómo usar IA sin perder el oficio.",
    "about.p2":
      "Fuera del aula: dirección creativa para marcas como edding y UDES, tres libros de lettering con mi esposa Alejandra en Editorial Planeta, y Certeza Creativa — el trabajo de matrículas que estoy haciendo ahora para las dos escuelas. Lista corta. Prefiero hacer una cosa bien a diez mal.",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos.",
    "contact.copy":
      "Sea un proyecto, una pregunta o una idea a medio formar — soy bueno ayudando a que se vuelvan algo. Español o inglés.",
    "contact.instagram": "Instagram",
    "contact.linkedin": "LinkedIn",

    "footer.copy": "Luis Miguel Caamaño · Bogotá · Ciudad de México · Panamá",
    "footer.meta": "© 2026 · hecho en HTML vanilla",

    "alt.deskCamera":
      "Luis Miguel Caamaño en su escritorio, mirando a cámara, con cuaderno y lápiz",
    "alt.team":
      "Luis Miguel Caamaño trabajando con dos colaboradores sobre diagramaciones y un cuaderno",
    "alt.deskSketch":
      "Luis Miguel Caamaño en su escritorio, dibujando en un cuaderno",
    "alt.books":
      "Colección de libros Lettering sin límites de Luis Miguel Caamaño y Alejandra Perdomo",
  },
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
  document.documentElement.style.setProperty(
    "--scroll-progress",
    progress.toFixed(2),
  );

  if (!reduceMotion) {
    const normalizedX =
      window.innerWidth > 0 ? pointerX / window.innerWidth - 0.5 : 0;
    const normalizedY =
      window.innerHeight > 0 ? pointerY / window.innerHeight - 0.5 : 0;

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
    threshold: 0.1,
  },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

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
      document.documentElement.style.setProperty(
        "--mx",
        `${(pointerX / window.innerWidth) * 100}%`,
      );
      document.documentElement.style.setProperty(
        "--my",
        `${(pointerY / window.innerHeight) * 100}%`,
      );
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    },
    { passive: true },
  );
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    primaryNav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
      closeMenu();
      menuToggle.focus();
    }
  });
}
