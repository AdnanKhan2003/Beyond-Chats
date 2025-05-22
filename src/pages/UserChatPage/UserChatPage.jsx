import { useState } from "react";
import UserChatHeader from "../../components/UserChat/UserChatHeader/UserChatHeader";
import UserChatInput from "../../components/UserChat/UserChatInput/UserChatInput";
import UserChats from "../../components/UserChat/UserChats/UserChats";
import styles from "./UserChatPage.module.css";

const UserChatPage = ({ profiles, activeProfileId, onAddMsg, profileInputs, updateProfileInputs }) => {
  // const [chatMessage, setChatMessage] = useState();

  const handleSubmitMsg = (msg) => {
    onAddMsg(chatMessage, activeProfileId);
    
  };

  return (
    <div className={`${styles.userchat__container}`}>
      <div className={`${styles.userchat__wrapper}`}>
        <UserChatHeader />

        <div className={`${styles.userchat__lower}`}>
          {/* UserChats */}
          <UserChats profiles={profiles[activeProfileId]} />

          {/* UserChatInput */}
        </div>
          <UserChatInput inputValue={profileInputs[activeProfileId] || ""} onInputChange={(val) => updateProfileInputs({ ...profileInputs, [activeProfileId]: val })} onSubmitMsg={onAddMsg} activeProfileId={activeProfileId}  />
      </div>
    </div>
  );
};

export default UserChatPage;
