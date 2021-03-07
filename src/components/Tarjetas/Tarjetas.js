import TarjetaSimple from 'components/Tarjeta/TarjetaSimple';
import React from 'react'
import {
    Container,
    Row,
    Col
  } from "reactstrap";
function Tarjetas() {
    return (
        <section className="section section-lg pt-lg-0 mt--100">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <TarjetaSimple
                    titulo="FrontEnd"
                    icono="spaceship"
                    color="primary"
                    descripcion="Revisa mis proyectos FrontEnd"
                    badges={["React", "Angular"]}
                  />
                </Col>
                <Col lg="4">
                <TarjetaSimple
                    titulo="BackEnd"
                    icono="ui-04"
                    color="success"
                    descripcion="Revisa mis proyectos Backend"
                    badges={["Node Js", "Php"]}
                  />
                </Col>
                <Col lg="4">
                <TarjetaSimple
                    titulo="Aplicaciones Moviles"
                    icono="mobile-button"
                    color="warning"
                    descripcion="Revisa mis aplicaciones moviles"
                    badges={["Ionic", "Flutter"]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}

export default Tarjetas
