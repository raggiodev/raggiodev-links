import React from 'react';
import {
  Award,
  Bot,
  Brain,
  Cpu,
  Crown,
  Film,
  Gamepad2,
  Github,
  Globe,
  Linkedin,
  Mail,
  Newspaper,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Swords,
  Youtube
} from 'lucide-react';
import { IconIdentifier } from '../data/ecosystem';

interface NodeIconProps {
  icon: IconIdentifier;
  className?: string;
}

export const NodeIcon: React.FC<NodeIconProps> = ({ icon, className = 'w-5 h-5' }) => {
  const strokeWidth = 1.75;

  switch (icon) {
    case 'globe':
      return <Globe className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'award':
      return <Award className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'crown':
      return <Crown className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'shield-check':
      return <ShieldCheck className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'shield-alert':
      return <ShieldAlert className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'bot':
      return <Bot className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'brain':
      return <Brain className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'scale':
      return <Scale className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'gamepad':
      return <Gamepad2 className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'swords':
      return <Swords className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'github':
      return <Github className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'linkedin':
      return <Linkedin className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'newspaper':
      return <Newspaper className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'youtube':
      return <Youtube className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'film':
      return <Film className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'share':
      return <Share2 className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    case 'mail':
      return <Mail className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
    default:
      return <Globe className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
  }
};
