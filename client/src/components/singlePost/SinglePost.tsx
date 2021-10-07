import { SingePostEdit, SinglePostDesc, SinglePostDiv, SinglePostIcon, SinglePostImg, SinglePostInfo, SinglePostTitle, SinglePostWrapper } from "../../style";
import LatteCup from "../../images/latteCup.jpg";
import { useLocation } from "react-router";

export default function SinglePost(){
    /* fetch data according to id */
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    return (
        <SinglePostDiv>
            <SinglePostWrapper>
                <SinglePostImg src={LatteCup} alt=""/>
                <SinglePostTitle>
                    Lorem upsum dolor sit amet
                    <SingePostEdit>
                        <SinglePostIcon className="far fa-edit"></SinglePostIcon>
                        <SinglePostIcon className="far fa-trash-alt"></SinglePostIcon>
                    </SingePostEdit>
                </SinglePostTitle>
                <SinglePostInfo>
                    <span className="singlePostAuthor">Author: JyR</span>
                    <span className="singlePostDate">1 Hour ago</span>
                </SinglePostInfo>
                <SinglePostDesc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident sunt distinctio numquam fugiat exercitationem ex minima ipsa eos in nisi ipsum maiores placeat temporibus, enim suscipit eius. Iusto, repellendus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident sunt distinctio numquam fugiat exercitationem ex minima ipsa eos in nisi ipsum maiores placeat temporibus, enim suscipit eius. Iusto, repellendus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident sunt distinctio numquam fugiat exercitationem ex minima ipsa eos in nisi ipsum maiores placeat temporibus, enim suscipit eius. Iusto, repellendus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident sunt distinctio numquam fugiat exercitationem ex minima ipsa eos in nisi ipsum maiores placeat temporibus, enim suscipit eius. Iusto, repellendus?
                </SinglePostDesc>
            </SinglePostWrapper>
        </SinglePostDiv>
    )
}