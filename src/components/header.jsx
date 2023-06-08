// import here



// import here

function Header() {
    return (
        <div className="header">
        <a href="#" class="logo">pasadena <span className="pictures">Pictures.</span></a>
        <div className="navBar">
                <ul className="navList">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#HIRE">HIRE ME!</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
        </div>
        <div className="bx bx-menu" id="menu-icon"></div>
    </div>
    )
    
}

export default Header;