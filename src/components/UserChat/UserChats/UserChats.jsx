import UserChatType from './UserChatType/UserChatType.jsx'

import { BsFillLaptopFill } from "react-icons/bs";

import aliLogo from "../../../assets/images/users/ali.jpg";
import tomLogo from "../../../assets/images/users/tom.jpg";

import styles from "./UserChats.module.css";

const UserChats = () => {
  // type: 'sender',
  // userImg: aliLogo,
  // msgContent: "Hey Receiver!",
  // status: 'Seen',
  // time: 48,
  // timeUnit: 'min',
  return (
    <div className={`${styles.userchat__container}`}>
     
      <UserChatType type="sender" userImg={aliLogo} msgContent="asdfklj dsfjadfslj ldjsflj" status="Seen" time="48" />

      <UserChatType type="receiver" userImg={tomLogo} msgContent="asdfklj dsfjadfslj ldjsflj asdfklj dsfjadfslj ldjsflj asdfklj dsfjadfslj ldjsflj" time="48" />

    </div>
  );
};

export default UserChats;
