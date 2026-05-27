const infoData = [
  { title: 'Get Price' },
  { title: 'Send Parcel' },
  { title: 'Find a Store' }
]

function InfoSection() {
  return (
    <section className="info-section">
      <div className="container info-wrapper">
        {infoData.map((item, index) => (
          <div className="info-card" key={index}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InfoSection
