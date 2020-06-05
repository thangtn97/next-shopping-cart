import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/actionCart";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.Product}>
      <div
        style={{ backgroundImage: `url(${product.image})` }}
        className={styles.Image}
      >
        <span
          className={styles.AddProduct}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </span>
      </div>
      <div className={styles.Desc}>
        <p>{product.name}</p>
        <p className={styles.Product_Price}>{product.price.toFixed(2)}$</p>
      </div>
    </div>
  );
};

export default Product;
