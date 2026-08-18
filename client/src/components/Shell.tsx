// Dirección BELENTANI: Archivo Soberano. El shell funciona como umbral editorial; no se comporta como un dashboard.
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, ChevronDown, Menu, Move3d, VolumeX, X } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { localeOrder, locales, type Locale } from "@/data/content";

const routeItems = [
  { key: "artist", href: "/artist" },
  { key: "archive", href: "/archive" },
  { key: "work", href: "/work" },
  { key: "studio", href: "/studio" },
  { key: "portal", href: "/portal" },
] as const;

export default function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const { locale, setLocale, copy } = useLocale();
  const isHome = location === "/";

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as Locale);
  };

  return (
    <div className={`site-shell ${motionEnabled ? "motion-enabled" : "motion-disabled"}`}>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="global-header">
        <div className="brand-lockup">
          <Link href="/" className="brand-mark-link" aria-label="BELENTANI, inicio" onClick={() => setMenuOpen(false)}>
            <span className="brand-symbol" aria-hidden="true"><span /></span>
            <span className="brand-wordmark">BELENTANI</span>
          </Link>
          <span className="brand-note">SOVEREIGN UNIVERSE / 01</span>
        </div>

        <nav className={`global-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          <div className="nav-index">{isHome ? "00" : "01"}<span>/</span>06</div>
          <div className="nav-links">
            {routeItems.map((item, index) => {
              const active = location === item.href;
              const label = copy.nav[item.key];
              return (
                <Link key={item.href} href={item.href} className={active ? "is-active" : ""} onClick={() => setMenuOpen(false)}>
                  <span className="nav-number">0{index + 1}</span>
                  <span>{label}</span>
                  {active && <span className="nav-active-dot" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
          <Link href="/rights" className="nav-rights" onClick={() => setMenuOpen(false)}>
            <span>{copy.nav.rights}</span><ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </nav>

        <div className="header-controls">
          <div className="status-strip" aria-label="Estado de experiencia">
            <span className="status-dot" aria-hidden="true" />
            <span className="status-label">LIVE / STATIC</span>
          </div>
          <label className="language-control">
            <span className="sr-only">{copy.shell.language}</span>
            <select value={locale} onChange={handleLocaleChange} aria-label={copy.shell.language}>
              {localeOrder.map((item) => <option key={item} value={item}>{locales[item].shortName} — {locales[item].languageName}</option>)}
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </label>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
            <span className="sr-only">{menuOpen ? copy.shell.close : copy.shell.menu}</span>
          </button>
        </div>
      </header>

      <div id="main-navigation" className="shell-rail" aria-label="Controles de experiencia">
        <div className="rail-coordinates">25° 12' 03" S<br />47° 52' 11" W</div>
        <div className="rail-vertical-label">BELENTANI / FIELD NOTES</div>
        <div className="rail-controls">
          <div className="rail-status"><VolumeX size={14} /><span>{copy.shell.sound}</span><b>{copy.shell.soundValue}</b></div>
          <button className={`rail-status rail-button ${motionEnabled ? "is-on" : ""}`} type="button" onClick={() => setMotionEnabled((enabled) => !enabled)} aria-pressed={motionEnabled}>
            <Move3d size={14} /><span>{copy.shell.motion}</span><b>{motionEnabled ? "ON" : "OFF"}</b>
          </button>
          <div className="rail-status"><span className="quality-bar" aria-hidden="true"><i /><i /><i /><i /></span><span>{copy.shell.quality}</span><b>{copy.shell.qualityValue}</b></div>
        </div>
      </div>

      <main id="main-content">{children}</main>

      <footer className="global-footer">
        <Link href="/portal" className="footer-portal-link">{copy.shell.enter}<ArrowUpRight size={15} /></Link>
        <span>{copy.common.languageNote}</span>
        <span className="footer-code">BTN / 2026 / {locale.toUpperCase()}</span>
      </footer>
    </div>
  );
}
