import { useEffect, useRef, useState } from 'react';
import { PRESENTATION_SECTIONS } from '../../lib/presentationData';

interface PresentationDockProps {
  activeSectionIndex: number;
  totalSections: number;
  onPrev: () => void;
  onNext: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function PresentationDock({
  activeSectionIndex,
  totalSections,
  onPrev,
  onNext,
  isFullscreen,
  onToggleFullscreen,
}: PresentationDockProps) {
  const currentSection = PRESENTATION_SECTIONS[activeSectionIndex] || PRESENTATION_SECTIONS[0];
  const progressPercent = ((activeSectionIndex + 1) / totalSections) * 100;
  const isFirst = activeSectionIndex === 0;
  const isLast = activeSectionIndex === totalSections - 1;

  // Autohide state & timer
  const [isVisible, setIsVisible] = useState(true);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const resetHideTimer = () => {
    setIsVisible(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    if (!isHoveredRef.current) {
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  useEffect(() => {
    resetHideTimer();

    const handleActivity = () => {
      resetHideTimer();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, [activeSectionIndex]);

  return (
    <>
      {/* Bottom screen hover trigger zone */}
      <div
        className="fixed bottom-0 left-0 right-0 h-14 z-30 pointer-events-auto"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          setIsVisible(true);
        }}
        onMouseMove={() => {
          setIsVisible(true);
        }}
        aria-hidden="true"
      />

      <aside
        aria-label="Presentation controls"
        onMouseEnter={() => {
          isHoveredRef.current = true;
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
          resetHideTimer();
        }}
        className={`fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-auto sm:min-w-[480px] max-w-lg bg-white/95 backdrop-blur-md border border-[#E7D6C2] rounded-full px-3.5 sm:px-5 py-2 shadow-lg shadow-black/5 flex items-center justify-between gap-2.5 sm:gap-4 transition-all duration-300 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
      {/* 1. Step Indicator & Short Section Label */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
        <span className="font-head text-xs sm:text-sm font-black text-[#F15A24] tracking-wider">
          {currentSection.number} / {String(totalSections).padStart(2, '0')}
        </span>
        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-300" />
        <span className="hidden sm:inline-block font-head text-[11px] font-extrabold text-[#191919]/70 uppercase truncate max-w-[120px]">
          {currentSection.id === 'total' ? 'Total Support' : currentSection.shortLabel}
        </span>
      </div>

      {/* 2. Thin Colored Progress Indicator */}
      <div
        className="flex-1 min-w-[60px] max-w-[140px] sm:max-w-[160px] h-1.5 bg-[#EFE8DC] rounded-full overflow-hidden relative"
        role="progressbar"
        aria-valuenow={activeSectionIndex + 1}
        aria-valuemin={1}
        aria-valuemax={totalSections}
        aria-label="Presentation Progress"
      >
        <div
          className="h-full bg-gradient-to-r from-[#F15A24] via-[#FFC928] to-[#33AC5A] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3. Action Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF8E8] border border-[#E7D6C2] flex items-center justify-center text-[#191919] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 active:scale-95 transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
          title="Previous Slide (← / ↑)"
          aria-label="Previous Slide"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={isLast}
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] ${
            isLast
              ? 'bg-neutral-200 text-neutral-400 opacity-40 cursor-not-allowed shadow-none'
              : 'bg-[#F15A24] text-white hover:bg-[#E52B2B] active:scale-95 shadow-sm shadow-[#F15A24]/30'
          }`}
          title={isLast ? 'Final Slide Reached' : 'Next Slide (Space / → / ↓)'}
          aria-label={isLast ? 'Final Slide Reached' : 'Next Slide'}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Spacebar Hint (Desktop only) */}
        <span
          className={`hidden md:inline-block font-head text-[9px] font-extrabold tracking-wider uppercase px-1.5 py-0.5 rounded select-none ${
            isLast ? 'text-[#191919]/25 bg-black/[0.03]' : 'text-[#191919]/50 bg-black/5'
          }`}
        >
          SPACE / →
        </span>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF8E8] border border-[#E7D6C2] flex items-center justify-center text-[#191919]/70 hover:text-[#191919] hover:bg-black/5 active:scale-95 transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
          title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>
      </div>
    </aside>
  </>
);
}
