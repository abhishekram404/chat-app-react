import React from "react";
import styles from "../styles/chatList.module.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
export default function ChatList() {
  return (
    <div>
      <div className={styles.titleBar}>
        <h2>Chats</h2>
        <HiDotsHorizontal />
      </div>

      <div className={styles.searchBox}>
        <input type="search" placeholder="Search here" />
        <BiSearch />
      </div>

      <div className={styles.chatList}>
        <ChatListItem />
        <ChatListItem active={true} />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem active={true} />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
}

const ChatListItem = ({ active }) => {
  return (
    <div className={styles.chatListItem}>
      <div>
        <img
          src="https://i.pravatar.cc/45
        "
          alt="avatar"
          className={active && styles.active}
        />
      </div>
      <div>
        <b>World chat</b>
        <span>{active ? "Online" : "32 mins ago"}</span>
      </div>
    </div>
  );
};
