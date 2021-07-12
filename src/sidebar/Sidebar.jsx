import "./sidebar.scss"

export default function Sidebar({menuOpen, setMenuOpen}) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <ul>
                {/* For future replace mutiple functions with a seperate onclick component - D.R.Y principle */}
                <li onClick={()=>setMenuOpen(false)}><a href="#intro">HOME</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#portfolio">PORTFOLIO</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#projects">PROJECTS</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    )
}
