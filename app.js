async function loadPackages() {
  const grid = document.getElementById('packages-grid');

  try {
    const res = await fetch('./packages.json');
    const packages = await res.json();
    grid.innerHTML = packages.map(renderCard).join('');
  } catch {
    grid.innerHTML = '<p class="loading">Could not load packages. Please try again.</p>';
  }
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '★'.repeat(full);
  if (half) stars += '½';
  return stars;
}

function renderCard(pkg) {
  const highlights = pkg.highlights
    .map(h => `<span class="highlight-tag">${h}</span>`)
    .join('');

  return `
    <div class="package-card">
      <div class="card-image">
        <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
        <span class="card-badge">${pkg.badge}</span>
        <span class="card-type">${pkg.type}</span>
      </div>
      <div class="card-body">
        <div class="card-location">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21c-4.418-4.418-7-8.418-7-11a7 7 0 1114 0c0 2.582-2.582 6.582-7 11z"/>
            <circle cx="12" cy="10" r="2" fill="currentColor" stroke="none"/>
          </svg>
          ${pkg.location}
        </div>
        <h3>${pkg.name}</h3>
        <div class="card-rating">
          <span class="stars">${renderStars(pkg.rating)}</span>
          <span>${pkg.rating} (${pkg.reviews} reviews)</span>
        </div>
        <div class="card-highlights">${highlights}</div>
        <div class="card-footer">
          <div>
            <div class="card-price">
              <span class="label">From</span>
              <span class="amount">$${pkg.price.toLocaleString()}</span>
              <span class="per">per person</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.6rem">
            <div class="card-duration">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9"/><path stroke-linecap="round" d="M12 7v5l3 3"/>
              </svg>
              ${pkg.duration}
            </div>
            <button class="book-btn" onclick="alert('Booking for ${pkg.name}!')">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', loadPackages);