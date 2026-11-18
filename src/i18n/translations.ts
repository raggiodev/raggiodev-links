import { Language, ProjectSubcategory, TabFilterType } from '../data/ecosystem';

export interface UITranslations {
  metaTitle: string;
  header: {
    lobbyTag: string;
    roleSubtitle: string;
    educationTag: string;
    activeNodesLabel: string;
    languageSelectorAria: string;
  };
  projectsBackBar: {
    backToPortfolio: string;
    catalogContextLabel: string;
    subfilterAriaLabel: string;
    subfilters: Record<ProjectSubcategory, string>;
  };
  searchAndTabs: {
    searchPlaceholder: string;
    searchAriaLabel: string;
    clearSearchAriaLabel: string;
    shortcutHint: string;
    tabsAriaLabel: string;
    tabs: Record<TabFilterType, string>;
    certificatesExternalPill: string;
    resultsCount: (shown: number, total: number) => string;
  };
  bento: {
    sectionHeading: string;
    sectionSubheading: string;
    door1: {
      badge: string;
      title: string;
      description: string;
      ctaPrimary: string;
      ctaProjects: string;
      metaEducation: string;
    };
    door2: {
      badge: string;
      title: string;
      description: string;
      openStoreLabel: string;
    };
    door3: {
      badge: string;
      title: string;
      description: string;
      highlights: string[];
      cta: string;
    };
    door4: {
      badge: string;
      title: string;
      description: string;
      channels: {
        substack: string;
        ytMain: string;
        ytShorts: string;
      };
    };
  };
  directory: {
    sections: {
      core: {
        title: string;
        subtitle: string;
      };
      projects: {
        title: string;
        subtitle: string;
      };
      social: {
        title: string;
        subtitle: string;
      };
      filtered: {
        cybersecurityTitle: string;
        cybersecuritySubtitle: string;
        gamedevTitle: string;
        gamedevSubtitle: string;
      };
    };
    card: {
      visitLabel: string;
      githubLabel: string;
      copyUrlAria: (title: string) => string;
      copiedFeedback: string;
      copyFailedFeedback: string;
      shortcutLabel: string;
    };
    emptyState: {
      title: string;
      description: string;
      resetButton: string;
    };
  };
  footer: {
    madeByPrefix: string;
    madeByLinkText: string;
    ecosystemCaption: string;
    portfolioLink: string;
    certificatesLink: string;
  };
}

export const TRANSLATIONS: Record<Language, UITranslations> = {
  es: {
    metaTitle: 'Raggiodev Ecosystem Lobby — Fernando Andres Raggio (@raggiodev)',
    header: {
      lobbyTag: 'ECOSYSTEM LOBBY',
      roleSubtitle: 'Full Stack Developer & Cybersecurity Analyst (Blue Team)',
      educationTag: 'Lic. en Ciberdefensa · FADENA (UNDEF), Argentina',
      activeNodesLabel: 'nodos activos',
      languageSelectorAria: 'Seleccionar idioma de la interfaz'
    },
    projectsBackBar: {
      backToPortfolio: '← Volver al Portfolio Oficial (raggiodev.com)',
      catalogContextLabel: 'Catálogo completo de software, despliegues en producción, herramientas de ciberseguridad y laboratorios.',
      subfilterAriaLabel: 'Filtrar proyectos por especialidad técnica',
      subfilters: {
        all: 'All Projects',
        production: 'Production / Stores',
        cybersecurity: 'Cybersecurity',
        ai: 'AI & Automation',
        gamedev: 'Gamedev',
        web: 'Web & Labs'
      }
    },
    searchAndTabs: {
      searchPlaceholder: 'Buscar por proyecto, tecnología (React, Kotlin, WXT, Godot, Python) o tienda...',
      searchAriaLabel: 'Buscar en el ecosistema Raggiodev',
      clearSearchAriaLabel: 'Limpiar búsqueda',
      shortcutHint: 'Ctrl+K',
      tabsAriaLabel: 'Categorías del directorio Raggiodev',
      tabs: {
        all: 'Lobby / All',
        projects: 'Projects & Apps',
        cybersecurity: 'Cybersecurity',
        gamedev: 'Gamedev',
        social: 'Content & Social'
      },
      certificatesExternalPill: 'Certificates',
      resultsCount: (shown, total) => `Mostrando ${shown} de ${total} nodos`
    },
    bento: {
      sectionHeading: 'Puertas Principales del Ecosistema',
      sectionSubheading: 'Acceso directo de baja latencia a los nodos troncales, lanzamientos en tiendas oficiales, certificaciones y canales técnicos.',
      door1: {
        badge: 'PUERTA 01 · NODO CENTRAL',
        title: 'Portfolio Oficial & CV Interactivo',
        description: 'Trayectoria profesional, arquitectura Full Stack (MERN / TypeScript / Python), operaciones de defensa Blue Team y formación universitaria en la Facultad de la Defensa Nacional (FADENA - UNDEF).',
        ctaPrimary: 'Abrir Portfolio Oficial',
        ctaProjects: 'Explorar Catálogo de Proyectos',
        metaEducation: 'raggiodev.com · portfolio.raggiodev.com'
      },
      door2: {
        badge: 'PUERTA 02 · RELEASES EN TIENDAS',
        title: 'Lanzamientos en Producción & Stores',
        description: 'Software publicado en Google Play Store, Chrome Web Store y despliegues cloud de alta disponibilidad.',
        openStoreLabel: 'Abrir'
      },
      door3: {
        badge: 'PUERTA 03 · CREDENCIALES VERIFICADAS',
        title: 'Certificaciones y Diplomas (22+)',
        description: 'Repositorio verificable de títulos y certificaciones técnicas en Ciberseguridad, Desarrollo Full Stack, IA e Inglés Técnico.',
        highlights: ['Google Cybersecurity', 'Microsoft & LinkedIn Security', '13x IBM SkillsBuild', 'Full Stack MERN & CESSI'],
        cta: 'Ver 22+ Certificados Verificados'
      },
      door4: {
        badge: 'PUERTA 04 · CONTENIDO & COMUNIDAD',
        title: 'Divulgación Técnica, Newsletter y Canales de Video',
        description: 'Artículos de ingeniería y ciberdefensa en Substack junto a los canales oficiales de YouTube.',
        channels: {
          substack: 'Substack Newsletter',
          ytMain: 'YouTube Raggiodev',
          ytShorts: 'Shorts CasiUnMinuto'
        }
      }
    },
    directory: {
      sections: {
        core: {
          title: 'Nodos Centrales del Ecosistema',
          subtitle: 'Puntos de entrada principales a la identidad profesional y credenciales verificadas.'
        },
        projects: {
          title: 'Proyectos de Software, Apps y Despliegues',
          subtitle: 'Aplicaciones en Google Play, extensiones en Chrome Web Store, agentes de IA en la nube, videojuegos indie y plataformas web.'
        },
        social: {
          title: 'Canales de Contenido, Redes Profesionales y Contacto',
          subtitle: 'Código fuente abierto, publicaciones técnicas, canales de video y contacto directo.'
        },
        filtered: {
          cybersecurityTitle: 'Ciberseguridad, Herramientas Blue Team y Certificaciones',
          cybersecuritySubtitle: 'Utilidades defensivas air-gapped, auditoría anti-fraude en navegadores y credenciales verificadas en seguridad informática.',
          gamedevTitle: 'Videojuegos Indie y Simulaciones Interactivas',
          gamedevSubtitle: 'Experiencias competitivas multiplataforma 1v1 ELO, juegos 3D en Godot Engine 4 y simulaciones sandbox en navegador.'
        }
      },
      card: {
        visitLabel: 'Abrir / Visitar',
        githubLabel: 'GitHub Repo',
        copyUrlAria: (title) => `Copiar enlace de ${title}`,
        copiedFeedback: 'Copiado',
        copyFailedFeedback: 'Error al copiar',
        shortcutLabel: 'Atajo:'
      },
      emptyState: {
        title: 'No se encontraron nodos para esta búsqueda',
        description: 'Probá con otra palabra clave, tecnología (ej. TypeScript, Kotlin, Capacitor, Godot) o restablecé los filtros activos.',
        resetButton: 'Restablecer filtros y búsqueda'
      }
    },
    footer: {
      madeByPrefix: 'Hecho por',
      madeByLinkText: 'Raggiodev (Fernando Andres Raggio)',
      ecosystemCaption: 'Raggiodev Ecosystem Lobby · Desplegado en Cloudflare Pages con cabeceras de seguridad endurecidas.',
      portfolioLink: 'Portfolio Oficial',
      certificatesLink: 'Certificados'
    }
  },
  en: {
    metaTitle: 'Raggiodev Ecosystem Lobby — Fernando Andres Raggio (@raggiodev)',
    header: {
      lobbyTag: 'ECOSYSTEM LOBBY',
      roleSubtitle: 'Full Stack Developer & Cybersecurity Analyst (Blue Team)',
      educationTag: 'B.S. in Cyberdefense Student · FADENA (UNDEF), Argentina',
      activeNodesLabel: 'active nodes',
      languageSelectorAria: 'Select interface language'
    },
    projectsBackBar: {
      backToPortfolio: '← Back to Official Portfolio (raggiodev.com)',
      catalogContextLabel: 'Complete software catalog, production deployments, Blue Team cybersecurity tools, and technical labs.',
      subfilterAriaLabel: 'Filter projects by technical specialty',
      subfilters: {
        all: 'All Projects',
        production: 'Production / Stores',
        cybersecurity: 'Cybersecurity',
        ai: 'AI & Automation',
        gamedev: 'Gamedev',
        web: 'Web & Labs'
      }
    },
    searchAndTabs: {
      searchPlaceholder: 'Search by project, tech stack (React, Kotlin, WXT, Godot, Python), or store...',
      searchAriaLabel: 'Search the Raggiodev ecosystem',
      clearSearchAriaLabel: 'Clear search query',
      shortcutHint: 'Ctrl+K',
      tabsAriaLabel: 'Raggiodev directory categories',
      tabs: {
        all: 'Lobby / All',
        projects: 'Projects & Apps',
        cybersecurity: 'Cybersecurity',
        gamedev: 'Gamedev',
        social: 'Content & Social'
      },
      certificatesExternalPill: 'Certificates',
      resultsCount: (shown, total) => `Showing ${shown} of ${total} nodes`
    },
    bento: {
      sectionHeading: 'Main Ecosystem Server Doors',
      sectionSubheading: 'Low-latency direct access to core hubs, official store releases, verified certifications, and technical channels.',
      door1: {
        badge: 'DOOR 01 · CORE HUB',
        title: 'Official Portfolio & Interactive CV',
        description: 'Professional trajectory, Full Stack engineering (MERN / TypeScript / Python), Blue Team defensive operations, and Cyberdefense education at FADENA (UNDEF).',
        ctaPrimary: 'Open Official Portfolio',
        ctaProjects: 'Explore Projects Catalog',
        metaEducation: 'raggiodev.com · portfolio.raggiodev.com'
      },
      door2: {
        badge: 'DOOR 02 · STORE RELEASES',
        title: 'Featured Store & Cloud Releases',
        description: 'Production software published on Google Play Store, Chrome Web Store, and high-availability cloud deployments.',
        openStoreLabel: 'Open'
      },
      door3: {
        badge: 'DOOR 03 · VERIFIED CREDENTIALS',
        title: 'Official Certifications & Badges (22+)',
        description: 'Verifiable repository of diplomas and technical certifications in Cybersecurity, Full Stack MERN, AI, and Technical English.',
        highlights: ['Google Cybersecurity', 'Microsoft & LinkedIn Security', '13x IBM SkillsBuild', 'Full Stack MERN & CESSI'],
        cta: 'View 22+ Verified Certificates'
      },
      door4: {
        badge: 'DOOR 04 · CONTENT & COMMUNITY',
        title: 'Technical Writing, Newsletter & Video Channels',
        description: 'Software engineering and cyberdefense deep dives on Substack alongside official YouTube channels.',
        channels: {
          substack: 'Substack Newsletter',
          ytMain: 'YouTube Raggiodev',
          ytShorts: 'Shorts CasiUnMinuto'
        }
      }
    },
    directory: {
      sections: {
        core: {
          title: 'Core Ecosystem Nodes',
          subtitle: 'Primary entry points to professional identity, trajectory, and verified credentials.'
        },
        projects: {
          title: 'Software Projects, Apps & Deployments',
          subtitle: 'Google Play apps, Chrome Web Store extensions, cloud-hosted AI bots, indie games, and web platforms.'
        },
        social: {
          title: 'Content Channels, Social Networks & Mirrors',
          subtitle: 'Open-source repositories, technical articles, video channels, and direct professional contact.'
        },
        filtered: {
          cybersecurityTitle: 'Cybersecurity, Blue Team Tools & Certifications',
          cybersecuritySubtitle: 'Air-gapped defensive utilities, anti-fraud browser auditing extensions, and verified cybersecurity credentials.',
          gamedevTitle: 'Indie Games & Interactive Simulations',
          gamedevSubtitle: 'Cross-platform 1v1 ELO competitive games, 3D survival experiences in Godot Engine 4, and browser sandbox simulations.'
        }
      },
      card: {
        visitLabel: 'Open / Visit',
        githubLabel: 'GitHub Repo',
        copyUrlAria: (title) => `Copy link for ${title}`,
        copiedFeedback: 'Copied',
        copyFailedFeedback: 'Copy failed',
        shortcutLabel: 'Shortcut:'
      },
      emptyState: {
        title: 'No ecosystem nodes match your search',
        description: 'Try searching for another keyword, technology tag (e.g., TypeScript, Kotlin, Capacitor, Godot), or reset the active filters.',
        resetButton: 'Reset filters & search'
      }
    },
    footer: {
      madeByPrefix: 'Made by',
      madeByLinkText: 'Raggiodev (Fernando Andres Raggio)',
      ecosystemCaption: 'Raggiodev Ecosystem Lobby · Deployed on Cloudflare Pages with hardened security headers.',
      portfolioLink: 'Official Portfolio',
      certificatesLink: 'Certificates'
    }
  },
  pt: {
    metaTitle: 'Raggiodev Ecosystem Lobby — Fernando Andres Raggio (@raggiodev)',
    header: {
      lobbyTag: 'ECOSYSTEM LOBBY',
      roleSubtitle: 'Full Stack Developer & Cybersecurity Analyst (Blue Team)',
      educationTag: 'Graduando em Ciberdefesa · FADENA (UNDEF), Argentina',
      activeNodesLabel: 'nós ativos',
      languageSelectorAria: 'Selecionar idioma da interface'
    },
    projectsBackBar: {
      backToPortfolio: '← Voltar ao Portfólio Oficial (raggiodev.com)',
      catalogContextLabel: 'Catálogo completo de software, implantações em produção, ferramentas de cibersegurança e laboratórios.',
      subfilterAriaLabel: 'Filtrar projetos por especialidade técnica',
      subfilters: {
        all: 'All Projects',
        production: 'Production / Stores',
        cybersecurity: 'Cybersecurity',
        ai: 'AI & Automation',
        gamedev: 'Gamedev',
        web: 'Web & Labs'
      }
    },
    searchAndTabs: {
      searchPlaceholder: 'Buscar por projeto, tecnologia (React, Kotlin, WXT, Godot, Python) ou loja...',
      searchAriaLabel: 'Buscar no ecossistema Raggiodev',
      clearSearchAriaLabel: 'Limpar busca',
      shortcutHint: 'Ctrl+K',
      tabsAriaLabel: 'Categorias do diretório Raggiodev',
      tabs: {
        all: 'Lobby / All',
        projects: 'Projects & Apps',
        cybersecurity: 'Cybersecurity',
        gamedev: 'Gamedev',
        social: 'Content & Social'
      },
      certificatesExternalPill: 'Certificates',
      resultsCount: (shown, total) => `Mostrando ${shown} de ${total} nós`
    },
    bento: {
      sectionHeading: 'Portas Principais do Ecossistema',
      sectionSubheading: 'Acesso direto de baixa latência aos nós centrais, lançamentos nas lojas oficiais, certificações e canais técnicos.',
      door1: {
        badge: 'PORTA 01 · NÓ CENTRAL',
        title: 'Portfólio Oficial & Currículo Interativo',
        description: 'Trajetória profissional, engenharia Full Stack (MERN / TypeScript / Python), operações defensivas Blue Team e formação em Ciberdefesa na FADENA (UNDEF).',
        ctaPrimary: 'Abrir Portfólio Oficial',
        ctaProjects: 'Explorar Catálogo de Projetos',
        metaEducation: 'raggiodev.com · portfolio.raggiodev.com'
      },
      door2: {
        badge: 'PORTA 02 · RELEASES EM LOJAS',
        title: 'Lançamentos em Produção & Stores',
        description: 'Software publicado na Google Play Store, Chrome Web Store e implantações em nuvem de alta disponibilidade.',
        openStoreLabel: 'Abrir'
      },
      door3: {
        badge: 'PORTA 03 · CREDENCIAIS VERIFICADAS',
        title: 'Certificações e Diplomas (22+)',
        description: 'Repositório verificável de diplomas e certificações técnicas em Cibersegurança, Full Stack MERN, IA e Inglês Técnico.',
        highlights: ['Google Cybersecurity', 'Microsoft & LinkedIn Security', '13x IBM SkillsBuild', 'Full Stack MERN & CESSI'],
        cta: 'Ver 22+ Certificados Verificados'
      },
      door4: {
        badge: 'PORTA 04 · CONTEÚDO & COMUNIDADE',
        title: 'Artigos Técnicos, Newsletter e Canais de Vídeo',
        description: 'Artigos de engenharia de software e ciberdefesa no Substack junto aos canais oficiais do YouTube.',
        channels: {
          substack: 'Substack Newsletter',
          ytMain: 'YouTube Raggiodev',
          ytShorts: 'Shorts CasiUnMinuto'
        }
      }
    },
    directory: {
      sections: {
        core: {
          title: 'Nós Centrais do Ecossistema',
          subtitle: 'Pontos de entrada principais para identidade profissional, trajetória e credenciais verificadas.'
        },
        projects: {
          title: 'Projetos de Software, Apps e Implantações',
          subtitle: 'Aplicativos na Google Play, extensões na Chrome Web Store, bots de IA em nuvem, jogos indie e plataformas web.'
        },
        social: {
          title: 'Canais de Conteúdo, Redes Sociais e Espelhos',
          subtitle: 'Repositórios open-source, artigos técnicos, canais de vídeo e contato profissional direto.'
        },
        filtered: {
          cybersecurityTitle: 'Cibersegurança, Ferramentas Blue Team e Certificações',
          cybersecuritySubtitle: 'Utilitários defensivos air-gapped, extensão de auditoria antifraude e credenciais verificadas em segurança da informação.',
          gamedevTitle: 'Jogos Indie e Simulações Interativas',
          gamedevSubtitle: 'Jogos competitivos multiplataforma 1v1 ELO, experiências 3D na Godot Engine 4 e simulações sandbox no navegador.'
        }
      },
      card: {
        visitLabel: 'Abrir / Visitar',
        githubLabel: 'GitHub Repo',
        copyUrlAria: (title) => `Copiar link de ${title}`,
        copiedFeedback: 'Copiado',
        copyFailedFeedback: 'Erro ao copiar',
        shortcutLabel: 'Atalho:'
      },
      emptyState: {
        title: 'Nenhum nó encontrado para esta busca',
        description: 'Tente buscar outra palavra-chave, tecnologia (ex. TypeScript, Kotlin, Capacitor, Godot) ou redefina os filtros ativos.',
        resetButton: 'Redefinir filtros e busca'
      }
    },
    footer: {
      madeByPrefix: 'Feito por',
      madeByLinkText: 'Raggiodev (Fernando Andres Raggio)',
      ecosystemCaption: 'Raggiodev Ecosystem Lobby · Implantado no Cloudflare Pages com cabeçalhos de segurança reforçados.',
      portfolioLink: 'Portfólio Oficial',
      certificatesLink: 'Certificados'
    }
  }
};
