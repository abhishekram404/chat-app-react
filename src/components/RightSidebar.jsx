import React from "react";
import styles, { dropdown } from "../styles/rightSidebar.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function RightSidebar() {
  return (
    <div className={styles.rightSidebar}>
      <div className={styles.intro}>
        <img src="https://i.pravatar.cc/100" alt="" />
        <h4>Fernando Gonzales</h4>
        <p>CEO at Oscorp</p>
      </div>
      <div className={styles.information}>
        <div className={styles.dropdown}>
          <span>Information</span>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.dropdown}>
          <span>Images (13)</span>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div className={styles.files}>
        <div className={styles.dropdown}>
          <span>Files (3)</span>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div className={styles.pinned}>
        <div className={styles.dropdown}>
          <span>Pinned items</span>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
}
