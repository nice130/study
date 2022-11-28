import { dbService } from "fbase";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home=()=>{
    const [nweet,setNweet] = useState("");
    const [nweets,setNweets] = useState([]);
    const getNweets = async ()=>{
        const dbNweets=await dbService.collection("nweets").get();
        dbNweets.forEach((document)=>console.log(document.data()));
    }
    useEffect(()=>{
        getNweets();
    },[]);
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(`서브밋 하는 느윗:${nweet}`);
        await addDoc(collection(dbService, "nweet"), {
        nweet,
        createdAt: Date.now(),
        });
        setNweet("");
    };
    const onChange = (e) =>{
        const {target:{value}} = e;
        setNweet(value);
    };
    return (
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120} />
            <input type="submit" value="nweet" />
        </form>
    )
}
export default Home;