import React from 'react'
import { Link } from "react-router-dom"

const Nav = (props) => {
return (
<div className="nav">
    <Link to="/">
        <div>Giphy</div>
    </Link>
    <Link to="/Projects">
        <div>Projects</div>
    </Link>
    <Link to="/About">
        <div>About</div>
    </Link>
</div>

)

}

export default Nav