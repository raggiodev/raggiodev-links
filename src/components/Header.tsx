import React from 'react';
import { BadgeCheck, Shield, Terminal } from 'lucide-react';
import { Language } from '../data/ecosystem';
import { UITranslations } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  totalNodes: number;
  t: UITranslations['header'];
  onResetToLobby: () => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' }
];

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  totalNodes,
  t,
  onResetToLobby
}) => {
  return (
    <header className="border-b border-white/[0.08] bg-[#090A0F]/90 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Identity & Verified Role */}
          <div className="flex items-start sm:items-center gap-3.5">
            <button
              type="button"
              onClick={onResetToLobby}
              className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#11131C] border border-white/[0.08] hover:border-[#22D3EE]/50 transition-colors"
              aria-label="Raggiodev Ecosystem Lobby Home"
            >
              <Terminal className="w-5 h-5 text-[#22D3EE]" strokeWidth={1.75} aria-hidden="true" />
              <span
                className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#34D399] ring-2 ring-[#090A0F]"
                aria-hidden="true"
              />
            </button>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#F8FAFC] flex items-center gap-1.5">
                  <span>Fernando Andres Raggio</span>
                  <BadgeCheck
                    className="w-4 h-4 text-[#22D3EE] shrink-0"
                    strokeWidth={2}
                    aria-label="Verified Identity"
                  />
                </h1>
                <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-[#11131C] border border-white/[0.08] text-[#22D3EE]">
                  @raggiodev
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] font-medium px-2 py-0.5 rounded bg-[#11131C] border border-white/[0.08] text-[#CBD5E1]">
                  {t.lobbyTag}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#CBD5E1] font-medium mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{t.roleSubtitle}</span>
                <span className="text-white/25" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-[#94A3B8] text-xs">
                  <Shield className="w-3.5 h-3.5 text-[#34D399]" strokeWidth={1.75} aria-hidden="true" />
                  {t.educationTag}
                </span>
              </p>
            </div>
          </div>

          {/* Right Bar: Active Node Counter + ES | EN | PT Switcher */}
          <div className="flex items-center justify-between md:justify-end gap-3 border-t border-white/[0.06] pt-3 md:border-t-0 md:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11131C] border border-white/[0.08] text-xs font-mono text-[#CBD5E1] tabular-nums">
              <span className="h-2 w-2 rounded-full bg-[#34D399]" aria-hidden="true" />
              <span className="font-semibold text-[#F8FAFC]">{totalNodes}</span>
              <span>{t.activeNodesLabel}</span>
            </div>

            <div
              role="group"
              aria-label={t.languageSelectorAria}
              className="inline-flex items-center rounded-lg bg-[#11131C] p-0.5 border border-white/[0.08]"
            >
              {LANGUAGES.map((item) => {
                const isActive = language === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onLanguageChange(item.code)}
                    aria-pressed={isActive}
                    className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-md transition-colors min-w-[36px] min-h-[28px] ${
                      isActive
                        ? 'bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/40'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] border border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
