import ListCartItem from "../components/ListCartItem/ListCartItem";
import Layout from "../components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setRedirectPath } from "../store/actions/actionAuth";
import Button from "../components/UI/Button/Button";

const OrderSumary = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const router = useRouter();
  const totalPrice = cart.reduce(
    (total, current) => total + current.quantity * current.price,
    0
  );
  return (
    <Layout totalItem={cart.totalItem}>
      <div className="div_title">
        <div className="product">Product</div>
        <div className="name">Name</div>
        <div className="price">Price</div>
        <div className="quantity">Quantity</div>
        <div className="total">Total</div>
      </div>
      <span className="seperation"></span>
      <ListCartItem cart={cart} />
      <div className="checkout">
        <Button btnType="Success">Continue Shopping</Button>
        <div className="sub-total">Total: ${totalPrice.toFixed(2)}</div>
        <Button
          btnType="Danger"
          clicked={() => {
            if (isLogged) router.push("/checkout");
            else {
              dispatch(setRedirectPath("/checkout"));
              router.push("/auth");
            }
          }}
        >
          Checkout
        </Button>
      </div>
      <style jsx>{`
        .div_title {
          background-color: #eceff5;
          display: flex;
          text-align: center;
          width: 100%;
          margin: 0;
        }
        .seperation {
          display: block;
          height: 1px;
          width: 100%;
          background-color: #000;
        }
        .product {
          width: 20%;
        }
        .name {
          width: 30%;
        }
        .price {
          width: 20%;
        }

        .quantity {
          width: 10%;
        }
        .total {
          width: 10%;
        }
        .checkout {
          display: flex;
          justify-content: space-between;
        }
        .sub-total {
          width: 10%;
          padding-left: 65%;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};
export default OrderSumary;
