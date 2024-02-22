import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Destacados = ({greeting}) => {
    return(
        <div>
             <div className="mx-auto"> 
             <h1>Bienvenidos a Meren-dar delicias glutten free</h1>
            </div> 
            <Carousel/>
            <Link to={"/"}><button className="button">Productos</button></Link>
        </div>
    )
}
export default Destacados;