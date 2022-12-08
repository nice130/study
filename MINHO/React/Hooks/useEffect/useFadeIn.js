const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      if (typeof duration !== "number") {
        return;
      }
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
export default function App() {
  const fadeInH1 = useFadeIn(2);
  const fadeInP = useFadeIn(5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>blablablablabla</p>
    </div>
  );
}