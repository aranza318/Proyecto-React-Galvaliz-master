import { useContext, useState } from "react";
import { CartContext } from "./context/CartContextProvider";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const PedidosEspeciales = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [pedido, setPedido] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear} = useContext(CartContext);

    const generarOrden = () => {
       
        const buyer = {name:nombre, phone:telefono, email:email, direction:direccion}
        const items = cart.map(item => ({id:item.id, title:item.titulo, price:item.precio, quantity:item.quantity}));
        const fecha = new Date();
        const date = `${fecha.getHours()}:${fecha.getMinutes()} ${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;
        const order = {buyer:buyer, items:items, date:date, pedido:pedido};

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

        if (pedido.length === 0) {
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
                <div className="col-md-8 offset-md-2">
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
                        <div class="mb-3">
                             <label for="exampleFormControlTextarea1" class="form-label">Describe el producto que quieres, y recueda anotar bien 
                             tus datos ya que nos contactaremos a travez de ellos para confirmar el pedido e informarte de los cortos a abonar</label>
                             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => {setPedido(e.target.value)}}></textarea>
                         </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Generar Orden</button>
                    </form>
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

export default PedidosEspeciales;