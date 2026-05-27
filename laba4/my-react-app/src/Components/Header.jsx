import clsx from 'clsx'

function Header() {
  return (
    <header className={clsx('header', 'container')}>
      <h1 className={clsx('logo')}>PolarExpress</h1>

      <nav className={clsx('navigation')}>
        <ul className={clsx('menu')}>
          <li className={clsx('menu-item')}>
            <a href="#">Tracking</a>
          </li>

          <li className={clsx('menu-item')}>
            <a href="#">Shipping</a>
          </li>

          <li className={clsx('menu-item')}>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
