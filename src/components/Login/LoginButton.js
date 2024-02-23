import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./LoginButton.css";

const LoginButton = () => {
    const navigate = useNavigate()

const handleLoginForm = () => {
    navigate('/Login')
}

  return (
    <div>
        <Button className='btn-login' onClick={handleLoginForm}>
            Login
        </Button>
    </div>
  )
}

export default LoginButton
