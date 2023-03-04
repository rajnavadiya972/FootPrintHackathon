import React, { useState } from 'react'
import PostCard from './PostCard';
const postdatacard = [
    {
        profile: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Joan",
        location: "surat, gujarat",
        image: "https://images.unsplash.com/photo-1677646309413-afbb660967d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "joan's post",
        likes: "200",
        like: true,
        message: "30",
        share: ""
    },
    {
        profile: "https://randomuser.me/api/portraits/women/24.jpg",
        name: "Aimee",
        image: "https://plus.unsplash.com/premium_photo-1669559808842-83fbd765984f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1897&q=80",
        likes: "300",

        location: "vadodra, gujarat",
        like: false,
        title: "aimme's post",
        message: "67",
        share: ""
    }
]


const Home = () => {
    const [postdata, setPostdata] = useState(postdatacard);


    const updateFieldChanged = index => e => {
        console.log('index: ' + index);
        console.log(e.target);
        // console.log('property name: '+ e.target.name);
        let newArr = [...postdata];
        // copying the old datas array
        // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
        newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
        setPostdata(newArr);
    }
    return (
        <div className='flex flex-col  '>
            {
                postdata.length == 0 ? <h1> no any new posts </h1> :
                    postdata.map((item, index) => (
                        <div>

                            <PostCard item={item} key={index} onChange={updateFieldChanged(index)} postdata={postdata} setPostdata={setPostdata} />
                        </div>
                    ))
            }
        </div>
    )
}

export default Home