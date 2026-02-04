import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSlideshowProps {
  images: string[];
  projectTitle: string;
}

export function ProjectSlideshow({ images, projectTitle }: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      goToNext();
    } else if (isRightSwipe && currentIndex > 0) {
      goToPrevious();
    }
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full bg-[#F4F4F4] group" style={{ minHeight: '400px' }}>
      {/* Slideshow Container */}
      <div
        className="relative w-full h-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Images Container with Slide Animation */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: 'transform',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ minHeight: '400px' }}
            >
              <img
                src={image}
                alt={`${projectTitle} - Step ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {/* Previous Arrow */}
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 ${
              canGoPrevious
                ? 'text-[#0B0B0C] opacity-100 cursor-pointer hover:opacity-80'
                : 'text-[#7A7A7A] opacity-50 cursor-not-allowed'
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 ${
              canGoNext
                ? 'text-[#0B0B0C] opacity-100 cursor-pointer hover:opacity-80'
                : 'text-[#7A7A7A] opacity-50 cursor-not-allowed'
            }`}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Slide Indicators (Optional - minimal dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-[#0B0B0C] w-6'
                  : 'bg-[#7A7A7A]/40 w-1.5 hover:bg-[#7A7A7A]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

