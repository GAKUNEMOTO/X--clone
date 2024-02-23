import React from 'react'
import XIcon from '@mui/icons-material/X';
import "./LoginHome.css";
import { Card } from '@mui/material';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import './LoginHome';
import GoogleSignupButton from '../Signup/GoogleSignupButton';

const LoginHome = () => {
  
  return (
    <div>
       <>
    <div className='login'>
       <Card variant='outlined' className='card__container'>
        <XIcon className='login__icon'/>
        <h1>すべての話題が、ここに。</h1>
        <h2>今すぐ参加しましょう。</h2>
        <GoogleSignupButton/>
        <LoginButton/>
        <p>アカウントをお持ちですか？
         <Link to={'/Signup'}>
          Sign Up
         </Link>
         </p>
         </Card>
        
    </div>
    </>
    </div>
  )
}

export default LoginHome
