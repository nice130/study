import styles from './styles.module.css';
import SideBar from './SideBar';
import {useState} from 'react';
function NewPlan(title){
    const [mainSize,setMainSize] = useState();
    console.log(title);
    return(
        <div>
            <SideBar width={250} setMainSize={setMainSize} mainSize={mainSize}/>
            <div className={mainSize ? styles.smallmain : styles.bigmain }>
                <h1>새로운페이지</h1>
            </div>
        </div>
    )
}

export default NewPlan;