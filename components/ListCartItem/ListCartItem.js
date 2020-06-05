import styles from "./ListCartItem.module.css";
import CartItem from "../CartItem/CartItem";

const ListCartItem = ({ cart, clickRemove }) => {
  return (
    <div className={styles.ListCartItem}>
      {cart.map((item, index) => {
        return <CartItem item={item} key={index} clickRemove={clickRemove} />;
      })}
    </div>
  );
};

export default ListCartItem;
