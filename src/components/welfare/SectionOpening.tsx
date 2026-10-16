import { useState } from 'react';
import { PRESENTATION_DATA } from '../../lib/presentationData';

interface SectionOpeningProps {
  onNext: () => void;
}

export default function SectionOpening({ onNext }: SectionOpeningProps) {
  const { event, heroVideo } = PRESENTATION_DATA;
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="opening"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white px-4 sm:px-8 lg:px-12 snap-start"
      aria-label="Section 01: Introducing SIBAQ"
    >
      {/* 1. Fullscreen Looping YouTube Background Video */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <iframe
            src={heroVideo.embedUrl}
            title="SIBAQ Festival Background Video"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-85' : 'opacity-0'
            }`}
            style={{
              width: 'max(100vw, 177.78vh)',
              height: 'max(100vh, 56.25vw)',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onLoad={() => setVideoLoaded(true)}
          />
        </div>

        {/* Restrained Dark Scrim & Radial Vignette for High Text Contrast */}
        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/80" />
      </div>

      {/* 2. Centered Presentation Hierarchy */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center justify-center pt-20 pb-28">
        {/* 1. 11th Biennial Edition Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
          <span className="font-head text-xs font-black tracking-[0.2em] text-white uppercase">
            {event.edition}
          </span>
        </div>

        {/* 2. SIBAQ (White) + KUTTIKKATTUR 2K26 (SIBAQ Orange) */}
        <h1 className="font-display tracking-tight leading-[0.96] uppercase text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black mb-3 select-none">
          <span className="block text-white drop-shadow-md">SIBAQ</span>
          <span className="block text-[#F15A24] drop-shadow-md">KUTTIKKATTUR 2K26</span>
        </h1>

        {/* 3. National Arts Fest of Darul Huda Islamic University */}
        <p className="font-head text-xs sm:text-sm md:text-base font-extrabold tracking-[0.16em] text-white/95 uppercase mb-3 max-w-2xl drop-shadow-sm">
          {event.tagline}
        </p>

        {/* 4. Short Explanatory Sentence */}
        <p className="font-body text-xs sm:text-sm md:text-base text-white/80 max-w-xl mb-6 leading-relaxed">
          {event.description}
        </p>

        {/* 5. Date and Venue Information */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-7">
          {/* Dates Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 shadow-md">
            <svg className="w-4 h-4 text-[#FFC928] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-head text-[10px] tracking-wider text-white/60 font-bold uppercase">Dates</span>
              <span className="font-head text-xs sm:text-sm font-extrabold text-white uppercase">
                {event.datesFull}
              </span>
            </div>
          </div>

          {/* Venue Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 shadow-md">
            <svg className="w-4 h-4 text-[#33AC5A] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-head text-[10px] tracking-wider text-white/60 font-bold uppercase">Venue</span>
              <span className="font-head text-xs sm:text-sm font-extrabold text-white uppercase">
                {event.academy} · KOZHIKODE
              </span>
            </div>
          </div>
        </div>

        {/* Contextual Action Button */}
        <div>
          <button
            onClick={(e) => {
              e.currentTarget.blur();
              onNext();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F15A24] hover:bg-[#E52B2B] text-white font-head text-xs font-extrabold tracking-wider uppercase transition-all shadow-lg shadow-[#F15A24]/30 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Advance to Section 02: Our Reach"
          >
            <span>VIEW FESTIVAL HIGHLIGHTS</span>
            <span className="group-hover:translate-y-0.5 transition-transform font-bold">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
