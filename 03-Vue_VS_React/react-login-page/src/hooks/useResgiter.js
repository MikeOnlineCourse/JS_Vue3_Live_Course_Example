import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { storeContext } from "../storeContext";

const REGISTER_URL = "https://vue-lessons-api.herokuapp.com/auth/registered";

export function useRegister() {
  const { setRegistered } = useContext(storeContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [username, password, email, checked]);

  const submit = async (e) => {
    e.preventDefault();

    if (!checked) return alert("Please check!!!!!");
    if (loading) return;

    setLoading(true);

    const data = { username, password, email };

    try {
      await axios.post(REGISTER_URL, data);
      setRegistered(true);
    } catch (err) {
      setError(err.response.data.error_message);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    checked,
    setChecked,
    loading,
    error,
    submit
  };
}
