import styles from "./sidebar.module.css";
import mainStyles from "./styles.module.css";
import { useEffect, useRef } from 'react';

function NewNote({setModalOpen,setPlan}){
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

    const onChange =(e)=>{
        setPlan=e.target.value;
        console.log(setPlan);
    }
    
    return(
        <div ref={modalRef} className={styles.modalparent}>
            <button className={styles.but} onClick={closeModal}>
                X
            </button>
            <h2>New Plan</h2>
            <li>플랜명</li>
            <input className={styles.input} onChange={onChange}></input>
            <li></li>
        </div>
    )
}
export default NewNote;