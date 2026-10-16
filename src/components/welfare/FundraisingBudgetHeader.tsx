interface FundraisingBudgetHeaderProps {
  activeSection: 'stages' | 'food' | 'accommodation';
}

export default function FundraisingBudgetHeader({ activeSection }: FundraisingBudgetHeaderProps) {
  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 lg:p-4 shadow-xl border border-black/5 flex flex-col justify-between">
      {/* 1. Main Banner: Total Estimated Support */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 pb-2 sm:pb-2.5 border-b border-neutral-100">
        <div>
          <span className="font-head text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#191919]/60 block mb-0.5 sm:mb-1">
            TOTAL ESTIMATED SUPPORT
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-black text-[#191919] tracking-tight leading-none">
              ₹10,00,000
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 border-l border-neutral-200 pl-3 max-w-[200px]">
          <p className="font-body text-[10px] lg:text-[11px] text-[#191919]/70 leading-snug">
            For the successful execution of SIBAQ 2K26 National Arts Fest
          </p>
        </div>
      </div>

      {/* 2. Three Budget Breakdowns: Stage (5L), Food (4L), Accommodation (1L) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 sm:pt-2.5">
        {/* Block 1: Stage Arrangements */}
        <div
          className={`rounded-xl p-1.5 sm:p-2 flex items-center gap-2 transition-all ${
            activeSection === 'stages'
              ? 'bg-[#F15A24] text-white shadow-md shadow-[#F15A24]/30'
              : 'bg-neutral-50/80 text-[#191919] border border-neutral-200/80'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
              activeSection === 'stages' ? 'bg-white/20 text-white' : 'bg-[#F15A24]/10 text-[#F15A24]'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <div className="min-w-0">
            <span
              className={`font-head text-[9px] font-black uppercase tracking-wider block truncate ${
                activeSection === 'stages' ? 'text-white/90' : 'text-[#191919]/60'
              }`}
            >
              STAGE ARRANGEMENTS
            </span>
            <span
              className={`font-display text-sm sm:text-base font-black leading-none block ${
                activeSection === 'stages' ? 'text-white' : 'text-[#F15A24]'
              }`}
            >
              ₹5,00,000
            </span>
          </div>
        </div>

        {/* Block 2: Food Arrangements */}
        <div
          className={`rounded-xl p-1.5 sm:p-2 flex items-center gap-2 transition-all ${
            activeSection === 'food'
              ? 'bg-[#FFC928] text-[#191919] shadow-md border border-[#B45309]/30'
              : 'bg-neutral-50/80 text-[#191919] border border-neutral-200/80'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
              activeSection === 'food' ? 'bg-black/10 text-[#191919]' : 'bg-[#FFC928]/20 text-[#B45309]'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="min-w-0">
            <span
              className={`font-head text-[9px] font-black uppercase tracking-wider block truncate ${
                activeSection === 'food' ? 'text-[#191919]/80' : 'text-[#191919]/60'
              }`}
            >
              FOOD ARRANGEMENTS
            </span>
            <span
              className={`font-display text-sm sm:text-base font-black leading-none block ${
                activeSection === 'food' ? 'text-[#191919]' : 'text-[#B45309]'
              }`}
            >
              ₹4,00,000
            </span>
          </div>
        </div>

        {/* Block 3: Accommodation & Facilities */}
        <div
          className={`rounded-xl p-1.5 sm:p-2 flex items-center gap-2 transition-all ${
            activeSection === 'accommodation'
              ? 'bg-[#218C4A] text-white shadow-md shadow-[#218C4A]/30'
              : 'bg-neutral-50/80 text-[#191919] border border-neutral-200/80'
          }`}
        >
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
              activeSection === 'accommodation' ? 'bg-white/20 text-white' : 'bg-[#218C4A]/10 text-[#218C4A]'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div className="min-w-0">
            <span
              className={`font-head text-[9px] font-black uppercase tracking-wider block truncate ${
                activeSection === 'accommodation' ? 'text-white/90' : 'text-[#191919]/60'
              }`}
            >
              ACCOMMODATION &amp; FACILITIES
            </span>
            <span
              className={`font-display text-sm sm:text-base font-black leading-none block ${
                activeSection === 'accommodation' ? 'text-white' : 'text-[#218C4A]'
              }`}
            >
              ₹1,00,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
