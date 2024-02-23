import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './Signup.css';


const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailErrtext, setEmailErrtext] = useState("");
    const [passwordErrtext, setPasswordErrtext] = useState("");
    const [confirmErrtext, setConfirmErrtext] = useState("");


    
    const onSubmit = async (e) => {
        e.preventDefault();
        setEmailErrtext("");
        setPasswordErrtext("");
        setConfirmErrtext("");
    
        let error = false;
    
        if (email.trim() === "") {
            error = true;
            setEmailErrtext("メールアドレスを入力してください");
        } else if (!isValidEmail(email.trim())) {
            error = true;
            setEmailErrtext("有効なメールアドレスを入力してください");
        }

        if (password.trim() === "") {
            error = true;
            setPasswordErrtext("パスワードを入力してください");
        } else if (!isValidEmail(password.trim())) {
            error = true;
            setPasswordErrtext("有効なパスワードを入力してください");
        }

        if (confirmPassword.trim() === "") {
            error = true;
            setConfirmErrtext("確認パスワードを入力してください");
        } else if (!isValidEmail(confirmPassword.trim())) {
            error = true;
            setConfirmErrtext("パスワードがあっていません");
        }
    
    
        if (error) return;
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User registered:', user);
            navigate("/AccountCreate");
        } catch (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.error(errorCode, errorMessage);
        }
    };
    
    // Helper function to validate email format
    const isValidEmail = (email) => {
        // Use a regular expression for basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    
    
  return (
    <>
    <div className='signup'>
        <form>
        <div className='box__container'>
            <h2>SignUp</h2>

            <div className='signup_email'>
            <TextField 
            id="outlined-basic" 
            value={email}
            type='email'
            variant="outlined" 
            label='Email'
            autoComplete="current-password"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            helperText={emailErrtext}
            error={emailErrtext !== ""}
            />
            </div>

            <div className='signup_password'>
                <TextField 
                id="outlined-basic" 
                value={password}
                type='password'
                variant="outlined" 
                label='Password'
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                helperText={passwordErrtext}
                error={passwordErrtext !== ""}
                />
            </div>

            <div className='confirmPassword'>
                <TextField 
                    id="outlined-basic" 
                    value={confirmPassword}
                    type='password'
                    variant="outlined" 
                    label='ConfirmPassword'
                    autoComplete="current-password"
                    onChange={(e) => {
                    setConfirmPassword(e.target.value);}}
                    fullWidth
                    helperText={confirmErrtext}
                    error={confirmErrtext !== ""}
                />
            </div>

            <div className='submit'>
                <Button className='btn_submit' onClick={onSubmit} fullWidth>Sign Up</Button>
            </div>
            <p>
                Already have an account?{''}
                <Link to={'/Login'}>
                LogIn</Link>
            </p>
            </div>
        </form>
    </div>
    </>
  )
}

export default Signup;
