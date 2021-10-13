import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import { HomeDiv } from "../../style";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function Home(){
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    // fire useEffect at beginning to fetch data
    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get("http://localhost:5000/api/posts"+search)
            setPosts(res.data)
            console.log(posts);
        }
        fetchPosts()
    },[search])
    return (
        <>
        <Header/>
        <HomeDiv>
            {posts.length === 0 && <div>no posts</div>}
            <Posts /* pass fetched post data as props */ posts={posts}/>
            <SideBar/>
        </HomeDiv>
        </>
    )
}