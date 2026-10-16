import { PRESENTATION_DATA } from '../../lib/presentationData';
import AnimatedCounter from './AnimatedCounter';

export default function SectionScale() {
  const { stats } = PRESENTATION_DATA;

  return (
    <section
      id="scale"
      className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden bg-[#E52B2B] text-white pt-20 pb-28 px-4 sm:px-8 lg:px-12 snap-start scroll-mt-16 sm:scroll-mt-18"
      aria-label="Section 02: The Scale of SIBAQ"
    >
      <div className="relative z-10 w-full max-w-[1360px] mx-auto flex flex-col justify-center">
        {/* Balanced Section Header */}
        <div className="mb-6 lg:mb-8 text-center sm:text-left max-w-3xl">
          <span className="font-head text-xs font-black tracking-[0.22em] text-[#FFC928] uppercase block mb-2">
            02 / OUR REACH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight uppercase leading-[1.05] font-black mb-2 text-white drop-shadow-sm">
            A FESTIVAL THAT <span className="text-[#FFC928]">UNITES THOUSANDS</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
            The Darul Huda institutional network uniting students, candidates and campuses across India.
          </p>
        </div>

        {/* 4 Equal-Height Statistics Cards with Deliberate Photographs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-white rounded-3xl p-4 sm:p-5 border-2 border-white/30 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* 1. Deliberate Photograph Crop */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-100 mb-4">
                <img
                  src={stat.image}
                  alt={`SIBAQ ${stat.label}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter saturate-[1.05]"
                  loading="eager"
                  onError={(e) => {
                    if (stat.remoteUrl && e.currentTarget.src !== stat.remoteUrl) {
                      e.currentTarget.src = stat.remoteUrl;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute top-2.5 right-2.5">
                  <span
                    className="w-3 h-3 rounded-full inline-block shadow-sm"
                    style={{ backgroundColor: stat.accentColor }}
                  />
                </div>
              </div>

              {/* 2. One Large Number & 3. One Short Label */}
              <div className="flex flex-col justify-end">
                <div
                  className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] tracking-tight font-black leading-none mb-1.5"
                  style={{ color: stat.textColor }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={900} />
                </div>
                <h3 className="font-head text-xs sm:text-sm font-black tracking-wider text-[#191919] uppercase">
                  {stat.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
