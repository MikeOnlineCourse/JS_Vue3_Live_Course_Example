import { ref, reactive, inject } from 'vue';
import axios from 'axios';
export function useRegistered() {
  const { handleReg } = inject('mapStore');
  const isSubmit = ref(false);
  const errorMessage = reactive({});

  const submitLogin = async registered => {
    if (isSubmit.value) return;
    isSubmit.value = true;
    try {
      await axios.post('https://vue-lessons-api.herokuapp.com/auth/registered', registered);
      isSubmit.value = false;
      handleReg(true);
    } catch (error) {
      errorHandle(error.response.data.error_message);
      isSubmit.value = false;
    }
  };

  const errorHandle = err => {
    Object.keys(err).forEach(key => (errorMessage[key] = err[key]));
  };

  return { isSubmit, submitLogin, errorMessage };
}
