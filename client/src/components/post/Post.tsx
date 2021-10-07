import { PostDiv, PostImg, PostInfo, PostCat, PostTitle, PostDate, PostDesc } from "../../style"
import { Link } from "react-router-dom"

interface PostProps {
    post: any
}

export default function Post({post}: PostProps) {
    return (
        <PostDiv>
            {post.photo && (
                <PostImg src={post.photo} alt=""/>
            )}
            <PostInfo>
                <div className="postCats">
                    <PostCat>{post.categories.map((c: any) => (
                        <span>{c.name}</span>
                    ))}</PostCat>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <PostTitle>
                        {post.title}
                    </PostTitle>
                </Link>
                <hr/>
                <PostDate>{new Date(post.createdAt).toDateString()}</PostDate>
            </PostInfo>
            <PostDesc>{post.desc}</PostDesc>
        </PostDiv>
    )
}