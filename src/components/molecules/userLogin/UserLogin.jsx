import UserImage from "../../../../public/747376.svg";
import Image from "next/image";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

import { selectCount } from "../../../redux/shoppingSlice";
import { useSelector } from "react-redux";

export default function UserLogin() {

    const [user, setUser] = useState({isLogin: false, name: ""});

    const count = useSelector(selectCount);

    const onClick = () => {
        const auth = getAuth();
        const provider  = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            setUser({isLogin: true, name: result.user.displayName})
        }).catch((err) => {
            console.error(err);
        })
    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => console.log("success")).catch((err) => console.error(err));
    }

    const getUser = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({isLogin: true, name: user.displayName})
            } else {
                setUser({isLogin: false, name: ""})
            }
        });
    }

    useEffect(() => {
        getUser();
    }, [])


    return  <div className="flex justify-end items-center">
                {user.isLogin ?
                    <>
                        <Image className="m-3" width="20" height="20" src={UserImage} alt="User icon"/>
                        <span className="m-3">{user.name}</span>
                        <div className="bg-yellow-400 rounded-xl py-2 px-4 m-3">{count}</div>
                        <button className="font-bold text-yellow-400" onClick={logOut}>Log out</button>
                    </>
                :
                    <>
                        <button className="flex items-center" onClick={onClick}>
                            <span className="m-2">Sign in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="2"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/></svg>
                        </button>
                    </>
                }
            </div>
}