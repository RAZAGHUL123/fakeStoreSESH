
import PropTypes from 'prop-types';
import { useCart } from './CartContext';

function Product({ product }) {
  const { addToCart } = useCart();
  const { id, name, price, imageUrl } = product;

  return (
    <div className="product">
      <img className="product-image" src={imageUrl} alt={name} />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
