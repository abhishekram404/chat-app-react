import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import styles from "../styles/createMessage.module.scss";
export default function CreateMessage() {
  return (
    <div className={styles.createMessage}>
      <div className={styles.createGrid}>
        <div className={styles.attachBtn}>
          <FiPlus />
        </div>
        <div className={styles.messageInput}>
          <input type="text" placeholder="Type a message here" />
        </div>
        <div className={styles.sendBtn}>
          <FaTelegramPlane />
        </div>
      </div>
    </div>
  );
}
