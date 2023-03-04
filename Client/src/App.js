import {io} from "socket.io-client";
import React, {useEffect, useState} from "react";
import Loginpage from "./Component/Loginpage";
import Notification from "./Component/Notification";
import Home from "./Component/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  //get the username from frontend
  const [notification, setNotification] = useState([]);
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);
  const handleuser = (user) => {
    setUser(user);
    console.log("user name in appjs is", user);
  };
  const handlelike = (e) => {
    setNotification(e);
    console.log(e);
  };

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
    // const socket = io("http://localhost:5000");
    // socket.on("FirstEvent", (msg) => console.log(msg));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
    // console.log("Socket in App ", socket);
    // console.log("new user added ", socket?.id);
  }, [socket, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Loginpage socket={socket} onData={handleuser} />}
        />
        <Route
          path="/Notification"
          element={<Notification socket={socket} notification={notification} />}
        />
        <Route
          path="/Home"
          element={<Home socket={socket} onData={handlelike} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
