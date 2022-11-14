import React, {useRef, useState} from "react";
import styles from "./sidebar.module.css"
import Modal from 'react-modal';
const SideBar = ({width=250, setMainSize,mainSize})=>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(width);
    const side = useRef();

    const toggleMenu = () =>{
        setMainSize(mainSize ? false : true);
        if(xPosition>0){
            setX(0);
            setOpen(true);
        }else{
            setX(width);
            setOpen(false);
        }
    };
    const [sideColumns,setSideColumns] = useState([]);
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
    

    return (
        <div className={styles.container}>
          <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
              <button onClick={() => toggleMenu()}
              className={styles.button} >
                {isOpen ? 
                <span>X</span> : <span>O</span>
                }
              </button>
            
            <div className={styles.content}>PLAN LIST
                <button className={styles.plus} onClick={()=> setModalIsOpen(true)}>+</button>
                <div className={styles.modal}>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <input></input>
                    </Modal>
                </div>
            </div>
          </div>
        </div>
      );
}

export default SideBar;