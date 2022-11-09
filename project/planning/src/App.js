import { useState, useEffect } from 'react';
import styles from'./styles.module.css';
function App() {
  const [saveValues,setSaveValues] = useState([]);
  const [count,setCount] =useState(2);
  const [values,setValues] = useState({
    status:'',
    uname:'',
    area:'',
    year:'',
    date:'',
    progress:'',
  });
  const {
    status, uname, area, year, date, progress
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
    localStorage.setItem('1',saveValues);
    console.log(localStorage.getItem('1'));
    setValues({
      status:'',
      uname:'',
      area:'',
      year:'',
      date:'',
      progress:'',
    })
    setCount(count+1);
  };

  return (
    <div className={styles.main}>
     <img src={require('./img/fire.png')}/>
     <h1>PLANNING</h1>
      <tbody className={styles.body}>
        <tr>
          <td rowSpan={count} className={styles.th}>GOALS</td>
          <td className={styles.td}>Status</td>
          <td className={styles.td}>Name</td>
          <td className={styles.td}>Area</td>
          <td className={styles.td}>Year</td>
          <td className={styles.td}>Date</td>
          <td className={styles.td}>Progress</td>
        </tr>
        {saveValues.map((item,idx)=>(
          <tr data-row-idx={idx}>
            <td className={styles.saveTd}>
              <input name ="status" className={styles.input} value={item.status} onChange={onChange2} data-idx={idx}></input>
            </td>
            <td className={styles.saveTd}>
              <input name ="uname" className={styles.input} value={item.uname} onChange={onChange2} data-idx={idx}></input>
            </td>
            <td className={styles.saveTd}>
              <input name ="area" className={styles.input} value={item.area} onChange={onChange2} data-idx={idx}></input>  
            </td>
            <td className={styles.saveTd}>
              <input name ="year" className={styles.input} value={item.year} onChange={onChange2} data-idx={idx}></input>  
            </td>
            <td className={styles.saveTd}>
              <input name ="date" className={styles.input} value={item.date} onChange={onChange2} data-idx={idx}></input>  
            </td>
            <td className={styles.saveTd}>
              <input name ="progress" className={styles.input} value={item.progress} onChange={onChange2} data-idx={idx}></input>  
            </td>
            <td>
              <button className={styles.but} onClick={deleteRow}>x</button>
            </td>
          </tr>
        ))}
        <tr>
          <td className={styles.saveTd}>
            <input className={styles.input} name ="status" onChange={onChange} value={status} type='text'/>
          </td>
          <td className={styles.saveTd}>
            <input className={styles.input} name = "uname" onChange={onChange} value={uname} type='text'/>
          </td>
          <td className={styles.saveTd}>
            <input className={styles.input} name = "area" onChange={onChange} value={area} type='text'/>
          </td>
          <td className={styles.saveTd}>
            <input className={styles.input} name = "year" onChange={onChange} value={year} type='text'/>
          </td>
          <td className={styles.saveTd}>
            <input className={styles.input} name = "date" onChange={onChange} value={date} type='text'/>
          </td>
          <td className={styles.saveTd}>
            <input className={styles.input} name = "progress" onChange={onChange} value={progress} type='text'/>
          </td>
          <button className ={styles.but}onClick={onClick}>입력</button>
        </tr> 
        </tbody>
    </div>
    
  );
  
}

export default App;
