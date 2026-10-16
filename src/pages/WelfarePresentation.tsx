import { useCallback, useEffect, useRef, useState } from 'react';
import { PRESENTATION_SECTIONS } from '../lib/presentationData';
import PresentationHeader from '../components/welfare/PresentationHeader';
import PresentationDock from '../components/welfare/PresentationDock';
import SectionOpening from '../components/welfare/SectionOpening';
import SectionScale from '../components/welfare/SectionScale';
import SectionCulture from '../components/welfare/SectionCulture';
import SectionVenue from '../components/welfare/SectionVenue';
import SectionNeeds from '../components/welfare/SectionNeeds';
import ColorWipeOverlay, { WipeDirection } from '../components/welfare/ColorWipeOverlay';

const SECTION_COLORS: Record<string, string> = {
  opening: '#F15A24', // Flame Orange
  scale: '#E52B2B',   // Festival Red
  culture: '#FFC928', // Marigold Yellow
  venue: '#33AC5A',   // Emerald Green
  stages: '#F15A24',  // Flame Orange
  food: '#FFC928',    // Marigold Yellow
  accommodation: '#33AC5A', // Emerald Green
  needs: '#F15A24',   // Fallback
};

export default function WelfarePresentation() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [wipeActive, setWipeActive] = useState(false);
  const [wipeDirection, setWipeDirection] = useState<WipeDirection>('forward');
  const [wipeColor, setWipeColor] = useState<string>('#F15A24');
  const pendingTargetIndexRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastNavTimeRef = useRef<number>(0);

  // Update document title for presentation
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'SIBAQ 2K26: Welfare Committee Presentation';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Handle URL hash and ?slide= on load and hashchange
  useEffect(() => {
    const handleInitialPosition = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const targetId = searchParams.get('slide') || window.location.hash.replace('#', '');
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          const idx = PRESENTATION_SECTIONS.findIndex((s) => s.id === targetId);
          if (idx !== -1) {
            setActiveSectionIndex(idx);
          }
        }
      }
    };

    // Execute after component mount
    const timer = setTimeout(handleInitialPosition, 100);
    window.addEventListener('hashchange', handleInitialPosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleInitialPosition);
    };
  }, []);

  // Track active section using IntersectionObserver (only when not transitioning)
  useEffect(() => {
    const sectionElements = PRESENTATION_SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isTransitioning) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = PRESENTATION_SECTIONS.findIndex(
              (s) => s.id === entry.target.id
            );
            if (index !== -1) {
              setActiveSectionIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: '-80px 0px -80px 0px',
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [isTransitioning]);

  // Fullscreen event listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement != null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Trigger full-screen SIBAQ colour-wipe transition to target slide
  const navigateToSlide = useCallback((targetIndex: number) => {
    if (isTransitioning) return;
    if (targetIndex < 0 || targetIndex >= PRESENTATION_SECTIONS.length) return;
    if (targetIndex === activeSectionIndex) return;

    const direction: WipeDirection = targetIndex > activeSectionIndex ? 'forward' : 'backward';
    const targetSection = PRESENTATION_SECTIONS[targetIndex];
    const targetColor = SECTION_COLORS[targetSection.id] || '#F15A24';

    setIsTransitioning(true);
    setWipeDirection(direction);
    setWipeColor(targetColor);
    pendingTargetIndexRef.current = targetIndex;
    setWipeActive(true);
  }, [isTransitioning, activeSectionIndex]);

  // Called when the wipe panel has completely covered the screen (Phase C)
  const handleWipeCovered = useCallback(() => {
    const targetIdx = pendingTargetIndexRef.current;
    if (targetIdx !== null && targetIdx >= 0 && targetIdx < PRESENTATION_SECTIONS.length) {
      const section = PRESENTATION_SECTIONS[targetIdx];
      const element = document.getElementById(section.id);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      setActiveSectionIndex(targetIdx);
    }
  }, []);

  // Called when reveal animation completes (Phase D finished)
  const handleWipeComplete = useCallback(() => {
    setWipeActive(false);
    pendingTargetIndexRef.current = null;
    setIsTransitioning(false);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeSectionIndex > 0) {
      navigateToSlide(activeSectionIndex - 1);
    }
  }, [activeSectionIndex, navigateToSlide]);

  const handleNext = useCallback(() => {
    if (activeSectionIndex < PRESENTATION_SECTIONS.length - 1) {
      navigateToSlide(activeSectionIndex + 1);
    }
  }, [activeSectionIndex, navigateToSlide]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (containerRef.current?.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch {
      // Fallback silently if browser blocks fullscreen
    }
  }, []);

  // Keyboard navigation controller with debounce & repeat protection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input, textarea, select or editable area
      const target = e.target as HTMLElement;
      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.tagName === 'SELECT' ||
        target?.isContentEditable
      ) {
        return;
      }

      // Ignore key repeat to prevent skipping several slides accidentally
      if (e.repeat) return;

      // Rate limit slide transitions (400ms cooldown)
      const now = Date.now();
      const isNavKey = [
        'ArrowDown',
        'ArrowRight',
        'PageDown',
        'ArrowUp',
        'ArrowLeft',
        'PageUp',
        ' ',
        'Home',
        'End',
      ].includes(e.key);

      if (isNavKey) {
        if (now - lastNavTimeRef.current < 400) {
          e.preventDefault();
          return;
        }
        lastNavTimeRef.current = now;
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;

        case 'ArrowUp':
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;

        case ' ':
          // Space bar advances next (unless Shift is pressed)
          e.preventDefault();
          if (e.shiftKey) {
            handlePrev();
          } else {
            handleNext();
          }
          break;

        case 'Home':
          e.preventDefault();
          navigateToSlide(0);
          break;

        case 'End':
          e.preventDefault();
          navigateToSlide(PRESENTATION_SECTIONS.length - 1);
          break;

        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev, navigateToSlide, toggleFullscreen]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#FFF8E8] text-[#191919] min-h-screen selection:bg-[#F15A24] selection:text-white"
    >
      {/* Full-Screen Brand Colour-Wipe Transition Layer */}
      <ColorWipeOverlay
        isActive={wipeActive}
        color={wipeColor}
        direction={wipeDirection}
        onCovered={handleWipeCovered}
        onComplete={handleWipeComplete}
      />

      {/* Fixed Header with 01-07 indicators */}
      <PresentationHeader
        activeSectionIndex={activeSectionIndex}
        onNavigateToSection={navigateToSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Presentation Streamlined Narrative Slides */}
      <main className="w-full">
        <SectionOpening onNext={handleNext} />
        <SectionScale />
        <SectionCulture />
        <SectionVenue />
        <SectionNeeds />
      </main>

      {/* Floating Compact Presentation Control Bar */}
      <PresentationDock
        activeSectionIndex={activeSectionIndex}
        totalSections={PRESENTATION_SECTIONS.length}
        onPrev={handlePrev}
        onNext={handleNext}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}
