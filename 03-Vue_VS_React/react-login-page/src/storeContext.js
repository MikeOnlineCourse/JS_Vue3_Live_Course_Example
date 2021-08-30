import { createContext } from "react";
import { useStore } from "./hooks/useStore";

export const storeContext = createContext();

export const StoreProvider = ({ children }) => {
  const { registered, setRegistered } = useStore();

  const value = { registered, setRegistered };

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};
