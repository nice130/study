import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./new-sidebar.module.css";

const SideItems = ({savePlan, setSavePlan}) => {
  const [addChild, setAddChild] = useState(false);
   // $('.serv-btn').click(function (e) {
  //   $(e.target.nextElementSibling).toggleClass('show');
  //   $(e.target.children).toggleClass('rotate');
  // })
  // $('nav ul li').click(function (e) {
  //   console.log(this);
  //   $(this).addClass('active').siblings().removeClass('active');
  // })
  const [child, setChild] = useState("");
  const onAddChild = (e) => {
    const targetIdx = e.target.closest("li").dataset.index;
    savePlan[targetIdx].hasChild = true;
      savePlan[targetIdx].child = [{
        title : "",
        hasChild : false,
    }]
    setSavePlan ({
      ...savePlan,
    })
    setSavePlan([...savePlan]);
  }
  const clickArrow = (e) => {
    e.target.classList.toggle("rotate");
    e.target.closest('a').toggle('show');
  };
  console.log(savePlan);
  return (
  <ul>
    {savePlan.map((item, idx) => (
      <li data-index={idx}>
        <Link to={`/planning`} key={idx} title={item.title}>
          <span className="fas fa-caret-right" onClick={clickArrow}></span>
          {item.title}
          <div className={styles.addList} onClick={onAddChild}>
            +
          </div>
          {item.hasChild ? <div>Have ad child</div> : ""}
        </Link>
      </li>
    ))}
  </ul>)
};


export default SideItems;