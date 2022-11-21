import { useState } from 'react';
import styles from'./styles.module.css';
import Detail from './Detail';
import Sidebar from './SideBar';

const columns = {
  status: { placeholder: "진행단계", value: "" },
  uname: { placeholder: "멤버이름", value: "" },
  cname: { placeholder: "프로젝트이름", value: "" },
  area: { placeholder: "목적", value: "" },
  year: { placeholder: "년도", value: "" },
  date: { placeholder: "기간", value: "" },
  progress: { placeholder: "진행정도", value: "" },
};

function Home(){
  const initObject = Object.keys(columns).reduce((object, value) => {
    object[value] = "";
    return object;
  }, {});
  const [val,setVal] =useState({});
  const [mainSize,setMainSize] = useState(true);
  const [isDetail,setIsDetail] = useState(false);
  const toggleDetail = (e) =>{
    const idx = e.target.dataset.idx;
    setVal(saveValues[idx]);
    setIsDetail(isDetail=>!isDetail);
  }

  const [saveValues,setSaveValues] = useState([]);
  const [count,setCount] =useState(2);
  const [values,setValues] = useState({...initObject});
  
  const onChange = (e)=>{
    const {name, value} = e.target;
     setValues ({
      ...values,
      [name] : value,
    })
  }; 

  const onChange2 = (e)=>{
    const {name, value} = e.target;
    const idx = e.target.dataset.idx;
    saveValues[idx][name] = value;
    setSaveValues ({
      ...saveValues[idx],
      [name] : value,
    })
    setSaveValues([...saveValues],[saveValues]);
  }; 

  const deleteRow = (e)=>{
    const rows = [...saveValues];
    const idx = e.target.closest('tr').dataset.rowIdx;
    rows.splice(idx,1);
    setSaveValues(rows);
  }

  const onClick = () =>{
    setSaveValues(currentArray =>[...currentArray,values]);
    setValues({...initObject})
    setCount(count+1);
  };

  return (
    <div className={styles.main}>
      <Sidebar width={250} setMainSize={setMainSize} mainSize={mainSize}/>
      <div className={mainSize ? styles.smallmain : styles.bigmain }>
        <td id="toggle" className={isDetail ? styles.show : styles.hide}>
          <Detail props={val} isDetail={setIsDetail} />
        </td>
      <img src={require('../img/fire.png')} alt='fire'/>
      <h1>PLANNING</h1>
        <tbody className={styles.body}>
          <tr>
            <td rowSpan={count} className = {styles.subTitle}>GOALS</td>
            <td className={styles.td}>Status</td>
            <td className={styles.td}>MemberName</td>
            <td className={styles.td}>ProjectName</td>
            <td className={styles.td}>Area</td>
            <td className={styles.td}>Year</td>
            <td className={styles.td}>Date</td>
            <td className={styles.td}>Progress</td>
          </tr>
          {saveValues.map((item,idx)=>(
            <tr data-row-idx={idx} key={idx}>
              <td className={styles.td}>
                <input name ="status" className={styles.mapinput} value={item.status} onChange={onChange2} data-idx={idx}></input>
              </td>
              <td className={styles.td}>
                <input name ="uname" className={styles.mapinput} value={item.uname} onChange={onChange2} data-idx={idx}></input>
              </td>
              <td className={styles.td}>
                <input name ="cname" className={styles.mapinput} value={item.cname} onChange={onChange2} data-idx={idx}></input>
              </td>
              <td className={styles.td}>
                <input name ="area" className={styles.mapinput} value={item.area} onChange={onChange2} data-idx={idx}></input>  
              </td>
              <td className={styles.td}>
                <input name ="year" className={styles.mapinput} value={item.year} onChange={onChange2} data-idx={idx}></input>  
              </td>
              <td className={styles.td}>
                <input name ="date" className={styles.mapinput} value={item.date} onChange={onChange2} data-idx={idx}></input>  
              </td>              
              <td className={styles.td}>
                <input name ="progress" className={styles.mapinput} value={item.progress} onChange={onChange2} data-idx={idx}></input>  
              </td>
              <td>
                <button onClick={toggleDetail} data-idx={idx} item = {item} className={styles.but}>자세히</button>  
              </td>
              <td>
                <button className={styles.but} onClick={deleteRow}>제거</button>
              </td>
            </tr>
          ))}
          <tr>
            {/* init 모듈화 하기 */}
              {Object.keys(initObject).map((item) => {
                return (
                  <td className={styles.td}>
                    <input
                      placeholder={columns[item].placeholder}
                      className={styles.input}
                      name={item}
                      onChange={onChange}
                      value={values[item]}
                      type="text"
                    />
                  </td>
                );
              })}
            <button className ={styles.but}onClick={onClick}>입력</button>
          </tr> 
          </tbody>
        </div>
    </div>
  );
}

export default Home;