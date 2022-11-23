import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./sidebar.module.css";
import styles from "./new-sidebar.module.css";
import NewNote from "./NewNote";

const SideBar = ({ width = 250, setMainSize, mainSize }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setOpen] = useState(true);
  const [xPosition, setX] = useState(0);
  const side = useRef();
  const [plan, setPlan] = useState("");
  const [savePlan, setSavePlan] = useState([]);
  
  const toggleMenu = () => {
    setMainSize(mainSize ? false : true);
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div
        ref={side}
        className={styles.side_btn}>
        <span className="fas fa-bars"></span>
        {/* <button onClick={() => toggleMenu()} className={styles.button}>
          {isOpen ? <span>X</span> : <span>O</span>}
        </button> */}
      </div>
      <nav className={styles.side_bar}>
      <div className={styles.text}>
        <Link to={"/"}>PLAN LIST</Link>
        </div>
        <ul>
            <li>
                <Link to={`/planning`}>
                <span className="fas fa-caret-down"></span>
                    Planning
                <div className={styles.addList}>+</div>
                </Link>
            </li>          
          {savePlan.map((item, idx) => (
            <li value={item}>
                <Link to={`/planning`} key={idx} title={item}>
                <span className="fas fa-caret-down"></span>
                    {item}
                </Link>
            </li>
          ))}
          {plan}
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

