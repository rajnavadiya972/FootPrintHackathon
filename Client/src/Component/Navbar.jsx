import { useState } from "react";
import { AiFillHome, AiOutlineRightCircle, AiOutlineSearch, AiOutlineCompass, AiFillMessage, AiOutlineHeart, AiOutlinePlayCircle, AiOutlineFolderAdd, AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    const [index1, setIndex1] = useState(100);

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Home", icon: AiFillHome, Link: '/Home' },
        { title: "Search", icon: AiOutlineSearch, Link: '/Home' },
        { title: "Explore", icon: AiOutlineCompass, Link: '/Home' },
        { title: "Reels", icon: AiOutlinePlayCircle, Link: '/Home' },
        { title: "Message", icon: AiFillMessage, Link: '/Home' },
        { title: "Notification", icon: AiOutlineHeart, Link: '/Notification' },

        { title: "Create ", icon: AiOutlineFolderAdd, Link: '/Home' },

    ];
    const openbar = () => {
        setOpen(!open)

    }
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-gray-900 h-screen p-5  pt-8 relative duration-300`}
            >

                <AiOutlineRightCircle size={25}
                    className={`absolute bg-white cursor-pointer -right-3 top-9 w-7 text-black
            rounded-full  ${!open && "rotate-180"}`}
                    onClick={openbar}
                />
                {
                    open ?
                        <div className="flex gap-x-4 items-center">

                            <AiFillInstagram size={40}
                                className={`text-white cursor-pointer   "
                                    }`}
                            />

                            <h1
                                className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                    }`}
                            >
                                Instagram
                            </h1>
                        </div> :
                        <AiFillInstagram size={40}
                            className={`text-white cursor-pointer   "
                                }`}
                        />

                }
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (

                        <NavLink to={Menu.Link} >
                            <li
                                onClick={() => { setIndex1(index) }}
                                key={index}
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === index1 && "bg-light-white"
                                    } `}
                            >
                                <Menu.icon size={25} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </li>
                        </NavLink >
                    ))}
                </ul>
            </div>

        </div>
    );
};
export default Navbar;