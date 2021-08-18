import SideBar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import { LandingDiv } from "../../style";

export default function Landing(){
    return (
        <LandingDiv>
            {/* post */}
            <SinglePost/>
            <SideBar/>
        </LandingDiv>
    )
}