
import BtnSocialMedia from "components/BotonesSocialMedia/BtnSocialMedia";
import React from "react";
// reactstrap components
import {

  Container,
  Row,
  Col
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Gracias por revisar mi Trabajo
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <BtnSocialMedia
                  descripcion="Sigueme!"
                  link="https://twitter.com/creativetim"
                  icono="twitter"
                  color="twitter"
                />
                <BtnSocialMedia
                  descripcion="Sigueme!"
                  link="https://www.facebook.com/creativetim"
                  icono="facebook-square"
                  color="facebook"
                />
                <BtnSocialMedia
                  descripcion="Sigueme!"
                  link="https://github.com/creativetimofficial"
                  icono="github"
                  color="github"
                />
                
              </Col>
            </Row>
            <hr />
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="/"
                   
                  >
                    Cristian Muñoz
                  </a>
                  .
                </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
