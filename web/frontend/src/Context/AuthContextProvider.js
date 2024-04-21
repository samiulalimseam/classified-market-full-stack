import { useQuery } from '@tanstack/react-query';

import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth';
import app from '..//Firebase/firebase.config'
export const AuthContext = createContext({});
const auth = getAuth(app);


export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});
     const [account,setAccount] = useState({});
    const [loading,setLoading] = useState(true);
    const [newTitle,setNewTitle] = useState('Home');
    const googleProvider = new GoogleAuthProvider() ;

    document.title = newTitle;
    
    
    const {data: accData = {}} = useQuery({
        queryKey : ['accData', user?.email],
        queryFn: async ()=> {
            const res = await  fetch(`https://ass-12-server-tau.vercel.app/user/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
   

    


    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithemail = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
   
     
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    const createUser = (email, password)=>{
        
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
            
             setLoading(false)
         })
         return ()=>{
             unsubscribe();
         }
     },[])

     useEffect(()=>{
        setLoading(true)
        
        setTimeout(() => {
        }, 2000);
        setLoading(false);
     },[])


    const authInfo = {accData,setAccount,setNewTitle,logOut,createUser,updateUser, loginWithemail, user,loading, setUser,signIn, googleLogin,setLoading} 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
    


export default AuthContextProvider;