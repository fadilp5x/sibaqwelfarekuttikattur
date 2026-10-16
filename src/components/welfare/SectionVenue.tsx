import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionVenue() {
  const { venue } = PRESENTATION_DATA;

  return (
    <section
      id="venue"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#FFF8E8] text-[#191919] pt-20 pb-28 px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 04: The Venue & Dates"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Venue Details, Prominent Date Panel & Directions */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          {/* Eyebrow */}
          <span className="font-head text-xs font-black tracking-[0.22em] text-[#F15A24] uppercase block mb-2">
            04 / {venue.kicker}
          </span>

          {/* Large Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-3">
            {venue.title}
          </h2>

          {/* Location Label with Anchored Pin */}
          <div className="flex items-center gap-2 mb-6 text-[#191919]/80">
            <svg
              className="w-4 h-4 text-[#E52B2B] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <span className="font-head text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#191919]">
              {venue.locationText}
            </span>
          </div>

          {/* Prominent Date Panel */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#F15A24] shadow-[0_4px_18px_-2px_rgba(241,90,36,0.18)] mb-6 max-w-md">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-head text-[10px] font-black tracking-wider text-[#F15A24] uppercase">
                  FESTIVAL DATES
                </span>
                <span className="font-display text-xl sm:text-2xl font-black text-[#191919] uppercase tracking-wide">
                  {venue.dates}
                </span>
              </div>
            </div>
          </div>

          {/* Compact Open Directions Action Button */}
          <div>
            <a
              href={venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#191919] hover:bg-[#F15A24] text-white font-head text-xs font-black tracking-wider uppercase transition-all shadow-md active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
            >
              <span>OPEN DIRECTIONS</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Clean Authentic Campus Photograph & Verified Map Anchor */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center">
          <div className="w-full max-w-[620px] rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-black/5 bg-white flex flex-col">
            {/* Pristine Photograph of Academy without Overlaid Marketing Copy */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
              <img
                src={venue.image}
                alt="Shamsul Huda Islamic Academy Campus, Kuttikkattur"
                className="w-full h-full object-cover filter saturate-[1.05]"
                style={{ objectPosition: '90% 70%', transform: 'scale(1.24)', transformOrigin: '90% 70%' }}
                loading="eager"
              />
            </div>

            {/* Verified Location Panel */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E7D6C2] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#33AC5A]/10 text-[#33AC5A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-head text-[10px] font-black uppercase text-[#33AC5A] tracking-wider">
                    VERIFIED VENUE GROUND
                  </span>
                  <span className="font-head text-xs font-extrabold text-[#191919] uppercase">
                    {venue.coordinates}
                  </span>
                </div>
              </div>

              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-head font-extrabold text-[#F15A24] hover:underline uppercase flex items-center gap-1"
              >
                <span>Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
