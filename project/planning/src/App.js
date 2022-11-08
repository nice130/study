import { useState, useEffect } from 'react';
import styles from'./styles.module.css';
function App() {
  const [colums,setColums] = useState([]);
  const [saveValues,setSaveVluese] = useState([]);
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

  const deleteRow = (e)=>{
    const rows = [...saveValues];
    const idx = e.target.closest('tr').dataset.rowIdx;
    rows.splice(idx,1);
    setSaveVluese(rows);
  }

  const onClick = () =>{
    setSaveVluese(currentArray =>[...currentArray,values]);
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
    <div>
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
              <input className={styles.input} value={item.status} onChange={onChange}></input>
            </td>
            <td className={styles.saveTd}>
              <input className={styles.input} value={item.uname} onChange={onChange}></input>
            </td>
            <td className={styles.saveTd}>
              <input className={styles.input} value={item.area} onChange={onChange}></input>  
            </td>
            <td className={styles.saveTd}>
              <input className={styles.input} value={item.year} onChange={onChange}></input>  
            </td>
            <td className={styles.saveTd}>
              <input className={styles.input} value={item.date} onChange={onChange}></input>  
            </td>
            <td className={styles.saveTd}>
              <input className={styles.input} value={item.progress} onChange={onChange}></input>  
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
