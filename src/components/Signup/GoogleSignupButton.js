import { Button } from '@mui/material';
import {  signInWithGoogle } from '../../firebase';
import '/Users/gaku/react/X-clone/client/src/components/Signup/GoogleSinupButton.css';

const GoogleSignupButton = () => {

    const handleSignInWithGoogle = async () => {
        try {
          const result = await signInWithGoogle();
          const user = result.user;
          
          console.log('User information:', user);
          // You can now use the user information as needed
        } catch (error) {
          console.error('Error signing in with Google:', error);
        }
      };
    
  return (
    <div>
      <Button
      className='signinWithGoogle'
      onClick={handleSignInWithGoogle}>
        Sign up with Google
      </Button>
    </div>
  )
}

export default GoogleSignupButton
