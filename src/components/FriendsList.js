import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../axiosAuth';

const initialFriends = [
    {   name: 'Terry Terryson',
        email: 'terry@terryson.com' },
    {   name: 'Fakename Bob',
        email:  'fakename@bobinson.com'},
]

export default function FriendsList () {

    let [friends, setFriends] = useState(initialFriends)

    useEffect(() => {
        axiosWithAuth().get(`http://localhost:9000/api/friends`)
            .then((res) => {
                console.log(res.data);
                setFriends(res.data);
            })
    }, [])

    return (
        <>
        <h1>FREINDS LIST</h1>
        {friends.map((friend, idx) => {
            return <div key={idx} > - {friend.name} - {friend.email}</div>
        })}
        </>
    )
}