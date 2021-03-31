import axios from 'axios'
import React, {useEffect, useState} from 'react';
const USER_SERVICE_URL = 'http://rest-sandbox.coinapi.io/v1/exchanges';


export default function Coins(){
  
    let state = [];
    // let [responseData, setResponseData] = React.useState(''); 
    


useEffect(() => {
    const fetchUsers = async () => {
        try {
            setData({users: data.users, isFetching: true});
            const response = await axios.get(USER_SERVICE_URL);
            setData({users: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            setData({users: data.users, isFetching: false});
        }
    };
    fetchUsers();
}, []);

    return (
        <div>
            Hi Coins

   {state.length}
        </div>
    )
}