import CartWidget from "./CartWidget";
import Logo from "../assets/img/merendarLogo.jpg";
import Extra from "./Extra";
import { NavLink } from "react-router-dom";

const NavBar = () => { 
    
  return (
        <div>
        <nav class="navbar bg-body-tertiary fixed-top">
<div class="container-fluid">
< CartWidget />
<img src={Logo} alt="Meren-dar" width={50} className="logoPeque" />
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/destacados"}>Inicio</NavLink>
      </li>
      <li className="nav-item">
      <Extra/>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/pedidos"}>Pedidos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={"https://www.instagram.com/merendarsintacc/"}>Instagram</NavLink>
      </li>
    </ul>
  </div>
</div>
</div>
</nav>
    </div>
    )
 }

 export default NavBar; 