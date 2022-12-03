import { dbService } from "fbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef = doc(dbService, "nweet", `${nweetObj.id}`)
    const onDeleteClick = () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            deleteDoc(NweetTextRef);
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