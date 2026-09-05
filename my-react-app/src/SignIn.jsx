import { useState } from "react";
import { supabase } from './supabaseClient.js';
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        
        const{data,error} = await supabase
        .auth.signInWithPassword({email: email, password: password});

        if (error){
            console.error('Error saving data:', error.message);
            alert('Failed to find account.' + error.message);
    } else {
            alert('Account found');
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
            <input type = "submit" value = "sign in" />
        </form>
    )
}
export default SignIn;