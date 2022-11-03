import forwardButton from './forward-button.svg'
import backButton from './back-button.svg'

import './Slideshow.css'

import { useState } from 'react'

export function Slideshow(props) {

    // Creating our states
    const [currentImg, setCurrentImg] = useState(0);
    const [startTouch, setStartTouch] = useState(0);

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

    /* The touchEnd function gets the X position at the end of the touch
    Then it calculates the total distance of the swipe and calls the nextPhoto or previousPhoto functions depending on the swipe.
    After calling the photo function, we clear our state */
    const touchEnd = (e) => {
        const endTouch = e.changedTouches[0].screenX;
        // If the user swiped to the left, we call our function nextPhoto and clear our state
        if(startTouch - endTouch > 40) {
            nextPhoto();
            setStartTouch(0)
        // If the user swiped to the right, we call our function previousPhoto and clear our state
        } else if (endTouch - startTouch > 40) {
            previousPhoto();
            setStartTouch(0)
        }
    }

  return (
    <>
        <section 
        className='listing-slideshow'
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        >
            <span 
            className={numberOfImages > 1 ? "slideshow-button slideshow-back" : "slideshow-button slideshow-back slideshow-button-hidden"}
            onClick={previousPhoto}>
                <img src={backButton} alt="back button"/>
            </span>

            {props.photos.map((item, index) => {
                return (
                    <img 
                    src={item} 
                    alt={`${props.title} - ${index + 1}`} 
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
            className={numberOfImages > 1 ? "slideshow-button slideshow-forward" : "slideshow-button slideshow-forward slideshow-button-hidden"}
            onClick={nextPhoto}>
                <img src={forwardButton} alt="forward button"/>
            </span>
        </section>
    </>
  )
}