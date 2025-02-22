import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import { Provider as ReduxProvider } from "react-redux";
import Store from "./store";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ReduxProvider store={Store}>
      <App />
    </ReduxProvider>
  </StrictMode>
);
