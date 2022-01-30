import React, { useState } from "react";
import styles from "../styles/join.module.scss";
import { useDispatch } from "react-redux";
import { joinChat } from "../redux/actions/joinActions";
export default function Join() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(joinChat(name));
  };
  return (
    <div className={styles.join}>
      <div className={styles.joinForm}>
        <h4>Join the chatroom</h4>
        <form onSubmit={handleSubmit}>
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
