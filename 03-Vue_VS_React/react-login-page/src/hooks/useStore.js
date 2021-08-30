import { useState } from "react";

export function useStore() {
  const [registered, setRegistered] = useState(false);

  return { registered, setRegistered };
}
