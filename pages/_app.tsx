import Layout from "../app/components/layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "@/app/store/store";
import AuthProvider from "@/app/providers/AuthProvider";
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider Component={Component}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider >
        </PersistGate>
      </Provider>
    </QueryClientProvider>

  );
}
