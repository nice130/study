import { useState, useEffect } from 'react';
import './App.css';
import styles from'./styles.module.css';
function App() {
  const {loading,setloading} = useState(true);
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
  // useEffect(setloading(false),[])
  const onChange = (e)=>{
    const {name, value} = e.target;
     setValues ({
      ...values,
      [name] : value,
    })
  }; 
  const onClick = () =>{
    setSaveVluese(currentArray =>[values,...currentArray]);
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
    <div>{loading ? (<h1>Loading...</h1>) :(<div>
     <div>PLANNING</div>
      <tbody>
        <tr>
          <td rowSpan={count} className={styles.th}>GOALS</td>
          <td className={styles.td}>Status</td>
          <td className={styles.td}>Name</td>
          <td className={styles.td}>Area</td>
          <td className={styles.td}>Year</td>
          <td className={styles.td}>Date</td>
          <td className={styles.td}>Progress</td>
        </tr>
        {saveValues.map((item)=>(
          <tr>
            <td className={styles.saveTd}>{item.status}</td>
            <td className={styles.saveTd}>{item.uname}</td>
            <td className={styles.saveTd}>{item.area}</td>
            <td className={styles.saveTd}>{item.year}</td>
            <td className={styles.saveTd}>{item.date}</td>
            <td className={styles.saveTd}>{item.progress}</td>
          </tr>
        ))}
        <tr>
          <td className={styles.td}>
            <input className={styles.input} name ="status" onChange={onChange} value={status} type='text'/>
          </td>
          <td className={styles.td}>
            <input className={styles.input} name = "uname" onChange={onChange} value={uname} type='text'/>
          </td>
          <td className={styles.td}>
            <input className={styles.input} name = "area" onChange={onChange} value={area} type='text'/>
          </td>
          <td className={styles.td}>
            <input className={styles.input} name = "year" onChange={onChange} value={year} type='text'/>
          </td>
          <td className={styles.td}>
            <input className={styles.input} name = "date" onChange={onChange} value={date} type='text'/>
          </td>
          <td className={styles.td}>
            <input className={styles.input} name = "progress" onChange={onChange} value={progress} type='text'/>
          </td>
          <button className ={styles.but}onClick={onClick}>입력</button>
        </tr> 
        </tbody>
    </div>)
}
    </div>
  );
  
}

export default App;
