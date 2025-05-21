import { FaInbox } from "react-icons/fa6";
import { BsLayoutSplit } from "react-icons/bs";

import styles from "./AiChatHeader.module.css";

const AiChatHeader = ({ onClick, initTab }) => {
  return (
    <div className={`${styles.aichat__container}`}>
      <div className={`${styles.aichat__wrapper}`}>
        <ul className={`${styles.aichat__header__tabs__container}`}>
          <li onClick={() => onClick('ai')} className={`${styles.tab} ${styles.tab__1} ${initTab ? styles.active : ""}`}>
            <span className={`${styles.tab__icon}`}>
              <FaInbox />
            </span>
            <p className="tab__name">Ai Copilot</p>
          </li>
          <li onClick={() => onClick('details')} className={`${styles.tab} ${styles.tab__2} ${!initTab ? styles.active : ""}`}>
            <p className="tab__name">Details</p>
          </li>
        </ul>
        <div className="aichat__header__right">
          <BsLayoutSplit />
        </div>
      </div>
    </div>
  );
};

export default AiChatHeader;
