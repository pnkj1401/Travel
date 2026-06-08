function renderStars(rating) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return '★'.repeat(full) + (half ? '½' : '')
}

export default function PackageCard({ pkg }) {
  return (
    <div className="package-card">
      <div className="card-image">
        <img src={pkg.image} alt={pkg.name} loading="lazy" />
        <span className="card-badge">{pkg.badge}</span>
        <span className="card-type">{pkg.type}</span>
      </div>
      <div className="card-body">
        <div className="card-location">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-7-8.418-7-11a7 7 0 1114 0c0 2.582-2.582 6.582-7 11z" />
            <circle cx="12" cy="10" r="2" fill="currentColor" stroke="none" />
          </svg>
          {pkg.location}
        </div>
        <h3>{pkg.name}</h3>
        <div className="card-rating">
          <span className="stars">{renderStars(pkg.rating)}</span>
          <span>{pkg.rating} ({pkg.reviews} reviews)</span>
        </div>
        <div className="card-highlights">
          {pkg.highlights.map((h) => (
            <span className="highlight-tag" key={h}>{h}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-price">
            <span className="label">From</span>
            <span className="amount">${pkg.price.toLocaleString()}</span>
            <span className="per">per person</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
            <div className="card-duration">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" />
              </svg>
              {pkg.duration}
            </div>
            <button className="book-btn" onClick={() => alert(`Booking for ${pkg.name}!`)}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
