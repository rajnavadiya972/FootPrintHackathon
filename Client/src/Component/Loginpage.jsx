import React, { useState } from 'react'
import Home from './Home'

const Loginpage = () => {
    const [validateuser, setvaliadateuser] = useState(false);

    return (    
        <div className=' '>

            {
                validateuser ? <Home /> :
                    <div className='flex flex-col  justify-center  dark:text-white w-1/4 mx-auto h-screen '>
                        
                        <input type="text" placeholder="Username" className=' text-black p-2 rounded-xl mt-10'/>
                        <button  onClick={(e) => setvaliadateuser(true)} className="p-2 w-1/3 mx-auto mt-4 rounded-full bg-slate-500" >Login</button>

                    </div>
            }
        </div>
    )
}

export default Loginpage