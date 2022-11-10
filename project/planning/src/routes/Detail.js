import styles from'./styles.module.css';
import { useState } from 'react';

function Detail(props){
    const [saveValues,setSaveValues] = useState([]);
    const [values,setValues] = useState({
        status:'',
        uname:'',
        area:'',
        year:'',
        date:'',
        progress:'',
        cname:'',
    });
    const {
        status, uname, area, year, date, progress,cname
    } = values;
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
    const prop = props.props;
    const name = prop.constructor.name;
    
    const onClick = () =>{
        setSaveValues(currentArray =>[...currentArray,values]);
        setValues({
          status:'',
          uname:'',
          area:'',
          year:'',
          date:'',
          progress:'',
          uname:'',
          cname:''
        })
      };
    return (
        <div className={styles.detail}>
            <button className={styles.butHide}>X</button><h1><img src={require('../img/fire.png')}/>{prop.cname}</h1>
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
                        <input name ="status" className={styles.td} value={item.status} onChange={onChange2} data-idx={idx}></input>
                        <input name ="uname" className={styles.td} value={item.uname} onChange={onChange2} data-idx={idx}></input>
                        <input name ="cname" className={styles.td} value={item.cname} onChange={onChange2} data-idx={idx}></input>
                        <input name ="area" className={styles.td} value={item.area} onChange={onChange2} data-idx={idx}></input>  
                        <input name ="year" className={styles.td} value={item.year} onChange={onChange2} data-idx={idx}></input>  
                        <input name ="date" className={styles.td} value={item.date} onChange={onChange2} data-idx={idx}></input>  
                        <input name ="progress" className={styles.td} value={item.progress} onChange={onChange2} data-idx={idx}></input>  
                        <button className={styles.but} onClick={deleteRow}>제거</button>
                    </tr>
                ))}
            <tr>
                <input placeholder="진행단계" className={styles.td} name ="status" onChange={onChange} value={status} type='text'/>
                <input placeholder="멤버이름" className={styles.td} name = "uname" onChange={onChange} value={uname} type='text'/>
                <input placeholder="임무명" className={styles.td} name = "cname" onChange={onChange} value={cname} type='text'/>
                <input placeholder="목적" className={styles.td} name = "area" onChange={onChange} value={area} type='text'/>
                <input placeholder="년도"  className={styles.td} name = "year" onChange={onChange} value={year} type='text'/>
                <input placeholder="기간"  className={styles.td} name = "date" onChange={onChange} value={date} type='text'/>
                <input placeholder="진행정도"  className={styles.td} name = "progress" onChange={onChange} value={progress} type='text'/>
                <button className ={styles.but}onClick={onClick}>목표추가</button>
            </tr>
        </div>
    );
}
export default Detail;