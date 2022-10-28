import './Slideshow.css'

import forwardButton from './forward-button.svg'
import backButton from './back-button.svg'

import { useState } from 'react'

export function Slideshow(props) {

    // Creating our state
    const [currentImg, setCurrentImg] = useState(0);

    // Counting the number of photos for this listing
    const numberOfImages = props.photos.length;

    // Function to go to the next photo with an exception if we're on the last photo
    const nextPhoto = () => {

        if(currentImg + 1 === numberOfImages) {
            setCurrentImg(0);
        } else {
            setCurrentImg(currentImg + 1);
        }
    }

    // Function to go to the previous photo with an exception if we're on the first photo
    const previousPhoto = () => {

        if(currentImg === 0) {
            setCurrentImg(numberOfImages - 1);
        } else {
            setCurrentImg(currentImg - 1);
        }
    }

  return (
    <>
        <section className='listing-slideshow'>
            <span 
            className="slideshow-button slideshow-back"
            onClick={previousPhoto}>
                <img src={backButton} alt="back button"/>
            </span>

            {props.photos.map((item, index) => {
                return (
                    <img 
                    src={item} 
                    alt={item.title} 
                    className={`slideshow-image slideshow-image-${index}`}
                    style={{ 
                        // We calculate the translate based on the index and the current image
                        transform: `translateX(calc((${index} - ${currentImg}) * 100%)`
                     }}
                    />
                )
            })}

            <span 
            className='slideshow-button slideshow-forward'
            onClick={nextPhoto}>
                <img src={forwardButton} alt="forward button"/>
            </span>
        </section>
    </>
  )
}
