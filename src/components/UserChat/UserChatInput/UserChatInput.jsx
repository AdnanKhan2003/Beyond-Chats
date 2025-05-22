import { FaAngleDown } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { MdBookmarks } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

import styles from "./UserChatInput.module.css";
import { useState } from "react";

const UserChatInput = ({ onSubmitMsg, activeProfileId, onInputChange, inputValue }) => {
  // const [chatMessage, setChatMessage] = useState();

  const handleClickSubmit = () => {   
    onSubmitMsg(inputValue, activeProfileId);
    onInputChange("")
  };


  return (
    <div className={`${styles.userchat__input__container}`}>
      <div className={`${styles.userchat__input__wrapper}`}>
        <div className={`${styles.userchat__input}`}>
          <div className={`${styles.userchat__input__option}`}>
            <span className={`${styles.icon} ${styles.icon__1}`}>
              <BsChatLeftTextFill />
            </span>
            <span className={`${styles.icon} ${styles.text}`}>Chat</span>
            <span className={`${styles.icon} ${styles.icon__2}`}>
              <FaAngleDown />
            </span>
          </div>

          <textarea
            name="userInput"
            onChange={(e) => onInputChange(e.target.value)}
            value={inputValue}
            className={`${styles.userinput__box}`}
            rows="4"
            placeholder="Use 30K for shortcuts"
          ></textarea>
            

          <div className={`${styles.userinput__EmojisAndSendBtn}`}>
            <div className={`${styles.userinput__EmojisAndSendBtn__left}`}>
              <span className={`${styles.input__icon} ${styles.input__icon__1}`}>
                <SlEnergy />
              </span>
              <div className={`${styles.vertical__line}`}></div>
              <span className={`${styles.input__icon} ${styles.input__icon__2}`}>
                <MdBookmarks />
              </span>

              <span className={`${styles.input__icon} ${styles.input__icon__3}`}>
                <MdEmojiEmotions />
              </span>
            </div>
            <div className="userinput__EmojisAndSendBtn__right">
              <div 
                onClick={handleClickSubmit}
               className={`${styles.button__send__container}`}>
                <button 
                onClick={handleClickSubmit}
                // onClick={(e) => handleClickSubmit(e, true)}
                 type="submit" className={`${styles.btn__send}`}>
                  Send
                </button>
                <div className={`${styles.vertical__line}`}></div>
                <span className={`${styles.btn__send__icon}`}>
                    <FaAngleDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatInput;
