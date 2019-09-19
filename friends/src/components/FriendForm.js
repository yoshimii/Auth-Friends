import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { withRouter } from 'react-router-dom';

const FriendForm = (props) => {
    const [ newFriend, setFriend ] = useState({ name: '', age: '', email: '' });



    const handleChange = e => {
        e.preventDefault();
        setFriend({ ...newFriend, [e.target.name]: e.target.value })
        console.log(e.target.name)
    }
    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', newFriend )
        .then(res => {
            props.history.push('/friends')
        })
        .catch(err => {
            console.log(err)
        })

    }


    return (
        <form onSubmit={addFriend}>
            <input
            type='text'
            value={newFriend.name}
            placeholder='friend name'
            name='name'
            onChange={handleChange}
            >
            </input>
            <input
            type='text'
            value={newFriend.age}
            placeholder='age'
            name='age'
            onChange={handleChange}
            >
            </input>
            <input
            type='text'
            value={newFriend.email}
            placeholder='email'
            name='email'
            onChange={handleChange}
            >
            </input>
            <button type='submit'>submit friend</button>
        </form>
    )
}

export default withRouter(FriendForm);