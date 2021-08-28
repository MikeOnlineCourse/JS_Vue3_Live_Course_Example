import { ref } from 'vue';

export function useStore() {
  const isRegister = ref(false);

  const handleRegisterPage = bool => {
    isRegister.value = bool;
  };

  return {
    isRegister,
    handleRegisterPage,
  };
}
