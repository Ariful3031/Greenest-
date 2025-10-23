import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updateData) => {

        return updateProfile(auth.currentUser, (updateData))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const AuthInfo = {
        createUser,
        setUser,
        user,
        updateUser,
    }



    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;