import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/bootstrap.min.css";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FloatingChatbot from "./pages/FloatingChatbot"; // Import the chatbot component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <FloatingChatbot />
    </BrowserRouter>
  </Provider>
);
