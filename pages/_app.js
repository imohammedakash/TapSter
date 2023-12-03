import React from "react";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from '@/Redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <React.Suspense fallback={<div>Loading</div>}>
            <ToastContainer />
            <Component {...pageProps} />
          </React.Suspense>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
