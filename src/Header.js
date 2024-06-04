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
            <li><a className="dropdown-item" href="https://nodejs.org/en" target="_new">Node JS</a></li>
            <li><a className="dropdown-item" href="https://react.dev/learn" target="_new">React JS</a></li>
            <li><a className="dropdown-item" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_new">Bootstrap</a></li>
            <li><a className="dropdown-item" href="https://restcountries.com/" target="_new">REST Countries</a></li>
            <li><a className="dropdown-item" href="https://axios-http.com/docs/intro" target="_new">AXIOS</a></li>
            <li><a classNaName="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="http://www.github.com" target="_new">GitHub</a></li>
          </ul>
        </div>

    </div>
  </nav>
  </div>
  )
}

export default Header