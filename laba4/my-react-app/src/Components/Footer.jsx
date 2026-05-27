import clsx from 'clsx'

function Footer() {
  return (
    <footer className={clsx('footer')}>
      <div className={clsx('container', 'footer-content')}>
        <div className={clsx('footer-column')}>
          <h3>Customer Service</h3>

          <ul className={clsx('footer-list')}>
            <li>Help Center</li>
            <li>Claims Support</li>
          </ul>
        </div>

        <div className={clsx('footer-column')}>
          <h3>This Site</h3>

          <ul className={clsx('footer-list')}>
            <li>Tracking</li>
            <li>Shipping</li>
            <li>Services</li>
          </ul>
        </div>

        <div className={clsx('footer-column')}>
          <h3>Company Info</h3>

          <ul className={clsx('footer-list')}>
            <li>About PE</li>
            <li>Media Relations</li>
            <li>Investor Relations</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
