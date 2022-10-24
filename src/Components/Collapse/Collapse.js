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

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])

    console.log(heightEl)

  return (
    <div className="collapse">
        <div className={toggle ? "collapse-visible collapse-visible-active" : "collapse-visible"} 
        onClick={changeToggle}
        >
            <h2>{props.heading}</h2>
            <img src={Chevron} alt="chevron" />
        </div>
        <div 
        className={toggle ? "collapse-toggle collapse-toggle-animated" : "collapse-toggle"} 
        ref={refHeight}
        style={{ height: toggle ? `${heightEl}` : "0px"}}
        >
            <p>{props.text}</p>
        </div>
    </div>
  )
}
