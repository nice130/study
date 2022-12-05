import { async } from "@firebase/util";
import { dbService, storageService } from "fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React, { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweet", `${nweetObj.id}`)
    const desertRef = ref(storageService, nweetObj.attachmentUrl);
    const onDeleteClick = async() => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            try {
                await deleteDoc(NweetTextRef);
                if(nweetObj.attachmentUrl !== ""){
                    await deleteObject(desertRef);
                }    
            } catch (error) {
                window.alert("트윗을 삭제하는데 실패했습니다.");
            }
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(nweetObj,newNweet);
        updateDoc(NweetTextRef,{
            text:newNweet,
        });
        setEditing(false);
    }
    const onChange = (e)=>{
        const {
            target: {value},
        }= e
        setNewNweet(value);
    }
    return (
        <div>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder="Edit your nweet" value={newNweet} required onChange={onChange}/>
                            <input type="submit" value="Udate Nweet" />
                        </form>
                        <button onClick={toggleEditing}>Cancel</button>
                    </>
                ) : (<><h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width="50px" height="50px" />
                    }
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>
                    )}</>)
            }
        </div>
    );
};
export default Nweet;