import React from "react";
import styles from "../styles/chatList.module.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSad, BiSearch } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

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
        <ChatListItem superChat={true} active={true} />
        {/* <div className={styles.noChats}>
          <BiSad />
          <br />
          No chats yet
        </div> */}
        {/* <ChatListItem />
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
        <ChatListItem /> */}
      </div>
    </div>
  );
}

const ChatListItem = ({ active, superChat }) => {
  return (
    <div className={styles.chatListItem}>
      <div>
        {superChat ? (
          <BsGlobe />
        ) : (
          <img
            src="https://i.pravatar.cc/45
        "
            alt="avatar"
          />
        )}
        {active && <i></i>}
      </div>
      <div>
        <b>Tim Hover</b>
        <span>{active ? "Online" : "32 mins ago"}</span>
      </div>
    </div>
  );
};
