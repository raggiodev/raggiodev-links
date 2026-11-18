export type Language = 'es' | 'en' | 'pt';

export type CategoryType = 'core' | 'projects' | 'social';

export type TabFilterType = 'all' | 'projects' | 'cybersecurity' | 'gamedev' | 'social';

export type ProjectSubcategory =
  | 'all'
  | 'production'
  | 'cybersecurity'
  | 'ai'
  | 'gamedev'
  | 'web';

export type StatusVariant =
  | 'google-play'
  | 'chrome-store'
  | 'live-web'
  | 'core-node'
  | 'cloud-service'
  | 'award-finalist'
  | 'in-dev'
  | 'official-channel';

export type IconIdentifier =
  | 'globe'
  | 'award'
  | 'crown'
  | 'shield-check'
  | 'shield-alert'
  | 'bot'
  | 'brain'
  | 'sparkles'
  | 'scale'
  | 'gamepad'
  | 'swords'
  | 'cpu'
  | 'github'
  | 'linkedin'
  | 'newspaper'
  | 'youtube'
  | 'film'
  | 'share'
  | 'mail';

export interface LocalizedText {
  es: string;
  en: string;
  pt: string;
}

export interface EcosystemItem {
  id: string;
  category: CategoryType;
  subcategories?: Exclude<ProjectSubcategory, 'all'>[];
  icon: IconIdentifier;
  title: LocalizedText;
  description: LocalizedText;
  statusBadge: LocalizedText;
  statusVariant: StatusVariant;
  url: string;
  shortcutUrl?: string;
  displayHost: string;
  githubUrl?: string;
  techStack: string[];
  searchKeywords: string[];
  featuredInStores?: boolean;
  actionLabel?: LocalizedText;
}

export const ECOSYSTEM_ITEMS: EcosystemItem[] = [
  // ============================================================================
  // 1. CORE ECOSYSTEM NODES (core)
  // ============================================================================
  {
    id: 'official-portfolio',
    category: 'core',
    icon: 'globe',
    title: {
      es: 'Portfolio Oficial — Raggiodev',
      en: 'Official Portfolio — Raggiodev',
      pt: 'Portfólio Oficial — Raggiodev'
    },
    description: {
      es: 'Portfolio interactivo principal, CV técnico, experiencia Full Stack & Blue Team y formación universitaria en Ciberdefensa (FADENA - UNDEF).',
      en: 'Main interactive portfolio, technical CV, Full Stack & Blue Team trajectory, and undergraduate education in Cyberdefense (FADENA - UNDEF).',
      pt: 'Portfólio interativo principal, currículo técnico, trajetória Full Stack & Blue Team e formação acadêmica em Ciberdefesa (FADENA - UNDEF).'
    },
    statusBadge: {
      es: 'Core Node',
      en: 'Core Node',
      pt: 'Core Node'
    },
    statusVariant: 'core-node',
    url: 'https://raggiodev.com',
    shortcutUrl: 'https://portfolio.raggiodev.com',
    displayHost: 'raggiodev.com',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    searchKeywords: ['portfolio', 'cv', 'resume', 'currículum', 'fernando andres raggio', 'fadena', 'undef', 'ciberdefensa']
  },
  {
    id: 'official-certificates',
    category: 'core',
    subcategories: ['cybersecurity'],
    icon: 'award',
    title: {
      es: 'Certificados y Credenciales Oficiales (22+)',
      en: 'Official Certificates & Badges (22+)',
      pt: 'Certificados e Credenciais Oficiais (22+)'
    },
    description: {
      es: 'Más de 22 diplomas verificados: Google Cybersecurity, Microsoft & LinkedIn Cybersecurity, 13 rutas IBM SkillsBuild, Full Stack MERN, Argentina Programa, CESSI, EF SET CEFR, CUI, EducaciónIT y Accenture.',
      en: '22+ verified diplomas and badges: Google Cybersecurity, Microsoft & LinkedIn Cybersecurity, 13 IBM SkillsBuild paths, Full Stack MERN, Argentina Programa, CESSI, EF SET CEFR, CUI Technical English, EducaciónIT, and Accenture.',
      pt: 'Mais de 22 diplomas verificados: Google Cybersecurity, Microsoft & LinkedIn Cybersecurity, 13 trilhas IBM SkillsBuild, Full Stack MERN, Argentina Programa, CESSI, EF SET CEFR, CUI, EducaciónIT e Accenture.'
    },
    statusBadge: {
      es: 'Core Node · 22+ Verificados',
      en: 'Core Node · 22+ Verified',
      pt: 'Core Node · 22+ Verificados'
    },
    statusVariant: 'core-node',
    url: 'https://raggiodev.com/certificates',
    shortcutUrl: 'https://certs.raggiodev.com',
    displayHost: 'certs.raggiodev.com',
    techStack: ['Google Cybersecurity', 'Microsoft Security', 'IBM SkillsBuild', 'Full Stack MERN', 'EF SET'],
    searchKeywords: ['certificates', 'certificados', 'diplomas', 'badges', 'google', 'microsoft', 'ibm', 'mern', 'cessi', 'argentina programa', 'cui', 'accenture', 'educacionit']
  },

  // ============================================================================
  // 2. SOFTWARE PROJECTS, APPS & DEPLOYMENTS (projects)
  // ============================================================================
  {
    id: 'coronados',
    category: 'projects',
    subcategories: ['production', 'gamedev'],
    icon: 'crown',
    title: {
      es: 'Coronados: El Trono Hispano',
      en: 'Coronados: El Trono Hispano',
      pt: 'Coronados: El Trono Hispano'
    },
    description: {
      es: 'Juego competitivo multiplataforma de ranking comunitario 1v1 ELO (Android y Web SPA). Arquitectura nativa Kotlin-first con RPCs PL/pgSQL atómicos en Supabase y tickets anti-cheat.',
      en: 'Cross-platform 1v1 ELO community ranking game (Android & Web SPA). Built with Kotlin-first native architecture, atomic PL/pgSQL RPCs on Supabase PostgreSQL, and anti-cheat tickets.',
      pt: 'Jogo competitivo multiplataforma de ranking comunitário 1v1 ELO (Android e Web SPA). Arquitetura nativa Kotlin-first com RPCs PL/pgSQL atômicos no Supabase e tickets anti-cheat.'
    },
    statusBadge: {
      es: 'Google Play · Live Web App',
      en: 'Google Play · Live Web App',
      pt: 'Google Play · Live Web App'
    },
    statusVariant: 'google-play',
    url: 'https://coronados.raggiodev.com',
    displayHost: 'coronados.raggiodev.com',
    techStack: ['React Native', 'Expo SDK 52', 'Kotlin', 'TypeScript', 'Supabase', 'PostgreSQL'],
    searchKeywords: ['coronados', 'elo', '1v1', 'ranking', 'android', 'google play', 'game', 'juego', 'plpgsql', 'anti-cheat'],
    featuredInStores: true
  },
  {
    id: 'netpocket-cybersecurity',
    category: 'projects',
    subcategories: ['production', 'cybersecurity'],
    icon: 'shield-check',
    title: {
      es: 'NetPocket Cybersecurity',
      en: 'NetPocket Cybersecurity',
      pt: 'NetPocket Cybersecurity'
    },
    description: {
      es: 'Toolkit Android air-gapped de ciberseguridad y redes en Google Play: calculadora de subredes, puertos, Chmod, Event IDs de Windows, códigos HTTP, Inspector y guardia criptográfico.',
      en: 'Air-gapped Android cybersecurity and networking toolkit on Google Play Store (Subnet calculator, Port lookup, Chmod calculator, Windows Event IDs, HTTP codes, Inspector, Cryptographic Guard).',
      pt: 'Toolkit Android air-gapped de cibersegurança e redes na Google Play: calculadora de sub-redes, portas, Chmod, Event IDs do Windows, códigos HTTP, Inspector e guarda criptográfica.'
    },
    statusBadge: {
      es: 'Google Play Store',
      en: 'Google Play Store',
      pt: 'Google Play Store'
    },
    statusVariant: 'google-play',
    url: 'https://netpocket.raggiodev.com',
    displayHost: 'netpocket.raggiodev.com',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Capacitor'],
    searchKeywords: ['netpocket', 'cybersecurity', 'ciberseguridad', 'blue team', 'subnet', 'ports', 'chmod', 'windows event id', 'google play', 'air-gapped', 'android'],
    featuredInStores: true
  },
  {
    id: 'escudo-criollo',
    category: 'projects',
    subcategories: ['production', 'cybersecurity'],
    icon: 'shield-alert',
    title: {
      es: 'Escudo Criollo',
      en: 'Escudo Criollo',
      pt: 'Escudo Criollo'
    },
    description: {
      es: 'Extensión en Chrome Web Store para detectar tiendas fraudulentas en Argentina. Validación matemática Módulo 11 CUIT/CUIL, detección QR Data Fiscal F.960 ARCA/AFIP, Shadow DOM cerrado y auditor homográfico UTF-8.',
      en: 'Chrome Web Store extension detecting fraudulent e-commerce stores in Argentina. Features Módulo 11 CUIT/CUIL math validation, ARCA/AFIP F.960 Data Fiscal QR detection, closed Shadow DOM, and UTF-8 homograph auditor.',
      pt: 'Extensão na Chrome Web Store para detectar lojas fraudulentas na Argentina. Validação matemática Módulo 11 CUIT/CUIL, detecção QR Data Fiscal F.960 ARCA/AFIP, Shadow DOM fechado e auditor de homógrafos UTF-8.'
    },
    statusBadge: {
      es: 'Chrome Web Store',
      en: 'Chrome Web Store',
      pt: 'Chrome Web Store'
    },
    statusVariant: 'chrome-store',
    url: 'https://escudo-criollo.raggiodev.com',
    displayHost: 'escudo-criollo.raggiodev.com',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['WXT', 'React', 'TypeScript', 'Shadow DOM', 'Zero-Trust'],
    searchKeywords: ['escudo criollo', 'chrome web store', 'extension', 'cuit', 'cuil', 'afip', 'arca', 'phishing', 'homograph', 'e-commerce', 'blue team', 'security'],
    featuredInStores: true
  },
  {
    id: 'tarsito-wpp-bot',
    category: 'projects',
    subcategories: ['ai'],
    icon: 'bot',
    title: {
      es: 'Cloud-Hosted AI Orchestration Bot (TARSito WPP)',
      en: 'Cloud-Hosted AI Orchestration Bot (TARSito WPP)',
      pt: 'Cloud-Hosted AI Orchestration Bot (TARSito WPP)'
    },
    description: {
      es: 'Asistente automatizado 24/7 en WhatsApp alojado en Google Cloud (e2-micro). Orquestación IA multi-proveedor (Groq Qwen3-32B con fallback a Google Gemini API), sistema anti-ban por roles/cooldown y RAG sobre Obsidian (/notas).',
      en: '24/7 automated WhatsApp assistant hosted on Google Cloud Platform (e2-micro). Multi-provider AI orchestration (Groq Qwen3-32B primary with Google Gemini API fallback), role-based anti-ban cooldowns, and local Obsidian vault RAG (/notas).',
      pt: 'Assistente automatizado 24/7 no WhatsApp hospedado no Google Cloud (e2-micro). Orquestração IA multi-provedor (Groq Qwen3-32B com fallback para Google Gemini API), sistema anti-ban por cargos/cooldown e RAG sobre Obsidian (/notas).'
    },
    statusBadge: {
      es: 'GCP 24/7 · Cloud Service',
      en: 'GCP 24/7 · Cloud Service',
      pt: 'GCP 24/7 · Cloud Service'
    },
    statusVariant: 'cloud-service',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['Node.js', 'Baileys', 'Groq Qwen3-32B', 'Gemini API', 'GCP e2-micro', 'Obsidian RAG'],
    searchKeywords: ['tarsito', 'whatsapp', 'bot', 'ai', 'ia', 'groq', 'qwen', 'gemini', 'gcp', 'google cloud', 'obsidian', 'rag', 'baileys']
  },
  {
    id: 'psicopedapp',
    category: 'projects',
    subcategories: ['production'],
    icon: 'brain',
    title: {
      es: 'PsicopedApp',
      en: 'PsicopedApp',
      pt: 'PsicopedApp'
    },
    description: {
      es: 'Aplicación móvil utilitaria para profesionales de la psicopedagogía con calculadora clínica de edad cronológica exacta (años, meses y días) y herramientas de evaluación educativa.',
      en: 'Mobile utility application for psychopedagogy professionals featuring a clinical chronological age calculator (exact years, months, and days) and educational assessment tools.',
      pt: 'Aplicativo móvel utilitário para profissionais de psicopedagogia com calculadora clínica de idade cronológica exata (anos, meses e dias) e ferramentas de avaliação educacional.'
    },
    statusBadge: {
      es: 'Production Mobile App',
      en: 'Production Mobile App',
      pt: 'Production Mobile App'
    },
    statusVariant: 'live-web',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['React Native', 'Expo', 'TypeScript'],
    searchKeywords: ['psicopedapp', 'psicopedagogía', 'clinical', 'age calculator', 'edad cronológica', 'react native', 'expo', 'mobile']
  },
  {
    id: 'organi-deby-ai',
    category: 'projects',
    subcategories: ['ai', 'web'],
    icon: 'sparkles',
    title: {
      es: 'Organi & Deby AI',
      en: 'Organi & Deby AI',
      pt: 'Organi & Deby AI'
    },
    description: {
      es: 'Ecosistema de finanzas personales, marcadores inteligentes con jerarquía de carpetas y gestión de notas potenciado por el asistente interno Deby AI.',
      en: 'Personal finance, smart link bookmarking with folder hierarchies, and notes ecosystem powered by the internal Deby AI assistant.',
      pt: 'Ecossistema de finanças pessoais, favoritos inteligentes com hierarquia de pastas e gestão de notas impulsionado pelo assistente interno Deby AI.'
    },
    statusBadge: {
      es: 'AI Ecosystem App',
      en: 'AI Ecosystem App',
      pt: 'AI Ecosystem App'
    },
    statusVariant: 'in-dev',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['React', 'TypeScript', 'Node.js', 'AI Assistant'],
    searchKeywords: ['organi', 'deby ai', 'finance', 'finanzas', 'bookmarks', 'notes', 'notas', 'productivity']
  },
  {
    id: 'docudebate-lab',
    category: 'projects',
    subcategories: ['ai', 'web'],
    icon: 'scale',
    title: {
      es: 'DocuDebate Lab',
      en: 'DocuDebate Lab',
      pt: 'DocuDebate Lab'
    },
    description: {
      es: 'Plataforma de análisis documental y debate estructurado asistido por IA. Finalista Top 6 entre 600 participantes en la competencia Egg AI Power Competition.',
      en: 'AI-powered document analysis and structured debate platform. Top 6 Finalist among 600 participants in the Egg AI Power Competition.',
      pt: 'Plataforma de análise documental e debate estruturado assistido por IA. Finalista Top 6 entre 600 participantes na competição Egg AI Power Competition.'
    },
    statusBadge: {
      es: 'Top 6 Finalist · Egg AI',
      en: 'Top 6 Finalist · Egg AI',
      pt: 'Top 6 Finalista · Egg AI'
    },
    statusVariant: 'award-finalist',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['React', 'TypeScript', 'Python', 'LLM Analysis'],
    searchKeywords: ['docudebate', 'egg ai power', 'debate', 'document analysis', 'finalist', 'top 6', 'ai']
  },
  {
    id: 'daily-dose',
    category: 'projects',
    subcategories: ['gamedev'],
    icon: 'gamepad',
    title: {
      es: 'Daily Dose',
      en: 'Daily Dose',
      pt: 'Daily Dose'
    },
    description: {
      es: 'Videojuego indie 3D en primera persona de supervivencia y recolección co-desarrollado junto a Matías Serrano (Mysterious Dash) en Godot Engine 4 y GDScript.',
      en: 'First-person 3D survival and collectathon indie game co-developed with Matías Serrano (Mysterious Dash) in Godot Engine 4 and GDScript.',
      pt: 'Jogo indie 3D em primeira pessoa de sobrevivência e coleta co-desenvolvido com Matías Serrano (Mysterious Dash) na Godot Engine 4 e GDScript.'
    },
    statusBadge: {
      es: 'Indie Game · Godot 4',
      en: 'Indie Game · Godot 4',
      pt: 'Indie Game · Godot 4'
    },
    statusVariant: 'in-dev',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['Godot', 'GDScript', '3D Graphics'],
    searchKeywords: ['daily dose', 'godot', 'gdscript', '3d', 'survival', 'indie game', 'mysterious dash', 'matias serrano']
  },
  {
    id: 'team-salvador-dojang',
    category: 'projects',
    subcategories: ['web'],
    icon: 'swords',
    title: {
      es: 'Team Salvador — Dojang ITF Platform',
      en: 'Team Salvador — Dojang ITF Platform',
      pt: 'Team Salvador — Dojang ITF Platform'
    },
    description: {
      es: 'Plataforma web y móvil para practicantes de Taekwondo ITF con consulta de horarios, recursos teóricos de tul y seguimiento de graduaciones.',
      en: 'Web and mobile platform for ITF Taekwondo students featuring class schedules, theory resources, and belt graduation tracking.',
      pt: 'Plataforma web e móvel para praticantes de Taekwondo ITF com horários de aulas, recursos teóricos e acompanhamento de graduações.'
    },
    statusBadge: {
      es: 'Live Web Platform',
      en: 'Live Web Platform',
      pt: 'Live Web Platform'
    },
    statusVariant: 'live-web',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    searchKeywords: ['team salvador', 'dojang', 'taekwondo', 'itf', 'web', 'platform']
  },
  {
    id: 'js-worldbox-berreta',
    category: 'projects',
    subcategories: ['gamedev', 'web'],
    icon: 'cpu',
    title: {
      es: 'JS WorldBox Berreta',
      en: 'JS WorldBox Berreta',
      pt: 'JS WorldBox Berreta'
    },
    description: {
      es: 'Simulación experimental tipo sandbox ejecutada directamente en el navegador y escrita íntegramente en JavaScript.',
      en: 'Experimental browser-based cellular and entity sandbox simulation written entirely in JavaScript.',
      pt: 'Simulação experimental estilo sandbox executada diretamente no navegador e escrita inteiramente em JavaScript.'
    },
    statusBadge: {
      es: 'Live Web Sandbox',
      en: 'Live Web Sandbox',
      pt: 'Live Web Sandbox'
    },
    statusVariant: 'live-web',
    url: 'https://js-worldbox-berreta.raggiodev.com',
    displayHost: 'js-worldbox-berreta.raggiodev.com',
    githubUrl: 'https://github.com/raggiodev',
    techStack: ['JavaScript', 'HTML5 Canvas', 'Cloudflare Pages'],
    searchKeywords: ['worldbox', 'berreta', 'sandbox', 'simulation', 'javascript', 'canvas', 'browser game']
  },

  // ============================================================================
  // 3. CONTENT CHANNELS, SOCIAL NETWORKS & MIRRORS (social)
  // ============================================================================
  {
    id: 'github-raggiodev',
    category: 'social',
    icon: 'github',
    title: {
      es: 'GitHub (@raggiodev)',
      en: 'GitHub (@raggiodev)',
      pt: 'GitHub (@raggiodev)'
    },
    description: {
      es: 'Repositorios open-source, herramientas de seguridad defensiva, arquitecturas Full Stack y despliegues web.',
      en: 'Open-source repositories, defensive security tools, Full Stack architectures, and web deployments.',
      pt: 'Repositórios open-source, ferramentas de segurança defensiva, arquiteturas Full Stack e implantações web.'
    },
    statusBadge: {
      es: 'Open Source · Official',
      en: 'Open Source · Official',
      pt: 'Open Source · Oficial'
    },
    statusVariant: 'official-channel',
    url: 'https://github.com/raggiodev',
    displayHost: 'github.com/raggiodev',
    techStack: ['Open Source', 'TypeScript', 'Python', 'Kotlin'],
    searchKeywords: ['github', 'open source', 'code', 'repositories', 'repositorios', 'raggiodev']
  },
  {
    id: 'linkedin-raggiodev',
    category: 'social',
    icon: 'linkedin',
    title: {
      es: 'LinkedIn (Fernando Andres Raggio)',
      en: 'LinkedIn (Fernando Andres Raggio)',
      pt: 'LinkedIn (Fernando Andres Raggio)'
    },
    description: {
      es: 'Red profesional, trayectoria académica en Ciberdefensa (FADENA - UNDEF) y publicaciones sobre ciberseguridad e ingeniería de software.',
      en: 'Professional network, academic trajectory in Cyberdefense (FADENA - UNDEF), and publications on cybersecurity and software engineering.',
      pt: 'Rede profissional, trajetória acadêmica em Ciberdefesa (FADENA - UNDEF) e publicações sobre cibersegurança e engenharia de software.'
    },
    statusBadge: {
      es: 'Official Profile',
      en: 'Official Profile',
      pt: 'Perfil Oficial'
    },
    statusVariant: 'official-channel',
    url: 'https://www.linkedin.com/in/raggiodev',
    displayHost: 'linkedin.com/in/raggiodev',
    techStack: ['Professional Network', 'Blue Team', 'Full Stack'],
    searchKeywords: ['linkedin', 'network', 'career', 'fernando andres raggio', 'profile', 'perfil']
  },
  {
    id: 'substack-blog',
    category: 'social',
    icon: 'newspaper',
    title: {
      es: 'Substack Technical Blog',
      en: 'Substack Technical Blog',
      pt: 'Substack Technical Blog'
    },
    description: {
      es: 'Artículos técnicos y análisis en profundidad sobre ingeniería de software, inteligencia artificial y ciberdefensa.',
      en: 'Technical articles and deep dives on software engineering, artificial intelligence, and cyberdefense.',
      pt: 'Artigos técnicos e análises aprofundadas sobre engenharia de software, inteligência artificial e ciberdefesa.'
    },
    statusBadge: {
      es: 'Official Newsletter',
      en: 'Official Newsletter',
      pt: 'Newsletter Oficial'
    },
    statusVariant: 'official-channel',
    url: 'https://raggiodev.substack.com',
    displayHost: 'raggiodev.substack.com',
    techStack: ['Substack', 'Technical Writing', 'Cyberdefense', 'AI'],
    searchKeywords: ['substack', 'blog', 'newsletter', 'articles', 'artículos', 'writing']
  },
  {
    id: 'youtube-main',
    category: 'social',
    icon: 'youtube',
    title: {
      es: 'YouTube Canal Principal (Raggiodev)',
      en: 'YouTube Main Channel (Raggiodev)',
      pt: 'YouTube Canal Principal (Raggiodev)'
    },
    description: {
      es: 'Desarrollo de software, tutoriales técnicos, arquitectura de sistemas y demostraciones de proyectos en producción.',
      en: 'Software development, technical tutorials, systems architecture, and production project showcases.',
      pt: 'Desenvolvimento de software, tutoriais técnicos, arquitetura de sistemas e demonstrações de projetos em produção.'
    },
    statusBadge: {
      es: 'Official Channel',
      en: 'Official Channel',
      pt: 'Canal Oficial'
    },
    statusVariant: 'official-channel',
    url: 'https://yt.raggiodev.com',
    displayHost: 'yt.raggiodev.com',
    techStack: ['YouTube', 'Tutorials', 'Software Engineering'],
    searchKeywords: ['youtube', 'video', 'channel', 'canal', 'tutorials', 'raggiodev']
  },
  {
    id: 'youtube-casiunminuto',
    category: 'social',
    icon: 'film',
    title: {
      es: 'YouTube Shorts (CasiUnMinuto)',
      en: 'YouTube Shorts Channel (CasiUnMinuto)',
      pt: 'YouTube Shorts (CasiUnMinuto)'
    },
    description: {
      es: 'Canal de contenido dinámico en formato corto sobre tecnología, informática, ciencia y curiosidades.',
      en: 'Short-form video channel covering technology, computing, science, and technical curiosities.',
      pt: 'Canal de vídeos curtos sobre tecnologia, computação, ciência e curiosidades técnicas.'
    },
    statusBadge: {
      es: 'Official Channel · Shorts',
      en: 'Official Channel · Shorts',
      pt: 'Canal Oficial · Shorts'
    },
    statusVariant: 'official-channel',
    url: 'https://casiunminuto.raggiodev.com',
    displayHost: 'casiunminuto.raggiodev.com',
    techStack: ['YouTube Shorts', 'Tech Curiosities'],
    searchKeywords: ['casiunminuto', 'casi un minuto', 'shorts', 'youtube', 'video']
  },
  {
    id: 'linktree-mirror',
    category: 'social',
    icon: 'share',
    title: {
      es: 'Linktree Mirror (@raggiodev)',
      en: 'Linktree Mirror (@raggiodev)',
      pt: 'Linktree Mirror (@raggiodev)'
    },
    description: {
      es: 'Espejo externo verificado de enlaces rápidos para redes sociales y plataformas de terceros.',
      en: 'Verified external social link mirror for quick access across third-party platforms.',
      pt: 'Espelho externo verificado de links rápidos para redes sociais e plataformas de terceiros.'
    },
    statusBadge: {
      es: 'External Mirror',
      en: 'External Mirror',
      pt: 'Espelho Externo'
    },
    statusVariant: 'official-channel',
    url: 'https://linktr.ee/raggiodev',
    displayHost: 'linktr.ee/raggiodev',
    techStack: ['Linktree', 'Social Mirror'],
    searchKeywords: ['linktree', 'linktr.ee', 'mirror', 'espejo', 'social links']
  },
  {
    id: 'official-email-contact',
    category: 'social',
    icon: 'mail',
    title: {
      es: 'Contacto Oficial por Email',
      en: 'Official Email Contact',
      pt: 'Contato Oficial por E-mail'
    },
    description: {
      es: 'Canal directo para consultas profesionales, propuestas de desarrollo Full Stack, auditorías Blue Team y soporte de aplicaciones.',
      en: 'Direct contact channel for professional inquiries, Full Stack development proposals, Blue Team consultations, and app support.',
      pt: 'Canal direto para consultas profissionais, propostas de desenvolvimento Full Stack, consultorias Blue Team e suporte de aplicativos.'
    },
    statusBadge: {
      es: 'Direct Contact',
      en: 'Direct Contact',
      pt: 'Contato Direto'
    },
    statusVariant: 'official-channel',
    url: 'mailto:support@raggiodev.com',
    displayHost: 'support@raggiodev.com',
    techStack: ['support@raggiodev.com', 'Professional Inquiries'],
    searchKeywords: ['email', 'correo', 'contact', 'contacto', 'support', 'soporte', 'hire'],
    actionLabel: {
      es: 'Enviar Correo',
      en: 'Send Email',
      pt: 'Enviar E-mail'
    }
  }
];
