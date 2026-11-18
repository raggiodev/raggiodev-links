import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowUpRight, Check, Copy, Github } from 'lucide-react';
import { EcosystemItem, Language, StatusVariant } from '../data/ecosystem';
import { UITranslations } from '../i18n/translations';
import { NodeIcon } from './NodeIcon';

interface LinkCardProps {
  item: EcosystemItem;
  language: Language;
  t: UITranslations['directory']['card'];
}

let lastAnnouncedCopyMessage = '';

function legacyClipboardCopy(text: string): boolean {
  const field = Object.assign(document.createElement('textarea'), { value: text });
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;inset-block-start:0;opacity:0';
  document.body.append(field);
  field.select();
  try {
    return document.execCommand('copy');
  } finally {
    field.remove();
  }
}

function getStatusBadgeClasses(variant: StatusVariant): string {
  switch (variant) {
    case 'google-play':
    case 'chrome-store':
      return 'bg-[#34D399]/12 text-[#34D399] border-[#34D399]/35';
    case 'core-node':
    case 'live-web':
      return 'bg-[#22D3EE]/12 text-[#22D3EE] border-[#22D3EE]/35';
    case 'award-finalist':
      return 'bg-[#34D399]/15 text-[#34D399] border-[#34D399]/45';
    case 'cloud-service':
      return 'bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/30';
    case 'in-dev':
      return 'bg-white/[0.05] text-[#CBD5E1] border-white/[0.14]';
    case 'official-channel':
    default:
      return 'bg-white/[0.04] text-[#CBD5E1] border-white/[0.12]';
  }
}

export const LinkCard: React.FC<LinkCardProps> = ({ item, language, t }) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [liveMessage, setLiveMessage] = useState<string>('');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyLink = async () => {
    const targetUrl = item.shortcutUrl || item.url;
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    let ok = false;
    try {
      await navigator.clipboard.writeText(targetUrl);
      ok = true;
    } catch {
      ok = legacyClipboardCopy(targetUrl);
    }

    let message = ok ? t.copiedFeedback : t.copyFailedFeedback;
    if (message === lastAnnouncedCopyMessage) {
      message += '\u00A0';
    }
    lastAnnouncedCopyMessage = message;

    setCopyState(ok ? 'copied' : 'failed');
    setLiveMessage(message);

    timeoutRef.current = window.setTimeout(() => {
      setCopyState('idle');
      setLiveMessage('');
    }, 2000);
  };

  const localizedTitle = item.title[language];
  const localizedDescription = item.description[language];
  const localizedBadge = item.statusBadge[language];
  const primaryCtaLabel = item.actionLabel ? item.actionLabel[language] : t.visitLabel;
  const showSeparateGithubButton =
    Boolean(item.githubUrl) && item.githubUrl !== item.url;

  return (
    <article className="surface-card rounded-xl p-5 flex flex-col justify-between gap-4">
      <div className="space-y-3">
        {/* Card Header: Icon + Title + Status Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#090A0F] border border-white/[0.08] text-[#22D3EE]">
              <NodeIcon icon={item.icon} className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">
                {localizedTitle}
              </h3>
              <p className="font-mono text-xs text-[#94A3B8] truncate mt-0.5">
                {item.displayHost}
              </p>
            </div>
          </div>

          <span
            className={`shrink-0 font-mono text-[11px] font-medium px-2.5 py-1 rounded-md border ${getStatusBadgeClasses(
              item.statusVariant
            )}`}
          >
            {localizedBadge}
          </span>
        </div>

        {/* 2-line Localized Description */}
        <p className="text-sm text-[#CBD5E1] line-clamp-2 leading-relaxed pretty-text">
          {localizedDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-[#CBD5E1] px-2 py-0.5 rounded bg-[#090A0F] border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Bar: Primary Visit + Optional GitHub Repo + Accessible Copy Link Button */}
      <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <a
            href={item.url}
            target={item.url.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#22D3EE]/15 hover:bg-[#22D3EE]/25 text-[#22D3EE] border border-[#22D3EE]/35 text-xs font-semibold transition-colors"
          >
            <span>{primaryCtaLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          </a>

          {showSeparateGithubButton && item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#090A0F] hover:bg-white/[0.05] text-[#CBD5E1] hover:text-[#F8FAFC] border border-white/[0.08] text-xs font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>{t.githubLabel}</span>
            </a>
          )}
        </div>

        {/* Copy Link Micro-Button + Live Region Outside Button (modern-web-guidance: copy-button) */}
        <div className="relative inline-flex items-center shrink-0">
          <button
            type="button"
            onClick={handleCopyLink}
            data-copied={copyState === 'copied' ? '' : undefined}
            data-failed={copyState === 'failed' ? '' : undefined}
            aria-label={t.copyUrlAria(localizedTitle)}
            className={`inline-flex items-center justify-center rounded-lg border transition-colors min-w-[36px] min-h-[36px] px-2.5 ${
              copyState === 'copied'
                ? 'bg-[#34D399]/15 border-[#34D399]/45 text-[#34D399]'
                : copyState === 'failed'
                  ? 'bg-red-500/15 border-red-500/40 text-red-300'
                  : 'bg-[#090A0F] hover:bg-white/[0.05] border-white/[0.08] text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            {copyState === 'copied' ? (
              <Check className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            ) : copyState === 'failed' ? (
              <AlertCircle className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            ) : (
              <Copy className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>

          {/* Live confirmation bubble kept in accessibility tree, toggled via opacity */}
          <span
            role="status"
            aria-live="polite"
            className={`pointer-events-none absolute bottom-full right-0 mb-1.5 px-2 py-1 rounded bg-[#090A0F] border border-white/[0.14] font-mono text-[11px] whitespace-nowrap transition-opacity duration-150 ${
              copyState !== 'idle'
                ? 'opacity-100 text-[#34D399]'
                : 'opacity-0 text-transparent'
            }`}
          >
            {liveMessage}
          </span>
        </div>
      </div>
    </article>
  );
};
