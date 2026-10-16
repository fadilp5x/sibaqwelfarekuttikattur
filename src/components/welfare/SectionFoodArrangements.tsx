import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionFoodArrangements() {
  const { foodArrangements } = PRESENTATION_DATA;

  return (
    <section
      id="food"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#FFF8E8] text-[#191919] pt-20 pb-28 px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 06: Food Arrangements"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-5 lg:mb-6 text-center sm:text-left max-w-3xl">
          <span className="font-head text-xs font-black tracking-[0.22em] text-[#B45309] uppercase block mb-1.5">
            06 / {foodArrangements.kicker}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-2">
            FOOD <span className="text-[#F15A24]">ARRANGEMENTS</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-[#191919]/75 max-w-2xl leading-relaxed">
            {foodArrangements.subtitle}
          </p>
        </div>

        {/* Distinctive Split-Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch mb-5">
          {/* LEFT SIDE: Original Malayalam Fundraising Poster displayed large edge-to-edge */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] max-h-[560px] rounded-2xl overflow-hidden border-2 border-[#FFC928]/60 bg-white shadow-md shadow-[#FFC928]/15 flex items-center justify-center p-1 sm:p-2 group">
              <img
                src={foodArrangements.posterImage}
                alt="SIBAQ 2K26 Food Sponsorship Official Malayalam Poster"
                className="w-full h-full object-contain object-center rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
                onError={(e) => {
                  if (foodArrangements.posterRemoteUrl && e.currentTarget.src !== foodArrangements.posterRemoteUrl) {
                    e.currentTarget.src = foodArrangements.posterRemoteUrl;
                  }
                }}
              />
              
              {/* Corner Verified Badge */}
              <div className="absolute top-3 left-3 bg-[#191919]/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#FFC928]" />
                <span className="font-head text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider">
                  OFFICIAL SPONSORSHIP POSTER
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Seven Food Items & Verified Printed Rates */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between pb-1 px-1 border-b border-[#E7D6C2]">
              <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#191919]/60">
                VERIFIED MENU ITEMS (7 PACKAGES)
              </span>
              <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#191919]/60">
                PRINTED RATE
              </span>
            </div>

            {foodArrangements.items.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-white border border-[#E7D6C2] hover:border-[#FFC928] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  {/* Number Badge */}
                  <span
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-head text-[11px] sm:text-xs font-black text-white flex-shrink-0 shadow-xs"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.number}
                  </span>

                  {/* Malayalam Name + English Subtitle */}
                  <div className="min-w-0">
                    <span className="font-display text-xs sm:text-sm md:text-[15px] font-black text-[#191919] block leading-snug truncate">
                      {item.malayalam}
                    </span>
                    <span className="font-body text-[10px] sm:text-[11px] text-[#191919]/65 block font-semibold truncate">
                      {item.english}
                    </span>
                  </div>
                </div>

                {/* Exact Printed Amount Badge */}
                <div className="flex items-center gap-1.5 flex-shrink-0 pl-2">
                  <span className="font-head text-[9px] font-extrabold text-[#191919]/40 uppercase tracking-widest hidden sm:inline">
                    INR
                  </span>
                  <span className="font-display text-sm sm:text-base md:text-lg font-black text-[#191919] group-hover:text-[#B45309] transition-colors">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Food Budget Banner */}
        <div
          className="w-full rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 bg-[#FFFBEB] border-2 border-[#FFC928] shadow-md shadow-[#FFC928]/10 transition-all"
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFC928] text-[#191919] flex items-center justify-center flex-shrink-0 shadow-sm font-black text-lg">
              <svg className="w-5 h-5 text-[#191919]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span className="font-head text-[11px] font-black uppercase tracking-[0.2em] text-[#B45309] block">
                ESTIMATED AMOUNT (OVERALL FOOD BUDGET)
              </span>
              <span className="font-body text-xs text-[#191919]/75 hidden sm:inline">
                Independent overall allocation for full event catering across all three festival days
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5 flex-shrink-0">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#B45309] tracking-tight leading-none">
              {foodArrangements.estimatedAmount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
