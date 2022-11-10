import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const location = useLocation();
  console.log(location);
  return <h1>Detail</h1>;
}
export default Detail;
