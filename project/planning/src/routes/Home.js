import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ToggleDetail from "./ToggleDetail";

const columns = {
  Status: { placeholder: "진행단계", value: "" },
  MemberName: { placeholder: "멤버이름", value: "" },
  ProjectName: { placeholder: "프로젝트이름", value: "" },
  Area: { placeholder: "목적", value: "" },
  Year: { placeholder: "년도", value: "" },
  Date: { placeholder: "기간", value: "" },
  Progress: { placeholder: "진행정도", value: "" },
};
function Home() {
  const [toggleObj,setToggleObj] = useState({});
  const initObject = Object.keys(columns).reduce((object, value, index) => {
    object[value] = "";
    return object;
  }, {});
  const [isDetail,setIsDetail] = useState(false);
  const [saveValues, setSaveValues] = useState([]);
  const [newValues, setNewValues] = useState({ ...initObject });
  const getItem = idx => saveValues[idx];
  const toggleOn = (e) => {
    const idx = e.target.closest("tr").dataset.rowIdx;
    setToggleObj(getItem(idx));
    console.log(toggleObj);
    return setIsDetail(isDetail=>!isDetail);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setNewValues({
      ...newValues,
      [name]: value,
    });
  };

  const onEdit = (e) => {
    const { name, value } = e.target;
    const idx = e.target.dataset.idx;
    saveValues[idx][name] = value;
    setSaveValues({
      ...saveValues[idx],
      [name]: value,
    });
    setSaveValues([...saveValues], [saveValues]);
  };

  const deleteRow = (e) => {
    const rows = [...saveValues];
    const idx = e.target.closest("tr").dataset.rowIdx;
    rows.splice(idx, 1);
    setSaveValues(rows);
  };

  const onInputData = () => {
    setSaveValues([...saveValues, newValues]);
    setNewValues({ ...initObject });
  };

  return (
    <div className={styles.main}>
      {/* <img src={require("../img/fire.png")} /> */}
      <h1>PLANNING</h1>
      <div className={styles.container}>
        <div className={styles.area}>GOALS</div>
        <div className={styles.area}>
          <table>
            <tbody className={styles.body}>
              <tr>
                {Object.keys(columns).map((item, idx) => (
                  <th className={styles.td}>{item}</th>
                ))}
                <th>-</th>
              </tr>
              {saveValues.map((item, idx) => (
                <tr data-row-idx={idx}>
                  {Object.keys(columns).map((key) => (
                    <td>
                      <input
                        name={key}
                        className={styles.td}
                        value={item[key]}
                        onChange={onEdit}
                        data-idx={idx}
                      />
                    </td>
                  ))}

                  <td>
                    <button onClick={toggleOn} className={styles.btn}>MORE
                      {/* <Link 
                      to={`/detail/${idx}`} 
                      state={{ test: "hello" }}>
                        MORE
                      </Link> */}
                      {/* <Link
                        to={{
                          pathname: `/detail/${idx}`,
                          state: getItem(idx),
                        }}
                      >
                        MORE
                      </Link> */}
                    </button>
                    <button className={styles.btn} onClick={deleteRow}>
                      X
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                {Object.keys(initObject).map((key) => {
                  return (
                    <td>
                      <input
                        placeholder={columns[key].placeholder}
                        className={styles.td}
                        name={key}
                        onChange={onChange}
                        value={newValues[key]}
                        type="text"
                      />
                    </td>
                  );
                })}
                <td>
                  <button className={styles.btn} onClick={onInputData}>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> 
      <div 
      className={isDetail ? styles.show : styles.hide}>
        <ToggleDetail targetObj={toggleObj}/>
      </div>
    </div>
  );
}

export default Home;
