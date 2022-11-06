// import {useEffect} from "react";
import { useParams } from "react-router-dom";
function Detail(){
    const x = useParams();
    console.log(x);
    return <h1>Detail</h1>
}
export default Detail;