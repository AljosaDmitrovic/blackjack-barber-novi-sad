import { Instagram, Facebook } from 'lucide-react';

export const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/blackjack021ns?igsh=eXYwOGlqZGc3am9w&utm_source=qr',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@blackjack021ns?_r=1&_t=ZS-97vLFhGjmei',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/198ckuFLzi/?mibextid=wwXIfr',
  },
] as const;

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 8.5a6.5 6.5 0 0 1-5-2.35V16a5.5 5.5 0 1 1-5.5-5.5c.17 0 .34.01.5.03v3.06a2.5 2.5 0 1 0 2 2.41V2h3a6.5 6.5 0 0 0 5 4.42Z" />
    </svg>
  );
}

const ICONS = {
  Instagram: (size: number) => <Instagram size={size} />,
  TikTok: (size: number) => <TikTokIcon size={size} />,
  Facebook: (size: number) => <Facebook size={size} />,
} as const;

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

/** Row of social media icon links (Instagram, TikTok, Facebook). */
export default function SocialLinks({ className = '', iconSize = 18 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-200"
        >
          {ICONS[name](iconSize)}
        </a>
      ))}
    </div>
  );
}
