import { useState } from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

const signInButton = <button onclick={SignIn}>Sign in</button>
const signUpButton = <button onclick={SignUp}>Sign up</button>
function Auth() {
    const [view, setView] = useState('menu');
    if (view == 'signin'){
        return <SignIn />
    }
    if (view == 'signup'){
        return <SignUp />
    }
return (
<div>
    <button onClick={() => setView('signin')}>Sign in</button> <br />
    <button onClick={() => setView('signup')}>Sign up</button>
</div>
);
}
export default Auth;