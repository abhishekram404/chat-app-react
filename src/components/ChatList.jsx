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
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
}

const ChatListItem = () => {
  return (
    <div className={styles.chatListItem}>
      <div>
        <img
          src="https://i.pravatar.cc/45
        "
          alt="avatar"
        />
        <i></i>
      </div>
      <div>
        <b>Tim Hover</b>
        <span>32 mins ago</span>
      </div>
    </div>
  );
};
