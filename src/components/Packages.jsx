import { useState, useEffect } from 'react'
import PackageCard from './PackageCard'

export default function Packages() {
  const [packages, setPackages] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/packages.json')
      .then((r) => r.json())
      .then(setPackages)
      .catch(() => setError(true))
  }, [])

  return (
    <section id="packages">
      <div className="section-header">
        <span className="label">Travel Packages</span>
        <h2>Our Featured Tours</h2>
        <p>All-inclusive packages designed for every type of traveler — adventure seekers, culture lovers, and luxury enthusiasts.</p>
      </div>
      <div className="packages-grid">
        {error && <p className="loading">Could not load packages. Please try again.</p>}
        {!error && packages.length === 0 && <p className="loading">Loading packages...</p>}
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  )
}
