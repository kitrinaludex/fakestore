import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  return (
    <>
      <div>Hii im a cart</div>
      <button onClick={() => setCart("zxcdeluxe")}>zxcdeluxe</button>
    </>
  );
};
export default Cart;
