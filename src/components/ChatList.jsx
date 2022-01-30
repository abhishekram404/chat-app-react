import React from "react";
import styles from "../styles/chatList.module.scss";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSad, BiSearch } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useMatch } from "react-router-dom";

export default function ChatList() {
  const dispatch = useDispatch();
  // const { path } = useMatch();

  const { socket } = useSelector((state) => state.common);
  socket.emit("get_online_users");

  const { users } = useSelector((state) => state.user);
  // const setActiveConversation = (e) => {
  //   dispatch({
  //     type: "SET_ACTIVE_CONVERSATION",
  //     name : ""
  //   });
  // };
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
        <ChatListItem
          superChat={true}
          active={true}
          name="Super chat"
          id="super"
        />
        {users &&
          users.map((user) => <ChatListItem name={user.name} active={true} />)}
        {/* <div className={styles.noChats}>
          <BiSad />
          <br />
          No chats yet
        </div> */}
      </div>
    </div>
  );
}

const ChatListItem = ({ active, superChat, name, id }) => {
  const { path } = useMatch();
  console.log(path);

  return (
    <Link to={`${path}/conversation/${id}`}>
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
          <b>{name}</b>
          <span>{active ? "Online" : "32 mins ago"}</span>
        </div>
      </div>
    </Link>
  );
};
