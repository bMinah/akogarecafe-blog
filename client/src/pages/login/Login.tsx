import { Link } from "react-router-dom";
import { LoginButton, LoginDiv, LoginForm, LoginFormLabel, LoginInput, LoginTitle, RegisterButton, StyledInput } from "../../style";

export default function Login() {
    return (
        <LoginDiv>
            <LoginTitle>Login</LoginTitle>
            <LoginForm>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <StyledInput type="text" placeholder="username" className="input input-bordered" />
                </div>
                <LoginFormLabel>Password</LoginFormLabel>
                <LoginInput type="password" placeholder="Enter your password..." />
                <LoginButton>Login</LoginButton>
            </LoginForm>
            <RegisterButton><Link className="link" to="/register">Register</Link></RegisterButton>
        </LoginDiv>
    )
}