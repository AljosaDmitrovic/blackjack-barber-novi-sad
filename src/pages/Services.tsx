import { ArrowRight, Scissors, ScissorsLineDashed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const services = [
  { key: 'service1', price: '1.200', duration: '30', icon: Scissors },
  { key: 'service2', price: '2.000', duration: '30', icon: Scissors },
  { key: 'service3', price: '1.500', duration: '30', icon: ScissorsLineDashed },
  { key: 'service4', price: '2.300', duration: '30', icon: ScissorsLineDashed },
  { key: 'service5', price: '800', duration: '30', icon: null },
  { key: 'service6', price: '400', duration: '30', icon: null },
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
          {services.map(({ key, price, duration, icon: Icon }) => (
            <div key={key} className="service-card group flex flex-col">
              <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {Icon ? (
                  <Icon size={22} className="text-background" />
                ) : (
                  <span className="text-xl">{key === 'service5' ? '🪒' : '💧'}</span>
                )}
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">
                {t(`${key}_name` as any)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {t(`${key}_desc` as any)}
              </p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <div>
                  <span className="text-primary font-bold text-base">{price} RSD</span>
                  <span className="text-muted-foreground text-xs ml-2">· {duration} min</span>
                </div>
                <Link
                  to="/app"
                  className="btn-gold px-4 py-2 text-xs tracking-wider"
                >
                  {t('services_book')} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
