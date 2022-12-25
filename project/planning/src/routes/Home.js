import {useState,useEffect} from 'react';
import styles from './styles.module.css';
function Home({toggled, setToggled}){
    const [mainInput,setMianInput] = useState();
    
    const onChange =(e)=>{
        const value=e.target.value;
        setMianInput(value);
    }

    useEffect(()=>{
        const mainstory= '안녕하세요. 이 페이지는 팀플작업 플랜을 적거나 중요 내용을 적어 공유할수 있게 만들 TEAM PLANNING BOARD 웹 페이지 입니다. 좌측 상단에 메뉴 버튼을 클릭하여 기본 플래닝에 들어가 계획을 작성하거나 새로운 플레닝 노트를 만들어 자유롭게 메모를 해보세요!'
        setMianInput(mainstory);
        
    },[])

    return(
        <div>
            <div className={toggled ? styles.smallmain : styles.bigmain }>
                <h1 style={{margin: 'auto',width: '70%',padding: '10px',textAlign:'center'}}>Team Planning Board</h1>
                <div className={styles.home_div}>
                    <textarea className={styles.home_input} onChange={onChange} value={mainInput}></textarea>
                    <img style={{float:'left',width: '60%',height:'auto'}} src={require('../img/main.gif')} alt='main'/>
                </div>
                <div className={styles.home_div}>
                </div>
            </div>
        </div>
        
    )
}
export default Home;