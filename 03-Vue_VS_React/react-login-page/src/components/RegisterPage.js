import { useRegister } from "../hooks/useResgiter";

export const RegisterPage = () => {
  const {
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
  } = useRegister();

  return (
    <form onSubmit={submit}>
      <div className="input-box">
        <p>NAME</p>
        <input
          type="text"
          placeholder="輸入使用者名稱"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="error">{error?.username}</p>
      </div>

      <div className="input-box">
        <p>PASSWORD</p>
        <input
          type="password"
          placeholder="輸入密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{error?.password}</p>
      </div>

      <div className="input-box">
        <p>E-MAIL</p>
        <input
          type="text"
          placeholder="輸入email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{error?.email}</p>
      </div>

      <div className="input-box">
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="checkbox">我已閱讀使用者條款</label>
      </div>

      <button type="submit" disabled={loading || !checked}>
        {loading ? "Loading..." : "送出"}
      </button>
    </form>
  );
};
