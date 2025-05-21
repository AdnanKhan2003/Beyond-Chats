import { MdSplitscreen } from "react-icons/md";
import { VscSplitHorizontal } from "react-icons/vsc";

import styles from "./InboxView.module.css";

const InboxView = () => {
  return (
    <div className={`${styles.inbox__container}`}>
      <div className={`${styles.inbox__view}`}>
        <div className={`${styles.view} ${styles.view__1}`}>
          <MdSplitscreen />
        </div>
        <div className={`${styles.view} ${styles.view__2}`}>
          <VscSplitHorizontal />
        </div>
      </div>
    </div>
  );
};

export default InboxView;
