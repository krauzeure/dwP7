import Chevron from './Chevron.svg'
import './Collapse.css'

import { useState, useRef, useEffect } from 'react'

export function Collapse(props) {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const changeToggle = () => {
        setToggle(!toggle);
    }
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
