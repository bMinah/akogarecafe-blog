import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/Sidebar"
import { HomeDiv } from "../../style"

export default function Home(){
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