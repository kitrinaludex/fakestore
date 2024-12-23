import { useState } from "react";
import "./ItemCard.css";
const ItemCard = ({ item, cart, setCart }) => {
  const [itemCount, setItemCount] = useState(1);

  function handleChange(value) {
    if (value < 0) {
      setItemCount(1);
    } else {
      setItemCount(value);
    }
  }

  return (
    <div className="item-card">
      <div className="image-container">
        <img src={item.image} />
      </div>
      <div>{item.title}</div>
      <div className="purchase-controls">
        <div className="item-count">
          <button onClick={() => setItemCount(itemCount - 1 || 1)}>-</button>
          <input
            value={itemCount}
            type="number"
            onChange={(e) => handleChange(e.target.value)}
          />
          <button onClick={() => setItemCount(Number(itemCount) + 1)}>+</button>
        </div>
        <button onClick={() => setCart([...cart, item])}>
          Add to cart
          {/* make this button have 3 states: not in cart
          in cart, and when in cart on hover:remove from cart */}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
