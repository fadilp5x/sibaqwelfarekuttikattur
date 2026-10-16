import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionFoodArrangements() {
  const { foodArrangements } = PRESENTATION_DATA;

  return (
    <section
      id="food"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#FFF8E8] text-[#191919] pt-16 pb-24 sm:pt-20 sm:pb-28 px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 06: Food Arrangements"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-2.5 sm:mb-3 lg:mb-4 text-center sm:text-left max-w-3xl">
          <span className="font-head text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#B45309] uppercase block mb-1">
            06 / {foodArrangements.kicker}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-1 sm:mb-1.5">
            FOOD <span className="text-[#F15A24]">ARRANGEMENTS</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#191919]/75 max-w-2xl leading-relaxed">
            {foodArrangements.subtitle}
          </p>
        </div>

        {/* Distinctive Split-Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 items-stretch mb-3 sm:mb-4">
          {/* LEFT SIDE: Original Malayalam Fundraising Poster displayed large edge-to-edge */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[340px] xl:h-[390px] rounded-2xl overflow-hidden border-2 border-[#FFC928]/60 bg-white shadow-md shadow-[#FFC928]/15 flex items-center justify-center p-1 sm:p-2 group">
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
              <div className="absolute top-2.5 left-2.5 bg-[#191919]/80 backdrop-blur-md text-white px-2 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                <span className="font-head text-[9px] font-extrabold uppercase tracking-wider">
                  OFFICIAL SPONSORSHIP POSTER
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Seven Food Items & Verified Printed Rates */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-1 sm:space-y-1.5">
            <div className="flex items-center justify-between pb-0.5 px-1 border-b border-[#E7D6C2]">
              <span className="font-head text-[10px] font-black uppercase tracking-wider text-[#191919]/60">
                VERIFIED MENU ITEMS (7 PACKAGES)
              </span>
              <span className="font-head text-[10px] font-black uppercase tracking-wider text-[#191919]/60">
                PRINTED RATE
              </span>
            </div>

            {foodArrangements.items.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between gap-2.5 p-1.5 sm:p-2 px-2.5 sm:px-3 rounded-xl bg-white border border-[#E7D6C2] hover:border-[#FFC928] hover:shadow-xs transition-all duration-200"
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  {/* Number Badge */}
                  <span
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center font-head text-[10px] sm:text-[11px] font-black text-white flex-shrink-0 shadow-xs"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.number}
                  </span>

                  {/* Malayalam Name + English Subtitle */}
                  <div className="min-w-0">
                    <span className="font-display text-xs sm:text-[13px] font-black text-[#191919] block leading-tight truncate">
                      {item.malayalam}
                    </span>
                    <span className="font-body text-[9px] sm:text-[10px] text-[#191919]/65 block font-semibold truncate leading-tight">
                      {item.english}
                    </span>
                  </div>
                </div>

                {/* Exact Printed Amount Badge */}
                <div className="flex items-center gap-1 flex-shrink-0 pl-1.5">
                  <span className="font-head text-[8px] font-extrabold text-[#191919]/40 uppercase tracking-widest hidden sm:inline">
                    INR
                  </span>
                  <span className="font-display text-xs sm:text-sm md:text-base font-black text-[#191919] group-hover:text-[#B45309] transition-colors">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Food Budget Banner */}
        <div
          className="w-full rounded-2xl p-3 sm:p-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 bg-[#FFFBEB] border-2 border-[#FFC928] shadow-md shadow-[#FFC928]/10 transition-all"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFC928] text-[#191919] flex items-center justify-center flex-shrink-0 shadow-sm font-black text-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#191919]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#B45309] block">
                ESTIMATED AMOUNT (OVERALL FOOD BUDGET)
              </span>
              <span className="font-body text-[11px] sm:text-xs text-[#191919]/75 hidden sm:inline">
                Independent overall allocation for full event catering across all three festival days
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5 flex-shrink-0">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#B45309] tracking-tight leading-none">
              {foodArrangements.estimatedAmount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
