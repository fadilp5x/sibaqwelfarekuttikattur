interface FundraisingBudgetHeaderProps {
  activeSection: 'stages' | 'food' | 'accommodation';
}

const SECTION_CONFIG = {
  stages: {
    kicker: 'ESTIMATED STAGE BUDGET',
    amount: '₹5,00,000',
    accentColor: '#F15A24',
    badgeText: '50% OF WELFARE TARGET',
    purpose: 'Three parallel performance stages, covered panthal & acoustics',
    tag: 'SIBAQ 2K26 INFRASTRUCTURE',
    icon: (
      <svg className="w-6 h-6 text-[#F15A24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  food: {
    kicker: 'ESTIMATED FOOD & CATERING BUDGET',
    amount: '₹4,00,000',
    accentColor: '#2F5FE8',
    badgeText: '40% OF WELFARE TARGET',
    purpose: 'Nourishing 4,000+ candidates & organisers across 3 festival days',
    tag: '7 VERIFIED MEAL PACKAGES',
    icon: (
      <svg className="w-6 h-6 text-[#2F5FE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  accommodation: {
    kicker: 'ESTIMATED ACCOMMODATION BUDGET',
    amount: '₹1,00,000',
    accentColor: '#218C4A',
    badgeText: '10% OF WELFARE TARGET',
    purpose: 'Safe campus delegate lodgings, comfort stations & security upkeep',
    tag: 'DELEGATE CARE & HYGIENE',
    icon: (
      <svg className="w-6 h-6 text-[#218C4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
};

export default function FundraisingBudgetHeader({ activeSection }: FundraisingBudgetHeaderProps) {
  const config = SECTION_CONFIG[activeSection];

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl border border-black/5 flex flex-col justify-between">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.accentColor }} />
          <span className="font-head text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#191919]/70">
            {config.kicker}
          </span>
        </div>
        <span
          className="font-head text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border"
          style={{
            borderColor: `${config.accentColor}40`,
            color: config.accentColor,
            backgroundColor: `${config.accentColor}10`,
          }}
        >
          {config.badgeText}
        </span>
      </div>

      {/* Main Feature: Section Amount in Big Bold Display Numbers */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2.5">
        <div className="flex items-baseline gap-2">
          <span
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-none"
            style={{ color: config.accentColor }}
          >
            {config.amount}
          </span>
          <span className="font-head text-xs sm:text-sm font-extrabold text-[#191919]/50 uppercase tracking-wider">
            INR
          </span>
        </div>

        <div className="text-left sm:text-right">
          <span className="font-head text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#191919] block">
            {config.tag}
          </span>
          <p className="font-body text-[10px] sm:text-[11px] text-[#191919]/60 leading-tight mt-0.5 max-w-[240px]">
            {config.purpose}
          </p>
        </div>
      </div>
    </div>
  );
}
