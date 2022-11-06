import styles from "./App.module.css";
import { useState, useEffect } from "react";
import data from "./data.json";

function App() {
  const columns = ["Status", "Name", "Date"];
  const [rowData, setRowData] = useState([]);
  const [newData, setNewData] = useState([]);
  const dateFormat = (date) => {
    let formatter =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 < 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());
    return formatter;
  };
  const getDatas = () => {
    setRowData(data);
  };
  function addRow() {
    const rowsInput = {
      Status: "",
      Name: "",
      Date: new Date(),
    };
    setRowData([...rowData, rowsInput]);
  }
  function deleteRow(e) {
    const rows = [...rowData];
    const index = e.target.dataset.row;
    rows.splice(index, 1);
    setRowData(rows);
  }
  function saveData() {}
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div className={styles.main}>
      <h1>PLANNING</h1>
      <div className={styles.container}>
        <div className={styles.area}>GOALS</div>
        <div className={styles.area}>
          <table>
            <tbody className={styles.table}>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
                <th>
                  <button onClick={addRow}>추가</button>
                </th>
              </tr>
              {rowData.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.Status}</td>
                  <td>{data.Name}</td>
                  <td>{dateFormat(new Date(data.Date))}</td>
                  <td>
                    <button data-row={idx} onClick={deleteRow}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={saveData}>저장</button>
        </div>
      </div>
    </div>
  );
}

export default App;
