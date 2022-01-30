import "./styles/App.scss";
import Layout from "./components/Layout.jsx";
import { useSelector, useDispatch } from "react-redux";
import Join from "./components/Join";
function App() {
  const dispatch = useDispatch();
  const { socket, isJoined } = useSelector((state) => state.common);

  socket &&
    socket.on("connect", () => {
      dispatch({
        type: "JOINED",
      });
    });

  // socket &&
  //   socket.on("online_users", (onlineUsers) => {
  //     console.log(onlineUsers);
  //     onlineUsers = onlineUsers.filter((user) => user.id === socket.id);
  //     dispatch({
  //       type: "ONLINE_USERS",
  //       users: onlineUsers,
  //     });
  //   });

  socket &&
    socket.on("message", (text) => {
      console.log("message");
    });

  return <div className="App">{isJoined ? <Layout /> : <Join />}</div>;
}

export default App;
