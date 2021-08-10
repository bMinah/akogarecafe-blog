import { TopDiv, TopSide, TopIcon, TopCenter, TopList, TopListItem, ProfileImage, TopSearchIcon } from "../../style";
import profileImage from "../../images/profile.jpg"

export default function TopBar() {
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
                            Home
                        </TopListItem>
                        <TopListItem>
                            About
                        </TopListItem>
                        <TopListItem>
                            Contact
                        </TopListItem>
                        <TopListItem>
                            Write
                        </TopListItem>
                        <TopListItem>
                            Logout
                        </TopListItem>
                    </TopList>
            </TopCenter>
            <TopSide>
                <ProfileImage src={profileImage} alt=""/>
                <TopSearchIcon className="fas fa-search"></TopSearchIcon>
            </TopSide>
        </TopDiv>
    );
}