/**
 * NASA Space Apps Salta 2026 — i18n dictionary.
 * Idioma principal: Español (Argentina). Idioma secundario: Inglés (US).
 *
 * Todos los textos visibles están aquí. Cualquier texto nuevo debe agregarse
 * a ambos idiomas para mantener el switch ES/EN consistente.
 */

export type Language = "es" | "en";

export const LANGUAGES: Language[] = ["es", "en"];

export const LANG_LABELS: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

/* ------------------------------------------------------------------ */
/* Tipado                                                              */
/* ------------------------------------------------------------------ */

export interface Dictionary {
  meta: { lang: Language; htmlLang: string };
  nav: {
    whatIs: string;
    howItWorks: string;
    event: string;
    faq: string;
    join: string;
    brand: string;
    openMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    locationLine: string;
    dateLine: string;
    proposition: string;
    cta: string;
    secondary: string;
    scroll: string;
  };
  whatIs: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    pillars: { title: string; text: string }[];
  };
  whyJoin: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  notJustCoding: {
    eyebrow: string;
    title: string;
    lead: string;
    disciplines: string[];
    closing: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { index: string; title: string; text: string }[];
  };
  globalConnection: {
    eyebrow: string;
    title: string;
    lead: string;
    stats: { value: string; label: string }[];
    salta: string;
  };
  saltaEvent: {
    eyebrow: string;
    title: string;
    lead: string;
    details: { label: string; value: string; status?: "confirmed" | "tba" }[];
  };
  challenges: {
    eyebrow: string;
    title: string;
    lead: string;
    status: string;
    note: string;
  };
  people: {
    eyebrow: string;
    title: string;
    lead: string;
    roles: { title: string; status: string }[];
  };
  collaborators: {
    eyebrow: string;
    title: string;
    lead: string;
    status: string;
    cta: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
  footer: {
    event: string;
    description: string;
    quickLinks: string;
    resources: string;
    connect: string;
    rights: string;
    disclaimer: string;
    madeBy: string;
    nasaSpaceApps: string;
    hackathon: string;
    openData: string;
    community: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
}

/* ------------------------------------------------------------------ */
/* Español (Argentina)                                                 */
/* ------------------------------------------------------------------ */

const es: Dictionary = {
  meta: { lang: "es", htmlLang: "es-AR" },
  nav: {
    whatIs: "¿Qué es?",
    howItWorks: "Cómo funciona",
    event: "Evento",
    faq: "FAQ",
    join: "Sumate",
    brand: "Space Apps Salta",
    openMenu: "Abrir menú",
  },
  hero: {
    eyebrow: "NASA SPACE APPS · SALTA · ARGENTINA",
    title: "NASA SPACE APPS\nSALTA 2026",
    locationLine: "Salta, Argentina",
    dateLine: "14 — 15 Noviembre 2026",
    proposition: "El hackathon global de NASA llega a Salta. Construí soluciones reales con datos abiertos del espacio.",
    cta: "Sumate al desafío",
    secondary: "Conocé más",
    scroll: "Scroll",
  },
  whatIs: {
    eyebrow: "01 — QUÉ ES",
    title: "Un hackathon global con datos abiertos de NASA",
    lead: "NASA Space Apps es un hackathon global donde personas de distintas disciplinas utilizan datos abiertos de NASA y agencias espaciales asociadas para crear soluciones frente a desafíos reales de la Tierra y el espacio.",
    p1: "Durante un fin de semana, equipos de todo el mundo trabajan sobre desafíos propuestos por la propia NASA y por agencias socias. Los desafíos abarcan ciencia terrestre, exploración planetaria, clima, océanos, salud humana y mucho más.",
    p2: "No es una competencia de programación: es un espacio de exploración, colaboración y creación. Cada equipo elige un desafío, lo interpreta, propone una solución y la presenta a una comunidad global.",
    pillars: [
      { title: "Datos abiertos", text: "Datos reales de NASA y agencias espaciales, disponibles para que cualquier persona los explore." },
      { title: "Desafíos reales", text: "Problemas propuestos por científicos y profesionales de las agencias, no ejercicios académicos." },
      { title: "Hackathon global", text: "Miles de personas resolviendo en simultáneo, conectadas desde cientos de ciudades." },
    ],
  },
  whyJoin: {
    eyebrow: "02 — POR QUÉ SUMARTE",
    title: "Dos días para construir algo que importe",
    subtitle: "No necesitás experiencia espacial. Necesitás curiosidad, ganas de aprender y voluntad de trabajar en equipo.",
    items: [
      { title: "Datos reales", text: "Trabajás con datos abiertos de NASA, ESA, JAXA y otras agencias. Datos que usan científicos y misiones reales." },
      { title: "Desafíos reales", text: "Resolvés problemas propuestos por la propia NASA y por la comunidad global. No son ejercicios: son necesidades." },
      { title: "Construir en 48 horas", text: "Pasar de idea a prototipo en un fin de semana. Aprender haciendo, con tiempo acotado y foco claro." },
      { title: "Multidisciplinario", text: "Programar, diseñar, investigar, comunicar, modelar. Cada rol aporta a una solución distinta." },
      { title: "Comunidad global", text: "Formás parte de una red simultánea de personas creando en cientos de ciudades del mundo." },
      { title: "Aprender haciendo", text: "No escuchás a alguien hablar de innovación: la construís. Con equipo, datos y un deadline real." },
    ],
  },
  notJustCoding: {
    eyebrow: "03 — NO ES SOLO PROGRAMAR",
    title: "Tu disciplina también construye",
    lead: "Space Apps no es un evento exclusivo para programadores. Cada proyecto necesita múltiples miradas para convertirse en una solución útil.",
    disciplines: [
      "Código", "Ciencia", "Diseño", "Arte", "Datos",
      "Storytelling", "Ingeniería", "Investigación", "Negocios", "Comunicación",
    ],
    closing: "No necesitás ser programador para participar. Necesitás querer resolver.",
  },
  howItWorks: {
    eyebrow: "04 — CÓMO FUNCIONA",
    title: "Cinco pasos, una misión",
    subtitle: "Desde el primer vistazo a los desafíos hasta el impacto global. La experiencia está diseñada para que cualquier persona pueda entrar.",
    steps: [
      { index: "01", title: "Discover", text: "Explorá los desafíos oficiales propuestos por NASA y agencias asociadas. Elegí el que más te mobilice." },
      { index: "02", title: "Connect", text: "Encontrá a tu equipo. Compartí intereses, sumá disciplinas distintas y armen un mix que aporte miradas múltiples." },
      { index: "03", title: "Build", text: "Convertí una idea en un proyecto. Trabajen con datos reales durante 48 horas y construyan algo concreto." },
      { index: "04", title: "Share", text: "Presenten lo que construyeron. Comuniquen el problema, la solución y por qué importa." },
      { index: "05", title: "Impact", text: "Tu proyecto entra en el recorrido global. Puede ser destacado, escalado o inspirar a otras comunidades." },
    ],
  },
  globalConnection: {
    eyebrow: "05 — CONEXIÓN GLOBAL",
    title: "Salta forma parte de una red mundial",
    lead: "NASA Space Apps se corre simultáneamente en cientos de ciudades. Cuando participás en Salta, tu proyecto convive con miles de equipos del mundo que están resolviendo los mismos desafíos.",
    stats: [
      { value: "150+", label: "Ciudades conectadas" },
      { value: "30K+", label: "Personas participando" },
      { value: "1", label: "Red global simultánea" },
    ],
    salta: "Salta es uno de los nodos de esa red. Lo que construyas acá puede ser visto por la comunidad global.",
  },
  saltaEvent: {
    eyebrow: "06 — EL EVENTO EN SALTA",
    title: "Salta, 14 y 15 de noviembre de 2026",
    lead: "Un fin de semana intensivo en la ciudad de Salta, Argentina. La modalidad y el venue se irán confirmando a medida que avance la organización local.",
    details: [
      { label: "Ciudad", value: "Salta, Argentina", status: "confirmed" },
      { label: "Fechas", value: "14 y 15 de noviembre de 2026", status: "confirmed" },
      { label: "Modalidad", value: "A confirmar según configuración oficial", status: "tba" },
      { label: "Venue", value: "Coming soon", status: "tba" },
      { label: "Agenda", value: "Coming soon", status: "tba" },
    ],
  },
  challenges: {
    eyebrow: "07 — DESAFÍOS",
    title: "Los desafíos se anuncian pronto",
    lead: "NASA publica los desafíos oficiales de cada edición de Space Apps en las semanas previas al evento. Cuando estén disponibles, esta sección los mostrará en cards individuales con su contexto, datos y reglas.",
    status: "Próximamente · Coming soon",
    note: "Mientras tanto, podés explorar ediciones anteriores en spaceappschallenge.org para tener una idea del tipo de problemas que vas a enfrentar.",
  },
  people: {
    eyebrow: "08 — PERSONAS",
    title: "Quiénes van a estar",
    lead: "Estamos confirmando jueces, mentores y speakers para acompañar a los equipos durante el fin de semana. Esta sección se actualiza a medida que se confirman las personas.",
    roles: [
      { title: "Judges", status: "Coming soon" },
      { title: "Mentors", status: "Coming soon" },
      { title: "Speakers", status: "Coming soon" },
    ],
  },
  collaborators: {
    eyebrow: "09 — COLABORADORES",
    title: "Una red local que hace posible el evento",
    lead: "Estamos construyendo una red local de organizaciones, empresas e instituciones que harán posible NASA Space Apps Salta 2026. Los logos se irán incorporando a medida que se confirmen.",
    status: "Sumate como colaborador",
    cta: "Quiero colaborar",
  },
  finalCta: {
    eyebrow: "10 — SUMATE",
    title: "¿Listos para construir algo que importe?",
    text: "Dos días, datos reales, una comunidad global y un desafío que te espera. Sumate a NASA Space Apps Salta 2026.",
    primary: "Sumate al desafío",
    secondary: "Escribinos",
  },
  footer: {
    event: "NASA Space Apps Salta 2026",
    description: "El hackathon global de NASA llega a Salta el 14 y 15 de noviembre de 2026. Una experiencia abierta para construir, aprender y conectar.",
    quickLinks: "Navegación",
    resources: "Recursos",
    connect: "Conectá",
    rights: "Todos los derechos reservados.",
    disclaimer: "NASA Space Apps es una iniciativa de la NASA. Esta landing es administrada por el equipo local de Salta, Argentina.",
    madeBy: "Hecho con datos abiertos y entusiasmo en Salta, Argentina.",
    nasaSpaceApps: "NASA Space Apps Challenge",
    hackathon: "Hackathon global",
    openData: "Open Data",
    community: "Comunidad",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Necesito saber programar para participar?", a: "No. Space Apps es multidisciplinario. Necesitás programadores en un equipo, pero también diseñadores, científicos, comunicadores, investigadores y personas con cualquier disciplina que aporte a la solución." },
      { q: "¿Tengo que armar equipo antes de anotarme?", a: "No es obligatorio. Muchas personas se anotan individualmente y arman equipo el primer día del evento. Va a haber espacios y dinámicas para encontrar equipo." },
      { q: "¿Cuánto cuesta participar?", a: "NASA Space Apps es gratuito. La participación no tiene costo para los inscriptos." },
      { q: "¿En qué idioma se trabaja?", a: "Los desafíos oficiales se publican en inglés, pero los equipos pueden trabajar en el idioma que les sea más cómodo. La presentación final suele ser en inglés para la fase global." },
      { q: "¿Qué tengo que llevar?", a: "Tu notebook, cargador, entusiasmo y ganas de trabajar en equipo. Vamos a compartir la lista detallada a los inscriptos a medida que se acerque el evento." },
      { q: "¿Qué pasa con lo que construí después del evento?", a: "El proyecto es tuyo y de tu equipo. Muchos proyectos siguen creciendo después del fin de semana. Algunos son destacados por NASA y forman parte del recorrido global." },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* English (US)                                                       */
/* ------------------------------------------------------------------ */

const en: Dictionary = {
  meta: { lang: "en", htmlLang: "en-US" },
  nav: {
    whatIs: "What is it?",
    howItWorks: "How it works",
    event: "Event",
    faq: "FAQ",
    join: "Join",
    brand: "Space Apps Salta",
    openMenu: "Open menu",
  },
  hero: {
    eyebrow: "NASA SPACE APPS · SALTA · ARGENTINA",
    title: "NASA SPACE APPS\nSALTA 2026",
    locationLine: "Salta, Argentina",
    dateLine: "November 14 — 15, 2026",
    proposition: "NASA's global hackathon lands in Salta. Build real solutions using open space data.",
    cta: "Join the challenge",
    secondary: "Learn more",
    scroll: "Scroll",
  },
  whatIs: {
    eyebrow: "01 — WHAT IT IS",
    title: "A global hackathon built on NASA open data",
    lead: "NASA Space Apps is a global hackathon where people from many disciplines use open data from NASA and partner space agencies to create solutions for real challenges on Earth and in space.",
    p1: "Over a single weekend, teams all over the world work on challenges proposed by NASA and partner agencies. The challenges span Earth science, planetary exploration, climate, oceans, human health and much more.",
    p2: "It is not a coding contest: it is a space for exploration, collaboration and creation. Each team picks a challenge, interprets it, proposes a solution and presents it to a global community.",
    pillars: [
      { title: "Open data", text: "Real data from NASA and partner space agencies, available for anyone to explore." },
      { title: "Real challenges", text: "Problems posed by scientists and professionals at the agencies — not academic exercises." },
      { title: "Global hackathon", text: "Thousands of people solving in parallel, connected from hundreds of cities." },
    ],
  },
  whyJoin: {
    eyebrow: "02 — WHY JOIN",
    title: "Two days to build something that matters",
    subtitle: "You don't need space experience. You need curiosity, willingness to learn and a desire to work as a team.",
    items: [
      { title: "Real data", text: "You work with open data from NASA, ESA, JAXA and other agencies. The same data real scientists and missions use." },
      { title: "Real challenges", text: "You solve problems proposed by NASA itself and by the global community. Not exercises — needs." },
      { title: "Build in 48 hours", text: "Go from idea to prototype in a single weekend. Learn by doing, with tight time and clear focus." },
      { title: "Multidisciplinary", text: "Code, design, research, communicate, model. Each role brings a different solution." },
      { title: "Global community", text: "You join a simultaneous network of people creating in hundreds of cities worldwide." },
      { title: "Learn by doing", text: "You don't listen to someone talk about innovation — you build it. With a team, data and a real deadline." },
    ],
  },
  notJustCoding: {
    eyebrow: "03 — NOT JUST CODING",
    title: "Your discipline builds too",
    lead: "Space Apps is not an event only for programmers. Every project needs multiple perspectives to become a useful solution.",
    disciplines: [
      "Code", "Science", "Design", "Art", "Data",
      "Storytelling", "Engineering", "Research", "Business", "Communication",
    ],
    closing: "You don't need to be a programmer to join. You need to want to solve.",
  },
  howItWorks: {
    eyebrow: "04 — HOW IT WORKS",
    title: "Five steps, one mission",
    subtitle: "From your first look at the challenges to global impact. The experience is designed so anyone can step in.",
    steps: [
      { index: "01", title: "Discover", text: "Explore the official challenges proposed by NASA and partner agencies. Pick the one that moves you the most." },
      { index: "02", title: "Connect", text: "Find your team. Share interests, add different disciplines and build a mix that brings multiple perspectives." },
      { index: "03", title: "Build", text: "Turn an idea into a project. Work with real data for 48 hours and build something concrete." },
      { index: "04", title: "Share", text: "Present what you built. Communicate the problem, the solution and why it matters." },
      { index: "05", title: "Impact", text: "Your project enters the global track. It can be highlighted, scaled or inspire other communities." },
    ],
  },
  globalConnection: {
    eyebrow: "05 — GLOBAL CONNECTION",
    title: "Salta is part of a worldwide network",
    lead: "NASA Space Apps runs simultaneously in hundreds of cities. When you join from Salta, your project lives alongside thousands of teams around the world solving the same challenges.",
    stats: [
      { value: "150+", label: "Connected cities" },
      { value: "30K+", label: "People joining" },
      { value: "1", label: "Simultaneous global network" },
    ],
    salta: "Salta is one node in that network. What you build here can be seen by the global community.",
  },
  saltaEvent: {
    eyebrow: "06 — THE EVENT IN SALTA",
    title: "Salta, November 14 — 15, 2026",
    lead: "An intensive weekend in the city of Salta, Argentina. Format and venue will be confirmed as local organization progresses.",
    details: [
      { label: "City", value: "Salta, Argentina", status: "confirmed" },
      { label: "Dates", value: "November 14 — 15, 2026", status: "confirmed" },
      { label: "Format", value: "To be confirmed per official configuration", status: "tba" },
      { label: "Venue", value: "Coming soon", status: "tba" },
      { label: "Agenda", value: "Coming soon", status: "tba" },
    ],
  },
  challenges: {
    eyebrow: "07 — CHALLENGES",
    title: "Challenges will be announced soon",
    lead: "NASA publishes the official challenges for each Space Apps edition in the weeks before the event. Once available, this section will show them as individual cards with context, data and rules.",
    status: "Coming soon",
    note: "In the meantime, you can explore past editions at spaceappschallenge.org to get a sense of the kinds of problems you'll face.",
  },
  people: {
    eyebrow: "08 — PEOPLE",
    title: "Who will be there",
    lead: "We are confirming judges, mentors and speakers to support the teams throughout the weekend. This section updates as people are confirmed.",
    roles: [
      { title: "Judges", status: "Coming soon" },
      { title: "Mentors", status: "Coming soon" },
      { title: "Speakers", status: "Coming soon" },
    ],
  },
  collaborators: {
    eyebrow: "09 — COLLABORATORS",
    title: "A local network that makes the event possible",
    lead: "We are building a local network of organizations, companies and institutions that will make NASA Space Apps Salta 2026 possible. Logos will be added as they are confirmed.",
    status: "Join as a collaborator",
    cta: "I want to collaborate",
  },
  finalCta: {
    eyebrow: "10 — JOIN",
    title: "Ready to build something that matters?",
    text: "Two days, real data, a global community and a challenge waiting for you. Join NASA Space Apps Salta 2026.",
    primary: "Join the challenge",
    secondary: "Contact us",
  },
  footer: {
    event: "NASA Space Apps Salta 2026",
    description: "NASA's global hackathon lands in Salta on November 14 — 15, 2026. An open experience to build, learn and connect.",
    quickLinks: "Navigation",
    resources: "Resources",
    connect: "Connect",
    rights: "All rights reserved.",
    disclaimer: "NASA Space Apps is a NASA initiative. This landing is run by the local team in Salta, Argentina.",
    madeBy: "Built with open data and enthusiasm in Salta, Argentina.",
    nasaSpaceApps: "NASA Space Apps Challenge",
    hackathon: "Global hackathon",
    openData: "Open Data",
    community: "Community",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Do I need to know how to code to join?", a: "No. Space Apps is multidisciplinary. A team needs programmers, but also designers, scientists, communicators, researchers and people from any discipline that adds to the solution." },
      { q: "Do I have to form a team before signing up?", a: "No. Many people sign up individually and form a team on the first day of the event. There will be spaces and dynamics to find a team." },
      { q: "How much does it cost to participate?", a: "NASA Space Apps is free. There is no cost for participants." },
      { q: "What language do we work in?", a: "Official challenges are published in English, but teams can work in whatever language is most comfortable. The final presentation is usually in English for the global phase." },
      { q: "What should I bring?", a: "Your laptop, charger, enthusiasm and a desire to work as a team. We'll share a detailed list with registered participants as the event approaches." },
      { q: "What happens to what I built after the event?", a: "The project belongs to you and your team. Many projects keep growing after the weekend. Some are highlighted by NASA and become part of the global track." },
    ],
  },
};

export const dictionaries: Record<Language, Dictionary> = { es, en };
