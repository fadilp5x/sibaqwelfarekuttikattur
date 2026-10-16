import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionNeeds() {
  const { needs } = PRESENTATION_DATA;

  return (
    <section
      id="needs"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#FFF8E8] text-[#191919] pt-20 pb-28 px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 05: Key Areas of Support"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Upper Part: Headline and Short Introduction */}
        <div className="mb-6 lg:mb-8 text-center sm:text-left max-w-3xl">
          <span className="font-head text-xs font-black tracking-[0.22em] text-[#F15A24] uppercase block mb-2">
            05 / {needs.kicker}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-2">
            HELP US MAKE <span className="text-[#F15A24]">SIBAQ POSSIBLE</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-[#191919]/75 max-w-2xl leading-relaxed">
            {needs.intro}
          </p>
        </div>

        {/* 3 Prominent Support Cards (Large, Aligned Lower Edges, Consistent Padding) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full mb-8">
          {needs.items.map((item) => (
            <div
              key={item.number}
              className="group bg-white rounded-3xl p-4 sm:p-5 border-2 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              style={{
                borderColor: item.borderColor,
                boxShadow: `0 4px 18px -2px ${item.shadowColor}25, 0 2px 6px -1px rgba(0,0,0,0.04)`,
              }}
            >
              <div>
                {/* High-Quality Image Presentation */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-[1.05]"
                    loading="eager"
                    onError={(e) => {
                      if (item.remoteUrl && e.currentTarget.src !== item.remoteUrl) {
                        e.currentTarget.src = item.remoteUrl;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* Number Badge */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center font-head text-xs font-black text-white shadow-sm"
                    style={{ backgroundColor: item.accentColor }}
                  >
                    {item.number}
                  </div>
                </div>

                {/* Large Clear Heading */}
                <h3 className="font-head text-base sm:text-lg font-black tracking-wider text-[#191919] uppercase leading-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-[#191919]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Accent Indicator */}
              <div className="mt-4 pt-3 border-t border-[#191919]/10 flex items-center justify-between">
                <span className="font-head text-[10px] font-black uppercase text-[#191919]/50 tracking-wider">
                  PRIORITY NEED
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.accentColor }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Restrained Footer */}
        <div className="pt-4 border-t border-[#E7D6C2] flex items-center justify-center sm:justify-start">
          <p className="font-head text-xs font-black uppercase tracking-wider text-[#191919]/70">
            {needs.footerText}
          </p>
        </div>
      </div>
    </section>
  );
}
