import type { CtaDictionary } from "../../../site/types";
import { whatsAppLink } from "../../../site/constants/contact";

export interface ResolvedCta {
  label: string;
  href: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export const resolveHeroCta = (cta: CtaDictionary): ResolvedCta => {
  const href = cta.type === "whatsapp" ? whatsAppLink : cta.href ?? "#";
  const isExternal = cta.type === "external" || cta.type === "whatsapp";

  return {
    label: cta.label,
    href,
    ariaLabel: cta.ariaLabel ?? cta.label,
    target: isExternal ? "_blank" : undefined,
    rel: isExternal ? "noopener noreferrer" : undefined,
  };
};
