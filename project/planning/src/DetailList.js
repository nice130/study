import React from "react"
import styles from'./styles.module.css';
const DetailList = (props) => {
    console.log(props.values);
  return (
    <>
    {props.values && props.values.map((item,i)=>(
        <tr key={i}>
            <td className={styles.td}>{item.status}</td>
            <td className={styles.td}>{item.uname}</td>
            <td className={styles.td}>{item.area}</td>
            <td className={styles.td}>{item.year}</td>
            <td className={styles.td}>{item.date}</td>
            <td className={styles.td}>{item.progress}</td>
        </tr>    
    ))}
    </>
  )
}

export default DetailList