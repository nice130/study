import { useState } from 'react';
import './App.css';
import styles from'./styles.module.css';
function App() {
  // const {loading,setloading} = useState (true);
  const [saveValues,setSaveVluese] = useState();
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
  
  const addtr = () =>{
    return(
      <tr>
          <td className={styles.td}>{status}</td>
          <td className={styles.td}>{uname}</td>
          <td className={styles.td}>{area}</td>
          <td className={styles.td}>{year}</td>
          <td className={styles.td}>{date}</td>
          <td className={styles.td}>{progress}</td>
      </tr>
    );
  }

  const onClick = () =>{
    setValues(values);
    setValues({
      status:'',
      uname:'',
      area:'',
      year:'',
      date:'',
      progress:'',
    })
    console.log({status});
    addtr();
  };
  // setloading(false);
  return (
    <div>
     <div>PLANNING</div>
      <tbody>
          
              <tr>
                <td rowSpan="3" className={styles.th}>GOALS</td>
                <td className={styles.td}>Status</td>
                <td className={styles.td}>Name</td>
                <td className={styles.td}>Area</td>
                <td className={styles.td}>Year</td>
                <td className={styles.td}>Date</td>
                <td className={styles.td}>Progress</td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <input name ="status" onChange={onChange} value={status} type='text'/>
                </td>
                <td className={styles.td}>
                  <input name = "uname" onChange={onChange} value={uname} type='text'/>
                </td>
                <td className={styles.td}>
                  <input name = "area" onChange={onChange} value={area} type='text'/>
                </td>
                <td className={styles.td}>
                  <input name = "year" onChange={onChange} value={year} type='text'/>
                </td>
                <td className={styles.td}>
                  <input name = "date" onChange={onChange} value={date} type='text'/>
                </td>
                <td className={styles.td}>
                  <input name = "progress" onChange={onChange} value={progress} type='text'/>
                </td>
                <button onClick={onClick}>입력</button>
              </tr>
              
        </tbody>
    </div>
  );
}

export default App;
