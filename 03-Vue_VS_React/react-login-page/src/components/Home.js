import { useContext } from "react";
import { RegisterPage } from "./RegisterPage";
import { storeContext } from "../storeContext";

export const Home = () => {
  const { registered } = useContext(storeContext);

  return !registered ? (
    <RegisterPage />
  ) : (
    <div>
      <h1>註冊成功</h1>
    </div>
  );
};
