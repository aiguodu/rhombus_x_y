import React, { useState, useEffect } from 'react';
import { GeometrySVG } from './components/GeometrySVG';
import { StepPanel } from './components/StepPanel';
import { TTSSubtitles } from './components/TTSSubtitles';
import { steps } from './data/steps';
import { ttsService } from './services/ttsService';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Play TTS when step changes
    ttsService.play(steps[step].tts);
  }, [step]);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(s => s - 1);
    }
  };

  const reset = () => {
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <header className="h-16 border-b border-slate-100 px-6 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 text-blue-600 p-1.5 rounded-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold text-slate-800">初中几何：菱形折叠问题</h1>
          </div>
          <div className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
            纯几何法 (相似与辅助线)
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row h-[570px] relative">
          
          {/* Left: Geometry SVG */}
          <div className="w-full md:w-[55%] h-full bg-white relative border-r border-slate-100">
            <GeometrySVG step={step} />
            <TTSSubtitles text={steps[step].tts} />
          </div>

          {/* Right: Step Panel */}
          <div className="w-full md:w-[45%] h-full">
            <StepPanel step={step} />
          </div>

        </div>

        {/* Footer Controls */}
        <footer className="h-16 border-t border-slate-100 px-6 flex items-center justify-between bg-white shrink-0">
          <button 
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            重新开始
          </button>

          <div className="flex items-center gap-3">
            <button 
              onClick={prevStep}
              disabled={step === 0}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              上一步
            </button>
            <button 
              onClick={nextStep}
              disabled={step === steps.length - 1}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium shadow-sm shadow-blue-600/20"
            >
              下一步
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}
