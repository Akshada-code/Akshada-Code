import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThirdwebProvider
        clientId={process.env.REACT_APP_THIRD_WEB_CLIENT_ID}
        secretKey={process.env.REACT_APP_THIRD_WEB_CLIENT_SECRET}
        supportedWallets={[
          embeddedWallet({
            auth: {
              options: ["email", "google", "facebook", "apple"],
            },
            recommended: true,
          }),
        ]}
      >
        <App />
      </ThirdwebProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
