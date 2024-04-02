import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Checkouts from "./pages/Checkouts";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Dashboard from "./pages/admins/Dashboard";
import Users from "./pages/admins/user/Users";
import Category from "./pages/admins/category/Category";
import Products from "./pages/admins/product/Product";
import Add from "./pages/admins/category/Add";
import Update from "./pages/admins/category/Update";
import Addproduct from "./pages/admins/product/Add";
import Updates from "./pages/admins/product/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/category/add" element={<Add />} />
        <Route path="/admin/category/update/:id" element={<Update />} />
        <Route path="/admin/user" element={<Users />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/product/add" element={<Addproduct />} />
        <Route path="/admin/product/update/:id" element={<Updates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
