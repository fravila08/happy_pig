import { useState, useEffect } from "react";
import axios from "axios";

function MyProfile(){
    const [profile, setProfile]= useState([])

    useEffect(async ()=>{
        let resProfile=await axios.get("profile")
        setProfile(resProfile.data[0])
    }, [])

    console.log(profile)
    return(
        <div>
            <h1>PROFILE</h1>
            <p>Your name: {profile.name}</p>
            <buttun></buttun>
            <p>Your email: {profile.email}</p>
        </div>
    )
}

export default MyProfile;