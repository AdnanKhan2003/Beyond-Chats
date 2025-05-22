import aliLogo from "../../../../assets/images/users/ali.jpg";
import styles from "./AiChats.module.css";
import AiChatsNormalMsg from "./AiChatsNormalMsg/AiChatsNormalMsg";
import AiChatsAiMsg from "./AiChatsAiMsg/AiChatsAiMsg";

const AiChats = ({ msgContent }) => {
  return (
    <div className="aichats__container">
      <div className="aichats__wrapper">
        <AiChatsNormalMsg userImg={aliLogo} msgContent={"How do I get a Refund?"} />
        
        <AiChatsAiMsg />
      </div>
    </div>
  );
};

export default AiChats;
