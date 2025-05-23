import { useState } from "react";
import AiChatHeader from "../../components/AiChat/AiCopilot/AiChatHeader/AiChatHeader";
import AiChatInput from "../../components/AiChat/AiCopilot/AiChatInput/AiChatInput";
import AiChats from "../../components/AiChat/AiCopilot/AiChats/AiChats.jsx";
import styles from "./AiChatPage.module.css";
import AiChatDetails from "../../components/AiChat/AiDetails/AiChatDetails/AiChatDetails.jsx";

const AiChatPage = ({ isMenuOpen, onMenuClick, onCopyText }) => {
  const [initTab, setInitTab] = useState(true);
  const [aiChatInput, setAiChatInput] = useState();
  const [storedValue, setStoredValue] = useState();
  const [isMenuClosed, setIsMenuClosed] = useState(false);
console.log(isMenuOpen);


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

  const handleMenuCloseClick = (e) => {
    e.stopPropagation();
    setIsMenuClosed(prevState => !prevState);
  };

  return (
    // <div className={`${styles.aichat__container} ${menuClicked ? styles.d__none : styles.d__view} ${closeMenu ? styles.d__none : styles.d__view}`}>
    
    <div className={`${styles.aichat__container} ${isMenuOpen ? styles.d__view : ''}`}>
      {console.log('hamburger', isMenuOpen, 'close', isMenuClosed)    }
      <div className={`${styles.aichat__wrapper}`}>
          <AiChatHeader onMenuClick={onMenuClick} onMenuClose={handleMenuCloseClick} onClick={handleTabClick} initTab={initTab} />
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
