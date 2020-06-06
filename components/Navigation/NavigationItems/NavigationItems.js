import styles from "./NavigationItems.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/actions/actionAuth";
import { useRouter } from "next/router";

const navigationItems = () => {
  const cart = useSelector((state) => state.cart.cart);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const router = useRouter();
  const quantity = cart.reduce(
    (quantity, item) => quantity + parseInt(item.quantity),
    0
  );
  let signIn = (
    <Link href="/auth">
      <a className={styles.NavLinks}>Signin</a>
    </Link>
  );
  if (isLogged) {
    signIn = (
      <Link href="/">
        <a onClick={() => dispatch(logout())} className={styles.NavLinks}>
          Sign out
        </a>
      </Link>
    );
  }
  return (
    <ul className={styles.NavigationItems}>
      <Link href="/">
        <a className={styles.NavLinks}>Shop</a>
      </Link>
      <Link href="/contact">
        <a className={styles.NavLinks}>Contact</a>
      </Link>
      {signIn}
      <Link href="/ordersumary">
        <a className={styles.NavLinks}>{quantity}</a>
      </Link>
    </ul>
  );
};
export default navigationItems;
