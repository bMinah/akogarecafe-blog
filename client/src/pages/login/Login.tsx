import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LoginButton, LoginDiv, LoginForm, LoginFormLabel, LoginInput, LoginTitle, RegisterButton, StyledInput } from "../../style";
// @ts-ignore
import { Context } from "../../context/Context";
import { useContext } from "react";
import axios from "axios";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    // @ts-ignore
    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // setError(false);
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login",{
                // @ts-ignore
                username: userRef.current.value,
                // @ts-ignore
                password: passwordRef.current.value,
            });
            // @ts-ignore
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE" });
            // setError(true);
        }
    };
    console.log(user);
    return (
        <LoginDiv>
            <LoginTitle>Login</LoginTitle>
            <LoginForm onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <StyledInput type="text" placeholder="username" className="input input-bordered" ref={userRef}/>
                </div>
                <LoginFormLabel>Password</LoginFormLabel>
                <LoginInput type="password" placeholder="Enter your password..." ref={passwordRef}/>
                <LoginButton type="submit" disabled={isFetching}>Login</LoginButton>
            </LoginForm>
            <RegisterButton><Link className="link" to="/register">Register</Link></RegisterButton>
        </LoginDiv>
    )
}