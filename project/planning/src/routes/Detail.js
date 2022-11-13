import styles from'./styles.module.css';
import { useState } from 'react';
import Home from './Home'
const columns = {
    status: { placeholder: "진행단계", value: "" },
    uname: { placeholder: "멤버이름", value: "" },
    cname: { placeholder: "프로젝트이름", value: "" },
    area: { placeholder: "목적", value: "" },
    year: { placeholder: "년도", value: "" },
    date: { placeholder: "기간", value: "" },
    progress: { placeholder: "진행정도", value: "" },
};
function Detail(props){
    const prop = props.props;
    const onClose = () =>{
        props.isDetail(false);
    }
    const [saveValues,setSaveValues] = useState([]);
    const initObject = Object.keys(columns).reduce((object, value) => {
        object[value] = "";
        return object;
      }, {});
    const [values,setValues] = useState({...initObject});
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
        setSaveValues(rows);
    }
    const onChange2 = (e)=>{
        const {name, value} = e.target;
        const idx = e.target.dataset.idx;
        saveValues[idx][name] = value;
        setSaveValues ({
          ...saveValues[idx],
          [name] : value,
        })
        setSaveValues([...saveValues],[saveValues]);
      }; 
    const onClick = () =>{
        setSaveValues(currentArray =>[...currentArray,values]);
        setValues({...initObject})
      };
    return (
        <div className={styles.detail}>
            <button className={styles.butHide} onClick={()=>{onClose(false)}}>X</button><h1><img src={require('../img/fire.png')}/>{prop.cname}</h1>
            <li>Area : {prop.area}</li>
            <li>Date : {prop.date}</li>
            <li>progress : {prop.progress}</li>
            <li>ProjectName : {prop.cname}</li>
            <li>status : {prop.status}</li>
            <li>Year : {prop.year}</li>
            <h2>표</h2>
            <tr>
                <td className={styles.td}>Status</td>
                <td className={styles.td}>MemberName</td>
                <td className={styles.td}>ProjectName</td>
                <td className={styles.td}>Area</td>
                <td className={styles.td}>Year</td>
                <td className={styles.td}>Date</td>
                <td className={styles.td}>Progress</td>
            </tr>
                {saveValues.map((item,idx)=>(
                    <tr data-row-idx={idx}>
                            <td className={styles.dtd}>
                        <input name ="status" className={styles.mapinput} value={item.status} onChange={onChange2} data-idx={idx}></input>
                        </td>
                            <td className={styles.dtd}>
                        <input name ="uname" className={styles.mapinput} value={item.uname} onChange={onChange2} data-idx={idx}></input>
                        </td>
                            <td className={styles.dtd}>
                        <input name ="cname" className={styles.mapinput} value={item.cname} onChange={onChange2} data-idx={idx}></input>
                        </td>
                            <td className={styles.dtd}>
                        <input name ="area" className={styles.mapinput} value={item.area} onChange={onChange2} data-idx={idx}></input>  
                        </td>
                            <td className={styles.dtd}>
                        <input name ="year" className={styles.mapinput} value={item.year} onChange={onChange2} data-idx={idx}></input>  
                        </td>
                            <td className={styles.dtd}>
                        <input name ="date" className={styles.mapinput} value={item.date} onChange={onChange2} data-idx={idx}></input>  
                        </td>
                            <td className={styles.dtd}>
                        <input name ="progress" className={styles.mapinput} value={item.progress} onChange={onChange2} data-idx={idx}></input>  
                        </td>
            
                        <button className={styles.but} onClick={deleteRow}>제거</button>
                    </tr>
                ))}
            <tr>
                {Object.keys(initObject).map((item) => {
                    return (
                        <td className={styles.dtd}>
                            <input
                                placeholder={columns[item].placeholder}
                                className={styles.mapinput}
                                name={item}
                                onChange={onChange}
                                value={values[item]}
                            />
                        </td>
                    );
                })}
                <button className ={styles.but}onClick={onClick}>목표추가</button>
            </tr>
        </div>
    );
}
export default Detail;