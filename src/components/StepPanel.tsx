import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { steps } from '../data/steps';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface Props {
  step: number;
}

export const StepPanel: React.FC<Props> = ({ step }) => {
  const currentStep = steps[step];

  return (
    <div className="w-full h-full bg-slate-50 p-6 md:p-8 flex flex-col relative overflow-hidden">
      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              idx <= step ? 'bg-blue-500' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col min-h-0"
        >
          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
              {currentStep.icon}
            </div>
            <h2 className="text-xl font-bold text-slate-800">{currentStep.title}</h2>
          </div>
          
          <p className="text-slate-600 font-medium mb-6 text-lg shrink-0">
            {currentStep.desc}
          </p>

          <div className="flex-1 bg-white rounded-xl border border-slate-100 p-5 shadow-sm overflow-y-auto custom-scrollbar">
            <div className="prose prose-slate prose-sm max-w-none">
              <Markdown 
                remarkPlugins={[remarkMath]} 
                rehypePlugins={[rehypeKatex]}
              >
                {currentStep.detail}
              </Markdown>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
