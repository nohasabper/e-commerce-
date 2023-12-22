import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Rtk/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        {/* <CartProvider>
        <SearchProvider> */}
        <Provider store={store}>
          <App />
          </Provider>
        {/* </SearchProvider>
      </CartProvider> */}

    </BrowserRouter></React.StrictMode>
);
