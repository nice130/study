import { authService, dbService } from "fbase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { updateProfile } from "@firebase/auth";
import { async } from "@firebase/util";


const Profile= ({userObj})=>{
    const history = useHistory();
    const [newDisplayName,setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = ()=>{
        authService.signOut();
        history.push("/");
    }
    const getMyNweets = async () => {
        //3. 트윗 불러오기
        //3-1. dbService의 컬렉션 중 "nweets" Docs에서 userObj의 uid와 동일한 creatorID를 가진 모든 문서를 내림차순으로 가져오는 쿼리(요청) 생성
        const q = query(
            collection(dbService, "nweets"),
            where("creatorId", "==", userObj.uid),
            orderBy("createdAt", "desc")
        );
        
        //3-2. getDocs()메서드로 쿼리 결과 값 가져오기
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        });
    };
    useEffect(() => {
        getMyNweets();
    }, []);
    const onChange = (e) =>{
        const {
            target: {value},
        }=e;
        setNewDisplayName(value);
    }
    const onSubmit = async(e)=>{
        e.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(userObj, { displayName: newDisplayName });
        }
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName}/>
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}
export default Profile;