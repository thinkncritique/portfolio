// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit text, add jobs or projects in this file — the pages
//  update automatically. Every text has an English (en) and
//  a German (de) version.
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'de';
type T = { en: string; de: string };

// ── About you ────────────────────────────────────────────────
export const profile = {
  name: 'Smit Dahake',
  photo: '/images/smit.jpg',
  email: 'smda00001@uni-saarland.de',
  linkedin: 'https://www.linkedin.com/in/smit-dahake',
  github: '', // e.g. 'https://github.com/your-username' — leave empty to hide
  location: { en: 'Saarbrücken, Germany', de: 'Saarbrücken' },
  // Put a public CV PDF (without phone/address) in public/cv/ and write its path here,
  // e.g. '/cv/Smit-Dahake-CV.pdf'. Leave empty to hide the download button.
  cvPdf: '',
  role: {
    en: 'BSc Plus MINT Informatics student · Minor in Business',
    de: 'Student BSc Plus MINT Informatik · Nebenfach BWL',
  },
  tagline: {
    en: 'I build software — and I enjoy explaining it, organising around it and bringing people together.',
    de: 'Ich entwickle Software — und erkläre, organisiere und bringe Menschen zusammen.',
  },
  about: {
    en: [
      'I am an international Computer Science student at Saarland University with a strong interest in business and communication. I came to Saarbrücken through the VSi MINT preparatory programme, where I studied mathematics, physics and German, before starting my Bachelor Plus MINT in Informatics with a minor in business administration.',
      'Alongside my studies I have worked in many roles at the university — as a tutor, a mentor, at the Career Center, in IT support for a library and at Triathlon, the university’s centre for entrepreneurship and innovation. Through these roles and my involvement in the student council, I have gained valuable experience in teamwork, organisation, communication and problem-solving.',
      'As a communicative and open-minded person, I enjoy working with people from diverse backgrounds and learning from different perspectives.',
    ],
    de: [
      'Ich bin internationaler Informatikstudent an der Universität des Saarlandes mit großem Interesse an Wirtschaft und Kommunikation. Nach Saarbrücken kam ich über das VSi-MINT-Vorbereitungsstudium, in dem ich Mathematik, Physik und Deutsch studiert habe, bevor ich mein Bachelor-Plus-MINT-Studium in Informatik mit Nebenfach BWL begann.',
      'Neben dem Studium war ich in vielen Rollen an der Universität tätig — als Tutor, als Mentor, im Career Center, im IT-Support einer Bibliothek und bei Triathlon, dem Zentrum für Gründung und Innovation der Universität. Durch diese Tätigkeiten und mein Engagement in der Fachschaft habe ich wertvolle Erfahrung in Teamarbeit, Organisation, Kommunikation und Problemlösung gesammelt.',
      'Als kommunikativer und offener Mensch arbeite ich gern mit Menschen unterschiedlicher Hintergründe und lerne aus verschiedenen Perspektiven.',
    ],
  },
};

// ── Projects ─────────────────────────────────────────────────
// Each project gets its own page at /projects/<slug>/ (and /de/projekte/<slug>/).
// Images: put screenshots in public/images/projects/ and list them below,
// e.g. images: ['/images/projects/lernicus-1.png']. Empty = placeholder box.
// DRAFT TEXTS: the descriptions below are placeholders written without details
// about the projects — please replace them with what each project really does.
export const projects: {
  slug: string;
  title: string;
  summary: T;
  description: { en: string[]; de: string[] };
  tech: string[];
  images: string[];
  links: { label: T; url: string }[];
}[] = [
  {
    slug: 'lernicus',
    title: 'Lernicus',
    summary: {
      en: 'A learning project that makes studying more structured and engaging.',
      de: 'Ein Lernprojekt, das das Lernen strukturierter und motivierender macht.',
    },
    description: {
      en: [
        'Lernicus started from a simple question: how can studying feel less overwhelming and more like steady progress? The project brings learning material together in one place and helps learners work through it step by step.',
        'Building it meant thinking about both sides — the code behind it and the people using it. I focused on keeping the interface clear and the experience motivating, and learned a lot about turning an idea into a working product.',
      ],
      de: [
        'Lernicus entstand aus einer einfachen Frage: Wie kann sich Lernen weniger überwältigend und mehr nach stetigem Fortschritt anfühlen? Das Projekt bündelt Lernmaterial an einem Ort und hilft Lernenden, es Schritt für Schritt durchzuarbeiten.',
        'Bei der Entwicklung ging es um beide Seiten — den Code dahinter und die Menschen, die es nutzen. Ich habe darauf geachtet, die Oberfläche klar und das Erlebnis motivierend zu gestalten, und viel darüber gelernt, wie aus einer Idee ein funktionierendes Produkt wird.',
      ],
    },
    tech: [], // e.g. ['Python', 'SQL']
    images: [],
    links: [], // e.g. [{ label: { en: 'Source code', de: 'Quellcode' }, url: 'https://github.com/...' }]
  },
  {
    slug: 'smits-abschiedsspiel',
    title: 'Smits Abschiedsspiel',
    summary: {
      en: 'A farewell game — a playful, personal way of saying goodbye.',
      de: 'Ein Abschiedsspiel — eine spielerische, persönliche Art, Tschüss zu sagen.',
    },
    description: {
      en: [
        'Smits Abschiedsspiel ("Smit’s farewell game") is a small game I built as a personal goodbye. Instead of a card or a speech, I wanted to give people something interactive to play and remember.',
        'The project combined programming with storytelling: designing the game flow, writing the content and making sure it was fun for everyone who played it.',
      ],
      de: [
        'Smits Abschiedsspiel ist ein kleines Spiel, das ich als persönlichen Abschied entwickelt habe. Statt einer Karte oder einer Rede wollte ich etwas Interaktives schenken, das man spielen und in Erinnerung behalten kann.',
        'Das Projekt verband Programmierung mit Storytelling: den Spielablauf entwerfen, die Inhalte schreiben und dafür sorgen, dass es allen Spaß macht.',
      ],
    },
    tech: [],
    images: [],
    links: [],
  },
];

// ── Experience (newest first) ────────────────────────────────
export const experience: {
  title: T;
  org: T;
  period: T;
  points: { en: string[]; de: string[] };
}[] = [
  {
    title: { en: 'Student Employee', de: 'Studentischer Mitarbeiter' },
    org: {
      en: 'Triathlon — Entrepreneurship, Innovation & Transfer, Saarland University',
      de: 'Triathlon — Gründung, Innovation & Transfer, Universität des Saarlandes',
    },
    period: { en: 'Present', de: 'Aktuell' }, // TODO: add start date, e.g. '10/2026 – Present'
    points: {
      en: ['Supporting the university’s start-up and innovation ecosystem'], // TODO: describe your tasks
      de: ['Unterstützung des Gründungs- und Innovationsökosystems der Universität'],
    },
  },
  {
    title: { en: 'VSi-MINT Mentor', de: 'VSi-MINT-Mentor' },
    org: { en: 'Saarland University', de: 'Universität des Saarlandes' },
    period: { en: '04/2026 – 09/2026', de: '04/2026 – 09/2026' },
    points: {
      en: [
        'Guided and supported VSi-MINT students in their everyday study life',
        'Provided individual counselling and organised support sessions',
        'Point of contact for academic and organisational challenges',
      ],
      de: [
        'Betreuung und Unterstützung von VSi-MINT-Studierenden im Studienalltag',
        'Individuelle Beratung und Organisation von Unterstützungsgesprächen',
        'Ansprechpartner bei akademischen und organisatorischen Herausforderungen',
      ],
    },
  },
  {
    title: { en: 'IT Student Assistant', de: 'IT-Hiwi' },
    org: {
      en: 'Economics Seminar Library (WIWISB), Saarland University',
      de: 'Wirtschaftswissenschaftliche Seminarbibliothek (WIWISB), Universität des Saarlandes',
    },
    period: { en: '03/2026 – Present', de: '03/2026 – heute' },
    points: {
      en: [
        'Maintaining and updating the library’s databases',
        'Troubleshooting and technical support',
        'Installing and setting up the OPAC library catalogue system',
      ],
      de: [
        'Pflege und Aktualisierung von Bibliotheksdatenbanken',
        'Fehleranalyse und technischer Support',
        'Installation und Einrichtung des OPAC-Systems',
      ],
    },
  },
  {
    title: { en: 'Student Employee', de: 'Studentischer Mitarbeiter' },
    org: { en: 'Career Center, Saarland University', de: 'Career Center, Universität des Saarlandes' },
    period: { en: '02/2026 – Present', de: '02/2026 – heute' },
    points: {
      en: [
        'Organising career events with company partners — workshops, networking events and career fairs',
        'Participant management from registration to on-site coordination',
        'Creating student-focused content and social media communication to increase the Career Center’s visibility',
      ],
      de: [
        'Organisation von Karriere-Events mit Unternehmenspartnern — Workshops, Networking-Events und Karrieremessen',
        'Teilnehmermanagement von der Registrierung bis zur Betreuung vor Ort',
        'Zielgruppengerechte Inhalte und Social-Media-Kommunikation für mehr Sichtbarkeit des Career Centers',
      ],
    },
  },
  {
    title: { en: 'Higher Mathematics for Engineers 2 — Tutor', de: 'Tutor Höhere Mathematik für Ingenieure 2' },
    org: { en: 'Saarland University', de: 'Universität des Saarlandes' },
    period: { en: '04/2024 – 09/2024', de: '04/2024 – 09/2024' },
    points: {
      en: [
        'Conducted HMI2 exercise sessions for STEM students',
        'Guided students through challenging problems and discussions',
        'Created an open and supportive learning environment',
      ],
      de: [
        'Durchführung von HMI2-Präsenzübungen für MINT-Studierende',
        'Begleitung beim Lösen anspruchsvoller Aufgaben und Förderung des Austauschs',
        'Schaffung einer offenen und angenehmen Lernatmosphäre',
      ],
    },
  },
  {
    title: { en: 'Cashier', de: 'Kassierer' },
    org: { en: 'ALDI SÜD, Saarbrücken', de: 'ALDI SÜD, Saarbrücken' },
    period: { en: '08/2023 – 03/2026', de: '08/2023 – 03/2026' },
    points: {
      en: [
        'Handled checkout and cash reconciliation',
        'Served and advised customers',
        'Worked in a team to keep the store running efficiently',
      ],
      de: [
        'Abwicklung von Kassiervorgängen inklusive Kassenabrechnung',
        'Betreuung und Beratung von Kundinnen und Kunden',
        'Zusammenarbeit im Team für einen effizienten Filialbetrieb',
      ],
    },
  },
];

// ── Education ────────────────────────────────────────────────
export const education: { degree: T; school: T; period: T; note?: T }[] = [
  {
    degree: { en: 'Bachelor Plus MINT — Informatics', de: 'Bachelor Plus MINT — Informatik' },
    school: { en: 'Saarland University', de: 'Universität des Saarlandes' },
    period: { en: '04/2024 – Present', de: '04/2024 – heute' },
    note: { en: 'Minor: Business Administration (BWL)', de: 'Nebenfach: Betriebswirtschaftslehre' },
  },
  {
    degree: { en: 'VSi MINT Programme', de: 'VSi-MINT-Programm' },
    school: { en: 'Saarland University', de: 'Universität des Saarlandes' },
    period: { en: '10/2022 – 03/2024', de: '10/2022 – 03/2024' },
    note: {
      en: 'Preparatory study programme: mathematics, physics and German',
      de: 'Vorbereitungsstudium: Mathematik, Physik und Deutsch',
    },
  },
  {
    degree: { en: 'School education', de: 'Schulausbildung' },
    school: { en: 'Bharatiya Vidya Bhavan’s, India', de: 'Bharatiya Vidya Bhavan’s, Indien' },
    period: { en: '', de: '' },
  },
];

// ── Engagement & interests ───────────────────────────────────
export const engagement: { title: T; subtitle: T; text: T }[] = [
  {
    title: { en: 'Debattierclub Saar', de: 'Debattierclub Saar' },
    subtitle: { en: 'Member', de: 'Mitglied' },
    text: {
      en: 'Competitive debating sharpens how I structure arguments, think on my feet and tell a convincing story — skills I use in tutoring, presenting and everyday teamwork.',
      de: 'Debattieren schärft, wie ich Argumente strukturiere, spontan reagiere und überzeugend erzähle — Fähigkeiten, die ich beim Tutorieren, Präsentieren und im Team nutze.',
    },
  },
  {
    title: { en: 'Student Council BSc Plus MINT', de: 'Fachschaft BSc Plus MINT' },
    subtitle: { en: 'Member', de: 'Mitglied' },
    text: {
      en: 'Representing fellow students and organising events and support for our programme, working closely with a team of volunteers.',
      de: 'Vertretung der Kommilitoninnen und Kommilitonen sowie Organisation von Veranstaltungen und Unterstützung für unseren Studiengang im Team.',
    },
  },
  {
    title: { en: 'Bollywood Dance Instructor', de: 'Bollywood-Tanztrainer' },
    subtitle: { en: 'University Sports (Hochschulsport UdS) · 04/2023 – 09/2023', de: 'Hochschulsport UdS · 04/2023 – 09/2023' },
    text: {
      en: 'Taught beginners the basics of Bollywood dance, planned sessions for diverse groups and choreographed routines blending traditional and contemporary styles.',
      de: 'Einführung von Anfängerinnen und Anfängern in Bollywood-Tanz, Planung von Kursen für gemischte Gruppen und Choreografien aus traditionellen und modernen Elementen.',
    },
  },
];

// ── Skills & languages ───────────────────────────────────────
export const skills: { group: T; items: string[] }[] = [
  { group: { en: 'Programming', de: 'Programmierung' }, items: ['Python', 'Java', 'C', 'SQL'] },
  { group: { en: 'Tools', de: 'Tools' }, items: ['Typo3', 'Canva', 'Microsoft Office', 'PowerPoint'] },
  {
    group: { en: 'Strengths', de: 'Stärken' },
    items: ['Communication', 'Organisation', 'Teamwork', 'Problem-solving', 'Teaching'],
  },
];
export const skillsDe: Record<string, string> = {
  Communication: 'Kommunikation',
  Organisation: 'Organisation',
  Teamwork: 'Teamarbeit',
  'Problem-solving': 'Problemlösung',
  Teaching: 'Lehre',
};

// level: 1–6 (A1 … C2) for the little bar
export const languages: { name: T; level: string; value: number }[] = [
  { name: { en: 'Marathi', de: 'Marathi' }, level: 'C2', value: 6 },
  { name: { en: 'Hindi', de: 'Hindi' }, level: 'C2', value: 6 },
  { name: { en: 'English', de: 'Englisch' }, level: 'C1', value: 5 },
  { name: { en: 'German', de: 'Deutsch' }, level: 'C1', value: 5 },
  { name: { en: 'French', de: 'Französisch' }, level: 'A1', value: 1 },
];

// ── Interface labels ─────────────────────────────────────────
export const ui = {
  en: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', education: 'Education', engagement: 'Engagement', skills: 'Skills', contact: 'Contact' },
    seeProjects: 'See my projects',
    downloadCv: 'Download CV (PDF)',
    readMore: 'Read more',
    backHome: '← Back to overview',
    screenshotSoon: 'Screenshot coming soon',
    techUsed: 'Built with',
    languages: 'Languages',
    contactText: 'Interested in working together or just want to say hello? I am happy to hear from you.',
    footer: 'Built with Astro, hosted on GitHub Pages.',
    switchLabel: 'Deutsch',
  },
  de: {
    nav: { about: 'Über mich', projects: 'Projekte', experience: 'Erfahrung', education: 'Ausbildung', engagement: 'Engagement', skills: 'Kenntnisse', contact: 'Kontakt' },
    seeProjects: 'Zu meinen Projekten',
    downloadCv: 'Lebenslauf herunterladen (PDF)',
    readMore: 'Mehr erfahren',
    backHome: '← Zurück zur Übersicht',
    screenshotSoon: 'Screenshot folgt',
    techUsed: 'Umgesetzt mit',
    languages: 'Sprachen',
    contactText: 'Lust auf Zusammenarbeit oder einfach Hallo sagen? Ich freue mich über deine Nachricht.',
    footer: 'Gebaut mit Astro, gehostet auf GitHub Pages.',
    switchLabel: 'English',
  },
};

// helper: project page URL per language
export const projectUrl = (slug: string, lang: Lang) =>
  lang === 'en' ? `/projects/${slug}/` : `/de/projekte/${slug}/`;
