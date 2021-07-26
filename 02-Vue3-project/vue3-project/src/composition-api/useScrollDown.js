import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "../lib/Throttle.js";
export function useScrollDown() {
  const isDown = ref(false);

  const handleScrollDown = throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      isDown.value = true;
    } else {
      isDown.value = false;
    }
  });

  onMounted(() => {
    window.addEventListener("scroll", handleScrollDown);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollDown);
  });

  return { isDown };
}
