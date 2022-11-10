<div className={styles.main}>
  <img src={require("../img/fire.png")} />
  <h1>PLANNING</h1>
  <table>
    <tbody className={styles.body}>
      <tr>
        <th rowSpan={count} className={styles.th}>
          GOALS
        </th>
        {Object.keys(columns).map((item, idx) => (
          <th className={styles.td}>{item}</th>
        ))}
      </tr>
      {saveValues.length > 0
        ? saveValues.map((item, idx) => (
            <tr data-row-idx={idx}>
              <input
                name="status"
                className={styles.td}
                value={item.status}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <input
                name="uname"
                className={styles.td}
                value={item.uname}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <input
                name="cname"
                className={styles.td}
                value={item.cname}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <input
                name="area"
                className={styles.td}
                value={item.area}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <input
                name="year"
                className={styles.td}
                value={item.year}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <input
                name="date"
                className={styles.td}
                value={item.date}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <input
                name="progress"
                className={styles.td}
                value={item.progress}
                onChange={onEdit}
                data-idx={idx}
              ></input>
              <button onClick={() => toggleDetail()} className={styles.btn}>
                자세히
              </button>
              <button className={styles.btn} onClick={deleteRow}>
                제거
              </button>
            </tr>
          ))
        : null}
      <tr>
        {Object.entries(columns).map((item) => {
          const [key, value] = item;
          return (
            <td>
              <input
                placeholder={value.placeholder}
                className={styles.td}
                name={key}
                onChange={onChange}
                value={values.key}
                type="text"
              />
            </td>
          );
        })}
        <button className={styles.btn} onClick={onInputData}>
          입력
        </button>
      </tr>
      <tr className={isDetail ? styles.show : styles.hide}>
        <Detail />
      </tr>
    </tbody>
  </table>
</div>;
