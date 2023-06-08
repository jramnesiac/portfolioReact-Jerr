import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style/style.css"
import "./style/cssReset.css"
import AboutSection from "./components/aboutSection";
import Header from "./components/header";
import HomeSection from "./components/homeSection";
import PortfolioSection from "./components/portfolioSection";
import ServiceSection from "./components/serviceSection";
const router = createBrowserRouter ([
  {path : "about", components: <AboutSection/>},
  {path : "header", components: <Header/>},
  {path : "Home", components: <HomeSection/>},
  {path : "portfolio", components: <PortfolioSection/>},
  {path : "services", components: <ServiceSection/>},


])


function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>  
  
  );
}

export default App;
