import Logo from './logo.png'

import './Footer.css'

/* The Footer component creates a footer element with logo and text. */
export function Footer() {
  return (
    <footer className='footer-container'>
      <img src={Logo} alt="logo kasa"/>
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
