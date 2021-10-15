import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginButton, LoginDiv, LoginForm, LoginFormLabel, LoginInput, LoginTitle, RegisterButton } from "../../style";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleSubmit = async (e: any)=>{
        // prevent refresh
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("http://localhost:5000/api/auth/register",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }
    };
    return (
        <LoginDiv>
            <LoginTitle>Register</LoginTitle>
            <LoginForm onSubmit={handleSubmit}>
                <LoginFormLabel>Username</LoginFormLabel>
                <LoginInput type="text" placeholder="Enter your username..." onChange={(e: any)=>setUsername(e.target.value)}/>
                <LoginFormLabel>Email</LoginFormLabel>
                <LoginInput type="text" placeholder="Enter your email..." onChange={(e: any)=>setEmail(e.target.value)}/>
                <LoginFormLabel>Password</LoginFormLabel>
                <LoginInput type="password" placeholder="Enter your password..." onChange={(e: any)=>setPassword(e.target.value)}/>
                <LoginButton type="submit">Register</LoginButton>
            </LoginForm>
            <RegisterButton><Link className="link" to="/login">Back</Link></RegisterButton>
            {error && <span style={{color: "red", marginTop: "10px"}}>Something went wrong!</span>}
        </LoginDiv>
    )
}