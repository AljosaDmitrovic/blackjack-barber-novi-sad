import { useState } from 'react';
import { MapPin, Phone, Clock, Send, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const hours = [
  { key: 'hours_mon', time: '10:00–18:00' },
  { key: 'hours_tue', time: '10:00–18:00' },
  { key: 'hours_wed', time: '10:00–18:00' },
  { key: 'hours_thu', time: '10:00–18:00' },
  { key: 'hours_fri', time: '10:00–18:00' },
  { key: 'hours_sat', time: '10:00–16:00' },
  { key: 'hours_sun', time: null },
] as const;

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = t('res_required');
    if (!form.email.trim()) e.email = t('res_required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('res_invalid_email');
    if (!form.message.trim()) e.message = t('res_required');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Ready for backend integration
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Black Jack 021</p>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold mb-3">{t('contact_title')}</h1>
          <p className="text-muted-foreground italic">{t('contact_subtitle')}</p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8">
            {/* Address */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-background" />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold">{t('contact_address')}</h3>
              </div>
              <p className="text-muted-foreground text-sm ml-12">{t('address')}</p>
              <a
                href="https://maps.google.com/?q=Laze+Kostica+5,+Novi+Sad"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-12 mt-2 inline-flex text-xs text-primary hover:underline"
              >
                Google Maps →
              </a>
            </div>

            {/* Phone */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-background" />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold">{t('contact_phone')}</h3>
              </div>
              <a href="tel:+38164114677" className="ml-12 text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('phone')}
              </a>
            </div>

            {/* Hours */}
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-background" />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg font-semibold">{t('contact_hours')}</h3>
              </div>
              <div className="ml-4">
                {hours.map(({ key, time }) => (
                  <div key={key} className="hours-row">
                    <span className="text-sm font-medium">{t(key)}</span>
                    <span className="text-sm">
                      {time ?? <span className="text-destructive">{t('hours_closed')}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="space-y-8">
            {/* Form */}
            <div className="card-premium p-6 sm:p-8">
              <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-6">{t('contact_form_title')}</h3>
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Check size={26} className="text-background" />
                  </div>
                  <p className="text-foreground font-medium">{t('contact_success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="form-label">{t('contact_name')} *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })); }}
                      className="form-input"
                      maxLength={100}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="form-label">{t('contact_email')} *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(p => ({ ...p, email: undefined })); }}
                      className="form-input"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="form-label">{t('contact_message')} *</label>
                    <textarea
                      value={form.message}
                      onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(p => ({ ...p, message: undefined })); }}
                      rows={5}
                      className="form-input resize-none"
                      maxLength={1000}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-gold w-full py-3.5 text-sm tracking-wider mt-2">
                    {t('contact_send')} <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border" style={{ height: 260 }}>
              <iframe
                title="Black Jack 021 Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.123!2d19.8335!3d45.2550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b102f74eb7f49%3A0x49ab9de96b7ad01d!2sLaze%20Kosti%C4%87a%205%2C%20Novi%20Sad!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
