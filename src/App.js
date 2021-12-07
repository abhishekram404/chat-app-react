import { useEffect } from "react";
import "./styles/App.scss";
import Layout from "./components/Layout.jsx";
import io from "socket.io-client";

function App() {
  // socket.emit("message", "Hello server");

  useEffect(() => {
    const socket = io.connect("localhost:4000");
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, []);
  // console.log(socket);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
