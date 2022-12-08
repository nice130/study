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
export default function App() {
  const begForLife = () => console.log("Please don't leave T.T");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}