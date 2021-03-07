import React from 'react'
import { NavItem, NavLink, UncontrolledTooltip } from "reactstrap";
function NavItemTool({ titulo, descripcion, icono, link }) {
  return (
    <NavItem>
      <NavLink
        className={`nav-link-${icono}`}
        href={link}
        id={`tooltip-${icono}-${titulo}`}
        target="_blank"
      >
        <i className={`fa fa-${icono}`} />
        <span className="nav-link-inner--text d-lg-none ml-2">
          {titulo}
        </span>
      </NavLink>
      <UncontrolledTooltip delay={0} target={`tooltip-${icono}-${titulo}`}>
        {descripcion}
      </UncontrolledTooltip>
    </NavItem>
  )
}

export default NavItemTool
