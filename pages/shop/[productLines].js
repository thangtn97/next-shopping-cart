import ProductList from "../../components/ProductList/ProductList";
import Layout from "../../components/Layout/Layout";
import { wrapper } from "../../store/store";
import { fetchDataProducts } from "../../store/actions/actionProducts";
import { END } from "redux-saga";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useSelector } from "react-redux";

const ProductLine = ({ products }) => {
  let productList = <Spinner />;
  const loading = useSelector((state) => state.products.loading);
  if (!loading) productList = <ProductList products={products} />;

  return <Layout>{productList}</Layout>;
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    store.dispatch(fetchDataProducts());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {
        products: store.getState().products.products[params.productLines],
      },
    };
  }
);

export function getStaticPaths() {
  return {
    paths: [
      { params: { productLines: "hats" } },
      { params: { productLines: "jacket" } },
    ],
    fallback: false,
  };
}
export default ProductLine;
