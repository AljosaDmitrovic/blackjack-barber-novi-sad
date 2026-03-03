import { Smartphone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const APP_LINKS = {
  ios: 'https://apps.apple.com/rs/app/black-jack-021-barbershop/id6741021370',
  android: 'https://play.google.com/store/apps/details?id=com.cutlio.black.jack.barbershop',
};

export default function DownloadApp() {
  const { t } = useLanguage();

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Black Jack 021</p>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold mb-4 animate-slide-up">
            {t('app_title')}
          </h1>
          <p className="text-muted-foreground text-lg italic">{t('app_subtitle')}</p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* App cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* iOS */}
          <a
            href={APP_LINKS.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium p-8 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-background">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">{t('app_ios')}</h3>
            <p className="text-muted-foreground text-sm mb-4">iPhone & iPad</p>
            <span className="btn-outline-gold px-6 py-2.5 text-xs tracking-wider inline-flex items-center gap-2">
              {t('app_cta')} <ArrowRight size={13} />
            </span>
          </a>

          {/* Android */}
          <a
            href={APP_LINKS.android}
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium p-8 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-background">
                <path d="M17.523 2.446l1.717 2.975a.5.5 0 01-.866.5l-1.74-3.014a8.476 8.476 0 00-3.634-.838 8.476 8.476 0 00-3.634.838L7.626 5.92a.5.5 0 01-.866-.5l1.717-2.975C4.637 4.455 2 8.09 2 12.32h20c0-4.23-2.637-7.865-6.477-9.874zM7 9.5a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2zM3 13.32v7.18a1.5 1.5 0 003 0v-7.18H3zm15 0v7.18a1.5 1.5 0 003 0v-7.18h-3zm-12 0v8.18a1.5 1.5 0 001.5 1.5h1v2.5a1.5 1.5 0 003 0V23h1v2.5a1.5 1.5 0 003 0V23h1a1.5 1.5 0 001.5-1.5v-8.18H6z" />
              </svg>
            </div>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">{t('app_android')}</h3>
            <p className="text-muted-foreground text-sm mb-4">Android</p>
            <span className="btn-outline-gold px-6 py-2.5 text-xs tracking-wider inline-flex items-center gap-2">
              {t('app_cta')} <ArrowRight size={13} />
            </span>
          </a>
        </div>

        {/* Description */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-primary/30 bg-background/30">
            <Smartphone size={16} className="text-primary" />
            <span className="text-xs text-muted-foreground tracking-wider">{t('app_desc')}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
