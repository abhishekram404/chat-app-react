import io from "socket.io-client";

export const joinChat = (name) => {
  return async (dispatch) => {
    try {
      const socket = await io.connect("localhost:4000", {
        query: "name=" + name,
      });
      dispatch(chatJoined({ socket }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

const chatJoined = ({ socket }) => {
  return {
    type: "CHAT_JOINED",
    socket,
  };
};
