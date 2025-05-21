import { BsFillLaptopFill } from "react-icons/bs";

import styles from "./UserChatType.module.css";

const UserChatType = ({ type, userImg, msgContent, status, time }) => {
    let userTypeClass = `message__${type}`;

  return (
    <div className={`${styles.message} ${styles[userTypeClass]}`}>
      <div className={`${styles.message__user__pic}`}>
        <img src={userImg} alt="" />
      </div>
      <div className={`${styles.message__container}`}>
        <p className={`${styles.message__content}`}>
          {msgContent}
        </p>

        <div className={`${styles.message__time__container}`}>
          <p className={`${styles.status} ${styles.sender__status}`}>{status ? status : <BsFillLaptopFill />}</p>
          <p className={`${styles.time}`}>{time} min</p>
        </div>
      </div>
    </div>
  );
};

export default UserChatType;
