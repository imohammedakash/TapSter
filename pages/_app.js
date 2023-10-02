import "@/styles/globals.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import store from "@/Redux/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
