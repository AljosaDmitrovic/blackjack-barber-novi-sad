import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const services = [
  { key: 'service1', price: '1.200', icon: '✂️' },
  { key: 'service2', price: '800', icon: '🪒' },
  { key: 'service3', price: '1.800', icon: '💈' },
  { key: 'service4', price: '1.000', icon: '👦' },
  { key: 'service5', price: '1.500', icon: '🎩' },
  { key: 'service6', price: null, icon: '💆' },
] as const;

export default function Services() {
  const { t } = useLanguage();

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Black Jack 021</p>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold mb-4">{t('services_title')}</h1>
          <p className="text-muted-foreground italic text-lg">{t('services_subtitle')}</p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ key, price, icon }) => (
            <div key={key} className="service-card group flex flex-col">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                {t(`${key}_name` as any)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {t(`${key}_desc` as any)}
              </p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <div>
                  {price ? (
                    <span className="text-sm text-muted-foreground">
                      {t('price_from')} <span className="text-primary font-bold text-base">{price} RSD</span>
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground italic">{t('price_contact')}</span>
                  )}
                </div>
                <Link
                  to="/reservation"
                  className="btn-gold px-4 py-2 text-xs tracking-wider"
                >
                  {t('services_book')} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* External link */}
        <div className="text-center">
          <div className="section-divider mb-10 max-w-sm mx-auto" />
          <a
            href="https://link-to.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex px-8 py-4 text-sm tracking-wider"
          >
            {t('services_btn_external')}
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </main>
  );
}
