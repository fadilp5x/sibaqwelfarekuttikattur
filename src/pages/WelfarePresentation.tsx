import { useCallback, useEffect, useRef, useState } from 'react';
import { PRESENTATION_SECTIONS } from '../lib/presentationData';
import PresentationHeader from '../components/welfare/PresentationHeader';
import PresentationDock from '../components/welfare/PresentationDock';
import SectionOpening from '../components/welfare/SectionOpening';
import SectionScale from '../components/welfare/SectionScale';
import SectionCulture from '../components/welfare/SectionCulture';
import SectionVenue from '../components/welfare/SectionVenue';
import SectionNeeds from '../components/welfare/SectionNeeds';

export default function WelfarePresentation() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sectionElements = PRESENTATION_SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
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
  }, []);

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

  // Scroll to section by index
  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= PRESENTATION_SECTIONS.length) return;
    const section = PRESENTATION_SECTIONS[index];
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (activeSectionIndex > 0) {
      scrollToSection(activeSectionIndex - 1);
    }
  }, [activeSectionIndex, scrollToSection]);

  const handleNext = useCallback(() => {
    if (activeSectionIndex < PRESENTATION_SECTIONS.length - 1) {
      scrollToSection(activeSectionIndex + 1);
    }
  }, [activeSectionIndex, scrollToSection]);

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
          scrollToSection(0);
          break;

        case 'End':
          e.preventDefault();
          scrollToSection(PRESENTATION_SECTIONS.length - 1);
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
  }, [handleNext, handlePrev, scrollToSection, toggleFullscreen]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#FFF8E8] text-[#191919] min-h-screen selection:bg-[#F15A24] selection:text-white"
    >
      {/* Fixed Header with 01-05 indicators */}
      <PresentationHeader
        activeSectionIndex={activeSectionIndex}
        onNavigateToSection={scrollToSection}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Presentation 5 Streamlined Narrative Slides */}
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
