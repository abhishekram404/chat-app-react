import React from "react";
import styles from "../styles/leftSidebar.module.scss";
import { FiPlus } from "react-icons/fi";
import ChatList from "./ChatList";
export default function LeftSidebar() {
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.newConversation}>
        <button>
          {" "}
          <span>
            <FiPlus />
          </span>{" "}
          <span>New conversation</span>
        </button>
      </div>
      <ChatList />
    </div>
  );
}
