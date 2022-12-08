const usePreventLeave = () => {
  const onListner = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const onEnable = () => {
    window.addEventListener("beforeunload", onListner);
  };
  const onDisable = () => {
    window.removeEventListener("beforeunload", onListner);
  };
  return { onEnable, onDisable };
};