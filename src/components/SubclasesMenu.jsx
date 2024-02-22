import { NavLink } from "react-router-dom";

const Subclases = () => { 
    return (
        <div>
             
            <li><NavLink className="nav-link " aria-current="page" to={"/category/dulces"}>Dulces</NavLink></li>
            <li><NavLink className="nav-link " aria-current="page" to={"/category/salados"}>Salados</NavLink></li>
        
    </div>)
 }

 export default Subclases;