import React from "react";
import ChatDisplay from "./ChatDisplay";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import styles from "../styles/layout.module.scss";
export default function Layout() {
  return (
    <div className={styles.layout}>
      <LeftSidebar />
      <ChatDisplay />
      <RightSidebar />
    </div>
  );
}
