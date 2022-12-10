const useBeforeLeave = onBefore =>{
  const handle = (e)=>{
    console.log(e);
    onBefore();
  };
  useEffect(()=>{
    if(typeof onBefore !=="function"){
      return;
    };
    document.addEventListener("mouseleave",handle);
    return ()=>document.removeEventListener("mouseleave",handle);
  },[]);
};

export default useBeforeLeave;