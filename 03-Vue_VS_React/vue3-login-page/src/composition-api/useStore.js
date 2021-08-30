import { ref } from 'vue';
export function useStore() {
  const isRegister = ref(false);

  const handleRegister = bool => {
    isRegister.value = bool;
  };

  return {
    isRegister,
    handleRegister,
  };
}
