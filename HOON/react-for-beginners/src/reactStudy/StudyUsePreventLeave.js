const usePreventLeave = () => {
  const listener = (e) =>{
    e.preventDefault();
    e.returnValue= ""; 
  }
  const enablePreve = () => window.addEventListener("beforeunload",listener);
  const disablePreve = () => window.removeEventListener("beforeunload",listener);
  return {enablePreve,disablePreve};
}

export default usePreventLeave;
//창을끄거나 새로고침할때 function을 실행시켜 컨펌시켜줌