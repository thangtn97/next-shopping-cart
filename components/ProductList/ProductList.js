import Product from "../Product/Product";
import styles from "./ProductList.module.css";
import Spinner from "../UI/Spinner/Spinner";

const ProductList = ({ products }) => {
  let productList = <Spinner />;
  if (products)
    productList = products.map((product, index) => (
      <Product product={product} key={index} />
    ));
  return <div className={styles.ProductList}>{productList}</div>;
};

// {products.map((product, index) => (
//   <Product product={product} key={index} />
// ))}
export default ProductList;
