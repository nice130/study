import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./sidebar.module.css";
import styles from "./new-sidebar.module.css";
import NewNote from "../routes/NewNote";
import commCss from "../styles.css";
import SideItems from "./SideItems";
const SideBar = ({toggled, setToggled}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [plan, setPlan] = useState("");
  const side = useRef();
  const [savePlan, setSavePlan] = useState([]);
  const [toggleSave,SetToggleSave] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  const toggleSetting = () => {
    if (clicked) {
      return;
    }
  
    setToggled(!toggleSave);
    SetToggleSave(!toggleSave);
  };
 
  useEffect(() => {
    
  },[]);
  const SideBarFixed = () => {
    setClicked(!clicked);
    setToggled(toggleSave);
  }
  return (
    <div>
      <div 
      className={styles.side_toggle} 
      onMouseOver={toggleSetting}
      >
      </div>
      <nav
        ref={side}
        onMouseLeave={toggleSetting}
        className={toggleSave ? styles.side_bar__show : styles.side_bar}
      >
        <div className={styles.side_bar__main}>
          <Link to={"/"}>PLAN LIST</Link>
        </div>
        <button onClick={SideBarFixed}>FIX</button>
        <SideItems savePlan={savePlan} setSavePlan={setSavePlan} />
        
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
