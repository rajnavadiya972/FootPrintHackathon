import {io} from "socket.io-client";
import React, {useEffect, useState} from "react";
import Loginpage from "./Component/Loginpage";
import Notification from "./Component/Notification";
import Home from "./Component/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  //get the username from frontend
  const [user, setUser] = useState("harsh");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
    // const socket = io("http://localhost:5000");
    // socket.on("FirstEvent", (msg) => console.log(msg));
  }, []);

  useEffect(() => {
    socket?.emit("newUser", user);
    console.log(socket);
    console.log("new user added ", socket?.id);
  }, [socket, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
