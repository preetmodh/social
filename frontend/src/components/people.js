import axios from "axios";
import React, { Component,useEffect, useState } from "react";

import {Navlink} from "react-router-dom";




export default function People(){
    const[suggestedFriends,setsuggestedFriends]=  useState();
    const x=localStorage.getItem('token')
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/user/suggested_friends`,{
            headers: {
                'Authorization': `token ${x}`,
              }}).then((res)=>{
            console.log('donzo');
            console.log(res);
        },(error)=>{console.log(error.message,error.response)})
        
    }, [])
    
    return(
        <>
        
        </>
    )
}