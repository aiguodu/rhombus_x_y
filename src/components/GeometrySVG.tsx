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
          {step >= 0 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <polygon points={`${A.x},${A.y} ${F.x},${F.y} ${G.x},${G.y}`} className="fill-blue-500/10" />
              <polygon points={`${E.x},${E.y} ${F.x},${F.y} ${G.x},${G.y}`} className="fill-green-500/10" />
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

        {/* Step 2: Draw EB and right angle */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.line 
                x1={E.x} y1={E.y} x2={B.x} y2={B.y} 
                className="stroke-blue-500 stroke-2" strokeDasharray="5 5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              />
              {/* Right angle at B */}
              <path d="M -13 92.5 L -5.5 79.5 L 7.5 87" className="stroke-blue-500 stroke-[1.5] fill-transparent" />
              <polygon points={`${B.x},${B.y} ${C.x},${C.y} ${E.x},${E.y}`} className="fill-blue-500/10" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 3: Highlight AF, EF, FB lengths */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <polygon points={`${E.x},${E.y} ${B.x},${B.y} ${F.x},${F.y}`} className="fill-amber-500/10" />
              <line x1={A.x} y1={A.y} x2={F.x} y2={F.y} className="stroke-amber-500 stroke-[3]" />
              <line x1={E.x} y1={E.y} x2={F.x} y2={F.y} className="stroke-amber-500 stroke-[3]" />
              <line x1={F.x} y1={F.y} x2={B.x} y2={B.y} className="stroke-rose-500 stroke-[3]" />
              
              <text x="-107.4" y="33.75" className="text-lg font-serif italic fill-amber-600 font-bold">x</text>
              <text x="42.4" y="8.75" className="text-lg font-serif italic fill-amber-600 font-bold">x</text>
              <text x="-20.8" y="108.75" className="text-lg font-serif italic fill-rose-600 font-bold">2-x</text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 4: Draw AE */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.line 
                x1={A.x} y1={A.y} x2={E.x} y2={E.y} 
                className="stroke-purple-500 stroke-2" strokeDasharray="5 5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              />
              <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${E.x},${E.y}`} className="fill-purple-500/10" />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Step 5: Highlight M and right angle */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {drawPoint(M, 'M', 'top-right')}
              <path d="M -55.1 -22.7 L -52.8 -10.9 L -41.0 -13.2" className="stroke-slate-800 stroke-[1.5] fill-transparent" />
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
          {step >= 5 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <polygon points={`${A.x},${A.y} ${M.x},${M.y} ${F.x},${F.y}`} className="fill-rose-500/20" />
              <path 
                d="M -38.95 77.5 A 20 20 0 0 1 -25.45 67.9" 
                className="stroke-rose-500 stroke-2 fill-transparent" 
              />
              <text x="-40" y="60" className="text-sm font-serif italic fill-rose-600 font-bold">θ</text>
            </motion.g>
          )}
        </AnimatePresence>

      </svg>
    </div>
  );
};
