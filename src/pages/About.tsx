import { ArrowRight, Award, Gem, Users, Coffee, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const whyItems = [
  { icon: Award, keyTitle: 'about_why1_title', keyText: 'about_why1_text' },
  { icon: Gem, keyTitle: 'about_why2_title', keyText: 'about_why2_text' },
  { icon: Users, keyTitle: 'about_why3_title', keyText: 'about_why3_text' },
  { icon: Coffee, keyTitle: 'about_why4_title', keyText: 'about_why4_text' },
  { icon: Clock, keyTitle: 'about_why5_title', keyText: 'about_why5_text' },
  { icon: Star, keyTitle: 'about_why6_title', keyText: 'about_why6_text' },
] as const;

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Black Jack 021</p>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold mb-4 animate-slide-up">
            {t('about_title')}
          </h1>
          <p className="text-muted-foreground text-lg italic">{t('about_subtitle')}</p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 0% 8%), hsl(43 30% 15%))',
                  padding: '3px',
                }}
              >
                <div
                  className="rounded-md w-full"
                  style={{
                    height: 420,
                    background: 'linear-gradient(135deg, hsl(0 0% 7%) 0%, hsl(43 20% 10%) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center"
                  >
                    <span className="font-['Playfair_Display'] text-2xl font-bold text-background">BJ</span>
                  </div>
                  <p className="text-primary font-['Playfair_Display'] text-xl font-semibold">Black Jack 021</p>
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">Premium Barbershop · Novi Sad</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="star w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.356 2.703c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.652 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.951-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-primary font-bold text-2xl font-['Playfair_Display']">5.0</p>
                  <p className="text-xs text-muted-foreground tracking-wider">Google Rating</p>
                </div>
              </div>
              {/* Gold border accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg border border-primary/20" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-lg border border-primary/10" />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">{t('about_text1')}</p>
            <div className="section-divider my-6 w-24" />
            <p className="text-muted-foreground leading-relaxed text-[15px]">{t('about_text2')}</p>
            <Link
              to="/reservation"
              className="btn-gold inline-flex mt-8 px-8 py-3.5 text-sm tracking-wider"
            >
              {t('book_now')} <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="section-divider mb-16" />
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold">{t('about_why_title')}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyItems.map(({ icon: Icon, keyTitle, keyText }) => (
            <div key={keyTitle} className="service-card group">
              <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} className="text-background" />
              </div>
              <h3 className="font-['Playfair_Display'] text-lg font-semibold mb-2">{t(keyTitle)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(keyText)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
