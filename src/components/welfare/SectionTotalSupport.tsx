import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionTotalSupport() {
  const { totalSupport } = PRESENTATION_DATA;

  return (
    <section
      id="total"
      aria-label="Slide 08: Total Estimated Support and Closing Supplication"
      className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#6A0C14] via-[#4D070D] to-[#300307] text-white pt-16 sm:pt-18 lg:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 md:px-8 selection:bg-[#FFC928] selection:text-[#191919]"
    >
      {/* 1. Subtle Authentic Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-luminosity bg-cover bg-center"
        style={{ backgroundImage: "url('/images/presentation/need-stages.png')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#6A0C14]/90 via-transparent to-[#300307]/95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Festive Lighting Accents */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-[#F15A24]/40 via-[#E52B2B]/20 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tl from-[#F15A24]/30 via-[#FFC928]/20 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative corner festive energy shapes */}
      <div
        className="absolute -top-10 -right-10 w-44 h-44 rounded-full border-[16px] border-[#F15A24]/15 blur-sm pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full border-[18px] border-[#FFC928]/12 blur-sm pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center my-auto">
        {/* Header Branding Lockup */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <img
              src="/media/sibaq-logo.svg"
              alt="SIBAQ Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow brightness-0 invert"
            />
            <span className="font-display font-black text-base sm:text-lg tracking-wider text-white">
              SIBAQ
            </span>
          </div>
          <span className="font-head text-[9px] sm:text-[10px] tracking-[0.24em] font-extrabold text-[#FFC928] uppercase mt-0.5">
            KUTTIKKATTUR 2K26
          </span>
          <p className="font-head text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-white/70 uppercase mt-0.5">
            {totalSupport.tagline}
          </p>
        </div>

        {/* Grand Total Headline */}
        <div className="text-center mt-2 sm:mt-3">
          <h2 className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.22em] text-white/95 uppercase drop-shadow-sm">
            {totalSupport.title}
          </h2>

          <div className="relative inline-flex items-center justify-center my-0.5 sm:my-1">
            {/* Left celebration spark mark */}
            <span
              className="hidden sm:inline-block mr-3 md:mr-4 text-[#FFC928] text-xl md:text-3xl font-black select-none opacity-85"
              aria-hidden="true"
            >
              \\
            </span>

            {/* Massive Amount */}
            <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#FFD768] to-[#F59E0B] drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)] tracking-tight">
              {totalSupport.grandTotal}
            </div>

            {/* Right celebration spark mark */}
            <span
              className="hidden sm:inline-block ml-3 md:ml-4 text-[#FFC928] text-xl md:text-3xl font-black select-none opacity-85"
              aria-hidden="true"
            >
              //
            </span>
          </div>

          {/* 10 LAKHS INR Pill Badge */}
          <div>
            <span className="inline-flex items-center justify-center px-3.5 sm:px-4.5 py-0.5 sm:py-1 rounded-full bg-[#4A080E]/90 border border-[#E52B2B]/50 shadow-inner font-head text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.22em] text-[#FFE8A3]">
              {totalSupport.grandTotalWords}
            </span>
          </div>
        </div>

        {/* 3 Balanced Component Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-3 sm:mt-4 mb-2.5 sm:mb-3">
          {/* Card 01: Stage Arrangements */}
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
            {/* Image Container with Number Badge */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
              <img
                src={totalSupport.cards[0].image}
                alt="Stage Arrangements Infrastructure"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute top-2.5 left-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F15A24] text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg border border-white/20">
                01
              </div>
            </div>

            {/* Bottom Card Body */}
            <div className="p-3 sm:p-3.5 bg-white flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F15A24]/10 flex items-center justify-center flex-shrink-0 text-[#F15A24]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-[11px] sm:text-xs font-black text-[#191919] uppercase tracking-wider leading-tight">
                  {totalSupport.cards[0].title}
                </span>
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-black text-[#F15A24] tracking-tight leading-tight mt-0.5">
                  {totalSupport.cards[0].amount}
                </span>
              </div>
            </div>
          </div>

          {/* Card 02: Food Arrangements */}
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
            {/* Image Container with Number Badge */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
              <img
                src={totalSupport.cards[1].image}
                alt="Food Arrangements for Student Competitors"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute top-2.5 left-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F59E0B] text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg border border-white/20">
                02
              </div>
            </div>

            {/* Bottom Card Body */}
            <div className="p-3 sm:p-3.5 bg-white flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFC928]/25 flex items-center justify-center flex-shrink-0 text-[#D97706]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-[11px] sm:text-xs font-black text-[#191919] uppercase tracking-wider leading-tight">
                  {totalSupport.cards[1].title}
                </span>
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-black text-[#D97706] tracking-tight leading-tight mt-0.5">
                  {totalSupport.cards[1].amount}
                </span>
              </div>
            </div>
          </div>

          {/* Card 03: Accommodation & Essential Facilities */}
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex flex-col border-2 border-[#22C55E] ring-2 ring-[#22C55E]/30 shadow-[0_0_25px_rgba(34,197,94,0.25)] transform hover:-translate-y-1 transition-transform duration-300">
            {/* Image Container with Number Badge */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
              <img
                src={totalSupport.cards[2].image}
                alt="Accommodation and Facilities for Visiting Students"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute top-2.5 left-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#218C4A] text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg border border-white/20">
                03
              </div>
            </div>

            {/* Bottom Card Body */}
            <div className="p-3 sm:p-3.5 bg-white flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#218C4A]/15 flex items-center justify-center flex-shrink-0 text-[#218C4A]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display text-[10px] sm:text-[11px] font-black text-[#191919] uppercase tracking-wider leading-tight">
                  ACCOMMODATION &<br className="hidden sm:inline" /> ESSENTIAL FACILITIES
                </span>
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-black text-[#218C4A] tracking-tight leading-tight mt-0.5">
                  {totalSupport.cards[2].amount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Elegant Star Divider */}
        <div className="flex items-center justify-center gap-3 my-1 sm:my-1.5 opacity-80" aria-hidden="true">
          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#FFC928]" />
          <svg className="w-3 h-3 text-[#FFC928]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#FFC928]" />
        </div>

        {/* 5. Arabic Dua & Supplication */}
        <div className="text-center px-4 max-w-4xl mx-auto">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-bold text-white tracking-normal leading-[1.6] select-all drop-shadow-md"
            style={{ fontFamily: '"Noto Naskh Arabic", "Amiri", "Traditional Arabic", serif' }}
          >
            {totalSupport.duaArabic}
          </p>
          <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs md:text-sm text-white/85 font-medium italic tracking-wide max-w-2xl mx-auto drop-shadow-xs">
            &ldquo;{totalSupport.duaMeaning}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
