import { Button, TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrtext, setEmailErrtext] = useState("");
  const [passwordErrtext, setPasswordErrtext] = useState("");

  const isValidEmail = (email) => {
    // Use a regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onLogin = (e) => {
    e.preventDefault();
    setEmailErrtext("");
    setPasswordErrtext("");

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
    }

    if (error) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/Home');
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className='login'>
        <form>
          <div className='box__container'>
            <h2>Login</h2>
            <div className='email'>
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

            <div className='password'>
              <TextField
                id="outlined-basic"
                value={password}
                type='password'
                label="Password"
                variant="outlined"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                helperText={passwordErrtext}
                error={passwordErrtext !== ""}
              />
            </div>

            <div className='submit'>
              <Button className='btn_submit' onClick={onLogin} fullWidth>
                LogIn
              </Button>
            </div>

            <p>
              You don't have an account?{''}
              <Link to={'/Signup'}>Signin</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
