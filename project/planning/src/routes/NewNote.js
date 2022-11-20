import styles from "./sidebar.module.css";
import { useEffect, useRef, useState } from 'react';

function NewNote({setModalOpen,setPlan,plan,savePlan,setSavePlan}){
    console.log(plan);
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
        plan = e.target.value;
        setPlan(plan);
    }

    const save =()=>{
        console.log(plan);
        setIsIdx(isIdx+1);
        console.log(isIdx);
        setSavePlan(array=>[...array,plan]);
        console.log(savePlan);
        setPlan("");
        
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
            value={plan}></input>
            <button onClick={save}>저장</button>
        </div>
    )
}
export default NewNote;