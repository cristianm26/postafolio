import React , { useRef }from "react";
import NavBar from "components/Navbars/DemoNavbar"
import Hero from "components/Hero/Hero";
import Footer from "components/Footers/SimpleFooter"
import Tarjetas from "components/Tarjetas/Tarjetas"
import Extras from "components/Extras/Extras";
import Customer from "Customer/Customer";
function Index(){
  const frontend = useRef(null)
  const backend = useRef(null)
    function scrollTo(to){
        switch (to) {
          case 'FrontEnd':
            frontend.current.scrollIntoView();
            break;
          case 'BackEnd':
            backend.current.scrollIntoView();
            break;
          case 'APLICACIONES MOVILES':
            break;  
          default:
            break;
        }
    }
    return(
      <>
      <NavBar scrollTo={scrollTo}/>
      <Hero/>
      <Tarjetas/>
      <Extras myref={frontend}/>
      <Customer myref={backend}/>
      <Footer/>
      </>
    ) 
  
}

export default Index;
