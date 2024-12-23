import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  const items = cart.map((item) => (
    <CartItem key={item.id} item={item} setCart={setCart} cart={cart} />
  )); /* use an array for the cart */

  return (
    <>
      <div>Hii im a cart</div>
      <div>{items}</div>
    </>
  );
};
export default Cart;
