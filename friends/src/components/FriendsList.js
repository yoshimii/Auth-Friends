import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from '../components/Friend';
import FriendForm from '../components/FriendForm';
import { Link } from 'react-router-dom';

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
            <Link to='/addfriend'>add friend</Link> 
            {friends.map((item) => {
            return <Friend name={item.name} age={item.age} email={item.email} key={item.id} state={friends}/>
            })}
        </div>

    )
}

export default FriendsList;