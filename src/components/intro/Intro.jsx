import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: ["Programmer", "Developer", "Engineer"],
            backSpeed: 60,
            backDelay: 1500,
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/self.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey there! I'm</h2>
                    <h1>Kelvin</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/darrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
