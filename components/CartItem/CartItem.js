import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  clickMoreItem,
  clickLessItem,
  clickRemoveItem,
  setValueItem,
} from "../../store/actions/actionCart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.CartItem}>
      <div className={styles.ItemDiv}>
        <div className={styles.ItemDesc}>
          <img className={styles.ItemImage} src={item.image} alt="" />
        </div>
        <div className={styles.ItemName}>{item.name}</div>
        <div className={styles.ItemPrice}>${item.price.toFixed(2)}</div>
        <div className={styles.ItemQuantity}>
          <span onClick={() => dispatch(clickLessItem(item.id))}>-</span>
          <input
            style={{ width: "15%", textAlign: "center" }}
            type="text"
            value={item.quantity}
            onChange={(e) => dispatch(setValueItem(e.target.value, item.id))}
          />
          <span onClick={() => dispatch(clickMoreItem(item.id))}>+</span>
        </div>
        <div className={styles.ItemTotalPrice}>
          {(item.quantity * item.price).toFixed(2)}
        </div>
        <span
          className={styles.Remove}
          onClick={() => {
            dispatch(clickRemoveItem(item.id));
          }}
        >
          {" "}
          remove
        </span>
      </div>
      <span className={styles.Seperate}></span>
    </div>
  );
};

export default CartItem;
