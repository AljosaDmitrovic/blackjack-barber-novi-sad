import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navItems = [
    { path: '/', label: t('nav_home') },
    { path: '/about', label: t('nav_about') },
    { path: '/services', label: t('nav_services') },
    { path: '/reservation', label: t('nav_reservation') },
    { path: '/contact', label: t('nav_contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-background/95 backdrop-blur-md border-b border-border' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center">
              <Scissors size={18} className="text-background rotate-45" />
            </div>
            <div>
              <div className="font-['Playfair_Display'] font-bold text-lg leading-none gold-text">
                Black Jack
              </div>
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-medium uppercase">
                021 · Barbershop
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-xs tracking-[0.15em] ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-xs font-medium tracking-wider">
              <button
                onClick={() => setLang('sr')}
                className={`px-2 py-1 rounded-sm transition-all duration-200 ${
                  lang === 'sr'
                    ? 'gold-text font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                SR
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-sm transition-all duration-200 ${
                  lang === 'en'
                    ? 'gold-text font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Book CTA (desktop) */}
            <Link
              to="/reservation"
              className="hidden md:inline-flex btn-gold px-5 py-2 text-xs tracking-wider"
            >
              {t('book_now')}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border mt-2">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-3 px-2 text-sm tracking-wider uppercase font-medium border-b border-border last:border-0 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/reservation"
              className="btn-gold mt-3 py-3 text-sm tracking-wider text-center"
            >
              {t('book_now')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
