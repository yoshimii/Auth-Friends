import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from '../components/Friend';
import FriendForm from '../components/FriendForm';

const FriendsList = () => {
    const [ friends, setFriends ] = useState();
    
    useEffect(()=> {
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res)
        })
    }, [])

    if(!friends){
        return <p>Loading friends...</p>
    }

    console.log(friends)
    return (
        <div>   
            <FriendForm />
            {friends.map((item) => {
               return <Friend name={item.name} age={item.age} email={item.email} key={item.id}/>
            })}
        </div>

    )
}

export default FriendsList;