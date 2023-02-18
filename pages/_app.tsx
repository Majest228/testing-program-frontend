import Layout from "../app/components/layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import AuthProvider from "@/app/providers/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider Component={Component}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider >
    </Provider>

  );
}
