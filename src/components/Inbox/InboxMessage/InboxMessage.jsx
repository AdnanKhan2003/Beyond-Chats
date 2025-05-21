import { useState } from 'react';
import tomLogo from '../../../assets/images/users/tom.jpg';

import styles from './InboxMessage.module.css';

const InboxMessage = ({ data: {id, UserIcon, username, time, message, active} }) => {
    time = +time;
    message = message.slice(0, 20).padEnd(24, '...');

  
    return (
        <div className={`${styles.inbox__message} ${active ? styles.active : ""}`} >
            <div className={`${styles.message__profile}`}>
                <img src={UserIcon} alt="Persona" />
            </div>
            <div className={`${styles.message__info}`}>
              <h3>{username}</h3>
              <p>{message}</p>
            </div>
            <div className={`${styles.message__time}`}>
              <p>{time} {time > 12 ? 'min' : 'hours'}</p>
            </div>
          
          </div>
    );
};

export default InboxMessage;