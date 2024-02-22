import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContextProvider.jsx";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal}= useContext(CartContext);
    return(
        (cartTotal() > 0) ? <Link className="btn btn-light position-relative" to={"/cart"}>
         🛒
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : ""
    )
 }
 export default CartWidget;