// import here
import React from 'react'
import "../style/style.css"
import images2 from "../assets/DSC03491.jpg"
import images3 from "../assets/Screenshot 2023-06-07 114458.png"
import images4 from "../assets/Screenshot 2023-06-07 115255.png"
import images5 from "../assets/1.png"
import images6 from "../assets/Screenshot 2023-06-07 140138.png"

// import here

function PortfolioSection() {
    return (
        <section class="portfolio" id="portfolio">
        <div className="main-text">
            <p2>Jer's Works</p2>
            <h2>My Latest Works circa 2000</h2>
        <div className="portfolio-content">
            <div className="row">
                <img src={images2} alt="portfolio1" className="port"/>
                <div className="layer">
                    <h5>Pre-Wedding Projects</h5>
                    <p3>Take Memories For You and Your Partner's Forever Till Death Awaits</p3>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="row">
                <img src={images3} alt="portfolio2" class="port"/>
                <div className="layer">
                    <h5>No-Hypervent Web-Travel</h5>
                    <p3>Take Only Pictures, Kill Only Time, Leave Only Bubbles, Keep The Memories.</p3>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="row">
                <img src={images4} alt="portfolio3" class="port"/>
                <div className="layer">
                    <h5>Short Movie for Gojek Film Festival</h5>
                    <p3>Official Trailer Tangan Kedua By The Panasdalamovie.</p3>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="row">
                <img src={images5} alt="portfolio4" className="port"/>
                <div className="layer">
                    <h5>Negara Onlen Podcast Design</h5>
                    <p3>Design Podcast at Discord</p3>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="row">
                <img src={images6} alt="portfolio4" className="port"/>
                <div className="layer">
                    <h5>Documentary Film</h5>
                    <p3>Documentary Film Cikondang Village</p3>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
        </div>
    </div>
    </section>

    )
}

export default PortfolioSection;