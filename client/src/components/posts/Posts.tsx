import Post from "../post/Post";
import { PostsDiv } from "../../style";

interface PostsProps {
    posts: any
}

export default function Posts({posts}: PostsProps) {
    return (
        <PostsDiv /* for each post, call post component */>
            {posts.map((p: any) => (
                <Post /* Each child in a list should have a unique "key" prop */ key={p.title} 
                /* pass posts properties to post */ post={p} />
            ))}
        </PostsDiv>
    )
}