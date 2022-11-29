import { dbService } from "fbase";
import { addDoc, collection,getDocs,onSnapshot,query,orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home=({userObj})=>{
    const [nweet,setNweet] = useState("");
    const [nweets,setNweets] = useState([]);
    const getNweets = async () => {
        const dbNweets = await getDocs(collection(dbService, "nweet"));
        dbNweets.forEach((doc) => {
            const nweetObject = {
                ...doc.data(),
                id: doc.id,
            };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    };
    useEffect(() => {
        const q = query(
        collection(dbService, "nweet"),
        orderBy("createdAt", "desc")
        );
        onSnapshot(q,(snapshot)=>{
            const nweetArr = snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            console.log(nweetArr);
            setNweets(nweetArr);
        });
    },[]);
    const onSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(dbService, "nweet"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId : userObj.uid,
        });
        setNweet("");
    };
    const onChange = (e) =>{
        const {target:{value}} = e;
        setNweet(value);
    };
    return (
        <>
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120} />
            <input type="submit" value="nweet" />
        </form>
        <div>
            {nweets.map((nweet)=>(
                <div key={nweet.id}>
                    <h4>{nweet.text}</h4>
                </div>
            ))}
        </div>
        </>
    )
}
export default Home;