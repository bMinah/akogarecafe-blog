import { Link } from "react-router-dom"
import { TopDiv, TopSide, TopIcon, TopCenter, TopList, TopListItem, ProfileImage, TopSearchIcon } from "../../style";
import profileImage from "../../images/profile.jpg"

export default function TopBar() {
    const user = false;
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
                        <TopListItem>
                            {user && "Logout"}
                        </TopListItem>
                    </TopList>
            </TopCenter>
            <TopSide>
                {user ? (
                    <ProfileImage src={profileImage} alt=""/>
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