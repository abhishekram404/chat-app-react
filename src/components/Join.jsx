import React, { useState } from "react";
import styles from "../styles/join.module.scss";
export default function Join() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className={styles.join}>
      <div className={styles.joinForm}>
        <h4>Join the chatroom</h4>
        <form>
          {/* <label htmlFor="name">Your name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
}
