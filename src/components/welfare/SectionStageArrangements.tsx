import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionStageArrangements() {
  const { stageArrangements } = PRESENTATION_DATA;

  // Custom inline SVGs for the 6 exact staging facilities
  const FACILITY_ICONS: Record<string, JSX.Element> = {
    '1': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    '2': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11" />
      </svg>
    ),
    '3': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    '4': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    '5': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    '6': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  };

  return (
    <section
      id="stages"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#FFF8E8] text-[#191919] pt-16 pb-24 sm:pt-20 sm:pb-28 px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 05: Stage Arrangements"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-3 sm:mb-4 lg:mb-5 text-center sm:text-left max-w-3xl">
          <span className="font-head text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#F15A24] uppercase block mb-1">
            05 / {stageArrangements.kicker}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-1 sm:mb-1.5">
            STAGE <span className="text-[#F15A24]">ARRANGEMENTS</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#191919]/75 max-w-2xl leading-relaxed">
            {stageArrangements.subtitle}
          </p>
        </div>

        {/* 16:9 Presentation Main Layout: Stage Photo on Left, 6 Facilities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch mb-3 sm:mb-4">
          {/* LEFT: Generous Stage Photograph */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[310px] xl:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md shadow-[#F15A24]/10 border-2 border-[#F15A24]/30 bg-stone-100 group">
              <img
                src={stageArrangements.image}
                alt="SIBAQ Festival Stage Structure"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                onError={(e) => {
                  if (stageArrangements.remoteUrl && e.currentTarget.src !== stageArrangements.remoteUrl) {
                    e.currentTarget.src = stageArrangements.remoteUrl;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              
              {/* Photo Caption Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F15A24] animate-pulse" />
                  <span className="font-head text-[11px] sm:text-xs font-extrabold tracking-wider uppercase drop-shadow-sm">
                    MAIN PERFORMANCE VENUE RIG
                  </span>
                </div>
                <span className="font-head text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                  SIBAQ 2K26
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Six Required Facilities in a Scan-friendly Numbered List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-1.5 sm:space-y-2">
            {stageArrangements.facilities.map((fac) => (
              <div
                key={fac.id}
                className="group flex items-start gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white border border-[#E7D6C2] hover:border-[#F15A24]/60 transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-[#F15A24]/5"
              >
                {/* Number Badge */}
                <div className="w-7 h-7 rounded-lg sm:rounded-xl bg-[#FFF2EB] text-[#F15A24] border border-[#F15A24]/30 flex items-center justify-center font-head text-[11px] font-black flex-shrink-0 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
                  {fac.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-head text-xs sm:text-[13px] font-black tracking-wider text-[#191919] uppercase leading-tight">
                      {fac.title}
                    </h3>
                    <span className="text-[#F15A24]/80 flex-shrink-0 scale-90 sm:scale-100">
                      {FACILITY_ICONS[fac.id]}
                    </span>
                  </div>
                  <p className="font-body text-[10px] sm:text-[11px] text-[#191919]/70 leading-snug mt-0.5 truncate sm:whitespace-normal">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Width Prominent Budget Banner */}
        <div
          className="w-full rounded-2xl p-3 sm:p-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 bg-[#FFF2EB] border-2 border-[#F15A24] shadow-md shadow-[#F15A24]/10 transition-all"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F15A24] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#D84315] block">
                ESTIMATED AMOUNT
              </span>
              <span className="font-body text-[11px] sm:text-xs text-[#191919]/75 hidden sm:inline">
                Comprehensive budget for all 6 staging and infrastructure requirements
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5 flex-shrink-0">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#F15A24] tracking-tight leading-none">
              {stageArrangements.estimatedAmount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
