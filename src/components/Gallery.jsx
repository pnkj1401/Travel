const items = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Alpine Valley', label: 'Alpine Valley, Switzerland' },
  { src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=700&q=80', alt: 'Machu Picchu', label: 'Machu Picchu, Peru' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80', alt: 'Luxury Hotel', label: 'Luxury Resort, Bali' },
  { src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&q=80', alt: 'Maldives', label: 'Overwater Villa, Maldives' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=80', alt: 'Mountain Valley', label: 'Mountain Valley, Norway' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-header">
        <span className="label">Explore Destinations</span>
        <h2>Places That Inspire</h2>
        <p>From misty mountain valleys to ancient landmarks and oceanfront luxury — discover where you belong.</p>
      </div>
      <div className="gallery-grid">
        {items.map((item) => (
          <div className="gallery-item" key={item.alt}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <div className="gallery-overlay"><span>{item.label}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}
