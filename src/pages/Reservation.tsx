import { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Scissors } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const services = [
  { key: 'service1_name', price: '1.200 RSD' },
  { key: 'service2_name', price: '800 RSD' },
  { key: 'service3_name', price: '1.800 RSD' },
  { key: 'service4_name', price: '1.000 RSD' },
  { key: 'service5_name', price: '1.500 RSD' },
  { key: 'service6_name', price: '' },
] as const;

const timeSlots = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
];

// Simulate some booked slots
const bookedSlots = new Set(['10:30', '12:00', '14:00', '15:30']);

function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

interface FormData {
  service: string;
  serviceLabel: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
}

export default function Reservation() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<FormData>({
    service: '',
    serviceLabel: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep1 = (): boolean => {
    const e: FormErrors = {};
    if (!form.service) e.service = t('res_required');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = (): boolean => {
    const e: FormErrors = {};
    if (!form.date) e.date = t('res_required');
    if (!form.time) e.time = t('res_required');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t('res_required');
    if (!form.phone.trim()) e.phone = t('res_required');
    else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = t('res_invalid_phone');
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t('res_invalid_email');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    // Ready for backend API integration
    // Example: await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true);
    setError('');
  };

  const StepIndicator = ({ n, label }: { n: number; label: string }) => {
    const state = step > n ? 'completed' : step === n ? 'active' : 'inactive';
    return (
      <div className="flex flex-col items-center gap-1.5">
        <div className={`step-indicator ${state}`}>
          {state === 'completed' ? <Check size={16} /> : n}
        </div>
        <span className={`text-xs tracking-wider uppercase hidden sm:block ${state !== 'inactive' ? 'text-primary' : 'text-muted-foreground'}`}>
          {label}
        </span>
      </div>
    );
  };

  if (submitted) {
    return (
      <main className="pt-28 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-background" />
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-3">{t('res_success_title')}</h2>
          <p className="text-muted-foreground mb-4">{t('res_success_text')}</p>
          <div className="card-premium p-5 text-left mb-6 text-sm text-muted-foreground space-y-2">
            <div><span className="text-foreground font-medium">{t('res_name')}:</span> {form.name}</div>
            <div><span className="text-foreground font-medium">{t('res_select_service')}:</span> {form.serviceLabel}</div>
            <div><span className="text-foreground font-medium">{t('res_select_date')}:</span> {form.date}</div>
            <div><span className="text-foreground font-medium">{t('res_select_time')}:</span> {form.time}</div>
          </div>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setForm({ service: '', serviceLabel: '', date: '', time: '', name: '', phone: '', email: '', notes: '' }); }}
            className="btn-outline-gold px-6 py-3 text-sm tracking-wider"
          >
            {t('res_new')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Black Jack 021</p>
          <h1 className="font-['Playfair_Display'] text-4xl font-bold mb-2">{t('res_title')}</h1>
          <p className="text-muted-foreground text-sm">{t('res_subtitle')}</p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <StepIndicator n={1} label={t('res_step1')} />
          <div className="flex-1 max-w-[80px] h-px bg-border" />
          <StepIndicator n={2} label={t('res_step2')} />
          <div className="flex-1 max-w-[80px] h-px bg-border" />
          <StepIndicator n={3} label={t('res_step3')} />
        </div>

        <div className="card-premium p-6 sm:p-8">
          {/* STEP 1: Service */}
          {step === 1 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Scissors size={18} className="text-primary" />
                <h2 className="font-['Playfair_Display'] text-xl font-semibold">{t('res_step1')}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map(({ key, price }) => {
                  const label = t(key as any);
                  const isSelected = form.service === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => { setForm(f => ({ ...f, service: key, serviceLabel: label })); setErrors({}); }}
                      className={`p-4 rounded-sm border text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-input text-muted-foreground hover:border-primary/40'
                      }`}
                    >
                      <div className="font-medium text-sm">{label}</div>
                      {price && <div className={`text-xs mt-0.5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>{price}</div>}
                    </button>
                  );
                })}
              </div>
              {errors.service && <p className="text-destructive text-xs mt-3">{errors.service}</p>}
            </div>
          )}

          {/* STEP 2: Date & Time */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-['Playfair_Display'] text-xl font-semibold mb-6">{t('res_step2')}</h2>
              <div className="mb-5">
                <label className="form-label">{t('res_select_date')}</label>
                <input
                  type="date"
                  min={getTodayDateString()}
                  value={form.date}
                  onChange={e => { setForm(f => ({ ...f, date: e.target.value, time: '' })); setErrors({}); }}
                  className="form-input"
                />
                {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="form-label">{t('res_select_time')}</label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-1">
                  {timeSlots.map(slot => {
                    const booked = bookedSlots.has(slot);
                    const selected = form.time === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={booked}
                        onClick={() => { setForm(f => ({ ...f, time: slot })); setErrors({}); }}
                        className={`py-2 text-xs rounded-sm border transition-all duration-200 font-medium ${
                          booked
                            ? 'border-border bg-background text-muted-foreground/40 cursor-not-allowed line-through'
                            : selected
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-input text-muted-foreground hover:border-primary/40'
                        }`}
                        title={booked ? t('res_booked') : t('res_available')}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.time && <p className="text-destructive text-xs mt-2">{errors.time}</p>}
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm border border-primary bg-primary/10 inline-block" />
                    {t('res_available')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm border border-border bg-background inline-block" />
                    {t('res_booked')}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <h2 className="font-['Playfair_Display'] text-xl font-semibold mb-6">{t('res_step3')}</h2>
              <div className="space-y-4">
                <div>
                  <label className="form-label">{t('res_name')} *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(prev => ({ ...prev, name: undefined })); }}
                    placeholder="Marko Markovic"
                    className="form-input"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="form-label">{t('res_phone')} *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(prev => ({ ...prev, phone: undefined })); }}
                    placeholder="+381 64 123 4567"
                    className="form-input"
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="form-label">{t('res_email')}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(prev => ({ ...prev, email: undefined })); }}
                    placeholder="marko@email.com"
                    className="form-input"
                    maxLength={255}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="form-label">{t('res_notes')}</label>
                  <textarea
                    value={form.notes}
                    onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                    placeholder={t('res_notes_placeholder')}
                    rows={3}
                    maxLength={500}
                    className="form-input resize-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mt-5 p-4 rounded-sm border border-border bg-muted/30 text-xs text-muted-foreground space-y-1">
                <div className="flex justify-between"><span>{t('res_step1')}:</span><span className="text-foreground">{form.serviceLabel}</span></div>
                <div className="flex justify-between"><span>{t('res_select_date')}:</span><span className="text-foreground">{form.date}</span></div>
                <div className="flex justify-between"><span>{t('res_select_time')}:</span><span className="text-foreground">{form.time}</span></div>
              </div>

              {error && <p className="text-destructive text-sm mt-3 text-center">{error}</p>}

              <button type="submit" className="btn-gold w-full mt-6 py-4 text-sm tracking-wider">
                {t('res_submit')} <ArrowRight size={15} />
              </button>
            </form>
          )}

          {/* Navigation */}
          {step < 3 && (
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button onClick={() => setStep(s => s - 1)} className="btn-outline-gold px-6 py-3 text-xs tracking-wider">
                  <ArrowLeft size={14} /> {t('res_back')}
                </button>
              ) : <div />}
              <button onClick={handleNext} className="btn-gold px-8 py-3 text-xs tracking-wider">
                {t('res_next')} <ArrowRight size={14} />
              </button>
            </div>
          )}
          {step === 3 && (
            <button onClick={() => setStep(2)} className="btn-outline-gold px-6 py-3 text-xs tracking-wider mt-4">
              <ArrowLeft size={14} /> {t('res_back')}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
