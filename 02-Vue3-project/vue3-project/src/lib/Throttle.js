export const throttle = (fn = () => {}, timer = 100) => {
  let reTimes = null;
  return () => {
    if (reTimes) {
      clearTimeout(reTimes);
    }
    reTimes = setTimeout(() => {
      fn();
    }, timer);
  };
};
