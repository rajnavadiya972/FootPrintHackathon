import React from 'react'
import Navbar from './Navbar'
const data=[
    {
        
    }
]

function Notification() {
    return (
        <div className='text-white flex'>
            <Navbar />
            <div className='justify-center align-middle mx-auto mt-10 '>

                <div className='text-center'>Notification</div>
                <div className='flex justify-center my-2'>
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Logo" className='h-20 w-20 my-auto border rounded-lg' />
                    <div className='my-auto mx-3'>
                        <div>Name</div>
                        <div>Masseges</div>
                    </div>
                    <button className=' mx-2 bg-gray-500 my-5 px-2 rounded-lg' >Mark as Read</button>
                </div>
            </div>
        </div>
    )
}

export default Notification