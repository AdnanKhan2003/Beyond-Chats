import { BsFillLaptopFill } from "react-icons/bs";

import aliLogo from '../../../assets/images/users/ali.jpg';
import tomLogo from '../../../assets/images/users/tom.jpg';

import styles from "./UserChats.module.css";

const UserChats = () => {
  return (
    <div className={`${styles.userchat__container}`}>
      <div className={`${styles.message} ${styles.message__sender}`}>
        <div className={`${styles.message__user__pic}`}>
            <img src={aliLogo} alt="" />
        </div>
        <div className={`${styles.message__container}`}>
          <p className={`${styles.message__content}`}>asdfklj dsfjadfslj ldjsflj</p>
          
          <div className={`${styles.message__time__container}`}>
            <p className={`${styles.status} ${styles.sender__status}`}>
                Seen
            </p>
            <p className={`${styles.time}`}>
                48 min
            </p>
        </div>
        </div>
      </div>
      <div className={`${styles.message} ${styles.message__receiver}`}>
        <div className={`${styles.message__user__pic}`}>
            <img src={tomLogo} alt="" />   
        </div>
        <div className={`${styles.message__container}`}>
          <p className={`${styles.message__content}`}>asdfklj dsfjadfslj ldjsflj</p>

          <div className={`${styles.message__time__container}`}>
            <p className={`${styles.status} ${styles.receiver__status}`}>
                <BsFillLaptopFill />
            </p>
            <p className={`${styles.time}`}>
                48 min
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserChats;
