import Subclases from "./SubclasesMenu";
import { useState } from "react";
const Extra= () => {
    const [visible, setVisible] = useState(false);

    const monstrarMensaje = () => {
        setVisible(true);
    }
    return(
        <div>
<p className="nav-link" onClick={monstrarMensaje}>Productos</p>
                    {visible ? <Subclases/> : <p></p>}
        </div>
    )
 }
 export default Extra;