
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import MediaMenu from "components/Menus/MediaMenu";
import NavItemTool from "./NavItemTool";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <span className="display-4">
                  Mi Portafolio
                 
                </span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Mis Trabajos</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                       <MediaMenu 
                        titulo="FrontEnd" 
                        descripcion="Mira los proyectos con los que he trabajado con frontend" 
                        color="primary" 
                        icono="spaceship"
                        scrollTo={this.props.scrollTo}
                       />
                       <MediaMenu 
                        titulo="BackEnd" 
                        descripcion="Mira los proyectos con los que he trabajado con backend" 
                        color="success" 
                        icono="ui-04"
                        scrollTo={this.props.scrollTo}
                       />
                      
                       <MediaMenu 
                        titulo="Diseño" 
                        descripcion="Mira los diseños con los que he trabajado" 
                        color="warning" 
                        icono="palette"
                        scrollTo={this.props.scrollTo}
                       />
                        
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                  <NavLink href="/perfil">
                    Perfil 
                  </NavLink>
                </NavItem>
                 
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItemTool 
                    link="ttps://www.instagram.com/creativetimofficial"
                    icono="facebook-square"
                    titulo="Facebook"
                    descripcion="Visita mi perfil de Facebook"
                  />
                  <NavItemTool 
                    link="https://www.facebook.com/creativetim"
                    icono="instagram"
                    titulo="Instagram"
                    descripcion="Visita mi perfil de Instagram"
                  />
                  <NavItemTool 
                    link="https://twitter.com/creativetim"
                    icono="twitter"
                    titulo="Twitter"
                    descripcion="Visita mi perfil de Twitter"
                  />
                   <NavItemTool 
                    link="https://github.com/creativetimofficial/argon-design-system-react"
                    icono="github"
                    titulo="Github"
                    descripcion="Visita mi perfil de Github"
                  />
                  
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
