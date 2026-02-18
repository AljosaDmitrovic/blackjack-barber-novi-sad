import { Link } from 'react-router-dom';
import { Scissors, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/about', label: t('nav_about') },
    { path: '/services', label: t('nav_services') },
    { path: '/reservation', label: t('nav_reservation') },
    { path: '/contact', label: t('nav_contact') },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm gold-gradient flex items-center justify-center">
                <Scissors size={15} className="text-background rotate-45" />
              </div>
              <div>
                <div className="font-['Playfair_Display'] font-bold text-base gold-text">Black Jack 021</div>
                <div className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase">Premium Barbershop</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-light italic">
              "{t('footer_tagline')}"
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">{t('footer_links')}</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-primary shrink-0" />
                <a href="tel:+38164114677" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  {t('phone')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Pon–Pet: 10:00–18:00</div>
                  <div>Sub: 10:00–16:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {year} Black Jack 021. {t('footer_rights')}</p>
          <p className="tracking-wider">Novi Sad, Srbija</p>
        </div>
      </div>
    </footer>
  );
}
