import { ref, reactive, inject } from 'vue';
import axios from 'axios';
export function useRegistered() {
  const { handleRegisterPage } = inject('mapStore');
  const isSubmit = ref(false);
  const errorMessage = reactive({});

  const submitRegister = async registered => {
    if (isSubmit.value) return;
    isSubmit.value = true;
    try {
      await axios.post('https://vue-lessons-api.herokuapp.com/auth/registered', registered);
      isSubmit.value = false;
      handleRegisterPage(true);
    } catch (error) {
      errorHandle(error.response.data.error_message);
      isSubmit.value = false;
    }
  };

  const errorHandle = err => {
    for (const key in err) {
      errorMessage[key] = err[key];
    }
  };

  return { isSubmit, submitRegister, errorMessage };
}
