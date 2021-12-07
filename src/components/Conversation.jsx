import React from "react";
import styles from "../styles/conversation.module.scss";
export default function Conversation() {
  return (
    <div className={styles.conversation}>
      <Sent
        message="
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore libero illum sunt quia unde nam iusto amet incidunt in blanditiis?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a provident praesentium. Eligendi, accusamus. Debitis ducimus ipsam accusamus dolorem quos!
    
      "
      />
      <Sent />
      <Sent />
      <Received
        message="
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore libero illum sunt quia unde nam iusto amet incidunt in blanditiis?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a provident praesentium. Eligendi, accusamus. Debitis ducimus ipsam accusamus dolorem quos!
    
      "
      />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received message="hi" />
      <Received />
    </div>
  );
}

const Sent = ({ message }) => {
  return (
    <div className={styles.sent}>
      <div className={styles.sentAvatar}>
        <img
          src="https://i.pravatar.cc/45
            "
          alt="avatar"
        />
      </div>
      <div className={styles.sentContent}>
        <div className={styles.sentMessage}>
          {message ?? <i>Blank message</i>}
        </div>
        <div className={styles.sentDetails}>
          <div className="time">16 mins ago</div>
          <div className="seen">Seen 16:04</div>
        </div>
      </div>
    </div>
  );
};

const Received = ({ message }) => {
  return (
    <div className={styles.received}>
      <div className={styles.receivedAvatar}>
        <img
          src="https://i.pravatar.cc/45
            "
          alt="avatar"
        />
        <i></i>
      </div>
      <div className={styles.receivedContent}>
        <div className={styles.receivedMessage}>
          {message ?? <i>Blank message</i>}
        </div>
        <div className={styles.receivedDetails}>
          <div>16 mins ago</div>
        </div>
      </div>
    </div>
  );
};
