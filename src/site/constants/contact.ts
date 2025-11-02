const DEFAULT_WHATSAPP_PHONE = "+351927553947";
const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de falar com um especialista Etti. Link disponível em www.etti.pt";

const sanitizePhone = (phone: string) => phone.replace(/[^\d+]/g, "");

export const WHATSAPP_PHONE = sanitizePhone(
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? DEFAULT_WHATSAPP_PHONE
);

export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? DEFAULT_WHATSAPP_MESSAGE;

export const whatsAppLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
