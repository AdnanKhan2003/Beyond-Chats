import UserChatType from './UserChatType/UserChatType.jsx'

import { BsFillLaptopFill } from "react-icons/bs";

import aliLogo from "../../../assets/images/users/ali.jpg";
import tomLogo from "../../../assets/images/users/tom.jpg";

import styles from "./UserChats.module.css";

 // type: 'sender',
  // userImg: aliLogo,
  // msgContent: "Hey Receiver!",
  // status: 'Seen',
  // time: 48,
  // timeUnit: 'min',

const UserChats = ({ profiles }) => {

  return (
    <div className={`${styles.userchat__container}`}>
      

      {profiles.chat.map((profile, i) => {
        return <UserChatType key={i+i} type={profile.type} userImg={profile.userImg} msgContent={profile.msgContent} status={profile.status} time={profile.time} />;
      })}

    </div>
  );
};

export default UserChats;
