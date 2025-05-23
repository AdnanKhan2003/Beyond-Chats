import { HiMiniBookOpen } from "react-icons/hi2";
import { MdChat } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { FaIntercom } from "react-icons/fa";

import styles from "./AiSourceModel.module.css";

const AiSourceModel = ({  source = 'Public Article', author = 'John', date= '1 day ago', bodyContent, onCopyText  }) => {
  // if(!bodyContent)
  // bodyContent = `We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund. This guide outlines the simple steps to help you navigate the refund process and ensure a smooth resolution to your concern.`;

  return (
    <div className={`${styles.more__info__popup__container}`}>
      <div className={`${styles.more__info__wrapper}`}>
        <div className="popup__header">
          <h3>Getting a Refund</h3>
          <div className={`${styles.popup__details}`}>
            <p className={`${styles.popup__source}`}>
              {source === 'Public Article' ? <HiMiniBookOpen /> : <MdChat />}
              <span>{source}</span>
            </p>
            <p className={`${styles.popup__source__author}`}>{author}</p>
            <p className={`${styles.popup__source__date}`}>{date}</p>
          </div>
        </div>
        <div className={`${styles.popup__body}`}>
          <p className={`${styles.popup__body__content}`}>
            {bodyContent}
          </p>
        </div>
        <div className={`${styles.popup__btn__container}`}>
          <BiSolidEdit />
          <button onClick={() => onCopyText(bodyContent)}>Add to Composer</button>
        </div>
      </div>
    </div>
  );
};

export default AiSourceModel;
