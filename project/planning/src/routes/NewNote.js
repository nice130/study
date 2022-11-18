import styles from "./sidebar.module.css";
import mainStyles from "./styles.module.css";
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
        const value = e.target.value;
        
        plan = value;
        setPlan({
            ...plan[isIdx],
            value
        });
        setPlan([...plan],[plan]);
        console.log(plan);
    }

    const save =()=>{
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
            <style jsx>
                {`
                    div{
                        color: rgba(241, 221, 221, 0.37);
                    }
                    img,input{
                        filter:blur(1px);
                    }
                `}
            </style>
            <h2>New Plan</h2>
            <li className={styles.li}>플랜명</li>
            <input className={styles.input} onChange={onChange} value={plan}></input>
            <button onClick={save}>저장</button>
        </div>
    )
}
export default NewNote;