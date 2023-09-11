import "./App.css";
import { Cart } from "./Page/Cart";
import { Login } from "./Page/Login";
import { Product } from "./Page/Product";
import { Home } from "./Page/Home";
import { Register } from "./Page/Register";
import { ProductList } from "./Page/ProductList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
      {/* <ProductList /> */}
    </>
  );
}

export default App;
