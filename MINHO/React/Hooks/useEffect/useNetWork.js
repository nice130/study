const useNetWork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    () => {
      // component  un mount function;
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function App() {
  const handleNetWorkChange = (online) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetWork(handleNetWorkChange);
  return (
    <div className="App">
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
}