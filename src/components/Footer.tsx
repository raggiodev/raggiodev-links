import React from 'react';
import { ArrowUpRight, FileCode2, FileText, ShieldCheck } from 'lucide-react';
import { UITranslations } from '../i18n/translations';

interface FooterProps {
  t: UITranslations['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="mt-16 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm text-[#CBD5E1]">
              <span>{t.madeByPrefix} </span>
              <a
                href="https://raggiodev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#F8FAFC] hover:text-[#22D3EE] underline decoration-white/25 hover:decoration-[#22D3EE] transition-colors"
              >
                {t.madeByLinkText}
              </a>
            </p>
            <p className="text-xs text-[#94A3B8] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399] shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{t.ecosystemCaption}</span>
            </p>
          </div>

          <nav
            aria-label="Technical and Ecosystem Footer Links"
            className="flex flex-wrap items-center gap-3 text-xs font-mono"
          >
            <a
              href="https://raggiodev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#11131C] border border-white/[0.08] text-[#CBD5E1] hover:text-[#22D3EE] hover:border-[#22D3EE]/35 transition-colors"
            >
              <span>{t.portfolioLink}</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href="https://raggiodev.com/certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#11131C] border border-white/[0.08] text-[#CBD5E1] hover:text-[#34D399] hover:border-[#34D399]/35 transition-colors"
            >
              <span>{t.certificatesLink}</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#11131C] border border-white/[0.08] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/35 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>/llms.txt</span>
            </a>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#11131C] border border-white/[0.08] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/35 transition-colors"
            >
              <FileCode2 className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>/sitemap.xml</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
