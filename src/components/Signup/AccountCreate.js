import { Button, TextField, alertClasses } from '@mui/material'
import React, { useState } from 'react'
import './AccountCreate.css';
import { collection, doc, setDoc } from 'firebase/firestore';
import db from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AccountCreate = () => {
    const [userName, setUserName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [avatar, setAvatar] = useState('');
    const navigate = useNavigate();

    const onCreate = async() => {
        const userData = {
            userName,
            displayName,
            avatar,
        };

        const userCollectionRef = collection(db, "userInfomations");
        const userDocRef = doc(userCollectionRef);
        
        await setDoc(userDocRef, userData);


        
        navigate('/Home');

    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setAvatar(file);
    }




  return (
    <div className='create_account'>
        <form>
        <div className='createAccount_box'>
        <h2>Create Your Account</h2>
        <TextField
        type='text'
        value={userName}
        autoComplete="current-password"
        label='username'
        className='username_box'
        fullWidth
        onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
        type='text'
        value={displayName}
        autoComplete="current-password"
        label='nickname'
        className='nickname_box'
        fullWidth
        onChange={(e) => setDisplayName(e.target.value)}
        />

        <p>
        Add Your Photo
        </p>

         
        <input
        type='file'
        value={avatar}
        autoComplete="current-password"
        label='nickname'
        onChange={handleFileChange}
        />

        <Button onClick={onCreate}>
            Create Accout
        </Button>

        </div>
        </form>
    </div>
  )
}

export default AccountCreate
