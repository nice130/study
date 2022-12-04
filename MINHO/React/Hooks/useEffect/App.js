// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const titleUpate = () => {
//     const $htmlTitle = document.querySelector("title");
//     $htmlTitle.innerText = title;
//   };
//   useEffect(titleUpate, [title]);
//   return setTitle;
// };

// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (typeof onClick !== "function") {
//       return;
//     }
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return typeof onClick !== "function" ? element : undefined;
// };
// const useConfirm = (message = "", confirmFn, cancleFn) => {
//   if (!confirmFn || typeof confirmFn !== "function") {
//     return;
//   }
//   const confirmAction = () => {
//     if (window.confirm(message)) {
//       callback();
//     } else {
//       reject();
//     }
//   };
//   return confirmAction;
// };
// const usePreventLeave = () => {
//   const onListner = (e) => {
//     e.preventDefault();
//     e.returnValue = "";
//   };
//   const onEnable = () => {
//     window.addEventListener("beforeunload", onListner);
//   };
//   const onDisable = () => {
//     window.removeEventListener("beforeunload", onListner);
//   };
//   return { onEnable, onDisable };
// };
const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (!onBefore || typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
};