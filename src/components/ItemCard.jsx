import { useState } from "react";
import "./ItemCard.css";
const ItemCard = ({ title, imageurl, desc }) => {
  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="item-card">
      <div className="image-container">
        <img src={imageurl} alt={desc} />
      </div>
      <div>{title}</div>
      <div className="purchase-controls">
        <div className="item-count">
          <button onClick={() => setItemCount(itemCount - 1 || 1)}>-</button>
          <input
            value={itemCount}
            type="number"
            min={1}
            onChange={() => handleChange}
          />
          <button onClick={() => setItemCount(itemCount + 1)}>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
