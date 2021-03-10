import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-simple-hook-modal/dist/styles.css";
import { ModalProvider } from "react-simple-hook-modal";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
