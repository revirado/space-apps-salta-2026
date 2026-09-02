# NASA Space Apps Salta 2026 --- Landing Page

## Brief Conceptual & Technical V1

**Proyecto:** NASA Space Apps Salta 2026\
**Fecha:** 14--15 de noviembre de 2026\
**Idioma principal:** Español (Argentina)\
**Idioma secundario:** Inglés\
**Estado:** V1 --- documento iterativo

------------------------------------------------------------------------

# 1. Objetivo

Desarrollar una landing page moderna, atractiva y dinámica para **NASA
Space Apps Salta 2026**.

La página debe presentar el evento local dentro del contexto global de
NASA Space Apps, comunicar rápidamente qué es la hackathon, incentivar
la participación y servir como punto central de información para
participantes, colaboradores y comunidad.

El objetivo no es reproducir literalmente el manual de marca ni
construir una página institucional rígida. La identidad oficial debe
utilizarse como **lenguaje visual de referencia**, mientras que la
experiencia de la landing debe sentirse propia de una hackathon moderna:
energética, tecnológica, exploratoria y accesible.

## Principios

-   Comunicar el evento rápidamente.
-   Priorizar la acción y la participación.
-   Evitar grandes bloques de texto institucional como primera
    impresión.
-   Utilizar storytelling visual.
-   Mantener una estética espacial/científica sin caer en clichés
    visuales.
-   Utilizar la identidad NASA Space Apps de forma reconocible.
-   Permitir que la página evolucione a medida que se definan venue,
    agenda, jueces, sponsors y colaboradores.
-   El contenido debe funcionar independientemente de cualquier efecto
    visual WebGL.

------------------------------------------------------------------------

# 2. Identidad visual

## 2.1 Principio general

El **NASA Space Apps Brand Guide** es una guía de identidad, no un
conjunto de reglas de construcción de la interfaz.

Debe utilizarse como referencia para:

-   Logo.
-   Colores.
-   Tipografía.
-   Gradientes.
-   Patrones.
-   Iconografía.
-   Fotografía.
-   Lenguaje visual general.

La landing puede tomar decisiones propias de composición, UX, animación
y layout siempre que mantenga coherencia con la identidad oficial.

## 2.2 Logo

Utilizar los assets oficiales de NASA Space Apps.

Variantes principales:

-   Default Logo --- variante preferida para la mayoría de los
    contextos.
-   Motif Logo --- variante autocontenida para aplicaciones especiales.
-   Small Logo --- para espacios reducidos.

No reconstruir ni modificar el logo mediante CSS, Canvas o Three.js.

El logo debe permanecer como un asset independiente del sistema gráfico
3D.

## 2.3 Paleta de referencia

Colores principales identificados en el Brand Guide:

  Nombre          HEX         Uso conceptual
  --------------- ----------- ---------------------
  Deep Blue       `#07173F`   Fondo oscuro / base
  Electric Blue   `#0042A6`   Color principal
  Neon Blue       `#0960E1`   Acentos / UI
  Blue Yonder     `#2E96F5`   Color secundario
  Neon Yellow     `#EAFE07`   Highlight / acento
  Rocket Red      `#E43700`   Acento
  Martian Red     `#8E1100`   Acento oscuro
  White           `#FFFFFF`   Texto / contraste

El color no debe utilizarse únicamente por decoración. Debe existir una
jerarquía clara entre fondo, contenido, acciones y elementos destacados.

Mantener un contraste suficiente para texto y controles interactivos.
Como referencia, el Brand Guide utiliza WCAG 2.0 y un mínimo de 4.5:1
para las combinaciones correspondientes.

## 2.4 Gradientes

Puede utilizarse el gradiente:

`Electric Blue → Deep Blue`

como recurso visual para:

-   Hero.
-   Fondos de secciones.
-   Transiciones.
-   Elementos atmosféricos.

Evitar convertir el gradiente en un recurso obligatorio de todas las
secciones.

## 2.5 Tipografía

Referencia de identidad:

### Headings

-   Fira Sans Black
-   Fira Sans Bold
-   Overpass Bold / Regular

### Body

-   Overpass Regular
-   Overpass Bold
-   Overpass Italic

### Code / datos técnicos

-   Fira Code

La jerarquía tipográfica debe adaptarse al diseño responsive y no tratar
los tamaños del Brand Guide como valores rígidos de implementación.

------------------------------------------------------------------------

# 3. Dirección creativa

## Concepto: ORBITAL DATA FIELD

La landing utilizará como metáfora visual un **campo orbital de datos**.

El concepto combina:

-   Espacio.
-   Datos.
-   Exploración.
-   Conexiones.
-   Personas.
-   Ideas.
-   Proyectos.

Las órbitas representan movimiento y exploración.

Los nodos representan datos, personas o puntos de conexión.

Las conexiones representan colaboración.

El objetivo es que el lenguaje visual pueda interpretarse tanto como un
sistema espacial como una red de conocimiento y colaboración.

## Sensación buscada

La página debe sentirse:

-   Espacial.
-   Científica.
-   Tecnológica.
-   Experimental.
-   Moderna.
-   Humana.
-   Dinámica.
-   Institucionalmente confiable.

Debe evitar sentirse:

-   Corporativa en exceso.
-   Genérica.
-   Como una plantilla de SaaS.
-   Como una página institucional tradicional.
-   Como un videojuego.
-   Como una página de ciencia ficción excesivamente cargada.

------------------------------------------------------------------------

# 4. Hero

El Hero es la sección visualmente más importante.

## Objetivo

El usuario debe comprender en pocos segundos:

1.  Qué es.
2.  Dónde ocurre.
3.  Cuándo ocurre.
4.  Qué puede hacer.
5.  Dónde continuar.

## Contenido sugerido

``` text
NASA SPACE APPS
SALTA

El hackathon global de NASA llega a Salta.

14–15 NOVIEMBRE 2026

[ SUMATE AL DESAFÍO ]
```

El texto definitivo puede iterarse posteriormente.

## Composición

-   Fondo Deep Blue.
-   Gradiente azul sutil.
-   Logo oficial.
-   Tipografía grande y de alto impacto.
-   Información de fecha claramente visible.
-   CTA principal.
-   Elementos orbitales y partículas como fondo.
-   Selector de idioma.
-   Posible indicador de scroll.

## Regla principal

El contenido HTML debe estar visualmente por encima de la capa Three.js.

Three.js nunca debe dificultar la lectura del Hero.

------------------------------------------------------------------------

# 5. Experiencia Three.js

## Objetivo

Three.js debe funcionar como una **capa atmosférica y de interacción**,
no como la interfaz principal.

> Three.js is an enhancement layer, not the primary interface.

La landing debe seguir funcionando correctamente si WebGL está
deshabilitado.

## 5.1 Escena

Escena inicial mínima:

``` text
Scene
├── Camera
├── Ambient / soft lighting (si resulta necesario)
├── Particle field
├── 2–3 orbital curves
└── Small nodes / points
```

No se requieren modelos 3D complejos.

## 5.2 Elementos

### Partículas

-   Pocas partículas.
-   Distribución espacial ligera.
-   Movimiento lento.
-   Preferentemente puntos simples mediante `Points` / `BufferGeometry`.
-   Evitar grandes cantidades innecesarias.

### Órbitas

-   2--3 curvas orbitales.
-   Líneas finas.
-   Movimiento lento.
-   Algunos nodos recorriendo las órbitas.

### Nodos

Pequeños puntos luminosos que puedan representar:

-   Datos.
-   Personas.
-   Conexiones.
-   Puntos de interés.

El significado debe mantenerse abstracto; no es necesario etiquetar cada
nodo.

## 5.3 Animación

La animación debe ser lenta y ambiental.

Referencia conceptual:

-   Revoluciones de aproximadamente 20--40 segundos.
-   Movimiento continuo.
-   Sin cambios bruscos.
-   Sin elementos saltando o compitiendo con el contenido.

## 5.4 Interacción con mouse

Implementar un parallax muy sutil.

Flujo:

``` text
Mouse movement
      ↓
Camera target
      ↓
Smooth interpolation
      ↓
Scene movement ±2–4°
```

No mover directamente todo el contenido de la página.

La interacción debe sentirse como profundidad, no como una interfaz
interactiva de videojuego.

## 5.5 Scroll

El sistema orbital puede responder sutilmente al scroll.

Ejemplo conceptual:

``` text
HERO
  ↓
WHAT IS SPACE APPS?
  ↓
WHY JOIN?
  ↓
HOW IT WORKS?
```

La cámara o el sistema orbital puede:

-   Acercarse.
-   Cambiar ligeramente de composición.
-   Reorganizar nodos.
-   Modificar la escala de las órbitas.

La transición debe ser progresiva y no debe requerir Three.js para
entender el contenido.

------------------------------------------------------------------------

# 6. Responsive / Mobile

La escena 3D debe adaptarse al dispositivo.

## Desktop

-   Escena completa.
-   Mayor cantidad de partículas.
-   Parallax de mouse.
-   Animación completa.

## Tablet

-   Reducir partículas.
-   Reducir complejidad.
-   Mantener animación.

## Mobile

-   Menor cantidad de partículas.
-   Menor movimiento.
-   Sin interacción de mouse.
-   Priorizar legibilidad y performance.

## Reduced motion

Respetar:

``` text
prefers-reduced-motion: reduce
```

Cuando esté activo:

-   Reducir o desactivar animaciones.
-   Evitar movimientos innecesarios.
-   Mantener contenido estático completamente funcional.

------------------------------------------------------------------------

# 7. Arquitectura conceptual de la landing

La estructura inicial propuesta es:

``` text
NAVIGATION
│
├── Logo
├── Navigation links
└── Language switcher
│
HERO
│
├── NASA Space Apps Salta
├── Date
├── Short value proposition
├── CTA
└── Three.js orbital field
│
WHAT IS SPACE APPS?
│
├── Short explanation
└── NASA / Open Data / Global Hackathon
│
WHY JOIN?
│
├── NASA Data
├── Build in two days
├── Multidisciplinary
├── Community
└── Global event
│
NOT JUST CODING
│
├── Code
├── Science
├── Design
├── Art
├── Data
├── Storytelling
├── Engineering
└── More
│
HOW IT WORKS
│
├── Discover
├── Connect
├── Build
├── Share
└── Impact
│
THE GLOBAL CONNECTION
│
├── Global scale
├── World / network visual
└── Salta connection
│
THE SALTA EVENT
│
├── Date
├── Location
├── Format
└── Event information
│
CHALLENGES
│
└── Challenges / Coming soon
│
PEOPLE
│
├── Judges
├── Mentors
└── Speakers
│
COLLABORATORS
│
├── Sponsors
└── Local collaborators
│
FINAL CTA
│
└── Join the mission
│
FOOTER
```

No todas las secciones necesitan estar completas en V1.

------------------------------------------------------------------------

# 8. Secciones y contenido

## 8.1 What is Space Apps?

No comenzar con una explicación histórica extensa.

Primero comunicar la propuesta:

> NASA Space Apps es un hackathon global donde personas de distintas
> disciplinas utilizan datos abiertos de NASA y agencias espaciales
> asociadas para crear soluciones frente a desafíos reales de la Tierra
> y el espacio.

La información histórica puede aparecer posteriormente como contenido
secundario.

## 8.2 Why Join?

Presentar beneficios mediante bloques visuales:

-   Trabajar con datos reales.
-   Resolver desafíos reales.
-   Construir durante dos días.
-   Aprender haciendo.
-   Conocer personas de diferentes disciplinas.
-   Formar parte de una comunidad global.

## 8.3 Not Just Coding

Esta sección debe reforzar que Space Apps no es exclusivamente para
programadores.

Mostrar disciplinas como:

``` text
CODE
SCIENCE
DESIGN
ART
DATA
STORYTELLING
ENGINEERING
RESEARCH
BUSINESS
```

Mensaje central:

> No necesitás ser programador para participar.

## 8.4 How It Works

Representar la experiencia mediante cinco pasos:

``` text
01 — DISCOVER
Explorá los desafíos.

02 — CONNECT
Encontrá a tu equipo.

03 — BUILD
Convertí una idea en un proyecto.

04 — SHARE
Presentá lo que construyeron.

05 — IMPACT
Tu proyecto entra en el recorrido global.
```

El texto puede iterarse.

## 8.5 Global Connection

Comunicar que Salta forma parte de una iniciativa global.

Utilizar visualmente:

-   mapa;
-   nodos;
-   conexiones;
-   sistema orbital;
-   datos globales.

La visualización debe ser estilizada, no necesariamente un mapa
geográfico preciso.

## 8.6 Salta Event

Información local.

V1:

-   Salta, Argentina.
-   14--15 de noviembre de 2026.
-   Modalidad: a confirmar/según configuración oficial.
-   Venue: Coming soon.
-   Agenda: Coming soon.

La sección debe estar preparada para actualizarse posteriormente.

## 8.7 Challenges

En V1:

> The challenges will be announced soon.

Cuando estén disponibles los desafíos oficiales de 2026, reemplazar esta
sección por cards de challenges.

## 8.8 People

Preparar componentes para:

-   Judges.
-   Mentors.
-   Speakers.

En V1 pueden mostrar estado:

> Coming soon.

## 8.9 Sponsors & Collaborators

Mostrar colaboradores locales cuando sean confirmados.

V1:

> Estamos construyendo una red local de organizaciones, empresas e
> instituciones que harán posible NASA Space Apps Salta 2026.

Los logos deben poder incorporarse posteriormente sin rediseñar la
sección.

------------------------------------------------------------------------

# 9. Navegación

La navegación debe ser simple.

Propuesta:

``` text
SPACE APPS SALTA
[¿QUÉ ES?] [CÓMO FUNCIONA] [EVENTO] [FAQ]
[ES / EN]
[ SUMATE ]
```

El CTA de registro debe permanecer fácilmente accesible.

En mobile:

-   menú compacto;
-   CTA visible;
-   selector de idioma accesible.

------------------------------------------------------------------------

# 10. Internacionalización

## Idioma principal

**Español (Argentina).**

El contenido debe redactarse inicialmente en español argentino, evitando
traducciones literales del inglés cuando afecten naturalidad.

## Inglés

La landing debe poder visualizarse en inglés.

Implementar un switch:

``` text
ES | EN
```

o equivalente.

La internacionalización debe formar parte de la arquitectura desde el
inicio.

No implementar el inglés como una segunda página independiente duplicada
manualmente.

## Requisito

Todos los textos visibles deben ser traducibles:

-   Navigation.
-   Hero.
-   Buttons.
-   Sections.
-   Cards.
-   Forms.
-   FAQ.
-   Footer.
-   Metadata relevante.

------------------------------------------------------------------------

# 11. Sistema de componentes

La implementación debe favorecer componentes reutilizables.

Componentes conceptuales:

``` text
Navbar
LanguageSwitcher
Hero
CTAButton
Section
SectionHeader
FeatureCard
DisciplineCloud / DisciplineList
ProcessStep
ChallengeCard
PersonCard
PartnerLogo
GlobalNetwork
EventInfo
FAQ
Footer
```

Componentes visuales especiales:

``` text
OrbitalField
ParticleField
Orbit
Node
```

La capa Three.js debe estar encapsulada y no mezclarse innecesariamente
con la lógica de contenido.

------------------------------------------------------------------------

# 12. Three.js --- arquitectura técnica

Conceptualmente:

``` text
Landing Page
│
├── UI Layer
│   ├── React / HTML
│   ├── Typography
│   ├── Navigation
│   ├── Content
│   └── CTA
│
└── Visual Layer
    └── Three.js Canvas
        ├── Scene
        ├── Camera
        ├── Particles
        ├── Orbits
        └── Nodes
```

## Requisitos

-   Un único canvas cuando sea posible.
-   Evitar múltiples escenas WebGL independientes.
-   `requestAnimationFrame` controlado.
-   Reducir trabajo cuando la pestaña no esté visible.
-   Utilizar geometrías simples.
-   Evitar texturas pesadas.
-   Evitar modelos 3D externos salvo que exista una razón clara.
-   La escena debe poder desmontarse correctamente.
-   Evitar memory leaks.
-   El canvas no debe interceptar innecesariamente eventos del
    contenido.

## Fallback

Si WebGL no está disponible:

``` text
Three.js → disabled
        ↓
CSS / static background
        ↓
Landing remains fully functional
```

------------------------------------------------------------------------

# 13. Performance

El objetivo no es demostrar la capacidad técnica de Three.js.

El objetivo es obtener:

> máximo impacto visual con mínima complejidad.

Prioridades:

1.  Tiempo de carga.
2.  Interactividad.
3.  Legibilidad.
4.  Accesibilidad.
5.  Consumo razonable de CPU/GPU.
6.  Animación visual.

Evitar:

-   cientos de miles de partículas;
-   modelos complejos;
-   texturas de alta resolución;
-   física;
-   volumetric lighting;
-   post-processing pesado;
-   shaders complejos sin necesidad.

Preferir:

-   `Points`;
-   `BufferGeometry`;
-   curvas simples;
-   interpolación;
-   animaciones matemáticas sencillas;
-   composición mediante CSS.

------------------------------------------------------------------------

# 14. Accesibilidad

La identidad visual no debe comprometer accesibilidad.

Requisitos:

-   Contraste adecuado.
-   Navegación mediante teclado.
-   Focus states visibles.
-   Semántica HTML.
-   Botones reales para acciones.
-   `aria-label` cuando corresponda.
-   El canvas 3D no contiene información indispensable.
-   Soporte para `prefers-reduced-motion`.
-   No depender exclusivamente del color para comunicar estados.

------------------------------------------------------------------------

# 15. Contenido dinámico / información pendiente

La página debe diseñarse para evolucionar.

Información todavía no definida:

-   Venue.
-   Dirección.
-   Capacidad.
-   Agenda definitiva.
-   Jueces.
-   Mentores.
-   Speakers.
-   Premios locales.
-   Sponsors.
-   Colaboradores.
-   Links definitivos de registro y redes.

Utilizar placeholders editoriales como:

-   Coming soon.
-   To be announced.
-   Próximamente.

No inventar información faltante.

La incorporación posterior de estos elementos no debería requerir
rediseñar la arquitectura de la landing.

------------------------------------------------------------------------

# 16. SEO y metadata

La landing debe incluir como mínimo:

``` text
Title:
NASA Space Apps Salta 2026 | NASA Space Apps Challenge

Description:
NASA Space Apps llega a Salta el 14 y 15 de noviembre de 2026.
Sumate al hackathon global y construí soluciones con datos abiertos de NASA.

Language:
es-AR
```

Preparar metadata alternativa para inglés.

Agregar Open Graph / social preview.

El logo oficial y/o un visual específico de la landing pueden utilizarse
como imagen social cuando estén disponibles.

------------------------------------------------------------------------

# 17. Tono de comunicación

## Debe ser

-   Directo.
-   Entusiasta.
-   Inspirador.
-   Cercano.
-   Tecnológico sin ser excesivamente técnico.
-   Inclusivo.

## Evitar

-   Lenguaje corporativo excesivo.
-   Párrafos burocráticos.
-   Explicaciones demasiado largas.
-   Jerga innecesaria.
-   Presentar Space Apps como un evento exclusivamente de programación.

La landing debe hablarle a una persona que podría estar pensando:

> "¿Esto es para mí?"

y responder rápidamente:

> "Sí. Traé lo que sabés, encontrá un equipo y construí algo."

------------------------------------------------------------------------

# 18. V1 --- Prioridades de implementación

## P0 --- imprescindible

-   Landing responsive.
-   Navegación.
-   Hero.
-   Fecha.
-   CTA.
-   What is Space Apps.
-   Why Join.
-   How it Works.
-   Información básica de Salta.
-   Español.
-   Arquitectura preparada para inglés.
-   Identidad visual Space Apps.
-   Accesibilidad básica.
-   SEO básico.

## P1 --- importante

-   Three.js Orbital Data Field.
-   Mouse parallax.
-   Scroll interaction.
-   Global connection section.
-   Challenges placeholder.
-   Sponsors / collaborators placeholder.
-   Judges / speakers placeholder.

## P2 --- iteración posterior

-   Agenda interactiva.
-   Challenges reales.
-   Profiles de speakers/judges/mentors.
-   Sponsors.
-   Premios locales.
-   Animaciones adicionales.
-   Visualizaciones de datos.
-   Contenido fotográfico.
-   Community links.

------------------------------------------------------------------------

# 19. Criterio de éxito

La landing V1 será considerada exitosa si:

1.  Una persona entiende qué es Space Apps Salta en pocos segundos.
2.  La fecha del evento es inmediatamente visible.
3.  La acción principal está clara.
4.  Se entiende que cualquiera puede participar.
5.  Se entiende que Salta forma parte de un evento global.
6.  La identidad Space Apps es reconocible.
7.  La página resulta visualmente interesante sin depender de efectos
    excesivos.
8.  Three.js mejora la experiencia sin convertirse en el centro de la
    interfaz.
9.  La página funciona correctamente en mobile.
10. La información pendiente puede agregarse progresivamente sin
    rediseñar la página.

------------------------------------------------------------------------

# 20. Próximas iteraciones

Este documento es una V1 conceptual/técnica.

Las próximas iteraciones deberán definir progresivamente:

-   Contenido final en español.
-   Traducción inglesa.
-   Arquitectura exacta de navegación.
-   Wireframe.
-   Dirección artística definitiva.
-   Componentes UI.
-   Animaciones.
-   Implementación Three.js.
-   Sistema de diseño.
-   Responsive breakpoints.
-   Venue.
-   Agenda.
-   Challenges.
-   Speakers.
-   Judges.
-   Sponsors y colaboradores.
-   CTA y flujo definitivo de registro.

**Principio rector:**

> Primero construir una experiencia atractiva y funcional con la
> información disponible. Luego incorporar progresivamente la
> información del evento sin romper la experiencia existente.
