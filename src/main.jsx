import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
// import AppRouter from './router/AppRouter'

import JournalApp from "./JournalApp";
import { Provider } from "react-redux";
import { store } from "./store";
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <JournalApp />
    </Provider>
  </StrictMode>
);
