import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./sidebar.module.css";
import styles from "./new-sidebar.module.css";
import NewNote from "./NewNote";
import commCss from "../styles.css"

const SideBar = ({ width = 250, setMainSize, mainSize }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [plan, setPlan] = useState("");
  const side = useRef();
  const [savePlan, setSavePlan] = useState([]);
  
  // $('.serv-btn').click(function (e) {
  //   $(e.target.nextElementSibling).toggleClass('show');
  //   $(e.target.children).toggleClass('rotate');
  // })
  // $('nav ul li').click(function (e) {
  //   console.log(this);
  //   $(this).addClass('active').siblings().removeClass('active');
  // })
  const showModal = () => {
    setModalOpen(true);
  };
  const toggleSetting = () => {
    setToggled(!toggled);
  }
  const clickList = () => {
    setClicked(!clicked);
  }
  useEffect(()=>{
    // side.classList.add('hide');
  })
  return (
    <div>
      <div
        className={styles.side_toggle}
        onMouseOver={toggleSetting}
        >
        {/* <span 
        className="fas fa-bars"
        ></span> */}
      </div>
      <nav
      ref={side} 
      onMouseLeave={toggleSetting}
      className={toggled ? styles.side_bar__show : styles.side_bar}
      >
      <div className={styles.side_bar__main}>
        <Link to={"/"}>PLAN LIST</Link>
        </div>
        <ul>
            <li onClick={clickList}>
                <Link to={`/planning`}>
                <span className={`fas fa-caret-right ${!clicked?styles.rotate:styles.not_rotate}`}></span>
                    Planning
                <div className={styles.addList}>+</div>
                </Link>
            </li>
            <li onClick={clickList}>
                <Link to={`/planning`}>
                <span className={`fas fa-caret-right ${!clicked?styles.rotate:styles.not_rotate}`}></span>
                    Planning
                <div className={styles.addList}>+</div>
                </Link>
            </li>   
            <li onClick={clickList}>
                <Link to={`/planning`}>
                <span className={`fas fa-caret-right ${!clicked?styles.rotate:styles.not_rotate}`}></span>
                    Planning
                <div className={styles.addList}>+</div>
                </Link>
            </li>             
          {savePlan.map((item, idx) => (
            <li value={item}>
                <Link to={`/planning`} key={idx} title={item}>
                <span className="fas fa-caret-right"></span>
                    {item}
                </Link>
            </li>
          ))}
        </ul>
        <div className={styles.side_bottom}>
          <div className={styles.bottom_content}>
            <span className="fa-solid fa-plus"></span>
            <span onClick={showModal}>새로만들기</span>
          </div>
        </div>
        
      </nav> 
      <div>
          {modalOpen && (
            <NewNote
              setModalOpen={setModalOpen}
              setPlan={setPlan}
              plan={plan}
              setSavePlan={setSavePlan}
              savePlan={savePlan}
            />
          )}
        </div>
    </div>
  );
};

const comp = (prev, next) => {
  return prev.savePlan === next.savePlan;
};
export default React.memo(SideBar, comp);

