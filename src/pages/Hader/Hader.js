import React from 'react';
import { NavLink } from 'react-bootstrap';
// import  NavLink  from 'bootstrap';

const Hader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand" href="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink class="nav-NavLink active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-NavLink" href="#">Features</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-NavLink" href="#">Pricing</NavLink>
        </li>
        <li class="nav-item dropdown">
          <NavLink class="nav-NavLink dropdown-toggle" href="#" id="navbarDropdownMenuNavLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuNavLink">
            <li><NavLink class="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink class="dropdown-item" href="#">Another action</NavLink></li>
            <li><NavLink class="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Hader;