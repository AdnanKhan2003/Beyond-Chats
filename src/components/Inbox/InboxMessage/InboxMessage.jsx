import { useState } from 'react';
import tomLogo from '../../../assets/images/users/tom.jpg';

import styles from './InboxMessage.module.css';

const InboxMessage = ({ data: {id, UserIcon, username, time, message, active, chat}, activeProfileId, onClick }) => {
    time = +time;
    message = message.slice(0, 20).padEnd(24, '...');
    let chatMessage = chat?.find(entity => entity.type === 'sender')?.msgContent;    

    if(String(chatMessage).length >= 24) {
      chatMessage = chatMessage.slice(0, 20).padEnd(24, '...');
    } 
    
    

  
    return (
        <div onClick={() => onClick(id)} className={`${styles.inbox__message} ${activeProfileId === id ? styles.active : ""}`} >
            <div className={`${styles.message__profile}`}>
                <img src={UserIcon} alt="Persona" />
            </div>
            <div className={`${styles.message__info}`}>
              <h3>{username}</h3>
              <p>{chatMessage || message}</p>
            </div>
            <div className={`${styles.message__time}`}>
              <p>{time} {time > 12 ? 'min' : 'hours'}</p>
            </div>
          
          </div>
    );
};

export default InboxMessage;