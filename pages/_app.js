import App from "next/app";
import "../styles/global.css";
import { END } from "redux-saga";
import { wrapper } from "../store/store";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import { authCheckState } from "../store/actions/actionAuth";
import { useEffect } from "react";
//
//class MyApp extends App {
//  static async getInitialProps({ Component, ctx }) {
//    const pageProps = {
//      ...(Component.getInitialProps
//        ? await Component.getInitialProps(ctx)
//        : {}),
//    };
//    if (ctx.req) {
//      ctx.store.dispatch(END);
//      await ctx.store.sagaTask.toPromise();
//    }
//    return { pageProps };
//  }
//  render() {
//    const { Component, pageProps } = this.props;
//    return (
//      <AuthProvider>
//        <Layout>
//          <Component {...pageProps} />
//        </Layout>
//      </AuthProvider>
//    );
//  }
//}
//export default wrapper.withRedux(MyApp);
//
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };
  if (ctx.req) {
    ctx.store.dispatch(END);
    //ctx.store.dispatch(authCheckState);
    await ctx.store.sagaTask.toPromise();
  }
  return { ...pageProps };
};
export default wrapper.withRedux(MyApp);
