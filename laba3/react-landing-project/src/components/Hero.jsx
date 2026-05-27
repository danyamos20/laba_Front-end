function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div>
          <span className="hero-subtitle">Track your shipment</span>

          <div className="tracking-box">
            <input type="text" placeholder="Enter tracking number" />
            <button>Track</button>
          </div>

          <h1 className="hero-title">
            Choose your perfect delivery price
          </h1>
        </div>

        <div className="hero-image"></div>
      </div>
    </section>
  )
}

export default Hero
