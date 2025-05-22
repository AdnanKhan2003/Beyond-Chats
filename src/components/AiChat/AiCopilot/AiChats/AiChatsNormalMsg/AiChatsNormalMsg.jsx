import aliLogo from "../../../../../assets/images/users/ali.jpg";

import styles from "./AiChatsNormalMsg.module.css";

const AiChatsNormalMsg = ({ userImg, msgContent }) => {
  return (
    <div
      className={`${styles.message__content__box} ${styles.message__content__box__user}`}
    >
      <div className={`${styles.message__content__box__header}`}>
        <img
          src={userImg}
          className={`${styles.message__image} ${styles.message__image__user}`}
          alt=""
        />
        <h4 className="name">You</h4>
      </div>
      <div className={`${styles.message__content__box__container}`}>
        <div className={`${styles.blank__space}`}></div>
        <div className={`${styles.message}`}>{msgContent}</div>
      </div>
    </div>
  );
};

export default AiChatsNormalMsg;
