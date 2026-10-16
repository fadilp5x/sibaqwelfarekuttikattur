import { PRESENTATION_DATA } from '../../lib/presentationData';
import FundraisingBudgetHeader from './FundraisingBudgetHeader';

export default function SectionFoodArrangements() {
  const { foodArrangements } = PRESENTATION_DATA;

  return (
    <section
      id="food"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#2F5FE8] text-white pt-16 pb-16 sm:pt-18 sm:pb-18 lg:pt-16 lg:pb-18 px-4 sm:px-8 lg:px-12 snap-start scroll-mt-16 sm:scroll-mt-18"
      aria-label="Section 06: Food Arrangements"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-center">
        {/* Top Row: Left Title Block & Right Prominent Budget Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center mb-3 sm:mb-4 lg:mb-4">
          {/* Title Block */}
          <div className="lg:col-span-6 text-left">
            <span className="font-head text-[11px] sm:text-xs font-black tracking-[0.2em] text-[#FFC928] uppercase block mb-1">
              06 / {foodArrangements.kicker}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight uppercase leading-[1.05] font-black mb-1 sm:mb-1.5 text-white drop-shadow-sm">
              FOOD <span className="text-[#FFC928]">ARRANGEMENTS</span>
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
              {foodArrangements.subtitle}
            </p>
          </div>

          {/* Right: Prominent Total Estimated Support (10L) & 3 Breakdowns */}
          <div className="lg:col-span-6">
            <FundraisingBudgetHeader activeSection="food" />
          </div>
        </div>

        {/* Bottom Row: Official Poster on Left, 7 Items in White Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* LEFT SIDE: Original Malayalam Fundraising Poster displayed large edge-to-edge */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] xl:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/30 bg-white shadow-2xl flex items-center justify-center p-1 sm:p-2 group">
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
              <div className="absolute top-2.5 left-2.5 bg-[#191919]/80 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                <span className="font-head text-[9px] font-extrabold uppercase tracking-wider">
                  OFFICIAL SPONSORSHIP POSTER
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Seven Food Items in Crisp White Cards (2-column responsive grid) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1 px-1 border-b border-white/20 text-white/80 mb-1.5">
              <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                VERIFIED MENU ITEMS (7 PACKAGES)
              </span>
              <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                PRINTED RATE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
              {foodArrangements.items.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center justify-between gap-2 py-1.5 sm:py-2 px-3 rounded-xl bg-white text-[#191919] border border-white/20 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    {/* Number Badge */}
                    <span
                      className="w-6 h-6 rounded-md flex items-center justify-center font-head text-[10px] sm:text-[11px] font-black text-white flex-shrink-0 shadow-xs"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.number}
                    </span>

                    {/* Malayalam Name + English Subtitle */}
                    <div className="min-w-0">
                      <span className="font-malayalam font-bold text-xs sm:text-[13px] text-[#191919] block leading-snug truncate">
                        {item.malayalam}
                      </span>
                      <span className="font-body text-[10px] sm:text-[11px] text-[#191919]/65 block font-medium truncate">
                        {item.english}
                      </span>
                    </div>
                  </div>

                  {/* Exact Printed Amount Badge */}
                  <div className="flex items-center gap-1.5 flex-shrink-0 pl-2">
                    <span className="font-head text-[9px] font-extrabold text-[#191919]/40 uppercase tracking-widest hidden xl:inline">
                      INR
                    </span>
                    <span className="font-display text-xs sm:text-sm font-black text-[#191919] group-hover:text-[#2F5FE8] transition-colors">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}

              {/* 8th Balanced Summary Card */}
              <div className="flex items-center justify-between gap-2 py-1.5 sm:py-2 px-3 rounded-xl bg-white/10 backdrop-blur-xs text-white border border-white/20">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-6 h-6 rounded-md bg-[#FFC928] text-[#191919] flex items-center justify-center font-head text-[11px] font-black flex-shrink-0 shadow-xs">
                    ✓
                  </span>
                  <div className="min-w-0">
                    <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-wider block text-white truncate">
                      ALL 3 FESTIVAL DAYS
                    </span>
                    <span className="font-body text-[9px] sm:text-[10px] text-white/70 block truncate">
                      20, 21 &amp; 22 Nov 2026
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0 pl-1">
                  <span className="font-display text-xs sm:text-sm font-black text-[#FFC928]">
                    ₹4,00,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
