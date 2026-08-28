import { ReviewCard } from "./ReviewCard";

function ReviewSet({ items, source, defaultStars, clone = false }) {
  return (
    <div className="reviews-set" aria-hidden={clone ? "true" : undefined}>
      {items.map((review) => (
        <div
          key={clone ? `${review.name}-copy` : review.name}
          className="reviews-slide"
        >
          <ReviewCard
            review={review}
            source={source}
            defaultStars={defaultStars}
          />
        </div>
      ))}
    </div>
  );
}

export function ReviewsCarousel({ items, source, defaultStars }) {
  return (
    <div className="reviews-carousel">
      <div
        className="reviews-viewport"
        role="region"
        aria-label="Reseñas de Google"
        aria-roledescription="carrusel"
      >
        <div className="reviews-track">
          <ReviewSet
            items={items}
            source={source}
            defaultStars={defaultStars}
          />
          <ReviewSet
            items={items}
            source={source}
            defaultStars={defaultStars}
            clone
          />
        </div>
      </div>
    </div>
  );
}
