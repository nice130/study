<<<<<<< Updated upstream
import { useState } from 'react';
import './App.css';
import styles from'./styles.module.css';
function App() {
  const {loading,setloading} = useState (true);
  const {value,setValue} = useState([]);
  const GoalsForm = (e) =>{

  };
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
                  <input ></input>
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
                <button >입력</button>
              </tr>
              
        </tbody>
=======
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = useState([]);
  function dateFormat(date) {
    let dateFormat =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 < 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());
    return dateFormat;
  }
  const getDatas = () => {
    setDatas([
      {
        Status: "Not Started",
        Name: "게임 만들기",
        Date: "2022-10-31",
      },
      {
        Status: "Active",
        Name: "자바스크립트 정복",
        Date: "2022-10-16",
      },
      {
        Status: "Active",
        Name: "리액트 정복",
        Date: "2022-11-13",
      },
    ]);
  };
  useEffect(() => {
    getDatas();
  }, []);
  console.log(datas);
  return (
    <div className="main">
      <h1>PLANNING</h1>
      <div className="container">
        <div className="area">GOALS</div>
        <div className="area">
          <table>
            <tbody className="table">
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Date</th>
              </tr>
              {datas.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.Status}</td>
                  <td>{data.Name}</td>
                  <td>{dateFormat(new Date(data.Date))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
