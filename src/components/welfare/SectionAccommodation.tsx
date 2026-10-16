import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionAccommodation() {
  const { accommodationFacilities } = PRESENTATION_DATA;

  // Respectful, institutional inline SVGs for the 5 facilities
  const FACILITY_ICONS: Record<string, JSX.Element> = {
    '1': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    '2': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    '3': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    '4': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    '5': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return (
    <section
      id="accommodation"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#FFF8E8] text-[#191919] pt-20 pb-28 px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 07: Accommodation and Essential Facilities"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-5 lg:mb-6 text-center sm:text-left max-w-3xl">
          <span className="font-head text-xs font-black tracking-[0.22em] text-[#33AC5A] uppercase block mb-1.5">
            07 / {accommodationFacilities.kicker}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-2">
            ACCOMMODATION & <span className="text-[#33AC5A]">FACILITIES</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-[#191919]/75 max-w-2xl leading-relaxed">
            {accommodationFacilities.subtitle}
          </p>
        </div>

        {/* Wide Screen Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch mb-5">
          {/* LEFT: Authentic Accommodation Photograph */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] rounded-3xl overflow-hidden shadow-md shadow-[#33AC5A]/10 border-2 border-[#33AC5A]/30 bg-stone-100 group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#33AC5A] animate-pulse" />
                  <span className="font-head text-xs sm:text-sm font-extrabold tracking-wider uppercase drop-shadow-sm">
                    HOST CAMPUS DELEGATE RESIDENCE
                  </span>
                </div>
                <span className="font-head text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                  SHAMSUL HUDA
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Five Essential Facilities with Respectful Institutional Terminology */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-2.5">
            {accommodationFacilities.facilities.map((fac) => (
              <div
                key={fac.id}
                className="group flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E7D6C2] hover:border-[#33AC5A]/60 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#33AC5A]/5"
              >
                {/* Number Badge */}
                <div className="w-8 h-8 rounded-xl bg-[#F0FDF4] text-[#15803D] border border-[#33AC5A]/30 flex items-center justify-center font-head text-xs font-black flex-shrink-0 group-hover:bg-[#33AC5A] group-hover:text-white transition-colors">
                  {fac.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-head text-xs sm:text-sm font-black tracking-wider text-[#191919] uppercase leading-snug">
                      {fac.title}
                    </h3>
                    <span className="text-[#33AC5A]/80 flex-shrink-0">
                      {FACILITY_ICONS[fac.id]}
                    </span>
                  </div>
                  <p className="font-body text-[11px] sm:text-xs text-[#191919]/70 leading-relaxed mt-0.5">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom High-Contrast Green Budget Banner */}
        <div
          className="w-full rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 bg-[#F0FDF4] border-2 border-[#33AC5A] shadow-md shadow-[#33AC5A]/10 transition-all"
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#33AC5A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="font-head text-[11px] font-black uppercase tracking-[0.2em] text-[#15803D] block">
                ESTIMATED AMOUNT
              </span>
              <span className="font-body text-xs text-[#191919]/75 hidden sm:inline">
                Full lodging, hygiene washroom upkeep, medical post and security coordination
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5 flex-shrink-0">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#15803D] tracking-tight leading-none">
              {accommodationFacilities.estimatedAmount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
