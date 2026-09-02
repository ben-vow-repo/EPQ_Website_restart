import { useState } from "react";
import { supabase } from './supabaseClient.js';
function SignIn() {
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(name);
    }
    return(
        <form onSubmit={handleSubmit}>
            

        </form>
    )
}
export default SignIn;