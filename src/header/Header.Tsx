import { HeaderDiv, HeaderImage, HeaderTitle, HeaderTitleLg, HeaderTitleSm } from "../style";
import headerImage from "../images/header.jpg";

export default function Header() {
    return (
        <HeaderDiv>
            <HeaderTitle>
                <HeaderTitleSm>Gaming & Anime</HeaderTitleSm>
                <HeaderTitleLg>Blog</HeaderTitleLg>
            </HeaderTitle>
            <HeaderImage className="headerImg" src={headerImage} alt=""/>
        </HeaderDiv>
    )
}