import { FaAngleDown } from "react-icons/fa";

import styles from "./InboxFilters.module.css";

const InboxFilters = () => {
  return (
    <div className={`${styles.inbox__filters}`}>
      <div className={`${styles.open}`}>
        <span className="open__number">6</span>
        <span className="open__text">Open</span>
        <span className="open__icon">
          <FaAngleDown />
        </span>
      </div>
      <div className={`${styles.waiting}`}>
        <span className="waiting__text">Waiting</span>
        <span className="waiting__icon">
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default InboxFilters;
