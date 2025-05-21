import styles from './InboxHeader.module.css';

const InboxHeader = () => {
    return (
        <div className={`${styles.inbox__header}`}>
          <h2>Your Inbox</h2>
        </div>
    );
};

export default InboxHeader;