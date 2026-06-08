const stats = [
  { value: '50+', label: 'Countries Covered' },
  { value: '12K+', label: 'Happy Travelers' },
  { value: '200+', label: 'Tour Packages' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat-item" key={s.label}>
          <h3>{s.value}</h3>
          <p>{s.label}</p>
        </div>
      ))}
    </div>
  )
}
