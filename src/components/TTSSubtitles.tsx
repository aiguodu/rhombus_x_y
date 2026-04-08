import React, { useEffect, useState } from 'react';
import { ttsService, TTSState } from '../services/ttsService';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Loader2 } from 'lucide-react';

interface Props {
  text: string;
}

export const TTSSubtitles: React.FC<Props> = ({ text }) => {
  const [state, setState] = useState<TTSState>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = ttsService.subscribe((newState, newProgress) => {
      setState(newState);
      setProgress(newProgress);
    });
    return unsubscribe;
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-slate-900/70 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 z-50"
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 shrink-0">
            {state === 'loading' ? (
              <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
            ) : state === 'playing' ? (
              <Volume2 className="w-5 h-5 text-blue-400 animate-pulse" />
            ) : (
              <Volume2 className="w-5 h-5 text-slate-400" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium max-h-[80px] overflow-y-auto pr-2 custom-scrollbar">
              {text}
            </p>
            {/* Progress bar */}
            <div className="h-1 w-full bg-slate-700 rounded-full mt-3 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${progress * 100}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
