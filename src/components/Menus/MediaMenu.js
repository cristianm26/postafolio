import React from 'react'
import { Media } from "reactstrap";
function MediaMenu({ titulo, descripcion, icono, color , scrollTo}) {
    return (
        <Media
            className="d-flex align-items-center"
            target="_blank"
            onClick={()=> scrollTo(titulo)}
           
        >
            <div className={`icon icon-shape bg-gradient-${color} rounded-circle text-white`}>
                <i className={`ni ni-${icono}`}/>
            </div>
            <Media body className="ml-3">
                <h6 className={`heading text-${color} mb-md-1`}>
                    {titulo}
                </h6>
                <p className="description d-none d-md-inline-block mb-0">
                    {descripcion}
                </p>
            </Media>
        </Media>
    )
}

export default MediaMenu
