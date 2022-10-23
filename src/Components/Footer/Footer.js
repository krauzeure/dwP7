import './Footer.css'
import Logo from './logo.png'

export function Footer() {
  return (
    <footer className='footer-container'>
      <img src={Logo} alt="logo kasa"/>
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
