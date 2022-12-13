import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";
import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!options.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data: data
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `loading:${loading}\ndata:${JSON.stringify(data)}\nerror:${error}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
