import React, {useState} from "react";
import Home from "./Home";
import insta from "./insta.jpeg";

const Loginpage = ({socket, onData}) => {
  const [validateuser, setvaliadateuser] = useState(false);
  const [user, setUser] = useState("");

  const handleName = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className=" ">
      {/* <img src={insta} className="w-10 mx-" /> */}
      {validateuser ? (
        <Home socket={socket} user={user} />
      ) : (
        <div className="flex flex-col  justify-center  dark:text-white w-1/4 mx-auto h-screen ">
          <div className="text-white mx-auto text-4xl">INSTAGRAM</div>
          <input
            type="text"
            placeholder="Username"
            onChange={handleName}
            className=" text-black p-2 rounded-xl mt-10"
          />
          <button
            onClick={(e) => {
              onData(user);
              setvaliadateuser(true);
            }}
            className="p-2 w-1/3 sm:w-1/2 mx-auto mt-4 rounded-full bg-slate-500"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
