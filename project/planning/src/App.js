import { useState } from 'react';
import './App.css';
import styles from'./styles.module.css';
function App() {
  const {loading,setloading} = useState (true);
  
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : <div>PLANNING</div>}
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
                  <input></input>
                </td>
                <td className={styles.td}>
                  <input></input>
                </td>
                <td className={styles.td}>
                  <input></input>
                </td>
                <td className={styles.td}>
                  <input></input>
                </td>
                <td className={styles.td}>
                  <input></input>
                </td>
                <td className={styles.td}>
                  <input></input>
                </td>
              </tr>
              <button>저장</button>
        </tbody>
    </div>
  );
}

export default App;
