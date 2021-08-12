import { LoginButton, LoginDiv, LoginForm, LoginFormLabel, LoginInput, LoginTitle, RegisterButton } from "../../style";

export default function Login() {
    return (
        <LoginDiv>
            <LoginTitle>Login</LoginTitle>
            <LoginForm>
                <LoginFormLabel>Email</LoginFormLabel>
                <LoginInput type="text" placeholder="Enter your email..."/>
                <LoginFormLabel>Password</LoginFormLabel>
                <LoginInput type="password" placeholder="Enter your password..."/>
                <LoginButton>Login</LoginButton>
            </LoginForm>
            <RegisterButton>Register</RegisterButton>
        </LoginDiv>
    )
}