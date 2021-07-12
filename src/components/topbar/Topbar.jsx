import "./topbar.scss"
import {Phone, Email} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Kelvin.IO</a>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>0492 905 795</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>kelviinvn@protonmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="menu" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
