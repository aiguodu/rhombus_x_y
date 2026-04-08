export type TTSState = 'idle' | 'loading' | 'playing' | 'paused';

class TTSService {
  private state: TTSState = 'idle';
  private listeners: ((state: TTSState, progress: number) => void)[] = [];
  private progress = 0;
  private timer: any = null;

  subscribe(listener: (state: TTSState, progress: number) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l(this.state, this.progress));
  }

  async play(text: string) {
    this.stop();
    this.state = 'loading';
    this.progress = 0;
    this.notify();

    // Simulate network request for TTS audio
    await new Promise(resolve => setTimeout(resolve, 500));

    this.state = 'playing';
    this.notify();

    // Simulate playing progress based on text length
    const duration = text.length * 150; // 150ms per character
    const interval = 100;
    
    this.timer = setInterval(() => {
      this.progress += interval / duration;
      if (this.progress >= 1) {
        this.stop();
      } else {
        this.notify();
      }
    }, interval);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.state = 'idle';
    this.progress = 0;
    this.notify();
  }
}

export const ttsService = new TTSService();
