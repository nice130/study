import { useState } from 'react';
import styles from'./styles.module.css';
import Detail from './Detail';

function Home(){
  const [isDetail,setIsDetail] = useState(false);
  const toggleDetail = (e) =>{
    const {name, value} = e.target;
    const idx = e.target.dataset.idx;
    
    setIsDetail(isDetail=>!isDetail);
  }  
  const [saveValues,setSaveValues] = useState([]);
  const [count,setCount] =useState(2);
  const [values,setValues] = useState({
    status:'',
    uname:'',
    area:'',
    year:'',
    date:'',
    progress:'',
    cname:'',
  });
  const {
    status, uname, area, year, date, progress,cname
  } = values;
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
    setValues({
      status:'',
      uname:'',
      area:'',
      year:'',
      date:'',
      progress:'',
      uname:'',
      cname:''
    })
    setCount(count+1);
  };

  return (
    <div className={styles.main}>
     <img src={require('../img/fire.png')}/>
     <h1>PLANNING</h1>
      <tbody className={styles.body}>
        <tr>
          <td rowSpan={count} className={styles.th}>GOALS</td>
          <td className={styles.td}>Status</td>
          <td className={styles.td}>MemberName</td>
          <td className={styles.td}>ProjectName</td>
          <td className={styles.td}>Area</td>
          <td className={styles.td}>Year</td>
          <td className={styles.td}>Date</td>
          <td className={styles.td}>Progress</td>
        </tr>
        {saveValues.map((item,idx)=>(
          <tr data-row-idx={idx}>
            <td className={isDetail ? styles.show : styles.hide}>
              <Detail props={item}/>  
            </td>
              <input name ="status" className={styles.td} value={item.status} onChange={onChange2} data-idx={idx}></input>
              <input name ="uname" className={styles.td} value={item.uname} onChange={onChange2} data-idx={idx}></input>
              <input name ="cname" className={styles.td} value={item.cname} onChange={onChange2} data-idx={idx}></input>
              <input name ="area" className={styles.td} value={item.area} onChange={onChange2} data-idx={idx}></input>  
              <input name ="year" className={styles.td} value={item.year} onChange={onChange2} data-idx={idx}></input>  
              <input name ="date" className={styles.td} value={item.date} onChange={onChange2} data-idx={idx}></input>  
              <input name ="progress" className={styles.td} value={item.progress} onChange={onChange2} data-idx={idx}></input>  
              <button onClick={toggleDetail} data-idx={idx} className={styles.but}>자세히</button>
              <button className={styles.but} onClick={deleteRow}>제거</button>
          </tr>
        ))}
        <tr>
            <input placeholder="진행단계" className={styles.td} name ="status" onChange={onChange} value={status} type='text'/>
            <input placeholder="멤버이름" className={styles.td} name = "uname" onChange={onChange} value={uname} type='text'/>
            <input placeholder="프로젝트이름" className={styles.td} name = "cname" onChange={onChange} value={cname} type='text'/>
            <input placeholder="목적" className={styles.td} name = "area" onChange={onChange} value={area} type='text'/>
            <input placeholder="년도"  className={styles.td} name = "year" onChange={onChange} value={year} type='text'/>
            <input placeholder="기간"  className={styles.td} name = "date" onChange={onChange} value={date} type='text'/>
            <input placeholder="진행정도"  className={styles.td} name = "progress" onChange={onChange} value={progress} type='text'/>
          <button className ={styles.but}onClick={onClick}>입력</button>
        </tr> 
        </tbody>
        
    </div>
  );
}

export default Home;