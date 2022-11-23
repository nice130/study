import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import NewNote from "./NewNote";
const SideBar = ({width=250, setMainSize,mainSize})=>{
    const [modalOpen, setModalOpen] = useState(false);
    const [isOpen, setOpen] = useState(true);
    const [xPosition, setX] = useState(0);
    const side = useRef();
    const [plan,setPlan] = useState("");
    const [savePlan,setSavePlan] = useState([]);

    const toggleMenu = () =>{
        if(xPosition>0){
            setX(0);
            setOpen(true);
            setMainSize(true);
        }else{
            setX(width);
            setOpen(false); 
            setMainSize(false);
        }
    };
//밖에클릭하면 창닫히는기능 사용시 useEffect 추가
    // const handlClose = async e =>{
    //     let sideArea = side.current;
    //     let sideCildren = side.current.contains(e.target);
    //     if(isOpen && (!sideArea || !sideCildren)){
    //         await setX(width);
    //         await setOpen(false);
    //     }
    // }

    // useEffect(()=>{
    //     window.addEventListener('click',handlClose);
    //     return ()=>{
    //         window.removeEventListener('click',handlClose);
    //     };
    // })
    const showModal=()=>{
        setModalOpen(true); 
    }
    

    return (
        <div className={styles.container}>
          <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
              <button onClick={() => toggleMenu()}
              className={styles.button} >
                {isOpen ? 
                <span>X</span> : <span>O</span>
                }
              </button>
            
            <div className={styles.content}>
                <Link to={'/'}>PLAN LIST</Link>
                <button className={styles.plus} onClick={showModal}>+</button>
                
                <ul>
                    <Link to={`/planning`}>
                        <li>planning</li>
                    </Link>
                    {savePlan.map((item,idx)=>(
                        <Link to={`/planning`} key={idx} title={item} >
                            <li value={item}>{item}</li></Link>
                    ))}
                    {plan}
                </ul>
            </div>
            <div className={styles.modal}>
                    {modalOpen && 
                    <NewNote 
                    setModalOpen={setModalOpen} 
                    setPlan={setPlan} 
                    plan={plan} 
                    setSavePlan={setSavePlan} 
                    savePlan={savePlan}/>}
                </div>
          </div>
        </div>
      );
}

const comp = (prev, next) =>{
    return prev.savePlan === next.savePlan
}

export default React.memo(SideBar, comp);