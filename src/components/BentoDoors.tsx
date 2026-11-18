import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Crown,
  Film,
  Globe,
  Newspaper,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Youtube
} from 'lucide-react';
import { TabFilterType } from '../data/ecosystem';
import { UITranslations } from '../i18n/translations';

interface BentoDoorsProps {
  t: UITranslations['bento'];
  onNavigateTab: (tab: TabFilterType) => void;
}

export const BentoDoors: React.FC<BentoDoorsProps> = ({ t, onNavigateTab }) => {
  return (
    <section aria-labelledby="bento-doors-heading" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <h2
            id="bento-doors-heading"
            className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight"
          >
            {t.sectionHeading}
          </h2>
          <p className="text-sm text-[#CBD5E1] mt-1 max-w-2xl pretty-text">
            {t.sectionSubheading}
          </p>
        </div>
      </div>

      {/* 4-Card Bento Grid ("Main Server Doors") — Zero nested cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Door 1 (Large Primary Card - 7 cols): Official Portfolio */}
        <article className="surface-card rounded-2xl p-6 sm:p-7 lg:col-span-7 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-[#22D3EE]">
                <Globe className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-wider">
                  {t.door1.badge}
                </span>
              </div>
              <span className="font-mono text-xs text-[#94A3B8] px-2.5 py-1 rounded-md bg-[#090A0F] border border-white/[0.08]">
                {t.door1.metaEducation}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {t.door1.title}
            </h3>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-[65ch] pretty-text">
              {t.door1.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
            <a
              href="https://raggiodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-[#090A0F] font-bold text-sm transition-colors"
            >
              <span>{t.door1.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => onNavigateTab('projects')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#090A0F] hover:bg-white/[0.05] text-[#F8FAFC] border border-white/[0.08] hover:border-[#22D3EE]/40 font-semibold text-sm transition-colors"
            >
              <span>{t.door1.ctaProjects}</span>
              <ArrowRight className="w-4 h-4 text-[#22D3EE]" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </article>

        {/* Door 2 (Medium Card - 5 cols): Featured Store & Cloud Releases */}
        <article className="surface-card rounded-2xl p-6 lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-2 text-[#34D399]">
                <Sparkles className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-wider">
                  {t.door2.badge}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#34D399] px-2 py-0.5 rounded bg-[#34D399]/10 border border-[#34D399]/30">
                PRODUCTION
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
              {t.door2.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1.5 pretty-text">
              {t.door2.description}
            </p>

            {/* Clean Divider Rows (Never nested cards) */}
            <div className="mt-4 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              <a
                href="https://coronados.raggiodev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group py-2.5 flex items-center justify-between gap-3 hover:text-[#22D3EE] transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Crown className="w-4 h-4 text-[#22D3EE] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <div className="truncate">
                    <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                      Coronados: El Trono Hispano
                    </span>
                    <span className="block font-mono text-[11px] text-[#94A3B8]">
                      Google Play · Web SPA (1v1 ELO)
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#22D3EE] shrink-0">
                  <span>{t.door2.openStoreLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
              </a>

              <a
                href="https://netpocket.raggiodev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group py-2.5 flex items-center justify-between gap-3 hover:text-[#34D399] transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <div className="truncate">
                    <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#34D399] transition-colors">
                      NetPocket Cybersecurity
                    </span>
                    <span className="block font-mono text-[11px] text-[#94A3B8]">
                      Google Play · Air-Gapped Toolkit
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#34D399] shrink-0">
                  <span>{t.door2.openStoreLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
              </a>

              <a
                href="https://escudo-criollo.raggiodev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group py-2.5 flex items-center justify-between gap-3 hover:text-[#22D3EE] transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <ShieldAlert className="w-4 h-4 text-[#22D3EE] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <div className="truncate">
                    <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                      Escudo Criollo
                    </span>
                    <span className="block font-mono text-[11px] text-[#94A3B8]">
                      Chrome Web Store · ARCA/AFIP Auditor
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#22D3EE] shrink-0">
                  <span>{t.door2.openStoreLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </article>

        {/* Door 3 (Medium Card - 5 cols): Official Certifications & Badges */}
        <article className="surface-card rounded-2xl p-6 lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-[#34D399]">
                <Award className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-wider">
                  {t.door3.badge}
                </span>
              </div>
              <span className="font-mono text-xs text-[#94A3B8]">
                certs.raggiodev.com
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
              {t.door3.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#CBD5E1] pretty-text">
              {t.door3.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {t.door3.highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#CBD5E1]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-5 mt-5 border-t border-white/[0.08]">
            <a
              href="https://raggiodev.com/certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#34D399]/15 hover:bg-[#34D399]/25 text-[#34D399] border border-[#34D399]/40 font-semibold text-sm transition-colors"
            >
              <span>{t.door3.cta}</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Door 4 (Wide Card - 7 cols): Technical Content & Community */}
        <article className="surface-card rounded-2xl p-6 lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-[#22D3EE]">
                <Newspaper className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-wider">
                  {t.door4.badge}
                </span>
              </div>
              <span className="font-mono text-xs text-[#94A3B8]">
                SUBSTACK · YOUTUBE
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">
              {t.door4.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-[62ch] pretty-text">
              {t.door4.description}
            </p>
          </div>

          <div className="pt-5 mt-5 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            <a
              href="https://raggiodev.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2.5 sm:py-1 sm:pr-4 flex items-center justify-between gap-2 text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
            >
              <span className="inline-flex items-center gap-2 truncate">
                <Newspaper className="w-4 h-4 text-[#22D3EE] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span className="truncate">{t.door4.channels.substack}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#22D3EE] shrink-0" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href="https://yt.raggiodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2.5 sm:py-1 sm:px-4 flex items-center justify-between gap-2 text-sm font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
            >
              <span className="inline-flex items-center gap-2 truncate">
                <Youtube className="w-4 h-4 text-[#22D3EE] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span className="truncate">{t.door4.channels.ytMain}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#22D3EE] shrink-0" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href="https://casiunminuto.raggiodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2.5 sm:py-1 sm:pl-4 flex items-center justify-between gap-2 text-sm font-semibold text-[#F8FAFC] hover:text-[#34D399] transition-colors"
            >
              <span className="inline-flex items-center gap-2 truncate">
                <Film className="w-4 h-4 text-[#34D399] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span className="truncate">{t.door4.channels.ytShorts}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#34D399] shrink-0" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
