import UserChatHeader from "../../components/UserChat/UserChatHeader/UserChatHeader";
import UserChatInput from "../../components/UserChat/UserChatInput/UserChatInput";
import UserChats from "../../components/UserChat/UserChats/UserChats";
import styles from "./UserChatPage.module.css";

const UserChatPage = () => {
  return (
    <div className={`${styles.userchat__container}`}>
      <div className={`${styles.userchat__wrapper}`}>
        <UserChatHeader />

        <div className="userchat__lower">
          {/* UserChats */}
          <UserChats  />

          {/* UserChatInput */}
          <UserChatInput />
        </div>
      </div>
    </div>
  );
};

export default UserChatPage;
