function Stars({ count }) {
  return (
    <span className="review-stars" aria-label={`${count} de 5 estrellas`}>
      {"★".repeat(count)}
      <span className="review-stars-empty">{"★".repeat(Math.max(0, 5 - count))}</span>
    </span>
  );
}

export function ReviewCard({ review, source, defaultStars }) {
  const stars = review.stars ?? defaultStars ?? 5;
  const label = review.source ?? source;

  return (
    <article className="review-card">
      <Stars count={stars} />
      <p className="review-card-quote">“{review.quote}”</p>
      <footer className="review-card-author">
        {review.photo ? (
          <img src={review.photo} alt="" className="review-card-avatar" />
        ) : (
          <span className="review-card-avatar" aria-hidden="true">
            {review.initials}
          </span>
        )}
        <span>
          <strong>{review.name}</strong>
          <em>
            {label}
            {review.date ? ` · ${review.date}` : ""}
          </em>
        </span>
      </footer>
    </article>
  );
}
