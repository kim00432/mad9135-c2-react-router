import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink activeClassName="active" to="/" exact>
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/users">
                User List
            </NavLink>
            <NavLink activeClassName="active" to="/addresses">
                Address List
            </NavLink> 
      </div>
    )
}
