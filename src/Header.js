import React from 'react'

const Header = () => {
  return (
    <div>    
    <nav class="navbar fixed-top bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand mb-0 h1" href="/">Country Viewer</a>
        <div class="dropdown">
          <button type="button" id="tools-used" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Tools Used
          </button>
          <ul className="dropdown-menu" aria-labelledby="tools-used"s>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a classNaName="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>

    </div>
  </nav>
  </div>
  )
}

export default Header