import ProductList from "../../components/ProductList/ProductList";
import Layout from "../../components/Layout/Layout";
import { wrapper } from "../../store/store";
import { fetchDataProducts } from "../../store/actions/actionProducts";
import { END } from "redux-saga";

const ProductLine = ({ products }) => {
  return <ProductList products={products} />;
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productLines: "hats" } },
      { params: { productLines: "jacket" } },
    ],
    fallback: false,
  };
}
export default ProductLine;
