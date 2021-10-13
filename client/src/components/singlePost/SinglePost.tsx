import { SingePostEdit, SinglePostDesc, SinglePostDiv, SinglePostIcon, SinglePostImg, SinglePostInfo, SinglePostTitle, SinglePostWrapper } from "../../style";
import LatteCup from "../../images/latteCup.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost(){
    /* fetch data according to id */
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({photo:"", title:"", username:"",createdAt:"",desc:""});

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
        }
        getPost()
    },[path]);
    return (
        <SinglePostDiv>
            <SinglePostWrapper>
                {post.photo && 
                    (<SinglePostImg src={post.photo} alt=""/>
                )}
                <SinglePostTitle>
                    {post.title}
                    <SingePostEdit>
                        <SinglePostIcon className="far fa-edit"></SinglePostIcon>
                        <SinglePostIcon className="far fa-trash-alt"></SinglePostIcon>
                    </SingePostEdit>
                </SinglePostTitle>
                <SinglePostInfo>
                    <span className="singlePostAuthor">Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                        {post.username}
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </SinglePostInfo>
                <SinglePostDesc>
                    {post.desc}
                </SinglePostDesc>
            </SinglePostWrapper>
        </SinglePostDiv>
    )
}