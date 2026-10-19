import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
              <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
              <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
            </g>
          </g>
        )}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
        {project.motif === 'chat' && (
          <g fill="none" stroke={a}>
            {/* question bubble */}
            <g className="motif-float">
              <rect x="196" y="40" width="150" height="48" rx="14" strokeWidth="2" strokeOpacity="0.85" />
              <path d="M220 104 l-8 -16 h24" strokeWidth="2" strokeOpacity="0.85" />
              <line x1="214" x2="320" y1="58" y2="58" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
              <line x1="214" x2="290" y1="72" y2="72" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
            </g>
            {/* answer bubble: bars with a dashed forecast */}
            <rect x="226" y="112" width="160" height="104" rx="14" fill={a} fillOpacity="0.08" strokeWidth="2" strokeOpacity="0.6" />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} className="motif-bar" style={{ animationDelay: `${i * 0.2}s` }} x={244 + i * 22} y={150 - i * 8} width="14" height={50 + i * 8} rx="3" fill={a} fillOpacity="0.55" stroke="none" />
            ))}
            <rect x="332" y="118" width="14" height="82" rx="3" strokeDasharray="4 4" strokeWidth="1.6" />
            <path d="M246 190 L268 176 L290 168 L312 152 L340 126" className="motif-dash" strokeDasharray="6 7" strokeWidth="2.5" strokeLinecap="round" />
            {/* typing dots */}
            {[0, 1, 2].map((i) => (
              <circle key={i} className="motif-pulse" style={{ animationDelay: `${i * 0.25}s` }} cx={236 + i * 14} cy="242" r="5" fill={a} stroke="none" />
            ))}
          </g>
        )}
        {project.motif === 'mix' && (
          <g fill="none" stroke={a}>
            {/* stacked channel contributions */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const h = [70, 96, 84, 120, 108, 140][i];
              return (
                <g key={i} className="motif-bar" style={{ animationDelay: `${i * 0.18}s` }}>
                  <rect x={200 + i * 30} y={220 - h} width="20" height={h * 0.45} fill={a} fillOpacity="0.75" stroke="none" />
                  <rect x={200 + i * 30} y={220 - h * 0.55} width="20" height={h * 0.3} fill={a} fillOpacity="0.4" stroke="none" />
                  <rect x={200 + i * 30} y={220 - h * 0.25} width="20" height={h * 0.25} fill={a} fillOpacity="0.18" stroke="none" />
                </g>
              );
            })}
            {/* diminishing-returns curve */}
            <path d="M192 230 C230 120 280 80 380 66" className="motif-dash" strokeDasharray="8 6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="190" x2="384" y1="222" y2="222" strokeWidth="1.5" strokeOpacity="0.5" />
            <circle cx="380" cy="66" r="6" fill={a} stroke="none" className="motif-pulse" />
          </g>
        )}
        {project.motif === 'wave' && (
          <g stroke="none" fill={a}>
            {Array.from({ length: 17 }, (_, i) => {
              const h = 30 + Math.abs(Math.sin(i * 0.9)) * 110;
              return <rect key={i} className="motif-bar" style={{ animationDelay: `${(i % 6) * 0.15}s` }} x={192 + i * 11} y={150 - h / 2} width="6" height={h} rx="3" fillOpacity={0.35 + (i % 3) * 0.2} />;
            })}
            <circle cx="290" cy="150" r="96" fill="none" stroke={a} strokeOpacity="0.25" strokeWidth="1.5" className="motif-pulse" />
          </g>
        )}
        {project.motif === 'film' && (
          <g fill="none" stroke={a}>
            <g className="motif-float">
              {[0, 1, 2].map((i) => (
                <g key={i} transform={`translate(${196 + i * 62} ${70 + (i % 2) * 18})`}>
                  <rect width="54" height="80" rx="6" strokeWidth="2" strokeOpacity={0.9 - i * 0.2} fill={a} fillOpacity={0.12 + i * 0.08} />
                  <path d="M10 60 l12 -16 l10 10 l8 -8 l6 14" strokeWidth="1.6" strokeOpacity="0.7" />
                  <circle cx="38" cy="22" r="6" strokeWidth="1.6" strokeOpacity="0.7" />
                </g>
              ))}
            </g>
            {/* film strip */}
            <rect x="186" y="196" width="200" height="40" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="186" x2="386" y1="204" y2="204" strokeDasharray="8 8" strokeWidth="5" strokeOpacity="0.5" className="motif-dash" />
            <line x1="186" x2="386" y1="228" y2="228" strokeDasharray="8 8" strokeWidth="5" strokeOpacity="0.5" className="motif-dash" />
            <path d="M372 104 l14 -8 v16 z" fill={a} stroke="none" className="motif-pulse" />
          </g>
        )}
        {project.motif === 'agents' && (
          <g fill="none" stroke={a}>
            <g className="motif-spin">
              {[0, 1, 2, 3].map((i) => {
                const ang = (i / 4) * Math.PI * 2;
                const x = 290 + Math.cos(ang) * 84;
                const y = 140 + Math.sin(ang) * 84;
                return (
                  <g key={i}>
                    <line x1="290" y1="140" x2={x} y2={y} strokeWidth="1.6" strokeOpacity="0.5" strokeDasharray="5 5" className="motif-dash" />
                    <circle cx={x} cy={y} r="18" strokeWidth="2" fill={a} fillOpacity="0.15" />
                  </g>
                );
              })}
            </g>
            <circle cx="290" cy="140" r="30" strokeWidth="2.5" fill={a} fillOpacity="0.3" />
            <circle cx="290" cy="140" r="44" strokeWidth="1" strokeOpacity="0.35" className="motif-pulse" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
