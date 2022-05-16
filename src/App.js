import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const baseURL="https://jsonplaceholder.typicode.com/posts/1";
// const baseURL="images.unsplash.com";

const App = () => {
    const [userdata,setuserdata]=useState([]);
    const getData=()=>{
        console.log("clicked");
        axios.get(baseURL)
        .then((response)=>{
            setuserdata(response.data)
            console.log(response.data)
        })
    }
    return (
        <div>
            <button onClick={getData}>Click</button>
            <h3>{userdata.title}</h3>
        </div>
    );
};

export default App;