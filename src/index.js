import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
