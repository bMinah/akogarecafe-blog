import { Link } from "react-router-dom";
import { LoginButton, LoginDiv, LoginForm, LoginFormLabel, LoginInput, LoginTitle, RegisterButton } from "../../style";

export default function Register() {
    return (
        <LoginDiv>
            <LoginTitle>Register</LoginTitle>
            <LoginForm>
                <LoginFormLabel>Username</LoginFormLabel>
                <LoginInput type="text" placeholder="Enter your username..."/>
                <LoginFormLabel>Email</LoginFormLabel>
                <LoginInput type="text" placeholder="Enter your email..."/>
                <LoginFormLabel>Password</LoginFormLabel>
                <LoginInput type="password" placeholder="Enter your password..."/>
                <LoginButton>Register</LoginButton>
            </LoginForm>
            <RegisterButton><Link className="link" to="/login">Back</Link></RegisterButton>
        </LoginDiv>
    )
}