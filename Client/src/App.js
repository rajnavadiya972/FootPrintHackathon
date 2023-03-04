import "./App.css";
import {io} from "socket.io-client";
import React, {useEffect, useState} from "react";

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

  return <h1>Hello</h1>;
};

export default App;
