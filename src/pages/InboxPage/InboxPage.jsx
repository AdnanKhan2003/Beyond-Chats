import InboxHeader from "../../components/Inbox/InboxHeader/InboxHeader";
import InboxFilters from "../../components/Inbox/InboxFilters/InboxFilters";

import tomLogo from "../../assets/images/users/tom.jpg";
import johnLogo from "../../assets/images/users/john.jpg";
import aliLogo from "../../assets/images/users/ali.jpg";
import rajLogo from "../../assets/images/users/raj.jpg";

import InboxMessage from "../../components/Inbox/InboxMessage/InboxMessage";
import InboxView from "../../components/Inbox/InboxView/InboxView";

import styles from "./InboxPage.module.css";

// UserIcon={tomLogo} userName="John" time={48}>Hey, I wanted to say..<
// const INBOX__MESSAGE__PROFILES = [
//   'John', 'Tom', "Francis", "George"
// ];

const INBOX__MESSAGE__PROFILES_CONTENT = [
  {
    id: 0,
    username: "John",
    UserIcon: johnLogo,
    time: 48,
    message:
      "Hey, I wanted to ask you about the latest push I made to the GitHub",
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

const InboxPage = () => {
  return (
    <div className={`${styles.inbox__container}`}>
      <div className={`${styles.inbox__wrapper}`}>
        <div className="inbox__upper">
          <InboxHeader />
          <InboxFilters />

          {/* 3. Inbox Messages */}
          <div className={`${styles.inbox__messages__container}`}>
            {INBOX__MESSAGE__PROFILES_CONTENT.map((profile) => (
              <InboxMessage key={profile.id} data={profile} />
            ))}
          </div>
        </div>

        {/* 4. Layout View */}
        <InboxView />
      </div>
    </div>
  );
};

export default InboxPage;
