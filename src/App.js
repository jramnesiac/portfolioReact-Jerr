// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style/style.css"
import "./style/cssReset.css"
import background from "./assets/royals.jpg";
import AboutSection from "./components/aboutSection";
import Header from "./components/header";
import HomeSection from "./components/homeSection";
import PortfolioSection from "./components/portfolioSection";
import ServiceSection from "./components/serviceSection";
import { Component } from "react";
// const router = createBrowserRouter ([
//   {path : "about", components: <AboutSection/>},
//   {path : "header", components: <Header/>},
//   {path : "Home", components: <HomeSection/>},
//   {path : "portfolio", components: <PortfolioSection/>},
//   {path : "services", components: <ServiceSection/>},


// ])


class App extends Component {
  render() {
    return (
          <div>
            <Header />
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <PortfolioSection />
            <div style={{backgroundImage:`url(${background})`}}></div>
          </div>


    );
  }
}

export default App;
