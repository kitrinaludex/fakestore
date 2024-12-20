import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
/* make home the root route and pass state with an outlet from home.jsx */

function App() {
  const [cart, setCart] = useState([{ name: "socks" }, { name: "pants" }]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="shop/">Shop</Link>
        <Link to="cart/">Cart {cart.length}</Link>
      </nav>
      <Outlet context={{ cart, setCart }} />
    </>
  );
}

export default App;
