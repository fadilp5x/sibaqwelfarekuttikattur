import { Link } from 'react-router-dom';
import { PRESENTATION_SECTIONS } from '../../lib/presentationData';

interface PresentationHeaderProps {
  activeSectionIndex: number;
  onNavigateToSection: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function PresentationHeader({
  activeSectionIndex,
  onNavigateToSection,
  isFullscreen,
  onToggleFullscreen,
}: PresentationHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8E8]/95 backdrop-blur-md border-b border-[#E7D6C2]/80 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[#191919]/60 hover:text-[#F15A24] text-xs font-bold transition-colors py-1 px-2 rounded-lg hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
            title="Return to Main SIBAQ Website"
            aria-label="Return to Main SIBAQ Website"
          >
            <span className="text-sm font-black">‹</span>
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2.5 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-lg"
            title="SIBAQ Kuttikkattur 2K26"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center">
              <img
                src="/media/sibaq-logo.svg"
                alt="SIBAQ Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.04em] text-base sm:text-lg font-black text-[#191919] uppercase leading-none">
                SIBAQ
              </span>
              <span className="font-head text-[9px] sm:text-[10px] tracking-[0.18em] text-[#F15A24] uppercase leading-tight font-extrabold">
                KUTTIKKATTUR 2K26
              </span>
            </div>
          </Link>
        </div>

        {/* Section Navigation Tabs (01 - 07) */}
        <nav aria-label="Presentation Sections" className="flex items-center gap-1 sm:gap-1.5 md:gap-2 overflow-x-auto no-scrollbar py-1">
          {PRESENTATION_SECTIONS.map((section, idx) => {
            const isActive = idx === activeSectionIndex;
            return (
              <button
                key={section.id}
                onClick={() => onNavigateToSection(idx)}
                className={`relative min-w-[28px] sm:min-w-[34px] py-1 px-2 sm:py-1.5 sm:px-2.5 rounded-full font-head text-[10px] sm:text-xs font-extrabold tracking-wider transition-all touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] flex-shrink-0 ${
                  isActive
                    ? 'bg-[#F15A24] text-white shadow-sm shadow-[#F15A24]/30 scale-105'
                    : 'text-[#191919]/65 hover:text-[#191919] hover:bg-black/5'
                }`}
                aria-current={isActive ? 'step' : undefined}
                title={`Jump to Section ${section.number}: ${section.title}`}
              >
                <span>{section.number}</span>
                <span className="hidden xl:inline ml-1 text-[10px] font-bold opacity-90">
                  {section.shortLabel}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right Label & Mode Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          {/* Compact Combined Budget Requirement Context */}
          <div
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF2EB] border border-[#F15A24]/40 shadow-xs"
            title="Estimated Combined Welfare Requirement across Stages, Food, and Accommodation"
          >
            <span className="font-head text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#D84315]">
              COMBINED EST:
            </span>
            <span className="font-display text-xs sm:text-sm font-black text-[#F15A24]">
              ₹10,00,000
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E7D6C2] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#33AC5A] animate-pulse" />
            <span className="font-head text-[9px] sm:text-[10px] tracking-[0.16em] font-extrabold text-[#191919]/80 uppercase">
              WELFARE COMMITTEE
            </span>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#E7D6C2] shadow-sm flex items-center justify-center text-[#191919]/70 hover:text-[#F15A24] hover:border-[#F15A24]/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
            aria-label={isFullscreen ? 'Exit Fullscreen mode' : 'Enter Fullscreen mode'}
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
      </div>
    </header>
  );
}
