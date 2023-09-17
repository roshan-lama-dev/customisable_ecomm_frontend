import "./App.css";
import { Cart } from "./Page/Cart";
import { Login } from "./Page/Login";
import { Product } from "./Page/Product";
import { Home } from "./Page/Home";
import { Register } from "./Page/Register";
import { ProductList } from "./Page/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const user = false;
  console.log();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
      {/* <ProductList /> */}
    </>
  );
}

export default App;
