import InboxHeader from "../../components/Inbox/InboxHeader/InboxHeader";
import InboxFilters from "../../components/Inbox/InboxFilters/InboxFilters";

import tomLogo from "../../assets/images/users/tom.jpg";
import johnLogo from "../../assets/images/users/john.jpg";
import aliLogo from "../../assets/images/users/ali.jpg";
import rajLogo from "../../assets/images/users/raj.jpg";

import InboxMessage from "../../components/Inbox/InboxMessage/InboxMessage";
import InboxView from "../../components/Inbox/InboxView/InboxView";

import styles from "./InboxPage.module.css";
 
const INBOX__MESSAGE__PROFILES_CONTENT = [
  {
    id: 0,
    username: "John",
    UserIcon: johnLogo,
    time: 48,
    message:
      "Hey, I wanted to ask you about the latest push I made to the GitHub",
    chat: [
      {
        type: 'sender',
        userImg: aliLogo,
        msgContent: "Hey Receiver!",
        status: 'Seen',
        time: 48,
        timeUnit: 'min',
      },
      {
        type: 'sender',
        userImg: aliLogo,
        msgContent: "Hey Sender!",
        status: 'Seen',
        time: 48,
        timeUnit: 'min',
      }
    ],
    active: true,
  },
  {
    id: 1,
    username: "Tom",
    UserIcon: tomLogo,
    time: 52,
    message: "What, Are you saying that now!",
    active: false,
  },
  {
    id: 2,
    username: "Ali",
    UserIcon: aliLogo,
    time: 54,
    message: "Got an amazing new for ya!",
    active: false,
  },
  {
    id: 3,
    username: "Raj",
    UserIcon: rajLogo,
    time: 56,
    message: "Sir, it'll be ready, we can deliver whenever you say",
    active: false,
  },
];

const InboxPage = ({ profiles, activeProfileId, onClick }) => {

  return (
    <div className={`${styles.inbox__container}`}>
      <div className={`${styles.inbox__wrapper}`}>
          <InboxHeader />
          <InboxFilters />

          {/* 3. Inbox Messages */}
          <div className={`${styles.inbox__messages__container}`}>
            {profiles.map((profile) => (
              <InboxMessage key={profile.id} data={profile} activeProfileId={activeProfileId} onClick={onClick} />
            ))}
          </div>

        <InboxView />
        {/* 4. Layout View */}
      </div>
    </div>
  );
};

export default InboxPage;
