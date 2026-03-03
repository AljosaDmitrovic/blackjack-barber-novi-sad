import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import StarRating from '@/components/StarRating';
import heroBg from '@/assets/hero-bg.jpg';

const hours = [
  { key: 'hours_mon', time: '10:00–18:00', day: 1 },
  { key: 'hours_tue', time: '10:00–18:00', day: 2 },
  { key: 'hours_wed', time: '10:00–18:00', day: 3 },
  { key: 'hours_thu', time: '10:00–18:00', day: 4 },
  { key: 'hours_fri', time: '10:00–18:00', day: 5 },
  { key: 'hours_sat', time: '10:00–16:00', day: 6 },
  { key: 'hours_sun', time: null, day: 0 },
] as const;

export default function Index() {
  const { t } = useLanguage();
  const today = new Date().getDay();

  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Barber',
            name: 'Black Jack 021',
            image: heroBg,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Laze Kostica 5',
              addressLocality: 'Novi Sad',
              postalCode: '21000',
              addressCountry: 'RS',
            },
            telephone: '+38164114677',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              bestRating: '5',
            },
            openingHours: ['Mo-Fr 10:00-18:00', 'Sa 10:00-16:00'],
            url: window.location.origin,
            priceRange: '$$',
          }),
        }}
      />

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-label="Hero section"
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 px-4 max-w-4xl mx-auto animate-fade-in">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-background/30 backdrop-blur-sm">
            <StarRating rating={5.0} />
            <span className="text-xs text-muted-foreground tracking-wider">{t('hero_rating')}</span>
          </div>

          <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight animate-slide-up leading-tight">
            <span className="block text-foreground">Black Jack</span>
            <span className="block gold-text">021</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground tracking-[0.08em] mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('hero_tagline')}
          </p>
          <p className="text-sm text-primary/80 tracking-[0.15em] font-light italic mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            "{t('hero_slogan')}"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/app" className="btn-gold px-8 py-4 text-sm tracking-wider">
              {t('hero_btn_book')}
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+38164114677" className="btn-outline-gold px-8 py-4 text-sm tracking-wider">
              <Phone size={16} />
              {t('hero_btn_call')}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown size={24} className="text-primary/60" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Black Jack 021</div>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {t('hero_intro_title')}
            </h2>
            <div className="section-divider mb-6 w-24" />
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              {t('hero_intro_text')}
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/about" className="btn-outline-gold px-6 py-3 text-xs tracking-wider">
                {t('nav_about')} <ArrowRight size={14} />
              </Link>
              <Link to="/services" className="btn-outline-gold px-6 py-3 text-xs tracking-wider">
                {t('nav_services')} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Hours + Address */}
          <div className="card-premium p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock size={16} className="text-primary" />
              <h3 className="font-['Playfair_Display'] text-xl font-semibold">{t('hours_title')}</h3>
            </div>
            <div>
              {hours.map(({ key, time, day }) => (
                <div key={key} className={`hours-row ${today === day ? 'today' : ''}`}>
                  <span className="text-sm font-medium">
                    {today === day && <span className="mr-2 text-xs">&bull;</span>}
                    {t(key)}
                  </span>
                  <span className="text-sm">
                    {time ?? <span className="text-destructive">{t('hours_closed')}</span>}
                  </span>
                </div>
              ))}
            </div>
            <div className="section-divider my-6" />
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t('address')}</p>
                <a
                  href="https://maps.google.com/?q=Laze+Kostica+5,+Novi+Sad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary mt-1 inline-flex items-center gap-1 hover:underline"
                >
                  {t('view_map')} <ArrowRight size={11} />
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Phone size={15} className="text-primary shrink-0" />
              <a href="tel:+38164114677" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('phone')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="section-divider mb-12" />
        <div className="rounded-lg overflow-hidden border border-border" style={{ height: 380 }}>
          <iframe
            title="Black Jack 021 Lokacija"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.123!2d19.8335!3d45.2550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b102f74eb7f49%3A0x49ab9de96b7ad01d!2sLaze%20Kosti%C4%87a%205%2C%20Novi%20Sad!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="card-premium p-12 text-center" style={{ background: 'linear-gradient(135deg, hsl(0 0% 6%), hsl(0 0% 10%))' }}>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Premium & Luxury Feel</p>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold mb-4">
            {t('hero_slogan')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">{t('hero_tagline')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/app" className="btn-gold px-10 py-4 text-sm tracking-wider">
              {t('hero_btn_book')} <ArrowRight size={15} />
            </Link>
            <a href="tel:+38164114677" className="btn-outline-gold px-10 py-4 text-sm tracking-wider">
              <Phone size={15} />
              {t('phone')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
