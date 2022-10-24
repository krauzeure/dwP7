import './Slideshow.css'
import { useState } from 'react'
import forwardButton from './forward-button.svg'
import backButton from './back-button.svg'

export function Slideshow(props) {

    const [currentImg, setCurrentImg] = useState(0);
    const numberOfImages = props.photos.length;

    const nextPhoto = () => {
        if(currentImg + 1 === numberOfImages) {
            setCurrentImg(0);
        } else {
            setCurrentImg(currentImg + 1);
        }
    }

    const previousPhoto = () => {
        if(currentImg === 0) {
            setCurrentImg(numberOfImages - 1);
        } else {
            setCurrentImg(currentImg - 1);
        }
    }

  return (
    <>
        <div className='listing-slideshow'>
            <span 
            className="slideshow-button slideshow-back"
            onClick={previousPhoto}>
                <img src={backButton} alt="back button"/>
            </span>

            <img 
            src={props.photos[currentImg]} 
            alt={props.title} 
            className="slideshow-image"
            />

            <span 
            className='slideshow-button slideshow-forward'
            onClick={nextPhoto}>
                <img src={forwardButton} alt="forward button"/>
            </span>
        </div>
    </>
  )
}
