import React from "react";
import Navbar from "./Navbar";
const data = [{}];

function Notification() {
  return (
    <div className="text-white flex h-screen">
      <Navbar />
      <div className="justify-center align-middle mt-10  mx-auto px-10">
        <div className="text-center text-2xl mx-2 mb-5 ">Notifications</div>
        <button className="bg-gray-500 p-2 rounded-lg mb-5 mx-auto hover:bg-gray-600">
          Mark all read
        </button>
        <div className="flex  mx-10 ">
          <img
            src="https://randomuser.me/api/portraits/men/22.jpg"
            alt="Logo"
            className="h-20 w-20 my-auto border rounded-lg"
          />
          <div className="my-auto mx-3">
            <div>Name</div>
            <div>Masseges</div>
          </div>
          <button className=" mx-2 bg-gray-500 my-5 px-2 rounded-lg hover:bg-gray-600">
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
