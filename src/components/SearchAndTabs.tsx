import React, { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Code2,
  Gamepad2,
  Layers,
  type LucideIcon,
  Search,
  Share2,
  Shield,
  X
} from 'lucide-react';
import { ProjectSubcategory, TabFilterType } from '../data/ecosystem';
import { UITranslations } from '../i18n/translations';

interface SearchAndTabsProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeTab: TabFilterType;
  onTabChange: (tab: TabFilterType) => void;
  activeSubcategory: ProjectSubcategory;
  onSubcategoryChange: (sub: ProjectSubcategory) => void;
  shownCount: number;
  totalCount: number;
  tSearch: UITranslations['searchAndTabs'];
  tProjectsBar: UITranslations['projectsBackBar'];
}

const TAB_LIST: {
  id: TabFilterType;
  icon: LucideIcon;
}[] = [
  { id: 'all', icon: Layers },
  { id: 'projects', icon: Code2 },
  { id: 'cybersecurity', icon: Shield },
  { id: 'gamedev', icon: Gamepad2 },
  { id: 'social', icon: Share2 }
];

const PROJECT_SUBCATEGORIES: ProjectSubcategory[] = [
  'all',
  'production',
  'cybersecurity',
  'ai',
  'gamedev',
  'web'
];

export const SearchAndTabs: React.FC<SearchAndTabsProps> = ({
  searchQuery,
  onSearchChange,
  activeTab,
  onTabChange,
  activeSubcategory,
  onSubcategoryChange,
  shownCount,
  totalCount,
  tSearch,
  tProjectsBar
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Global Ctrl+K / Cmd+K keyboard shortcut and Escape handling
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      } else if (event.key === 'Escape' && document.activeElement === searchInputRef.current) {
        if (searchQuery) {
          onSearchChange('');
        } else {
          searchInputRef.current?.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery, onSearchChange]);

  // Scroll selected category tab into view inside horizontal scroller (modern-web-guidance: tabs)
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl && typeof activeEl.scrollIntoView === 'function') {
      activeEl.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [activeTab]);

  // Clean leading unicode arrow from localized label so Lucide icon carries the visual arrow cleanly
  const cleanBackLabel = tProjectsBar.backToPortfolio.replace(/^←\s*/, '');

  return (
    <section aria-label={tSearch.tabsAriaLabel} className="space-y-4">
      {/* Contextual Top Bar when ?tab=projects is active */}
      {activeTab === 'projects' && (
        <div className="rounded-xl bg-[#11131C] border border-[#22D3EE]/30 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://raggiodev.com"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#22D3EE]/15 hover:bg-[#22D3EE]/25 text-[#22D3EE] border border-[#22D3EE]/40 text-xs sm:text-sm font-semibold transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{cleanBackLabel}</span>
            </a>
          </div>
          <p className="text-xs sm:text-sm text-[#CBD5E1] pretty-text">
            {tProjectsBar.catalogContextLabel}
          </p>
        </div>
      )}

      {/* Search Input Bar + Filter Row */}
      <div className="rounded-xl bg-[#11131C] border border-white/[0.08] p-3 sm:p-4 space-y-3.5">
        <div className="relative flex items-center">
          <Search
            className="w-4 h-4 text-[#94A3B8] absolute left-3.5 pointer-events-none"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <input
            ref={searchInputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={tSearch.searchPlaceholder}
            aria-label={tSearch.searchAriaLabel}
            autoComplete="off"
            spellCheck="false"
            className="w-full pl-10 pr-24 py-2.5 rounded-lg bg-[#090A0F] border border-white/[0.08] focus:border-[#22D3EE] text-sm text-[#F8FAFC] placeholder-[#94A3B8] transition-colors focus:outline-none"
          />
          <div className="absolute right-2.5 flex items-center gap-1.5">
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  onSearchChange('');
                  searchInputRef.current?.focus();
                }}
                aria-label={tSearch.clearSearchAriaLabel}
                className="p-1 rounded-md text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06] transition-colors min-w-[26px] min-h-[26px] flex items-center justify-center"
              >
                <X className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium text-[#94A3B8] bg-[#11131C] border border-white/[0.08] rounded">
              {tSearch.shortcutHint}
            </kbd>
          </div>
        </div>

        {/* Category Filter Pills (Single-Row Scroller) + Status Count */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div
            role="toolbar"
            aria-label={tSearch.tabsAriaLabel}
            className="tab-scroller items-center gap-1.5 pb-1 lg:pb-0"
          >
            {TAB_LIST.map(({ id, icon: Icon }) => {
              const isSelected = activeTab === id;
              return (
                <button
                  key={id}
                  ref={(el) => {
                    tabRefs.current[id] = el;
                  }}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onTabChange(id)}
                  className={`filter-tab-btn inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/40'
                      : 'bg-[#090A0F] text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-white/[0.04] border border-white/[0.08]'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  <span>{tSearch.tabs[id]}</span>
                </button>
              );
            })}

            {/* Direct External Pill: Certificates -> https://raggiodev.com/certificates */}
            <a
              href="https://raggiodev.com/certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap bg-[#090A0F] text-[#34D399] hover:bg-[#34D399]/10 border border-[#34D399]/30 transition-colors"
            >
              <Award className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{tSearch.certificatesExternalPill}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>

          <div className="text-xs font-mono text-[#94A3B8] tabular-nums shrink-0 lg:text-right">
            {tSearch.resultsCount(shownCount, totalCount)}
          </div>
        </div>

        {/* Secondary Technical Sub-Filter Pills when ?tab=projects is active */}
        {activeTab === 'projects' && (
          <div
            role="group"
            aria-label={tProjectsBar.subfilterAriaLabel}
            className="pt-3 border-t border-white/[0.08] tab-scroller items-center gap-1.5"
          >
            {PROJECT_SUBCATEGORIES.map((sub) => {
              const isSelected = activeSubcategory === sub;
              return (
                <button
                  key={sub}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSubcategoryChange(sub)}
                  className={`flex-none px-3 py-1.5 rounded-md font-mono text-xs font-medium transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/40'
                      : 'bg-[#090A0F] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/[0.08]'
                  }`}
                >
                  {tProjectsBar.subfilters[sub]}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
