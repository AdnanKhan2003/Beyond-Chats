import { useState } from "react";
import AiChatHeader from "../../components/AiChat/AiCopilot/AiChatHeader/AiChatHeader";
import AiChatInput from "../../components/AiChat/AiCopilot/AiChatInput/AiChatInput";
import AiChats from "../../components/AiChat/AiCopilot/AiChats/AiChats.jsx";
import styles from "./AiChatPage.module.css";
import AiChatDetails from "../../components/AiChat/AiDetails/AiChatDetails/AiChatDetails.jsx";

const AiChatPage = () => {
  const [initTab, setInitTab] = useState(true);

  const handleTabClick = (id) => {
    if(id === 'ai') {
        setInitTab(true);
    } else {
      setInitTab(false);
    }
  };

  return (
    <div className={`${styles.aichat__container}`}>
      <div className={`${styles.aichat__wrapper}`}>
        <div className={`${styles.aichat__upper} ${setInitTab ? styles.scroll : ''}`}>
          {/* AiChat Header */}
          <AiChatHeader onClick={handleTabClick} initTab={initTab} />

          {/* AiChat Chats */}
          {initTab && <AiChats />}
          {!initTab && <AiChatDetails />}
        </div>

        {/* AiChat Input */}
        {initTab && <AiChatInput />}
      </div>
    </div>
  );
};

export default AiChatPage;
