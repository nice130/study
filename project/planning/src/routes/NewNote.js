import styles from "./sidebar.module.css";
import { useEffect, useRef, useState } from 'react';

function NewNote({setModalOpen,setPlan,plan,savePlan,setSavePlan}){
    const closeModal= ()=>{
        setModalOpen(false);
    };
    const modalRef = useRef();

    useEffect(()=>{
        const handler = async e =>{
            let sideCildren = modalRef.current.contains(e.target);
            if(modalRef.current && !sideCildren){
                setModalOpen(false);
            }
        };
        document.addEventListener('mousedown',handler);
        return () =>{
            document.removeEventListener('mousedown',handler);
        };
    });
    const [isIdx,setIsIdx] = useState(0);
    const onChange =(e)=>{
        const {value} = e.target;
        setPlan({
            title : value,
        });
    }

    const save =()=>{
        setIsIdx(isIdx+1);
        setSavePlan(array=>[...array,plan]);
        setPlan("");
        setModalOpen(false);
    }
    
    return(
        <div ref={modalRef} className={styles.modalparent}>
            <button className={styles.but} onClick={closeModal}>
                X
            </button>
            <h2>New Plan</h2>
            <li className={styles.li}>플랜명</li>
            <input 
            className={styles.input} 
            onChange={onChange}
            value={plan.title}></input>
            <button onClick={save}>저장</button>
        </div>
    )
}
export default NewNote;