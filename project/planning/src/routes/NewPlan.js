import styles from './styles.module.css';
import SideBar from './SideBar';
import {useState} from 'react';
function NewPlan(title){
    const [mainSize,setMainSize] = useState(true);
    console.log(title);
    return(
        <div>
            <SideBar width={250} setMainSize={setMainSize} mainSize={mainSize}/>
            <div className={mainSize ? styles.smallmain : styles.bigmain }>
                <h1 style={{marginTop:'20px',marginLeft:'47%'}}>메모장</h1>
                <textarea style={{width: '100%',marginTop:'10px',marginLeft:'250px',marginTop:'10px',height:'200px',padding: '10px',textAlign:'center'}}></textarea>
                <textarea style={{width: '100%',marginTop:'10px',marginLeft:'250px',marginTop:'50px',height:'200px',padding: '10px',textAlign:'center'}}></textarea>
            </div>
        </div>
    )
}

export default NewPlan;