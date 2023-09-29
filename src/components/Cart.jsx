
import { useCart } from './CartContext';  // Make sure the path is correct

function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>  {/* Use item.id instead of index */}
          <img src={item.imageUrl} alt={item.name} width="50" />
          <h4>{item.name}</h4>
          <p>Price: ${item.price.toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total Price: ${getTotalPrice()}</h3>
    </div>
  );
}

export default Cart;
