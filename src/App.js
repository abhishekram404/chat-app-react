import { useEffect, useState } from "react";
import "./styles/App.scss";
import Layout from "./components/Layout.jsx";
import io from "socket.io-client";
import Join from "./components/Join";
function App() {
  // socket.emit("message", "Hello server");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const socket = io.connect("localhost:4000");
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);
  // console.log(socket);
  return <div className="App">{joined ? <Layout /> : <Join />}</div>;
}

export default App;
