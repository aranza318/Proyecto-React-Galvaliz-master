import { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContextProvider";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, sumTotal, clear} = useContext(CartContext);

    const generarOrden = () => {
       
        const buyer = {name:nombre, phone:telefono, email:email, direction:direccion}
        const items = cart.map(item => ({id:item.id, title:item.titulo, price:item.precio, quantity:item.quantity}));
        const fecha = new Date();
        const date = `${fecha.getHours()}:${fecha.getMinutes()} ${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }
        
        if (direccion.length === 0) {
            return false;
        }
        
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
            clear ();
        })
        .catch(resultado => {
            console.log("No se pudo completar la compra");
        });

    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <p>Los campos * son necesrios para generar la orden correctamente</p>
                            <label className="form-label">Nombre *</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono *</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Direccion *</label>
                            <input type="text" className="form-control" onInput={(e) => {setDireccion(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.quantity} x ${item.precio}</td>
                                        <td className="align-middle text-center">${item.quantity * item.precio}</td>
                                        <td><img src={item.imagen} alt={item.titulo} width={85} /></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <Navigate to={ "/gracias/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;