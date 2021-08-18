import { PostDiv, PostImg, PostInfo, PostCat, PostTitle, PostDate, PostDesc } from "../../style"
import Latte from "../../images/latteCup.jpg"

export default function Post() {
    return (
        <PostDiv>
            <PostImg src={Latte} alt=""/>
            <PostInfo>
                <div className="postCats">
                    <PostCat>Anime</PostCat>
                    <PostCat>Game</PostCat>
                </div>
                <PostTitle>
                    Lorem ipsum dolor sit amet
                </PostTitle>
                <hr/>
                <PostDate>1 Hour ago</PostDate>
            </PostInfo>
            <PostDesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, assumenda quis. Ut veritatis laudantium, voluptatum repellat voluptatibus sunt accusamus perferendis nemo animi vitae sint, sapiente ipsum id quae officiis aut!</PostDesc>
        </PostDiv>
    )
}