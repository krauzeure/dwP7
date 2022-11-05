import Chevron from './Chevron.svg'

import './Collapse.css'

import { useState, useRef, useEffect } from 'react'

/* The Collapse component uses 2 states: the toggle and the height of the element.
It contains a function to change our toggle state, a function to update our height state depending on the height the element will need when expanded.
It updates the height of the element on first load, and when the window is resized.
Depending on the source passed in props and the toggle state, it applies different classes. */
export function Collapse(props) {

    // Creating our states
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    // Function setting the toggle state to the opposite of what it was
    const changeToggle = () => {
        setToggle(!toggle);
    }

    // Using useRef to select a specific item
    const refHeight = useRef();

    // We create a function updating the height of our element
    const updateHeightEl = () => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }

    // We use useEffect to get the height of our element when the composant is rendered
    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])

    // We use UseEffect to listen to a page resize and call the updateHeightEl function
    useEffect(() => {
        window.addEventListener("resize", updateHeightEl);
        return () => window.removeEventListener("resize", updateHeightEl);
    }, [])

    // Defining our classes depending on the layout we want
    let classes = "";
    if(toggle && props.source === "about") {
        classes = "collapse-toggle collapse-toggle-animated about-collapse-toggle"
    } else if (toggle) {
        classes = "collapse-toggle collapse-toggle-animated"
    } else {
        classes = "collapse-toggle"
    }

  return (
    <div className="collapse">
        <div className={toggle ? "collapse-visible collapse-visible-active" : "collapse-visible"} 
        onClick={changeToggle}
        >
            <h2>{props.heading}</h2>
            <img src={Chevron} alt="chevron" />
        </div>
        <div 
        className={classes}
        ref={refHeight}
        style={{ height: toggle ? `${heightEl}` : "0px"}}
        >
        <p>{props.text}</p>
        </div>
    </div>
  )
}
