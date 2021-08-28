import { ref } from 'vue';

export function useStore() {
  const isReg = ref(false);

  const handleReg = bool => {
    isReg.value = bool;
  };

  return {
    isReg,
    handleReg,
  };
}
