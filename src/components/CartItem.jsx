function CartItem({ item, setCart, cart }) {
  function deleteItem() {
    const newCart = cart.filter((element) => element.id !== item.id);
    setCart(newCart);
  }

  return (
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>{item.title}</div>
      <div>{item.count}</div>
      <div className="controls">
        <button onClick={() => deleteItem()}>Delete Item</button>
      </div>
    </div>
  );
}

export default CartItem;
