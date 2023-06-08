// import here
import "./../style/style.css"
// import images from "../assets/jr.jpg"
import React from 'react'


// import here

function HomeSection() {
    return (
        <section className="home" id="home">
        <div className="home-text">
            <div className="slide">
            </div>
            <h1>Jerr</h1>
            <h3>Web Developer, <span class="film">Photographer, Cinematographer, Film Editor and Designer.</span></h3>
            <p>"a jack of all trades is a master of none, but oftentimes better than a master of one."</p>
            <div className="button">
                <a href="#about" class="btn">Lemme Introduce Myself</a>
                {/* <img src={images} alt="wallpaper"/> */}
            </div>
        </div>   
    </section>
        )
}

export default HomeSection;