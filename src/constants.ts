import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Globe, 
  Mail, 
  MessageCircle,
  ExternalLink,
  Music,
  ShoppingBag,
  Briefcase,
  Camera,
  Coffee
} from 'lucide-react';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  color?: string;
}

export interface SocialItem {
  id: string;
  platform: string;
  url: string;
  icon: any;
}

export const DEFAULT_LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'Portfolio',
    url: 'https://tod-ai-pearl.vercel.app',
    icon: 'Briefcase',
    color: 'bg-indigo-600'
  },
  {
    id: '2',
    title: 'Traktir Kopi',
    url: 'https://sociabuzz.com/zenkaitsu/tribe',
    icon: 'Coffee',
    color: 'bg-amber-600'
  },
  {
    id: '3',
    title: 'WhatsApp',
    url: 'https://wa.me/6285183729186',
    icon: 'MessageCircle',
    color: 'bg-green-600'
  },
  {
    id: '4',
    title: 'Instagram',
    url: 'https://instagram.com/zenkaiproject99',
    icon: 'Camera',
    color: 'bg-pink-600'
  },
  {
    id: '5',
    title: 'YouTube',
    url: 'https://youtube.com/@zenkaitsu',
    icon: 'Youtube',
    color: 'bg-red-600'
  }
];

export const SOCIAL_LINKS: SocialItem[] = [
  { id: 's1', platform: 'Instagram', url: 'https://instagram.com/zenkaiproject69', icon: Instagram },
  { id: 's3', platform: 'GitHub', url: 'https://github.com/zenkaiproject', icon: Github },
  { id: 's5', platform: 'Email', url: 'mailto:umaidifirmanardiyanto@gmail.com', icon: Mail },
];

export const ICON_MAP: Record<string, any> = {
  Briefcase,
  Youtube,
  ShoppingBag,
  Music,
  Coffee,
  Globe,
  Camera,
  MessageCircle,
  ExternalLink
};
