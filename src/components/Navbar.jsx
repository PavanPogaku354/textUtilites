import React from 'react'
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(prop) {
  return (
    <div>
<nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{prop.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        
    

      </div>
    </div>
  </div>
  <div class={`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">enable dark mode</label>
</div>
</nav>
    </div>
  )
}
Navbar.propTypes = {
    title :PropTypes.string
}