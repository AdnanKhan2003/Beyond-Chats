import { GoArrowUp } from "react-icons/go";

import styles from './AiChatInput.module.css';

const AiChatInput = ({ aiChatInput, onChange, onClick }) => {

    return (
        <div className="aichat__input__container">
            <div className={`${styles.aichat__input__wrapper}`}>
                <p className={`${styles.label__suggestion}`}>
                    Suggest how can I get a refund?
                </p>

                <div className={`${styles.aiInput__container}`}>
                    <input onChange={(e) => onChange(e.target.value)} value={aiChatInput} name="aiInput" placeholder="Ask a Question..." className={`${styles.aichat__input}`} id="" />
                    <span className={styles.btn__send} onClick={onClick}>
                        <GoArrowUp />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AiChatInput;