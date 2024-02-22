import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destacados from './components/Destacados';
import Error404 from './components/Error404';
import Cart from './components/Cart'
import CartContextProvider from './components/context/CartContextProvider';
import PedidosEspeciales from './components/PedidosEspeciales';
import Checkout from './components/Checkout';
import Gracias from './components/Gracias';

function App(){
    return (
        <div>
            <CartContextProvider>
            <BrowserRouter>
            <NavBar/>
            <Header />
            <Routes>
            <Route path={"/"} element={ <ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
            <Route path={"/destacados"} element={<Destacados/>}/>
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/pedidos"} element={<PedidosEspeciales />} />
            <Route path={"/checkout"} element = {<Checkout/>}/>
            <Route path={"/gracias/:orderId"} element= {<Gracias/>} />
            <Route path={"/*"} element={<Error404/>}/>
            </Routes>
            <Footer />
            </BrowserRouter>
            </CartContextProvider>
            
        </div>
    )
}

 export default App;
