import './Slideshow.css'

import forwardButton from './forward-button.svg'
import backButton from './back-button.svg'

import { useState, useEffect } from 'react'

export function Slideshow(props) {

    // Creating our state
    const [currentImg, setCurrentImg] = useState(0);

    const [startTouch, setStartTouch] = useState(0);
    const [endTouch, setEndTouch] = useState(0);

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

    // Adding an eventListener on the left and right keys to allow users to switch photos from their keyboard
    window.addEventListener("keydown", (event) => {
        if(event.key === "ArrowRight") {
            nextPhoto();
        } else if (event.key === "ArrowLeft") {
            previousPhoto();
        }
    })

    // function to get the X position at the start of the touch
    const touchStart = (e) => {
        setStartTouch(e.changedTouches[0].screenX);
    }

    // function to get the X position at the end of the touch
    const touchEnd = (e) => {
        setEndTouch(e.changedTouches[0].screenX)
    }

    useEffect(() => {
        // If the user swiped to the left, we call our function nextPhoto and clear our states
        if(startTouch - endTouch > 150) {
            nextPhoto();
            setStartTouch(0)
            setEndTouch(0)
        // If the user swiped to the right, we call our function previousPhoto and clear our states
        } else if (endTouch - startTouch > 150) {
            previousPhoto();
            setStartTouch(0)
            setEndTouch(0)
        }
    }, [endTouch])

  return (
    <>
        <section 
        className='listing-slideshow'
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        >
            <span 
            className="slideshow-button slideshow-back"
            onClick={previousPhoto}>
                <img src={backButton} alt="back button"/>
            </span>

            {props.photos.map((item, index) => {
                return (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img 
                    src={item} 
                    alt={`photo ${props.title} - ${index + 1}`} 
                    className={`slideshow-image slideshow-image-${index}`}
                    key={`${props.title} - ${index}`}
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