import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { TbMessageCircle2 } from 'react-icons/tb'
import { BsSend } from 'react-icons/bs'


const PostCard = ({ item, postdata, setPostdata }) => {
    const { profile, name, location, image, title, share, message, like } = item
    const [liked, setLiked] = useState(like)

    const likedislike = () => {
        if (liked == false) setLiked(true)
        else setLiked(false)
    }
    return (
        <div>
            <div className='w-3/6 max-lg:w-4/6 mx-auto dark:text-white'>
                <div class="my-10">
                    <div class="bg-white shadow-slate-700 rounded-lg dark:bg-gray-800 pb-0.5">
                        <div class="flex items-center px-4 py-3">
                            <img class="h-8 w-8 rounded-full" src={item.profile} />
                            <div class="ml-3 ">
                                <span class="text-sm font-semibold antialiased block leading-tight">{item.name}</span>
                                <span class="text-gray-600 dark:text- text-xs block">{item.location}</span>
                            </div>
                        </div>
                        <img src={item.image} className="my-1" />
                        <div class="flex items-center justify-between mx-4 mt-3 mb-2">
                            <div class="flex gap-5">
                                {liked == true ?
                                    <FcLike size={26} className='cursor-pointer' onClick={likedislike} /> :
                                    <AiOutlineHeart size={26} className='cursor-pointer' onClick={likedislike} />
                                }
                                <TbMessageCircle2 size={26} className='cursor-pointer' />
                                <BsSend size={24} className='cursor-pointer' />
                            </div>
                            <div class="flex">
                                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                            </div>
                        </div>
                        <div class="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCard