import React from 'react'
import { Button, UncontrolledTooltip } from "reactstrap";

function BtnSocialMedia({ descripcion, icono, color, link }) {
    return (
        <>
            <Button
                className="btn-icon-only rounded-circle"
                color={color}
                href={link}
                id={`button-${icono}`}
                target="_blank"
            >
                <span className="btn-inner--icon">
                    <i className={`fa fa-${icono}`} />
                </span>
            </Button>
            <UncontrolledTooltip delay={0} target={`button-${icono}`}>
                {descripcion}
            </UncontrolledTooltip>
        </>
    )
}

export default BtnSocialMedia
