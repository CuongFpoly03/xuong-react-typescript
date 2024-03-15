import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Checkouts from "./pages/Checkouts";


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/detail" element={<Detail/>}/> 
      <Route path="/cart" element={<Cart/>}/> 
      <Route path="/checkout" element={<Checkouts/>}/> 
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
