import { GoArrowUp } from "react-icons/go";

import styles from './AiChatInput.module.css';

const AiChatInput = ({  }) => {

    return (
        <div className="aichat__input__container">
            <div className={`${styles.aichat__input__wrapper}`}>
                <p className={`${styles.label__suggestion}`}>
                    Suggest how can I get a refund?
                </p>

                <div className={`${styles.aiInput__container}`}>
                    <input  name="aiInput" placeholder="Ask a Question..." className={`${styles.aichat__input}`} id="" />
                    <span>
                        <GoArrowUp />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AiChatInput;