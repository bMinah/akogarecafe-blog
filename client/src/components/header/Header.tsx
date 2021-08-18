import { HeaderDiv, HeaderTitle, HeaderTitleSm, HeaderTitleLg, HeaderImage } from "../../style";
import headerImage from "../../images/header.jpg";

export default function Header() {
    return (
        <HeaderDiv>
            <HeaderTitle>
                <HeaderTitleSm>Gaming & Anime</HeaderTitleSm>
                <HeaderTitleLg>Blog</HeaderTitleLg>
            </HeaderTitle>
            <HeaderImage src={headerImage} alt=""/>
        </HeaderDiv>
    )
}