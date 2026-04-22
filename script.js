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

    "work.edding.tag": "Brand strategy · 2022",
    "work.edding.title": "edding LatAm",
    "work.edding.copy":
      "Social and content direction for Colombia and Argentina during the relaunch of the brand's creative line. Worked with local letterers and illustrators instead of stock, rewrote the product copy in regional Spanish, and helped the regional channels grow around 40% in eighteen months.",
    "work.edding.meta": "Brand & social · LATAM",

    "work.udes.tag": "Campaign · 2023",
    "work.udes.title": "UDES — Aprende, Aplica, Avanza",
    "work.udes.copy":
      "Creative consulting on the 2023 launch campaign for the university's technical programs — the ones that rarely get the budget. One concept — <em>Aprende, Aplica, Avanza</em> — across OOH, radio, and digital, written for 18-year-olds in Santander who are deciding in real time whether college is worth it.",
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
      "An architecture school in Mexico asked me to help them tell their own story better — to the students they want, in a language those students actually use. I'm leading the campaign from strategy through first contact.",
    "now.p2":
      "Details are confidential while the project runs. If you're working on something similar, I'm happy to compare notes.",

    "about.eyebrow": "About",
    "about.title": "Bruto pero decidido.",
    "about.p1":
      "I started teaching almost by accident, covering a class for a friend. That first session is what got me here. Fifteen years later I still teach — design, communication, UX, and how to use AI without losing the craft — between Isthmus in Panama and Isthmus Norte in Mexico.",
    "about.p2":
      "The rest of the time — creative direction for brands, books with my wife, and small software side-projects to keep learning. The list is short because I prefer doing one thing well to ten things badly.",

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

    "work.edding.tag": "Estrategia de marca · 2022",
    "work.edding.title": "edding LatAm",
    "work.edding.copy":
      "Dirección de contenido y social para Colombia y Argentina durante el relanzamiento de la línea creativa de la marca. Trabajamos con letteristas e ilustradores locales en vez de stock, reescribí el copy de producto en español regional y ayudé a que los canales crecieran alrededor de 40% en dieciocho meses.",
    "work.edding.meta": "Marca y social · LATAM",

    "work.udes.tag": "Campaña · 2023",
    "work.udes.title": "UDES — Aprende, Aplica, Avanza",
    "work.udes.copy":
      "Consultoría creativa en la campaña de lanzamiento 2023 de los programas técnicos de la universidad — esos que casi nunca reciben presupuesto. Un solo concepto — <em>Aprende, Aplica, Avanza</em> — en vallas, radio y digital, escrito para muchachos de 18 años en Santander que están decidiendo en tiempo real si la universidad vale la pena.",
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
      "Una escuela de arquitectura en México me pidió ayuda para contar mejor su propia historia — a los estudiantes que quieren, en el lenguaje que esos estudiantes de verdad usan. Estoy liderando la campaña desde la estrategia hasta el primer contacto.",
    "now.p2":
      "Los detalles se mantienen reservados mientras el proyecto avanza. Si trabajas en algo parecido, me encanta comparar notas.",

    "about.eyebrow": "Perfil",
    "about.title": "Bruto pero decidido.",
    "about.p1":
      "Empecé a enseñar casi por accidente, cubriendo una clase para un amigo. Esa primera sesión fue lo que me trajo hasta aquí. Quince años después sigo enseñando — diseño, comunicación, UX y cómo usar IA sin perder el oficio — entre Isthmus en Panamá e Isthmus Norte en México.",
    "about.p2":
      "El resto del tiempo — dirección creativa para marcas, libros con mi esposa y pequeños proyectos de software para seguir aprendiendo. La lista es corta porque prefiero hacer una cosa bien a diez mal.",

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
