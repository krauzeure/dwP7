import './Banner.css'

export function Banner(props) {
  return (
    <div className="banner-container">
        <div className='banner-overlay'></div>
        <img src={props.img} alt={props.alt}/>
        {props.text && <h1 className="banner-header">{props.text}</h1>}
    </div>
  )
}
