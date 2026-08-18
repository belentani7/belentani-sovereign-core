// Dirección BELENTANI: Archivo Soberano. Cada ruta es una sala con estado, propósito y salida; el contenido esencial no depende de movimiento.
import { ArrowDownLeft, ArrowUpRight, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { CoordinateLine, ImageScene, PendingPanel, RouteLink, SealedPanel, StatePill } from "@/components/EditorialPrimitives";
import type { EditorialState } from "@/data/content";

type PageKey = "artist" | "archive" | "work" | "studio" | "portal" | "rights";

const pageVisuals: Record<PageKey, { image?: string; alt?: string; label: string; number: string; state: EditorialState }> = {
  artist: { image: "/manus-storage/pedro-rizado-perfil-01_e71f5fd9.jpg", alt: "Retrato de Pedro con cabello rizado y barba", label: "THE ARTIST / VISIBLE", number: "01", state: "visible" },
  archive: { image: "/manus-storage/belentani-process-atlas_a7171e2c.jpg", alt: "Tres figuras en un paisaje oscuro con horizonte rojo", label: "ARCHIVE / FIELD RECORD", number: "02", state: "visible" },
  work: { image: "/manus-storage/belentani-portal-field_d36da389.jpg", alt: "Fisura vertical de luz roja en una atmósfera oscura", label: "JUDAS / SEALED", number: "03", state: "sealed" },
  studio: { image: "/manus-storage/belentani-hero-red-nebula_b364c207.jpg", alt: "Nebulosa roja con una figura distante", label: "STUDIO / IN PROGRESS", number: "04", state: "pending" },
  portal: { image: "/manus-storage/pedro-rizado-perfil-02_4259f0f0.jpg", alt: "Segunda imagen de referencia de Pedro procedente del archivo autorizado", label: "PORTAL / ENTRY", number: "05", state: "visible" },
  rights: { label: "RIGHTS / PENDING", number: "06", state: "pending" },
};

const nextRoute: Record<PageKey, string> = { artist: "/archive", archive: "/work", work: "/portal", studio: "/archive", portal: "/archive", rights: "/portal" };

export default function EditorialPage({ page }: { page: PageKey }) {
  const { copy } = useLocale();
  const content = copy.pages[page];
  const visual = pageVisuals[page];
  const isSealed = visual.state === "sealed";
  const isPending = visual.state === "pending";

  return (
    <div className={`editorial-page editorial-${page} page-enter`}>
      <section className="editorial-hero section-frame" aria-labelledby={`${page}-title`}>
        <div className="section-aside"><Link href="/" className="back-link"><ArrowDownLeft size={15} />{copy.shell.return}</Link><span className="aside-vertical">BELENTANI / {visual.label}</span></div>
        <div className="editorial-hero-content">
          <div className="editorial-topline"><span className="red-index">{visual.number}</span><span>{content.eyebrow}</span><StatePill state={visual.state} /></div>
          <h1 id={`${page}-title`}>{content.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <div className="editorial-intro-grid"><p className="editorial-summary">{content.summary}</p><div className="editorial-coordinate"><CoordinateLine label="ROUTE" value={visual.number} /><CoordinateLine label="STATE" value={visual.state.toUpperCase()} /><CoordinateLine label="EXIT" value="READY" /></div></div>
        </div>
      </section>

      {visual.image && <section className="editorial-visual-section"><ImageScene src={visual.image} alt={visual.alt ?? "BELENTANI visual field"} label={visual.label} number={visual.number} className="editorial-visual" /><div className="visual-caption"><span className="mono-label">FIELD NOTE / {visual.number}</span><p>{page === "archive" ? "La imagen conserva una relación entre presencia y distancia. No todo registro pide contexto inmediato." : page === "artist" ? "La identidad permanece en el borde de lo verificable. El sistema deja espacio para que el autor decida qué entra." : page === "studio" ? "El proceso no se completa con un relleno. Esta sala espera materiales, notas y decisiones confirmadas." : "La entrada no es una promesa de acceso total. Es una forma de reconocer el límite."}</p></div></section>}

      <section className="editorial-content section-frame">
        <div className="section-aside"><span className="mono-label">READING / {visual.number}</span><span className="aside-vertical">KEEP THE EDGE CLEAR</span></div>
        <div className="editorial-content-body">
          {isSealed ? (
            <div className="work-sealed-layout"><div><p className="display-kicker">SEALED BY DESIGN</p><h2>La pieza<br /><em>no se expone.</em></h2><p>La ausencia de controles no es un fallo del sistema. Es la forma visible de una decisión editorial: JUDAS permanece fuera del circuito reproducible.</p></div><SealedPanel /></div>
          ) : isPending ? (
            <div className="pending-layout"><div><p className="display-kicker">EDITORIAL STATUS / PENDING</p><h2>La estructura<br /><em>ya está preparada.</em></h2><p>{copy.common.pendingDetail} La ruta puede recibirse, recorrerse y abandonarse sin crear una falsa sensación de completitud.</p></div><PendingPanel label={content.eyebrow} /></div>
          ) : (
            <div className="reading-layout"><div><p className="display-kicker">A ROOM FOR ATTENTION</p><h2>{page === "artist" ? "Una figura no es\nun inventario." : page === "archive" ? "Guardar también\nes una forma de mirar." : "El portal regula\nla distancia."}</h2><p>{page === "artist" ? "The Artist se mantiene breve y verificable. La presencia de Pedro aparece solo donde el autor ha decidido que debe aparecer, sin biografía inventada ni autoridad prestada." : page === "archive" ? "El archivo visible se construye como continuidad: cada imagen tiene un estado, una ruta de salida y un lugar dentro de la obra, incluso cuando todavía no se ha publicado toda la información." : "La entrada permite elegir idioma, calidad y movimiento. La experiencia no fuerza una velocidad única: cada persona puede conservar su propia distancia frente a la obra."}</p></div><div className="reading-notes"><CoordinateLine label="ACCESS" value="OPEN" /><CoordinateLine label="AUDIO" value="SEALED" /><CoordinateLine label="FALLBACK" value="READY" /><p>El contenido esencial permanece legible sin efectos avanzados.</p></div></div>
          )}

          <div className="editorial-actions"><RouteLink href={nextRoute[page]}>{content.action}</RouteLink>{page === "portal" && <Link href="/rights" className="secondary-link"><ShieldCheck size={15} />{copy.nav.rights}</Link>}</div>
        </div>
      </section>

      {page === "portal" && <section className="portal-settings-section section-frame"><div className="section-aside"><span className="mono-label">CONTROL / VIEWER</span><span className="aside-vertical">YOU SET THE DISTANCE</span></div><div className="portal-settings"><div className="settings-heading"><p className="display-kicker">PORTAL CONDITIONS</p><h2>Un sistema que<br /><em>no te persigue.</em></h2></div><div className="settings-list"><div><span>LANGUAGE</span><strong>10 CHANNELS</strong></div><div><span>MOTION</span><strong>USER CONTROLLED</strong></div><div><span>SOUND</span><strong><LockKeyhole size={14} /> SEALED</strong></div><div><span>QUALITY</span><strong>HIGH / STATIC SAFE</strong></div></div></div></section>}
    </div>
  );
}
