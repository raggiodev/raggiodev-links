import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RotateCcw, SearchX } from 'lucide-react';
import {
  ECOSYSTEM_ITEMS,
  EcosystemItem,
  Language,
  ProjectSubcategory,
  TabFilterType
} from './data/ecosystem';
import { TRANSLATIONS } from './i18n/translations';
import { Header } from './components/Header';
import { SearchAndTabs } from './components/SearchAndTabs';
import { BentoDoors } from './components/BentoDoors';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';

const STORAGE_LANG_KEY = 'raggiodev-links-lang';

const VALID_TABS: TabFilterType[] = ['all', 'projects', 'cybersecurity', 'gamedev', 'social'];

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'es';
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_LANG_KEY);
    if (stored === 'es' || stored === 'en' || stored === 'pt') {
      return stored;
    }
  } catch {
    // Ignore localStorage access restrictions
  }

  const navLang = (window.navigator.language || '').toLowerCase();
  if (navLang.startsWith('pt')) {
    return 'pt';
  }
  if (navLang.startsWith('en')) {
    return 'en';
  }
  return 'es';
}

function parseUrlParams(): { tab: TabFilterType; q: string } {
  if (typeof window === 'undefined') {
    return { tab: 'all', q: '' };
  }
  const params = new URLSearchParams(window.location.search);
  const rawTab = (params.get('tab') || 'all').toLowerCase() as TabFilterType;
  const tab: TabFilterType = VALID_TABS.includes(rawTab) ? rawTab : 'all';
  const q = params.get('q') || '';
  return { tab, q };
}

function matchesSearchQuery(item: EcosystemItem, rawQuery: string): boolean {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return true;
  }

  const terms = query.split(/\s+/).filter(Boolean);
  const searchablePool = [
    item.title.es,
    item.title.en,
    item.title.pt,
    item.description.es,
    item.description.en,
    item.description.pt,
    item.statusBadge.es,
    item.statusBadge.en,
    item.statusBadge.pt,
    item.displayHost,
    item.url,
    item.shortcutUrl || '',
    ...item.techStack,
    ...item.searchKeywords
  ]
    .join(' ')
    .toLowerCase();

  return terms.every((term) => searchablePool.includes(term));
}

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage);
  const [{ tab: activeTab, q: searchQuery }, setRouteState] = useState(parseUrlParams);
  const [activeSubcategory, setActiveSubcategory] = useState<ProjectSubcategory>('all');

  const t = TRANSLATIONS[language];

  // Sync HTML lang attribute and localStorage when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    try {
      window.localStorage.setItem(STORAGE_LANG_KEY, language);
    } catch {
      // Ignore storage errors
    }
  }, [language, t.metaTitle]);

  // Listen to browser popstate
  useEffect(() => {
    const handlePopState = () => {
      setRouteState(parseUrlParams());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Bidirectional URL query synchronization (?tab= and ?q=) via history.replaceState
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (activeTab && activeTab !== 'all') {
      params.set('tab', activeTab);
    } else {
      params.delete('tab');
    }

    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      params.set('q', trimmedQuery);
    } else {
      params.delete('q');
    }

    const queryString = params.toString();
    const nextUrl = queryString
      ? `${window.location.pathname}?${queryString}${window.location.hash}`
      : `${window.location.pathname}${window.location.hash}`;

    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextUrl !== currentUrl) {
      window.history.replaceState(null, '', nextUrl);
    }
  }, [activeTab, searchQuery]);

  const handleTabChange = useCallback((nextTab: TabFilterType) => {
    setRouteState((prev) => ({ ...prev, tab: nextTab }));
    if (nextTab !== 'projects') {
      setActiveSubcategory('all');
    }
  }, []);

  const handleSearchChange = useCallback((nextQuery: string) => {
    setRouteState((prev) => ({ ...prev, q: nextQuery }));
  }, []);

  const handleResetAll = useCallback(() => {
    setRouteState({ tab: 'all', q: '' });
    setActiveSubcategory('all');
  }, []);

  // Filter items based on activeTab, activeSubcategory (when tab === 'projects'), and searchQuery
  const filteredItems = useMemo(() => {
    return ECOSYSTEM_ITEMS.filter((item) => {
      // 1. Category / Tab filter
      if (activeTab === 'projects') {
        if (item.category !== 'projects') {
          return false;
        }
        if (
          activeSubcategory !== 'all' &&
          (!item.subcategories || !item.subcategories.includes(activeSubcategory))
        ) {
          return false;
        }
      } else if (activeTab === 'cybersecurity') {
        const isCyber =
          item.subcategories?.includes('cybersecurity') ||
          item.id === 'official-certificates';
        if (!isCyber) {
          return false;
        }
      } else if (activeTab === 'gamedev') {
        const isGamedev = item.subcategories?.includes('gamedev');
        if (!isGamedev) {
          return false;
        }
      } else if (activeTab === 'social') {
        if (item.category !== 'social') {
          return false;
        }
      }

      // 2. Real-time search query filter
      return matchesSearchQuery(item, searchQuery);
    });
  }, [activeTab, activeSubcategory, searchQuery]);

  // Group items when in 'all' view
  const groupedItems = useMemo(() => {
    return {
      core: filteredItems.filter((item) => item.category === 'core'),
      projects: filteredItems.filter((item) => item.category === 'projects'),
      social: filteredItems.filter((item) => item.category === 'social')
    };
  }, [filteredItems]);

  const showBentoDoors = activeTab === 'all' && searchQuery.trim() === '';

  return (
    <div className="min-h-screen flex flex-col bg-[#090A0F] text-[#F1F5F9]">
      {/* Zone 1: Top Bar & Identity Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        totalNodes={ECOSYSTEM_ITEMS.length}
        t={t.header}
        onResetToLobby={handleResetAll}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-10">
        {/* Zone 2: Search Bar & Category Filter Tabs */}
        <SearchAndTabs
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          activeSubcategory={activeSubcategory}
          onSubcategoryChange={setActiveSubcategory}
          shownCount={filteredItems.length}
          totalCount={ECOSYSTEM_ITEMS.length}
          tSearch={t.searchAndTabs}
          tProjectsBar={t.projectsBackBar}
        />

        {/* Zone 3: The Bento Grid ("Main Server Doors") — visible on Lobby view */}
        {showBentoDoors && (
          <BentoDoors t={t.bento} onNavigateTab={handleTabChange} />
        )}

        {/* Zone 4: Categorized Directory Grid */}
        {filteredItems.length === 0 ? (
          <section
            aria-live="polite"
            className="surface-card rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto my-8 space-y-4"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#090A0F] border border-white/[0.08] text-[#22D3EE]">
              <SearchX className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
              {t.directory.emptyState.title}
            </h2>
            <p className="text-sm text-[#CBD5E1] pretty-text">
              {t.directory.emptyState.description}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAll}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#22D3EE]/15 hover:bg-[#22D3EE]/25 text-[#22D3EE] border border-[#22D3EE]/40 text-sm font-semibold transition-colors"
              >
                <RotateCcw className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                <span>{t.directory.emptyState.resetButton}</span>
              </button>
            </div>
          </section>
        ) : activeTab === 'all' ? (
          <div className="space-y-12">
            {/* Core Ecosystem Nodes */}
            {groupedItems.core.length > 0 && (
              <section aria-labelledby="section-core-heading" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-3">
                  <div>
                    <h2
                      id="section-core-heading"
                      className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight"
                    >
                      {t.directory.sections.core.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5 pretty-text">
                      {t.directory.sections.core.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    {groupedItems.core.length} / {ECOSYSTEM_ITEMS.filter((i) => i.category === 'core').length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedItems.core.map((item) => (
                    <LinkCard
                      key={item.id}
                      item={item}
                      language={language}
                      t={t.directory.card}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Software Projects, Apps & Deployments */}
            {groupedItems.projects.length > 0 && (
              <section aria-labelledby="section-projects-heading" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-3">
                  <div>
                    <h2
                      id="section-projects-heading"
                      className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight"
                    >
                      {t.directory.sections.projects.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5 pretty-text">
                      {t.directory.sections.projects.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    {groupedItems.projects.length} / {ECOSYSTEM_ITEMS.filter((i) => i.category === 'projects').length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedItems.projects.map((item) => (
                    <LinkCard
                      key={item.id}
                      item={item}
                      language={language}
                      t={t.directory.card}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Content Channels, Social Networks & Mirrors */}
            {groupedItems.social.length > 0 && (
              <section aria-labelledby="section-social-heading" className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-3">
                  <div>
                    <h2
                      id="section-social-heading"
                      className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight"
                    >
                      {t.directory.sections.social.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5 pretty-text">
                      {t.directory.sections.social.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    {groupedItems.social.length} / {ECOSYSTEM_ITEMS.filter((i) => i.category === 'social').length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedItems.social.map((item) => (
                    <LinkCard
                      key={item.id}
                      item={item}
                      language={language}
                      t={t.directory.card}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          /* Filtered Single-Tab View (projects, cybersecurity, gamedev, social) */
          <section aria-labelledby="section-filtered-heading" className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.08] pb-3">
              <div>
                <h2
                  id="section-filtered-heading"
                  className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight"
                >
                  {activeTab === 'projects'
                    ? t.directory.sections.projects.title
                    : activeTab === 'cybersecurity'
                      ? t.directory.sections.filtered.cybersecurityTitle
                      : activeTab === 'gamedev'
                        ? t.directory.sections.filtered.gamedevTitle
                        : t.directory.sections.social.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5 pretty-text">
                  {activeTab === 'projects'
                    ? t.directory.sections.projects.subtitle
                    : activeTab === 'cybersecurity'
                      ? t.directory.sections.filtered.cybersecuritySubtitle
                      : activeTab === 'gamedev'
                        ? t.directory.sections.filtered.gamedevSubtitle
                        : t.directory.sections.social.subtitle}
                </p>
              </div>
              <span className="font-mono text-xs text-[#22D3EE] tabular-nums">
                {filteredItems.length}
              </span>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                activeTab === 'social' ? 'lg:grid-cols-3' : ''
              } gap-4`}
            >
              {filteredItems.map((item) => (
                <LinkCard
                  key={item.id}
                  item={item}
                  language={language}
                  t={t.directory.card}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer t={t.footer} />
    </div>
  );
};

export default App;
