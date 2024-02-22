import { Link, useParams } from "react-router-dom";

const Gracias = () => {
    const {orderId}=useParams()

    return(
        <div className="container my-3">
         <div className="row">
           <div className="col text-center">
           <h1 className="fs-1 text">Gracias por elegir Meren-dar</h1>
            <p className="">Tu orden de compra es: <b>{orderId}</b></p>
            <p><Link to={"/"} className="btn btn-light mt-3">Volver a los productos</Link></p> 
           </div>
         </div>
        </div>
    )
 }
 export default Gracias;