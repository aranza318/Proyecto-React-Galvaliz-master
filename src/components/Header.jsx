import NavBar from "./NavBar";
import Logo from "../assets/img/merendarLogo.jpg";
import { Link } from "react-router-dom";

const Header = () => { 
    
    return ( 
        <div className="header">
            <NavBar className="navy"/>
            <Link to={"/"}><img src={Logo} alt="Meren-dar" width={230} className="logo" /></Link>
        </div>
        
    )
 }
 
 export default Header;