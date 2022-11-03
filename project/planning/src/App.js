import { useState } from 'react';
import './App.css';
import styles from'./styles.module.css';
function App() {
  const {loading,setloading} = useState (true);
  const {values,setValues} = useState({
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
     setValues = {
      ...values,
      [name] : value,
    }
    
  };

  const onClick = (e) =>{
    const {name, value} = e.target;
    console.log(values.status);
    setValues('');
  }
  // setloading(false);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>PLANNING</div>}
      <tbody>
          <th rowSpan="3" className={styles.th}>GOALS</th>
              <tr>
                <td className={styles.td}>Status</td>
                <td className={styles.td}>Name</td>
                <td className={styles.td}>Area</td>
                <td className={styles.td}>Year</td>
                <td className={styles.td}>Date</td>
                <td className={styles.td}>Progress</td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <input name ="status" onChange={onChange} value={status} />
                </td>
                <td className={styles.td}>
                  <input name = "uname" onChange={onChange} value={uname}/>
                </td>
                <td className={styles.td}>
                  <input name = "area" onChange={onChange} value={area}/>
                </td>
                <td className={styles.td}>
                  <input name = "year" onChange={onChange} value={year}/>
                </td>
                <td className={styles.td}>
                  <input name = "date" onChange={onChange} value={date}/>
                </td>
                <td className={styles.td}>
                  <input name = "progress" onChange={onChange} value={progress}/>
                </td>
                <button onClick={onClick}>입력</button>
              </tr>
              
        </tbody>
    </div>
  );
}

export default App;
