import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import { HomeDiv } from "../../style";
import axios from "axios";


export default function Home(){
    const [posts, setPosts] = useState([]);

    // fire useEffect at beginning to fetch data
    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get("http://localhost:5000/api/posts")
            console.log(res.data)
        }
        fetchPosts()
    },[])
    return (
        <>
        <Header/>
        <HomeDiv>
            <Posts/>
            <SideBar/>
        </HomeDiv>
        </>
    )
}