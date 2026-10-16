import { useEffect, useRef, useState } from 'react';

export type WipeDirection = 'forward' | 'backward';

interface ColorWipeOverlayProps {
  isActive: boolean;
  color: string;
  direction?: WipeDirection;
  onCovered: () => void;
  onComplete: () => void;
}

export default function ColorWipeOverlay({
  isActive,
  color,
  direction = 'forward',
  onCovered,
  onComplete,
}: ColorWipeOverlayProps) {
  // Stages: 'idle' | 'covering' | 'covered' | 'revealing'
  const [stage, setStage] = useState<'idle' | 'covering' | 'revealing'>('idle');
  const timerRef = useRef<number[]>([]);

  // Check user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Clear any pending timers
    timerRef.current.forEach((t) => clearTimeout(t));
    timerRef.current = [];

    if (!isActive) {
      setStage('idle');
      return;
    }

    if (prefersReducedMotion) {
      // Immediate switch without full screen wipe for accessibility
      setStage('covering');
      const t1 = window.setTimeout(() => {
        onCovered();
        const t2 = window.setTimeout(() => {
          setStage('idle');
          onComplete();
        }, 120);
        timerRef.current.push(t2);
      }, 50);
      timerRef.current.push(t1);
      return;
    }

    // Phase B: Start Covering
    setStage('covering');

    // At 380ms: full coverage reached -> Phase C: Switch Content
    const tCover = window.setTimeout(() => {
      onCovered();
      // Phase D: Start Revealing
      setStage('revealing');

      // At 780ms (380 + 400): reveal completed -> Reset & Unlock
      const tReveal = window.setTimeout(() => {
        setStage('idle');
        onComplete();
      }, 400);
      timerRef.current.push(tReveal);
    }, 380);

    timerRef.current.push(tCover);

    return () => {
      timerRef.current.forEach((t) => clearTimeout(t));
      timerRef.current = [];
    };
  }, [isActive, onCovered, onComplete, prefersReducedMotion]);

  if (stage === 'idle' && !isActive) {
    return null;
  }

  // Determine transform based on direction and stage
  // Forward: Sweep in from right (100% -> 0%), then exit to left (-100%)
  // Backward: Sweep in from left (-100% -> 0%), then exit to right (100%)
  const isForward = direction === 'forward';

  let transformStyle = '';
  let transitionStyle = '';

  if (prefersReducedMotion) {
    transformStyle = 'none';
    transitionStyle = 'opacity 120ms ease-out';
  } else if (stage === 'covering') {
    transformStyle = 'translateX(0%)';
    transitionStyle = 'transform 380ms cubic-bezier(0.77, 0, 0.175, 1)';
  } else if (stage === 'revealing') {
    transformStyle = isForward ? 'translateX(-100%)' : 'translateX(100%)';
    transitionStyle = 'transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1)';
  }

  const initialPosition = isForward ? 'translateX(100%)' : 'translateX(-100%)';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[80] pointer-events-none overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform shadow-2xl"
        style={{
          backgroundColor: color,
          transform: stage === 'idle' ? initialPosition : transformStyle,
          transition: transitionStyle,
          opacity: prefersReducedMotion ? (stage === 'idle' ? 0 : 0.95) : 1,
        }}
      >
        {/* Subtle Brand Watermark inside the wipe */}
        <div className="flex flex-col items-center justify-center text-white/90 select-none scale-90 sm:scale-100">
          <div className="w-12 h-12 mb-2 flex items-center justify-center">
            <img
              src="/media/sibaq-logo.svg"
              alt=""
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>
          <span className="font-display text-lg tracking-[0.2em] uppercase font-black">
            SIBAQ 2K26
          </span>
          <span className="font-head text-[10px] tracking-[0.25em] font-extrabold uppercase opacity-80">
            KUTTIKKATTUR
          </span>
        </div>
      </div>
    </div>
  );
}
