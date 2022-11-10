import { useState, useRef } from "react";
import styles from "./styles.module.css";
import { useParams, Link } from "react-router-dom";
import Detail from "./Detail";
import { useHistory } from "react-router-dom";

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
  const initObject = Object.keys(columns).reduce((object, value, index) => {
    object[value] = "";
    return object;
  }, {});
  const [saveValues, setSaveValues] = useState([]);
  const [newValues, setNewValues] = useState({ ...initObject });
  const textarea = useRef();

  const HandleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  const showDetail = (idx) => [...saveValues][idx];
  const testData = {
    a: 1,
    b: 2,
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

  const history = useHistory();
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
                    <button className={styles.btn}>
                      {/* <Link to={`/detail/${idx}`} state={{ test: "hello" }}>
                        MORE
                      </Link> */}
                      <Link
                        to={{
                          pathname: `/detail/${idx}`,
                          state: { targetItem: item },
                        }}
                      >
                        MORE
                      </Link>
                    </button>
                    <button className={styles.btn} onClick={deleteRow}>
                      X
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                {Object.keys(initObject).map((item) => {
                  return (
                    <td>
                      <input
                        placeholder={columns[item].placeholder}
                        className={styles.td}
                        name={item}
                        onChange={onChange}
                        value={newValues[item]}
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
    </div>
  );
}

export default Home;
