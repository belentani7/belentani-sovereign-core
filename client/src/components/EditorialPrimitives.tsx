// Dirección BELENTANI: Archivo Soberano. Estas primitivas sostienen la evidencia, el estado y el umbral antes que el efecto.
import { ArrowUpRight, LockKeyhole, ScanLine } from "lucide-react";
import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { type EditorialState, stateLabelKey } from "@/data/content";

export function StatePill({ state }: { state: EditorialState }) {
  const { copy } = useLocale();
  return <span className={`state-pill state-${state}`}><span className="state-pip" />{copy.common[stateLabelKey[state]]}</span>;
}

export function CoordinateLine({ label, value }: { label: string; value: string }) {
  return <div className="coordinate-line"><span>{label}</span><span className="coordinate-line-fill" /><b>{value}</b></div>;
}

export function ImageScene({ src, alt, className = "", label, number }: { src: string; alt: string; className?: string; label?: string; number?: string }) {
  return (
    <figure className={`image-scene ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      <div className="scene-overlay" />
      {(label || number) && <figcaption><span>{number}</span><span>{label}</span></figcaption>}
    </figure>
  );
}

export function SealedPanel({ compact = false }: { compact?: boolean }) {
  const { copy } = useLocale();
  return (
    <div className={`sealed-panel ${compact ? "sealed-panel-compact" : ""}`}>
      <div className="sealed-icon"><LockKeyhole size={17} strokeWidth={1.4} /></div>
      <div>
        <span className="mono-label">{copy.home.sealLabel}</span>
        <p>{copy.home.sealCopy}</p>
      </div>
    </div>
  );
}

export function RouteLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link href={href} className={`editorial-link ${className}`}><span>{children}</span><ArrowUpRight size={16} strokeWidth={1.5} /></Link>;
}

export function PendingPanel({ label }: { label: string }) {
  const { copy } = useLocale();
  return <div className="pending-panel"><ScanLine size={18} strokeWidth={1.5} /><div><span className="mono-label">{label}</span><p>{copy.common.pendingDetail}</p></div></div>;
}
