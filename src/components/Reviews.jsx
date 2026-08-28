import { reviews } from "../data/reviews";
import { reviewsSection } from "../data/content";
import { contact } from "../data/contact";
import { Reveal } from "./Reveal";

export function Reviews() {
  const [featured, ...rest] = reviews.items;

  return (
    <Reveal as="section" className="section reviews" id="reseñas">
      <div className="wrap">
        <header className="reviews-head">
          <div>
            <p className="eyebrow">{reviewsSection.eyebrow}</p>
            <h2>{reviewsSection.title}</h2>
          </div>
          <p className="rating-mark">
            <strong>{reviews.rating}</strong>
            <span>
              ★★★★★
              <br />
              {reviews.totalReviews} {reviews.sourceLabel}
            </span>
          </p>
        </header>

        <article className="review-featured">
          <p>“{featured.quote}”</p>
          <cite>{featured.name}</cite>
        </article>

        <div className="review-grid">
          {rest.map((review) => (
            <article key={review.name} className="review-item">
              <p>“{review.quote}”</p>
              <cite>
                <span aria-hidden="true">{review.initials}</span>
                {review.name}
              </cite>
            </article>
          ))}
        </div>

        <a
          className="text-link"
          href={contact.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {reviewsSection.googleCta}
        </a>
      </div>
    </Reveal>
  );
}
