import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import styles from "../styles/chatDisplay.module.scss";
export default function ChatDisplay() {
  return (
    <div className={styles.chatDisplay}>
      <div className={styles.topBar}>
        <div className={styles.user}>
          <div>
            <img
              src="https://i.pravatar.cc/45
            "
              alt="avatar"
            />
            <i></i>
          </div>
          <span>Abhishek Ram</span>
        </div>
        <div className={styles.members}>
          <div className={styles.membersList}>
            Members: &nbsp; &nbsp;
            <div style={{ zIndex: 100000 }} className={styles.addMember}>
              <FiPlus />
            </div>
            <div>
              <img src="https://i.pravatar.cc/45" alt="" />
            </div>
            <div>&bull;&bull;&bull;</div>
          </div>
          <div className={styles.settings}>
            <MdSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
