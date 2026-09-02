import { supabase } from './supabaseClient.js';
import { useState } from 'react'
function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const{data,error} = await supabase
        .from('users')
        .insert([{user_email : email,
            user_password : password
        }]);

        if (error){
            console.error('Error saving data:', error);
            alert('Failed to save name.');
    } else {
            alert('Name saved to free database successfully!');
            setEmail(""); 
            setPassword("");
    }
        }
    
    return(
        <form onSubmit={handleSubmit}>
            <input
                type = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email"
                required
                />
                <br />
            <input
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
                required
                />
                <br />
            <input type = "submit" value = "sign up" />
        </form>
    )
}
export default SignUp;