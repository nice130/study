import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./new-sidebar.module.css";

const SideItems = ({ savePlan, setSavePlan }) => {
  const [addChild, setAddChild] = useState(false);
  const [child, setChild] = useState("");
  const onAddChild = (e) => {
    const targetIdx = e.target.closest("li").dataset.index;
    savePlan[targetIdx].hasChild = true;
    savePlan[targetIdx].child = [
      {
        title: "TEST",
        hasChild: false,
        onShow: false,
      },
    ];
    setSavePlan({
      ...savePlan,
    });
    setSavePlan([...savePlan]);
  };
  const clickArrow = (e) => {
    e.target.classList.toggle("rotate");
    const targetIdx = e.target.closest("li").dataset.index;
    savePlan[targetIdx].onShow = !savePlan[targetIdx].onShow;
    setSavePlan({
      ...savePlan,
    });
    setSavePlan([...savePlan]);
  };
  return (
    <ul>
      <li data-index='100'>
        <Link to={`/planning`} key='100' title='Planning'>
          <span className="fas fa-caret-right"></span>
            Planning
        </Link>
      </li>
      {savePlan.map((item, pindex) => (
        <>
          <li data-index={pindex}>
            <Link to={`/planning`} key={pindex} title={item.title}>
              <span className="fas fa-caret-right" onClick={clickArrow}></span>
              {item.title}
              <div className={styles.addList} onClick={onAddChild}>
                +
              </div>
            </Link>
          </li>
          {item.hasChild ? (
            <ul className={item.onShow? "serv-show show" : ""}>
              {item.child.map((item, idx) => (
                <>
                  <li data-index={idx} data-p-index={pindex}>
                    <Link to={`/`} key={idx} title={item.title}>
                      {/* <span 
          className="fas fa-caret-right" 
          onClick={clickArrow}></span> */}
                      {item.title}
                      {/* <div className={styles.addList} onClick={onAddChild}>
                        +
                      </div> */}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          ) : (
            ""
          )}
        </>
      ))}
    </ul>
  );
};

export default SideItems;
