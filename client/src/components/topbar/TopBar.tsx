import { Link } from "react-router-dom"
import { TopDiv, TopSide, TopIcon, TopCenter, TopList, TopListItem, ProfileImage, TopSearchIcon } from "../../style";
import profileImage from "../../images/profile.jpg"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
    // @ts-ignore
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        // @kavy do I need this, sometimes it refreshes, sometimes it doesn't
        window.location.replace("/login");
    };
    return (
        <TopDiv>
            <TopSide>
                <TopIcon className="fab fa-twitch"></TopIcon>
                <TopIcon className="fab fa-youtube-square"></TopIcon>
                <TopIcon className="fab fa-instagram-square"></TopIcon>
                <TopIcon className="fab fa-twitter-square"></TopIcon>
            </TopSide>
            <TopCenter>
                    <TopList>
                        <TopListItem>
                            <Link className="link" to="/">Home</Link>
                        </TopListItem>
                        <TopListItem>
                            <Link className="link" to="/about">About</Link>
                        </TopListItem>
                        <TopListItem>
                            <Link className="link" to="/contact">Contact</Link>
                        </TopListItem>
                        <TopListItem>
                            <Link className="link" to="/write">Write</Link>
                        </TopListItem>
                        <TopListItem onClick={handleLogout}>
                            {user && "Logout"}
                        </TopListItem>
                    </TopList>
            </TopCenter>
            <TopSide>
                {user ? (
                    <ProfileImage src={user.profilePic || profileImage} alt=""/>
                )  : (
                    <TopList>
                        <TopListItem>
                            <Link className="link" to="/login">Login</Link>
                        </TopListItem>
                        <TopListItem>
                            <Link className="link" to="/register">Register</Link>
                        </TopListItem>
                    </TopList>
                ) }
                <TopSearchIcon className="fas fa-search"></TopSearchIcon>
            </TopSide>
        </TopDiv>
    );
}