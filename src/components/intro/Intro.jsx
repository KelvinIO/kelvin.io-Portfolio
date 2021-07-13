import "./intro.scss"

export default function intro() {
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
                    <h3>Software<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/darrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
