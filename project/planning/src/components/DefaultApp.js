import App from "./App";
import SideBar from "../routes/SideBar";
import { useEffect, useState } from "react";
function DefaultApp(){
    const [savePlan, setSavePlan] = useState([]);
    const [init, setInit] = useState(false);
    useEffect(()=>{
        setInit(true);
    },[]);
    
    return(
        <>
        {/* <header><SideBar savePlan={savePlan} setSavePlan={setSavePlan}/></header> */}
            {init ?(
                <App savePlan={savePlan} setSavePlan={setSavePlan} />
                ):(
                "Initializing..."
            )}
            <footer style={{bottom:"5px",left:"45%", position: "absolute"}}>&copy; {new Date().getFullYear()} firstSideProject Planning</footer>
        </>
    )
}
export default DefaultApp;