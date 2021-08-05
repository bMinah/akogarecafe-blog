import Header from "../../header/Header"
import SideBar from "../../sidebar/Sidebar"
import Posts from "../../posts/Posts"
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