const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const titleUpate = () => {
    const $htmlTitle = document.querySelector("title");
    $htmlTitle.innerText = title;
  };
  useEffect(titleUpate, [title]);
  return setTitle;
};