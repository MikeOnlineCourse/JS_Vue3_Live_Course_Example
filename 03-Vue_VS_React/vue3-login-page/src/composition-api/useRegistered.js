import axios from 'axios';
import { reactive, ref, inject } from 'vue';

const REGISTER_URL = 'https://vue-lessons-api.herokuapp.com/auth/registered';

export function useRegistered() {
  const { handleRegister } = inject('mapStore');

  const isSubmit = ref(false);

  const userData = reactive({
    username: '',
    password: '',
    email: '',
  });
  const errorMsg = ref({});

  const isCheck = ref(false);

  const handleSubmit = async () => {
    if (!isCheck.value) return alert('你要勾選喔');
    if (isSubmit.value) return;
    isSubmit.value = true;
    try {
      const res = await axios.post(REGISTER_URL, userData);
      console.log(res.data);
      handleRegister(true);
    } catch (error) {
      errorMsg.value = error.response.data.error_message;
    } finally {
      isSubmit.value = false;
    }
  };

  return {
    userData,
    errorMsg,
    isCheck,
    handleSubmit,
    isSubmit,
  };
}
