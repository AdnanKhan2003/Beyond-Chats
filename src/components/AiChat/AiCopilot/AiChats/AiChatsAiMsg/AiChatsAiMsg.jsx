import { FaBookOpen } from "react-icons/fa6";
import { MdChat } from "react-icons/md";
import { HiMiniBookOpen } from "react-icons/hi2";
import { FaIntercom } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";

import { MdOutlineExpandMore } from "react-icons/md";

import aiLogo from "../../../../../assets/images/ai/ai.jpg";

import styles from "./AiChatsAiMsg.module.css";
import AiSourceModel from "../AiSourceModel/AiSourceModel";
import { useState } from "react";

const AiChatsAiMsg = ({ onCopyText }) => {
  const [isModalVisible, setIsModalVisible] = useState();
3
  const handleModalVisible = (id) => {
    setIsModalVisible(id);

  }; 

  const handleModalInvisible = () => {
    setIsModalVisible(false);
  }; 

  let bodyContent;
  if(!bodyContent)
    bodyContent = `We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund. This guide outlines the simple steps to help you navigate the refund process and ensure a smooth resolution to your concern.`;

  return (
    <div
      className={`${styles.message__content__box} ${styles.message__content__box__ai}`}
    >
      <div className={`${styles.message__content__box__header}`}>
        {/* <img
          src={aiLogo}
          className={`${styles.message__image} ${styles.message__image__ai}`}
          alt=""
        /> */}
        <FaIntercom />
        <h4 className="name">Fin</h4>

        {/* <FaIntercom /> */}
      </div>
      <div className={`${styles.message__content__box__container}`}>
        <div className={`${styles.blank__space}`}></div>
        <div 
        onMouseLeave={handleModalInvisible}
         className={`${styles.message} ${styles.message__ai}`}>
          <div className={`${styles.message__part}`}>
            We understand that sometimes a purchase may not meet your
            expectations, and you may need to request a refund.
            <span
              onMouseEnter={() => handleModalVisible('source')}
             className={`${styles.message__part__more__info}`}>1</span>
          {isModalVisible === 'source' && <AiSourceModel bodyContent={bodyContent} onCopyText={onCopyText} source="Public Article" />}
          </div>
          <div className={`${styles.message__part}`}>
            To assist you with your refund request, could you please provide
            your order ID and proof of purchase.
          </div>
          <div className={`${styles.message__part}`}>
            Please note: We can only refund orders placed within the last 60
            days, and your item must meet our requirements for condition to be
            returned. Please check when you placed your order before proceeding.
          </div>
          <div className={`${styles.message__part}`}>
            Once I've checked these details, if everything looks OK, I will send
            a returns QR code which you can use to post the item back
            automatically issued of Your refund will be you put it in the post.
            <span
              onMouseEnter={() => handleModalVisible('conversation')}
             className={`${styles.message__part__more__info}`}>2</span>
          {isModalVisible === 'conversation' && <AiSourceModel bodyContent={bodyContent} onCopyText={onCopyText}  source="Conversation" />}
          </div>
          <div onClick={() => onCopyText(bodyContent)} className={`${styles.message__ai__button__container}`}>
            <div className={`${styles.btn__left}`}>
              <span>
                <BiSolidEdit />
              </span>
              <button>Add to Composer</button>
            </div>
            <div className={`${styles.btn__right}`}>
              <MdOutlineExpandMore />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.message__sources}`}>
        <h6 className={`${styles.message__sources__title}`}>
          15 relevant sources found
        </h6>

        <ul>
          <li className={`${styles.sources__list}`}>
            <span className={`${styles.sources__icon}`}>
              <FaBookOpen />
            </span>
            <p className="sources__step">Getting a refund</p>
          </li>
          <li className={`${styles.sources__list}`}>
            <span className={`${styles.sources__icon}`}>
              <MdChat />
            </span>
            <p className="sources__step">
              Refund for an order placed by mistake
            </p>
          </li>
          <li className={`${styles.sources__list}`}>
            <span className={`${styles.sources__icon}`}>
              <MdChat />
            </span>
            <p className="sources__step">Refund for an unwanted gift</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AiChatsAiMsg;
