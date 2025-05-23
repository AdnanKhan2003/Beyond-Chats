import { AiOutlineMenu } from "react-icons/ai";

import { BsThreeDots } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

import styles from "./UserChatHeader.module.css";

const UserChatHeader = ({ onMenuClick }) => {
  
  return (
    <div className={`${styles.userchat__header}`}>
      <nav className={`${styles.userchat__nav}`}>
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
