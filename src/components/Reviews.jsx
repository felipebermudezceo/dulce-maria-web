import { reviews } from "../data/reviews";
import { reviewsSection } from "../data/content";
import { Reveal } from "./Reveal";
import { ReviewsCarousel } from "./ReviewsCarousel";

export function Reviews() {
  return (
    <Reveal as="section" className="section reviews" id="reseñas">
      <div className="wrap">
        <header className="reviews-head">
          <p className="eyebrow">{reviewsSection.eyebrow}</p>
          <h2>{reviewsSection.title}</h2>
          <p className="reviews-score">
            <strong>{reviews.rating}</strong>
            <span aria-hidden="true">★★★★★</span>
            <span>
              · {reviews.totalReviews} {reviews.sourceLabel}
            </span>
          </p>
        </header>

        <ReviewsCarousel
          items={reviews.items}
          source={reviews.source}
          defaultStars={reviews.defaultStars}
        />

        <a
          className="text-link reviews-google-link"
          href={reviews.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {reviewsSection.googleCta}
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </Reveal>
  );
}
