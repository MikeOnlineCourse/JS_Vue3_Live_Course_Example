import "./styles.css";
import { Home } from "./components/Home";

import { StoreProvider } from "./storeContext";

export const App = () => (
  <StoreProvider>
    <Home />
  </StoreProvider>
);
