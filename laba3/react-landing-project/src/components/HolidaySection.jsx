const cards = [
  {
    title: 'Keep holiday surprises secure',
    text: 'The chilly weather is setting in here in the northern hemisphere.'
  },
  {
    title: 'Supporting small businesses',
    text: 'Our Small Business Hub provides information and insights.'
  },
  {
    title: 'Latest news',
    text: 'Get the latest news, articles and announcements.'
  }
]

function HolidaySection() {
  return (
    <section className="holiday-section">
      <div className="container">
        <h2>Manage your holiday shipping from anywhere</h2>

        <div className="holiday-grid">
          {cards.map((card, index) => (
            <div className="holiday-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button>Discover More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HolidaySection
