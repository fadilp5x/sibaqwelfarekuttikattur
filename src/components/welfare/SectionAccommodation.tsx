import { PRESENTATION_DATA } from '../../lib/presentationData';
import FundraisingBudgetHeader from './FundraisingBudgetHeader';

export default function SectionAccommodation() {
  const { accommodationFacilities } = PRESENTATION_DATA;

  // Respectful, institutional inline SVGs for the 5 facilities
  const FACILITY_ICONS: Record<string, JSX.Element> = {
    '1': (
      <svg className="w-5 h-5 text-[#218C4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    '2': (
      <svg className="w-5 h-5 text-[#218C4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    '3': (
      <svg className="w-5 h-5 text-[#218C4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    '4': (
      <svg className="w-5 h-5 text-[#218C4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    '5': (
      <svg className="w-5 h-5 text-[#218C4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return (
    <section
      id="accommodation"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#218C4A] text-white pt-16 pb-16 sm:pt-18 sm:pb-18 lg:pt-16 lg:pb-18 px-4 sm:px-8 lg:px-12 snap-start scroll-mt-16 sm:scroll-mt-18"
      aria-label="Section 07: Accommodation and Essential Facilities"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-center">
        {/* Top Row: Left Title Block & Right Prominent Budget Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center mb-3 sm:mb-4 lg:mb-4">
          {/* Title Block */}
          <div className="lg:col-span-6 text-left">
            <span className="font-head text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#FFC928] uppercase block mb-1">
              07 / {accommodationFacilities.kicker}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight uppercase leading-[1.05] font-black mb-1 sm:mb-1.5 text-white drop-shadow-sm">
              ACCOMMODATION &amp; <span className="text-[#FFC928]">FACILITIES</span>
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
              {accommodationFacilities.subtitle}
            </p>
          </div>

          {/* Right: Prominent Total Estimated Support (10L) & 3 Breakdowns */}
          <div className="lg:col-span-6">
            <FundraisingBudgetHeader activeSection="accommodation" />
          </div>
        </div>

        {/* Bottom Row: Accommodation Photo on Left, 5 Facilities in White Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* LEFT: Authentic Accommodation Photograph */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] xl:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 bg-stone-900 group">
              <img
                src={accommodationFacilities.image}
                alt="SIBAQ Campus Lodging and Facilities"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                onError={(e) => {
                  if (accommodationFacilities.remoteUrl && e.currentTarget.src !== accommodationFacilities.remoteUrl) {
                    e.currentTarget.src = accommodationFacilities.remoteUrl;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              {/* Photo Caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928] animate-pulse" />
                  <span className="font-head text-[11px] sm:text-xs font-black tracking-wider uppercase drop-shadow-sm">
                    HOST CAMPUS DELEGATE RESIDENCE
                  </span>
                </div>
                <span className="font-head text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                  SHAMSUL HUDA
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Five Essential Facilities in Crisp White Cards (2-column responsive grid) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {accommodationFacilities.facilities.map((fac) => (
                <div
                  key={fac.id}
                  className="group flex items-center gap-2.5 p-2 sm:p-2.5 px-3 rounded-xl bg-white text-[#191919] border border-white/20 hover:shadow-lg transition-all duration-200"
                >
                  {/* Number Badge */}
                  <div className="w-6 h-6 rounded-lg bg-[#218C4A] text-white flex items-center justify-center font-head text-[10px] sm:text-xs font-black flex-shrink-0 shadow-xs">
                    {fac.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-head text-[11px] sm:text-xs font-black tracking-wider text-[#191919] uppercase leading-tight truncate">
                      {fac.title}
                    </h3>
                    <p className="font-body text-[9px] sm:text-[10px] text-[#191919]/70 leading-snug mt-0.5 line-clamp-2">
                      {fac.description}
                    </p>
                  </div>

                  {/* Right Icon */}
                  <div className="flex-shrink-0 pl-1">
                    {FACILITY_ICONS[fac.id]}
                  </div>
                </div>
              ))}

              {/* 6th Balanced Summary Card */}
              <div className="flex items-center justify-between gap-2.5 p-2 sm:p-2.5 px-3 rounded-xl bg-white/10 backdrop-blur-xs text-white border border-white/20">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-6 h-6 rounded-lg bg-[#FFC928] text-[#191919] flex items-center justify-center font-head text-[11px] font-black flex-shrink-0 shadow-xs">
                    ✓
                  </span>
                  <div className="min-w-0">
                    <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-wider block text-white truncate">
                      CAMPUS CARE READY
                    </span>
                    <p className="font-body text-[9px] sm:text-[10px] text-white/70 block truncate">
                      Hostels &amp; Medical Points
                    </p>
                  </div>
                </div>
                <span className="font-display text-xs sm:text-sm font-black text-[#FFC928]">
                  ₹1,00,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
