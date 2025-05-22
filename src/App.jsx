import InboxPage from './pages/InboxPage/InboxPage'

import { useState } from 'react'

import styles from './App.module.css'
import UserChatPage from './pages/UserChatPage/UserChatPage'
import AiChatPage from './pages/AiChatPage/AiChatPage'

import tomLogo from "./assets/images/users/tom.jpg";
import johnLogo from "./assets/images/users/john.jpg";
import aliLogo from "./assets/images/users/ali.jpg";
import rajLogo from "./assets/images/users/raj.jpg";


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
        msgContent: "Hey! I just wanted to ask about that talk that we once listened to, Remember? If you then please consider calling me",
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
    chat: [
      {
        type: 'sender',
        userImg: aliLogo,
        msgContent: "Woah! That's some nice news, You just made my day. Now it's my time to gift you something special",
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
  },
  {
    id: 2,
    username: "Ali",
    UserIcon: aliLogo,
    time: 54,
    message: "Got an amazing new for ya!",
    active: false,
    chat: [
      {
        type: 'sender',
        userImg: aliLogo,
        msgContent: "This was supposed to more frequent. However, well done, you really have outdone yourself",
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
  },
  {
    id: 3,
    username: "Raj",
    UserIcon: rajLogo,
    time: 56,
    message: "Sir, it'll be ready, we can deliver whenever you say",
    active: false,
    chat: [
      {
        type: 'sender',
        userImg: aliLogo,
        msgContent: "Hey Receiver! I just wanted to ask about that talk that we once listened to",
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
  },
];

function App() {
  const [activeProfileId, setActiveProfileId] = useState(0);

  const handleProfileClick = (profileId) => {
    INBOX__MESSAGE__PROFILES_CONTENT.forEach(profile => {
      if(profile.id === profileId) {
        setActiveProfileId(profile.id);
      } 
    });
    
  };

  return (
    <div className={styles.app}>
      <InboxPage profiles={INBOX__MESSAGE__PROFILES_CONTENT} activeProfileId={activeProfileId} onClick={handleProfileClick} />
      <UserChatPage />
      <AiChatPage />
    </div>
  )
}

export default App
