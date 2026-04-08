import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  step: number;
}

export const GeometrySVG: React.FC<Props> = ({ step }) => {
  // Coordinates scaled by 100 for SVG
  const A = { x: -173.2, y: 0 };
  const B = { x: 0, y: 100 };
  const C = { x: 173.2, y: 0 };
  const D = { x: 0, y: -100 };
  const E = { x: 86.6, y: -50 };
  const F = { x: -21.65, y: 87.5 };
  const G = { x: -51.96, y: -70 };
  const M = { x: -43.3, y: -25 }; // Midpoint of AE

  // Right angle symbol points
  const P1 = { x: M.x + 9.8, y: M.y + 1.9 };
  const P2 = { x: P1.x - 1.9, y: P1.y + 9.8 };
  const P3 = { x: M.x - 1.9, y: M.y + 9.8 };

  const drawPoint = (p: {x: number, y: number}, label: string, pos: 'top' | 'bottom' | 'left' | 'right' | 'top-right' = 'top') => {
    let dx = 0, dy = 0;
    if (pos === 'top') dy = -15;
    if (pos === 'bottom') dy = 20;
    if (pos === 'left') dx = -20;
    if (pos === 'right') dx = 15;
    if (pos === 'top-right') { dx = 15; dy = -15; }

    return (
      <g>
        <circle cx={p.x} cy={p.y} r="4" className="fill-slate-800" />
        <text x={p.x + dx} y={p.y + dy} className="text-lg font-serif italic fill-slate-800 text-anchor-middle dominant-baseline-middle">
          {label}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full h-full flex items-start pt-8 pb-24 justify-center relative">
      <svg viewBox="-250 -200 500 450" className="w-full max-w-[500px] overflow-visible">
        {/* Base Rhombus */}
        <polygon 
          points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}`}
          className="fill-transparent stroke-slate-800 stroke-2"
        />
        
        {/* Step 1: Highlight triangles */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <polygon points={`${A.x},${A.y} ${F.x},${F.y} ${G.x},${G.y}`} className="fill-blue-500/10" />
              <polygon points={`${E.x},${E.y} ${F.x},${F.y} ${G.x},${G.y}`} className="fill-green-500/10" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 2: Coordinate System */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* X axis */}
              <motion.line x1="-220" y1="0" x2="220" y2="0" className="stroke-slate-400 stroke-1" strokeDasharray="4 4" />
              <polygon points="220,-4 228,0 220,4" className="fill-slate-400" />
              <text x="210" y="-10" className="text-sm font-serif italic fill-slate-500">x</text>
              
              {/* Y axis */}
              <motion.line x1="0" y1="150" x2="0" y2="-150" className="stroke-slate-400 stroke-1" strokeDasharray="4 4" />
              <polygon points="-4,-150 0,-158 4,-150" className="fill-slate-400" />
              <text x="10" y="-140" className="text-sm font-serif italic fill-slate-500">y</text>
              
              <text x="-12" y="15" className="text-sm font-serif italic fill-slate-500">O</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Fold lines and inner lines */}
        <motion.line 
          x1={F.x} y1={F.y} x2={G.x} y2={G.y} 
          className="stroke-slate-800 stroke-2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
        />
        {step >= 0 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <line x1={A.x} y1={A.y} x2={F.x} y2={F.y} className="stroke-slate-800 stroke-2" />
            <line x1={A.x} y1={A.y} x2={G.x} y2={G.y} className="stroke-slate-800 stroke-2" />
            <line x1={E.x} y1={E.y} x2={F.x} y2={F.y} className="stroke-slate-800 stroke-2" />
            <line x1={E.x} y1={E.y} x2={G.x} y2={G.y} className="stroke-slate-800 stroke-2" />
          </motion.g>
        )}

        {/* Step 3: Highlight E */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <circle cx={E.x} cy={E.y} r="8" className="fill-green-500/30 animate-pulse" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 4: AE and perpendicular */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.line x1={A.x} y1={A.y} x2={E.x} y2={E.y} className="stroke-red-500 stroke-2" strokeDasharray="4 4" />
              {drawPoint(M, 'M', 'top-right')}
              {/* Right angle symbol */}
              <path d={`M ${P1.x} ${P1.y} L ${P2.x} ${P2.y} L ${P3.x} ${P3.y}`} className="stroke-red-500 stroke-[1.5] fill-transparent" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 5: Highlight F */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <circle cx={F.x} cy={F.y} r="8" className="fill-indigo-500/30 animate-pulse" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Points */}
        {drawPoint(A, 'A', 'left')}
        {drawPoint(B, 'B', 'bottom')}
        {drawPoint(C, 'C', 'right')}
        {drawPoint(D, 'D', 'top')}
        {drawPoint(E, 'E', 'top-right')}
        {drawPoint(F, 'F', 'bottom')}
        {drawPoint(G, 'G', 'top')}

        {/* Step 6: Highlight Angle */}
        <AnimatePresence>
          {step >= 6 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {/* Angle AFG */}
              <path 
                d={`M ${F.x - 13} ${F.y - 7.5} A 15 15 0 0 1 ${F.x - 4} ${F.y - 14.5}`} 
                className="stroke-rose-500 stroke-2 fill-transparent" 
              />
              <text x={F.x - 25} y={F.y - 20} className="text-sm font-serif italic fill-rose-500">θ</text>
            </motion.g>
          )}
        </AnimatePresence>

      </svg>
    </div>
  );
};
