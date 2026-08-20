// Dirección BELENTANI: Archivo Soberano. La home es una escena de entrada con una sola jerarquía y una salida clara hacia el archivo.
import { ArrowDown, ArrowUpRight, Crosshair } from "lucide-react";
import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { CoordinateLine, ImageScene, SealedPanel } from "@/components/EditorialPrimitives";

export default function Home() {
  const { copy } = useLocale();
  return (
    <div className="home-page page-enter">
      <section className="hero-scene" aria-labelledby="home-title">
        <img className="hero-image" src="/manus-storage/belentani-hero-red-nebula_b364c207.jpg" alt="Nebulosa roja y una figura en un espacio oscuro" />
        <div className="hero-vignette" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-meta reveal-1">
            <span className="red-index">01</span>
            <span>{copy.home.eyebrow}</span>
            <span className="meta-rule" />
            <span>2026</span>
          </div>
          <div className="hero-copy reveal-2">
            <p className="display-kicker">{copy.home.coordinate}</p>
            <h1 id="home-title">{copy.home.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-intro">{copy.home.intro}</p>
            <div className="hero-actions">
              <Link href="/archive" className="primary-link"><span>{copy.home.action}</span><ArrowUpRight size={17} /></Link>
              <Link href="/portal" className="text-link"><span>{copy.home.secondaryAction}</span><ArrowDown size={15} /></Link>
            </div>
          </div>
        </div>
        <div className="hero-coordinate reveal-3"><Crosshair size={14} /><span>45.0201 / 11.3009</span><span>FIELD / 001</span></div>
        <div className="hero-side-note">THE WORK IS ALREADY HERE<br /><span>THE VIEWER DECIDES THE DISTANCE</span></div>
      </section>

      <section className="manifest-section section-frame" aria-labelledby="manifest-title">
        <div className="section-aside"><span className="mono-label">02 / MANIFEST</span><span className="aside-vertical">PRESENCE BEFORE EXPLANATION</span></div>
        <div className="manifest-body">
          <div className="section-heading"><p className="display-kicker">{copy.home.coordinate}</p><h2 id="manifest-title">Una entrada<br /><em>sin manual.</em></h2></div>
          <div className="manifest-layout">
            <div className="manifest-statement"><span className="statement-mark">/</span><p>La experiencia no empieza cuando todo se explica. Empieza cuando algo te pide que mires de otra manera.</p></div>
            <div className="manifest-note"><CoordinateLine label="STATE" value="VISIBLE" /><CoordinateLine label="SOUND" value="SEALED" /><CoordinateLine label="MOTION" value="CONTROLLED" /><p>El sistema mantiene un lenguaje claro incluso cuando la escena se vuelve abstracta.</p></div>
          </div>
        </div>
      </section>

      <section className="routes-section section-frame" aria-labelledby="routes-title">
        <div className="section-aside"><span className="mono-label">03 / COLUMNS</span><span className="aside-vertical">THE LIVING SYSTEM</span></div>
        <div className="routes-body">
          <div className="section-heading section-heading-wide"><p className="display-kicker">ROUTES / EDITORIAL STATES</p><h2 id="routes-title">Cinco formas<br /><em>de permanecer.</em></h2><p>Las rutas no son páginas aisladas. Son habitaciones de una misma entidad.</p></div>
          <div className="route-list">
            <Link href="/artist" className="route-row"><span className="route-index">01</span><span className="route-name">{copy.home.archiveLabel === "Archivo" ? copy.nav.artist : copy.nav.artist}</span><span className="route-description">{copy.pages.artist.summary}</span><span className="route-arrow"><ArrowUpRight size={18} /></span></Link>
            <Link href="/archive" className="route-row"><span className="route-index">02</span><span className="route-name">{copy.nav.archive}</span><span className="route-description">{copy.home.archiveCopy}</span><span className="route-arrow"><ArrowUpRight size={18} /></span></Link>
            <Link href="/work" className="route-row route-row-sealed"><span className="route-index">03</span><span className="route-name">{copy.nav.work}</span><span className="route-description">{copy.home.workCopy}</span><span className="route-state">SEALED</span><span className="route-arrow"><ArrowUpRight size={18} /></span></Link>
            <Link href="/studio" className="route-row"><span className="route-index">04</span><span className="route-name">{copy.nav.studio}</span><span className="route-description">{copy.pages.studio.summary}</span><span className="route-arrow"><ArrowUpRight size={18} /></span></Link>
            <Link href="/portal" className="route-row"><span className="route-index">05</span><span className="route-name">{copy.nav.portal}</span><span className="route-description">{copy.home.portalCopy}</span><span className="route-arrow"><ArrowUpRight size={18} /></span></Link>
          </div>
        </div>
      </section>

      <section className="image-band-section" aria-labelledby="image-band-title">
        <ImageScene src="/manus-storage/belentani-portal-field_d36da389.jpg" alt="Fisura roja en un campo oscuro del archivo BELENTANI" className="image-band-portrait" label="FIELD / THRESHOLD SIGNAL" number="04" />
        <div className="image-band-copy"><p className="display-kicker">{copy.pages.artist.eyebrow}</p><h2 id="image-band-title">Una identidad<br /><em>no se resume.</em></h2><p>{copy.pages.artist.summary}</p><Link href="/artist" className="editorial-link"><span>{copy.pages.artist.action}</span><ArrowUpRight size={16} /></Link></div>
      </section>

      <section className="sealed-section section-frame" aria-labelledby="sealed-title">
        <div className="section-aside"><span className="mono-label">05 / LIMIT</span><span className="aside-vertical">WHAT MUST REMAIN CLOSED</span></div>
        <div className="sealed-body"><div><p className="display-kicker">JUDAS / WORK 001</p><h2 id="sealed-title">La ausencia<br /><em>también es una forma.</em></h2><p>El sistema no convierte un límite en un teaser. JUDAS queda protegido como obra sellada hasta que el autor decida lo contrario.</p></div><SealedPanel /></div>
      </section>

      <section className="portal-callout" aria-labelledby="portal-title">
        <img src="/manus-storage/belentani-portal-field_d36da389.jpg" alt="Fisura de luz roja en un campo oscuro" />
        <div className="portal-callout-content"><p className="display-kicker">06 / PORTAL</p><h2 id="portal-title">La próxima puerta<br /><em>es tuya.</em></h2><Link href="/portal" className="primary-link"><span>{copy.home.portalLabel}</span><ArrowUpRight size={17} /></Link></div>
      </section>
    </div>
  );
}
