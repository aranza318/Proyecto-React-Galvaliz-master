import { useContext } from "react";
import { CartContext } from "./context/CartContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal,sumTotal} = useContext(CartContext);
    if (cartTotal() === 0){
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                         <div className="alert alert-danger" role="alert">Carrito vacio</div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container my-5">
           <div className="row">
             <div className="col text-center">
                  <h1>Dentro de tu carrito</h1>
             </div>
           </div>
           <div className="row">
              <div className="col">
                  <table className="table">
                     <tbody>
                        <tr>
                            <td colSpan={4}>&nbsp;</td>
                            <td className="text-end"><button className="btn btn-light" onClick={()=>{clear()}} title= "Vaciar Carrito">Limpiar carrito</button></td>
                        </tr>
                        {
                            cart.map (item =>(
                                <tr key= {item.id}>
                                    <td><img src={item.imagen} alt={item.titulo} width={80}/></td>
                                    <td>{item.titulo}</td>
                                    <td>{item.quantity} x ${item.precio}</td>
                                    <td className="text-center">${item.quantity * item.precio}</td>
                                    <td className="text-center"><button className="btn btn-light" onClick={()=>{removeItem(item.id)}} title="Elimiar Producto">🗑️</button></td>

                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={3} className="text-end">Total</td>
                            <td className="text-center">${sumTotal()}</td>
                            <td className="aling-middle text-end"><Link to={"/checkout"} className="btn btn-light">Finalizar compra</Link></td>
                        </tr>
                     </tbody>
                  </table>
              </div>
           </div>
        </div>
    )
 }
export default Cart;