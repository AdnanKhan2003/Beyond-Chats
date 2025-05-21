import { FaBookOpen } from "react-icons/fa6";
import { MdChat } from "react-icons/md";
import { FaIntercom } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineExpandMore } from "react-icons/md";

import aliLogo from "../../../../assets/images/users/ali.jpg";
import styles from "./AiChats.module.css";

const AiChats = () => {
  return (
    <div className="aichats__container">
      <div className="aichats__wrapper">
        <div
          className={`${styles.message__content__box} ${styles.message__content__box__user}`}
        >
          <div className={`${styles.message__content__box__header}`}>
            <img
              src={aliLogo}
              className={`${styles.message__image} ${styles.message__image__user}`}
              alt=""
            />
            <h4 className="name">You</h4>
          </div>
          <div className={`${styles.message__content__box__container}`}>
          <div className={`${styles.blank__space}`}></div>
            <div className={`${styles.message}`}>How do I get a Refund? </div>
          </div>
        </div>
        
        <div
          className={`${styles.message__content__box} ${styles.message__content__box__ai}`}
        >
          <div className={`${styles.message__content__box__header}`}>
            <img src={aliLogo} className={`${styles.message__image} ${styles.message__image__ai}`} alt="" />
            <h4 className="name">Fin</h4>
            
            {/* <FaIntercom /> */}
          </div>
          <div className={`${styles.message__content__box__container}`}>
            <div className={`${styles.blank__space}`}></div>
            <div className={`${styles.message} ${styles.message__ai}`}>
              <p className={`${styles.message__part}`}>
                We understand that sometimes a purchase may not meet your
                expectations, and you may need to request a refund.
                <span className={`${styles.message__part__more__info}`}>
                  1
                </span>
              </p>
              <p className={`${styles.message__part}`}>
                To assist you with your refund request, could you please provide
                your order ID and proof of purchase.
              </p>
              <p className={`${styles.message__part}`}>
                Please note: We can only refund orders placed within the last 60
                days, and your item must meet our requirements for condition to
                be returned. Please check when you placed your order before
                proceeding.
              </p>
              <p className={`${styles.message__part}`}>
                Once I've checked these details, if everything looks OK, I will
                send a returns QR code which you can use to post the item back
                automatically issued of Your refund will be you put it in the
                post.
                <span className={`${styles.message__part__more__info}`}>
                  2
                </span>
              </p>
              <div className={`${styles.message__ai__button__container}`}>
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
      </div>
    </div>
  );
};

export default AiChats;
