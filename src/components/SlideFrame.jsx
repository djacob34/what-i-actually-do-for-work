import { site } from '../config/site.js';
import { asset } from '../lib/asset.js';

// Recreates the NEC master: logo top-left, ×/= mark and arrow grid top-right,
// plus grid bottom-left, yellow ring in the bottom-right corner, and the
// date / website / slide-number footer. `variant` mirrors the PPT layouts.
export function SlideFrame({ variant = 'content', number, children, className = '' }) {
  if (variant === 'bare') {
    return <div className={`slide slide-bare ${className}`}>{children}</div>;
  }
  const dark = variant === 'black';
  return (
    <div className={`slide slide-${variant} ${className}`}>
      {variant === 'content' && (
        <>
          <img className="nec-ring-corner" src={asset('assets/nec/nec-ring-yellow.svg')} alt="" aria-hidden="true" />
          <img className="nec-logo" src={asset('assets/nec/nec-logo-yellow.png')} alt="New Energy Coalition" />
        </>
      )}
      {dark && <img className="nec-ring-left" src={asset('assets/nec/nec-ring-yellow.svg')} alt="" aria-hidden="true" />}
      {!dark && (
        <>
          <img className="nec-times" src={asset('assets/nec/nec-times-equals.svg')} alt="" aria-hidden="true" />
          <img className="nec-arrows" src={asset('assets/nec/nec-arrow-grid.svg')} alt="" aria-hidden="true" />
        </>
      )}
      <img className="nec-plus" src={asset('assets/nec/nec-plus-grid.svg')} alt="" aria-hidden="true" />
      <div className="slide-body">{children}</div>
      <footer className="nec-footer">
        <span className="nec-footer-date">{site.footerDate}</span>
        <span className="nec-footer-site">
          {site.footerSite.pre}
          <b>{site.footerSite.bold}</b>
          {site.footerSite.post}
        </span>
        <span className="nec-footer-num">{number}</span>
      </footer>
    </div>
  );
}

export function Kicker({ chapter, children }) {
  return <div className={`kicker kicker-${chapter}`}>{children}</div>;
}
