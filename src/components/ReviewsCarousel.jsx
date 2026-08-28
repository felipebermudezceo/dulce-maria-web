import { useEffect, useId, useRef, useState } from "react";
import { ReviewCard } from "./ReviewCard";

function slidesPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function ReviewsCarousel({ items, source, defaultStars }) {
  const id = useId();
  const viewportRef = useRef(null);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const maxIndex = Math.max(0, items.length - perView);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const update = () => setPerView(slidesPerView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || reduced || maxIndex === 0) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reduced, maxIndex]);

  const go = (next) => {
    setIndex(Math.max(0, Math.min(maxIndex, next)));
  };

  const onTouchStart = (event) => {
    startX.current = event.touches[0].clientX;
    deltaX.current = 0;
    setPaused(true);
  };

  const onTouchMove = (event) => {
    deltaX.current = event.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (deltaX.current > 48) go(index - 1);
    else if (deltaX.current < -48) go(index + 1);
    deltaX.current = 0;
    setPaused(false);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  };

  const offset = `calc(-${index} * ((100% + 16px) / ${perView}))`;

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="reviews-carousel-row">
        <button
          type="button"
          className="reviews-nav"
          aria-label="Reseña anterior"
          aria-controls={id}
          onClick={() => go(index - 1)}
          disabled={index === 0}
        >
          ‹
        </button>

        <div
          ref={viewportRef}
          id={id}
          className="reviews-viewport"
          tabIndex={0}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Reseñas de Google"
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="reviews-track"
            style={{
              "--per-view": perView,
              transform: `translate3d(${offset}, 0, 0)`,
            }}
          >
            {items.map((review) => (
              <div key={review.name} className="reviews-slide">
                <ReviewCard
                  review={review}
                  source={source}
                  defaultStars={defaultStars}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="reviews-nav"
          aria-label="Reseña siguiente"
          aria-controls={id}
          onClick={() => go(index + 1)}
          disabled={index === maxIndex}
        >
          ›
        </button>
      </div>

      <div className="reviews-dots" role="tablist" aria-label="Páginas de reseñas">
        {Array.from({ length: maxIndex + 1 }, (_, page) => (
          <button
            key={page}
            type="button"
            role="tab"
            aria-selected={page === index}
            aria-label={`Ir a la reseña ${page + 1}`}
            className={page === index ? "is-active" : undefined}
            onClick={() => go(page)}
          />
        ))}
      </div>
    </div>
  );
}
