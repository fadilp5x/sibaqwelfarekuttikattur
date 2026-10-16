import { PRESENTATION_DATA } from '../../lib/presentationData';

export default function SectionCulture() {
  const { programmes } = PRESENTATION_DATA;

  return (
    <section
      id="culture"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#FFC928] text-[#191919] pt-20 pb-28 px-4 sm:px-8 lg:px-12 snap-start scroll-mt-16 sm:scroll-mt-18"
      aria-label="Section 03: Cultural Programmes"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Concise Section Header */}
        <div className="mb-6 lg:mb-8 text-center sm:text-left max-w-3xl">
          <span className="font-head text-xs font-black tracking-[0.22em] text-[#191919]/80 uppercase block mb-2">
            03 / FEATURED PROGRAMMES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#191919] uppercase leading-[1.05] font-black mb-2">
            A CELEBRATION OF <span className="text-[#D84315]">FAITH</span> &amp; <span className="text-[#15803D]">EXPRESSION</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-[#191919]/85 max-w-xl leading-relaxed">
            Spotlighting iconic festival competitions across sacred recitation, vocal harmony, and creative arts.
          </p>
        </div>

        {/* 4 Image-Led Programme Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">
          {programmes.map((item) => (
            <div
              key={item.number}
              className="group bg-white rounded-3xl p-4 border-2 border-black/5 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo View with Authentic Image */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-stone-100 mb-3.5">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* Top Number Badge */}
                <div
                  className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center font-head text-xs font-black text-white shadow-sm"
                  style={{ backgroundColor: item.accentColor }}
                >
                  {item.number}
                </div>

                {/* Top Category Tag */}
                <div className="absolute top-3 right-3">
                  <span className="font-head text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 text-[#191919] shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Short Programme Title */}
              <div className="px-1 py-1 flex items-center justify-between">
                <h3 className="font-head text-sm sm:text-base font-black tracking-wider uppercase text-[#191919] leading-tight">
                  {item.title}
                </h3>
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.accentColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
