
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import Dropdown from './Components/Dropdown.jsx';
import Tending from './Components/TendingCard.jsx';
import BestSelling from "./Components/BestSelling.jsx";
import Reviews from './Components/Reviews.jsx';
import FindVehicles from './Components/FindVehicles.jsx';
import Footer from './Components/Footer.jsx';
function App() {
 

  return (
    <>
    <Navbar></Navbar>
   <Hero></Hero>
    <Dropdown></Dropdown>
   <Tending></Tending>
   <BestSelling></BestSelling>
   <Reviews></Reviews>
   <FindVehicles></FindVehicles>
   <Footer></Footer>
    </>
  )
}

export default App
