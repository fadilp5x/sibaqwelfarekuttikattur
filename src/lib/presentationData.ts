// Single Source of Truth for the SIBAQ Kuttikkattur 2K26 Welfare Committee Presentation

export interface SectionMetadata {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
}

export const PRESENTATION_SECTIONS: SectionMetadata[] = [
  { id: 'opening', number: '01', title: 'Introducing SIBAQ', shortLabel: 'Intro' },
  { id: 'scale', number: '02', title: 'The Scale of SIBAQ', shortLabel: 'Our Reach' },
  { id: 'culture', number: '03', title: 'Cultural Programmes', shortLabel: 'Programmes' },
  { id: 'venue', number: '04', title: 'Venue & Dates', shortLabel: 'Venue' },
  { id: 'needs', number: '05', title: 'Key Areas of Support', shortLabel: 'Support' },
];

export const PRESENTATION_DATA = {
  event: {
    name: 'SIBAQ',
    edition: '11TH BIENNIAL EDITION',
    editionShort: '11th Biennial Edition',
    year: '2K26',
    fullTitle: 'SIBAQ KUTTIKKATTUR 2K26',
    tagline: 'A NATIONAL ARTS FEST OF DARUL HUDA ISLAMIC UNIVERSITY',
    description: 'A national arts festival uniting thousands of students across campuses, disciplines and communities.',
    dates: '20–22',
    monthYear: 'NOVEMBER 2026',
    datesFull: '20–22 NOVEMBER 2026',
    university: 'DARUL HUDA ISLAMIC UNIVERSITY',
    universitySubtitle: 'National Arts Fest of Darul Huda Islamic University',
    academy: 'SHAMSUL HUDA ISLAMIC ACADEMY',
    location: 'KUTTIKKATTUR, KOZHIKODE, KERALA',
    fullAddress: 'Shamsul Huda Islamic Academy, Kuttikkattur, Kozhikode, Kerala 673008',
  },
  heroVideo: {
    id: 'kcb4gw-ANdg',
    embedUrl: 'https://www.youtube.com/embed/kcb4gw-ANdg?si=BKZcvetqDe_70iXf&autoplay=1&mute=1&controls=0&loop=1&playlist=kcb4gw-ANdg&playsinline=1&rel=0',
  },
  // Slide 2: Statistics with verified photographs and updated 10+ campuses figure
  stats: [
    {
      id: 'students',
      value: 10000,
      suffix: '+',
      label: 'STUDENTS',
      image: '/images/presentation/stat-students.png',
      remoteUrl: 'https://i.postimg.cc/7L3vWHY6/image.png',
      accentColor: '#F15A24', // Flame Orange
      textColor: '#D84315', // WCAG AA compliant on light background
      borderColor: '#F15A24',
      shadowColor: '#F15A24',
    },
    {
      id: 'candidates',
      value: 4000,
      suffix: '+',
      label: 'CANDIDATES',
      image: '/images/presentation/stat-candidates.png',
      remoteUrl: 'https://i.postimg.cc/TYgcmpkp/image.png',
      accentColor: '#E52B2B', // Crimson Red
      textColor: '#DC2626', // WCAG AA compliant
      borderColor: '#E52B2B',
      shadowColor: '#E52B2B',
    },
    {
      id: 'programmes',
      value: 400,
      suffix: '+',
      label: 'PROGRAMMES',
      image: '/images/presentation/stat-programmes.png',
      remoteUrl: 'https://i.postimg.cc/053t7gPV/image.png',
      accentColor: '#FFC928', // Marigold Yellow
      textColor: '#B45309', // High-contrast Amber/Ochre on white (>4.5:1 WCAG AA)
      borderColor: '#FFC928',
      shadowColor: '#FFC928',
    },
    {
      id: 'campuses',
      value: 10,
      suffix: '+',
      label: 'CAMPUSES',
      image: '/images/presentation/stat-campuses.png',
      remoteUrl: 'https://i.postimg.cc/yYMb4MGg/image.png',
      accentColor: '#33AC5A', // Palm Green
      textColor: '#15803D', // High-contrast forest green on white (>4.5:1 WCAG AA)
      borderColor: '#33AC5A',
      shadowColor: '#33AC5A',
    },
  ],
  // Slide 3: 4 Image-led Programme cards
  programmes: [
    {
      number: '01',
      title: 'QURAN RECITATION',
      category: 'RECITATION',
      image: '/images/presentation/prog-quran.png',
      remoteUrl: 'https://i.postimg.cc/15JgVSpB/image.png',
      accentColor: '#F15A24', // Orange
    },
    {
      number: '02',
      title: 'GROUP SONG',
      category: 'CHORAL',
      image: '/images/presentation/prog-group-song.png',
      remoteUrl: 'https://i.postimg.cc/vHcyXwJ3/image.png',
      accentColor: '#33AC5A', // Green
    },
    {
      number: '03',
      title: 'LIVE ART',
      category: 'FINE ARTS',
      image: '/images/presentation/prog-live-art.png',
      remoteUrl: 'https://i.postimg.cc/4N99Mqt0/image.png',
      accentColor: '#FFC928', // Yellow
    },
    {
      number: '04',
      title: 'SUFI SANGEETHAM',
      category: 'DEVOTIONAL',
      image: '/images/presentation/prog-sufi-sangeetham.png',
      remoteUrl: 'https://i.postimg.cc/9Q2YBCSY/image.png',
      accentColor: '#E52B2B', // Red
    },
  ],
  // Slide 4: Venue Experience
  venue: {
    kicker: 'THE VENUE',
    title: 'SHAMSUL HUDA ISLAMIC ACADEMY',
    locationText: 'Kuttikkattur, Kozhikode, Kerala',
    dates: '20–22 NOVEMBER 2026',
    image: '/media/campus.jpg',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Shamsul+Huda+Islamic+Academy%2C+Kuttikkattur%2C+Kozhikode%2C+Kerala',
    mapQuery: 'Shamsul Huda Islamic Academy, Kuttikkattur, Kozhikode, Kerala',
    coordinates: '11.2721° N, 75.8756° E',
  },
  // Slide 5: Welfare Committee Appeal (Final Slide)
  needs: {
    kicker: 'WELFARE COMMITTEE APPEAL',
    headline: 'HELP US MAKE SIBAQ POSSIBLE',
    intro: 'To deliver SIBAQ 2K26 successfully, we seek support in the following key areas.',
    footerText: 'SIBAQ KUTTIKKATTUR 2K26 · WELFARE COMMITTEE BRIEFING',
    items: [
      {
        number: '01',
        title: '03 STAGES NEEDED',
        description: 'Three stages are needed for festival programmes.',
        image: '/images/presentation/need-stages.png',
        remoteUrl: 'https://i.postimg.cc/VkgJM8Xc/image.png',
        accentColor: '#F15A24',
        shadowColor: '#F15A24',
        borderColor: '#F15A24',
      },
      {
        number: '02',
        title: 'FOOD ARRANGEMENTS',
        description: 'Food arrangements are needed for festival participants and those involved in running the event.',
        image: '/images/presentation/need-food.jpg',
        remoteUrl: 'https://i.postimg.cc/NMYCnR5K/045b0c6d-bb92-45c5-a7b7-3564e519b1fc.jpg',
        accentColor: '#FFC928',
        shadowColor: '#FFC928',
        borderColor: '#FFC928',
      },
      {
        number: '03',
        title: 'ACCOMMODATION FACILITIES',
        description: 'Accommodation facilities are needed for the festival.',
        image: '/images/presentation/need-accommodation.png',
        remoteUrl: 'https://i.postimg.cc/13Gpj263/image.png',
        accentColor: '#33AC5A',
        shadowColor: '#33AC5A',
        borderColor: '#33AC5A',
      },
    ],
  },
  theme: {
    colors: {
      canvas: '#FFFFFF',
      surface: '#FFF8E8',
      paper: '#FFFDF8',
      ink: '#191919',
      muted: '#666666',
      flame: '#F15A24',
      ember: '#E52B2B',
      marigold: '#FFC928',
      leaf: '#33AC5A',
    },
  },
} as const;
