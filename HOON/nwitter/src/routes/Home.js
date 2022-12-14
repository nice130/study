import Nweet from "components/Nweet";
import { dbService, storageService } from "fbase";
import {addDoc,collection,getDocs,onSnapshot,query,orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import {v4} from "uuid";

const Home=({userObj})=>{
    const [nweet,setNweet] = useState("");
    const [nweets,setNweets] = useState([]);
    const [attachment,setAttachment] = useState();
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
            setNweets(nweetArr);
        });
    },[]);
    const onSubmit = async (e) => {
        e.preventDefault();
        let attachmentUrl = "";
        if(attachment!==""){
            const fileRef = ref(storageService, `${userObj.uid}/${v4()}`);
            //storage 참조 경로로 파일 업로드 하기
            const response = await uploadString(fileRef, attachment, "data_url");
            //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachmentUrl 변수에 넣어서 업데이트
            attachmentUrl = await getDownloadURL(response.ref);
        }
        // const nweetObj = {
        //     text: nweet,
        //     createdAt: Date.now(),
        //     creatorId: userObj.uid,
        //     attachmentUrl,
        // };
        await addDoc(collection(dbService, "nweet"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId : userObj.uid,
        attachmentUrl,
        });
        setAttachment("");
        setNweet("");
    };
    const onChange = (e) =>{
        const {target:{value}} = e;
        setNweet(value);
    };
    const onFileChange = (e) =>{
        const{
            target:{files},
        }=e;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent)=>{
            const {
                currentTarget : {result},
            } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => setAttachment("");
    return (
        <>
        <form onSubmit={onSubmit}>
            <input value={nweet} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120} />
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="nweet" />
            {attachment &&
            <div>
                <img src={attachment} width="50px" height="50px" />
                <button onClick={onClearAttachment}>Clear</button>
            </div>
            }
        </form>
        <div>
            {nweets.map((nweet)=>(
                <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
            ))}
        </div>
        </>
    )
}
export default Home;