import { ref, inject } from 'vue';
import axios from 'axios';

const REGISTER_URL = 'https://vue-lessons-api.herokuapp.com/auth/registered';

export function useRegistered() {
  const { handleRegisterPage } = inject('mapStore');
  const isSubmit = ref(false);
  const errorMessage = ref({});

  const submitRegister = async registered => {
    if (isSubmit.value) return;
    isSubmit.value = true;
    try {
      await axios.post(REGISTER_URL, registered);
      handleRegisterPage(true);
    } catch (error) {
      errorHandle(error.response.data.error_message);
    } finally {
      isSubmit.value = false;
    }
  };

  const errorHandle = err => {
    errorMessage.value = err;
  };

  return { isSubmit, submitRegister, errorMessage };
}
