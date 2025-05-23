import { useState } from "react";
import AiChatHeader from "../../components/AiChat/AiCopilot/AiChatHeader/AiChatHeader";
import AiChatInput from "../../components/AiChat/AiCopilot/AiChatInput/AiChatInput";
import AiChats from "../../components/AiChat/AiCopilot/AiChats/AiChats.jsx";
import styles from "./AiChatPage.module.css";
import AiChatDetails from "../../components/AiChat/AiDetails/AiChatDetails/AiChatDetails.jsx";

const AiChatPage = ({ onCopyText }) => {
  const [initTab, setInitTab] = useState(true);
  const [aiChatInput, setAiChatInput] = useState();
  const [storedValue, setStoredValue] = useState();

  const handleTabClick = (id) => {
    if(id === 'ai') {
        setInitTab(true);
    } else {
      setInitTab(false);
    }
  };

  const handleChangeInput = (val) => {
      setAiChatInput(val);
  };

  const handleStoredValue = () => {
      setStoredValue(aiChatInput);
  };

  return (
    <div className={`${styles.aichat__container}`}>
      <div className={`${styles.aichat__wrapper}`}>
          <AiChatHeader onClick={handleTabClick} initTab={initTab} />
        <div className={`${styles.aichat__upper} ${setInitTab ? styles.scroll : ''}`}>
          {/* AiChat Header */}

          {/* AiChat Chats */}
          {initTab && <AiChats msgContent={storedValue} onCopyText={onCopyText}  />}
          {!initTab && <AiChatDetails />}
        </div>

        {/* AiChat Input */}
        {initTab && <AiChatInput aiChatInput={aiChatInput} onChange={handleChangeInput} onClick={handleStoredValue} />}
      </div>
    </div>
  );
};

export default AiChatPage;
