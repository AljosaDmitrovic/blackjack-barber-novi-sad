import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Zdravo! Zeleo bih da rezervisem termin u Black Jack 021.');
  const whatsappUrl = `https://wa.me/38164114677?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_hsl(142_70%_40%/0.4)]"
      style={{ background: 'hsl(142 70% 40%)' }}
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
}
