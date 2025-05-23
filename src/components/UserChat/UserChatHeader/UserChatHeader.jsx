import { AiOutlineMenu } from "react-icons/ai";

import { BsThreeDots } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import { CgArrowLeftO } from "react-icons/cg";


import styles from "./UserChatHeader.module.css";

const UserChatHeader = ({ onActivePage, onMenuClick }) => {
  
  return (
    <div className={`${styles.userchat__header}`}>
      <nav className={`${styles.userchat__nav}`}>
        <div className={`${styles.back__icon__container}`} onClick={() => onActivePage('inbox')}>
          <CgArrowLeftO />
        </div>
        <div className="nav__left">
          <h1>John</h1>
        </div>
        <div className={`${styles.nav__right}`}>
          <span className={`${styles.icon} ${styles.icon__1}`}>
            <BsThreeDots />
          </span>
          <span className={`${styles.icon} ${styles.icon__2}`}>
            <BsFillMoonStarsFill />
          </span>
          <span className={`${styles.icon} ${styles.icon__3}`}>
            <AiFillCloseSquare />
            <span>Close</span>
          </span>
          <span onClick={onMenuClick} className={`${styles.icon} ${styles.hamburger}`}>
            <AiOutlineMenu />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default UserChatHeader;
