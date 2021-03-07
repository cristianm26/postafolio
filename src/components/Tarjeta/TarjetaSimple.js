import React from 'react'
import {
    Badge,
    Button,
    Card,
    CardBody,
} from "reactstrap";
function TarjetaSimple({ titulo, descripcion, icono, color, badges }) {
    function returnBadges(){
        return badges?.map((badgebtn) => (
            <Badge color={color} pill className="mr-1" key={`${badgebtn}`}>
                {badgebtn}
            </Badge>
        )); 
    }
    return (
        <Card className="card-lift--hover shadow border-0">
            <CardBody className="py-5">
                <div className={`icon icon-shape icon-shape-${color} rounded-circle mb-4`}>
                    <i className={`ni ni-${icono}`} />
                </div>
                <h6 className={`text-${color} text-uppercase`}>
                    {titulo}
                </h6>
                <p className="description mt-3">
                    {descripcion}
                </p>
                <div>
                    {returnBadges()}
                </div>
                <Button
                    className="mt-4"
                    color={color}
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                >
                    Ver Mas 
                      </Button>
            </CardBody>
        </Card>
    )
}

export default TarjetaSimple
