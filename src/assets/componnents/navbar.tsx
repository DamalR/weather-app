import React from 'react'

const navBar = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" height="500px">
    <div className="col-md-3 mb-2 mb-md-0">
      <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <h3 id='title'>Weather Forcast</h3>
        <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
      </a>
    </div>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navButton">
      <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="#" className="nav-link px-2">Forcast</a></li>
      <li><a href="#" className="nav-link px-2">News</a></li>
      <li><a href="#" className="nav-link px-2">Map</a></li>
      <li><a href="#" className="nav-link px-2">About</a></li>
    </ul>
  </header>
  )
}

export default navBar