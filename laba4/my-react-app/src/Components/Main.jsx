import clsx from 'clsx'

function Main() {
  return (
    <main className={clsx('main')}>
      <section className={clsx('hero-section')}>
        <div className={clsx('container', 'hero-wrapper')}>
          <div className={clsx('hero-content')}>
            <span className={clsx('hero-subtitle')}>
              Track your shipment
            </span>

            <div className={clsx('tracking-box')}>
              <input
                className={clsx('tracking-input')}
                type="text"
                placeholder="Enter tracking number"
              />

              <button className={clsx('tracking-button')}>
                Track
              </button>
            </div>

            <h1 className={clsx('hero-title')}>
              Choose your perfect delivery price
            </h1>
          </div>

          <div className={clsx('hero-image')}></div>
        </div>
      </section>

      <section className={clsx('info-section')}>
        <div className={clsx('container', 'info-wrapper')}>
          <div className={clsx('info-card')}>Get Price</div>
          <div className={clsx('info-card')}>Send Parcel</div>
          <div className={clsx('info-card')}>Find a Store</div>
        </div>
      </section>
    </main>
  )
}

export default Main
