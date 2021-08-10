import { SideBarDiv, SidebarIcon, SidebarImage, SidebarItem, SideBarList, SidebarListItem, SidebarText, SidebarTitle } from "../../style";
import sidebarImage from "../../images/sidebar.jpg";

export default function SideBar() {
  return (
    <SideBarDiv>
      <SidebarItem>
        <SidebarTitle>About ME</SidebarTitle>
        <SidebarImage src={sidebarImage} alt="" />
        <SidebarText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum
          quidem ipsa fugit quod accusamus aperiam pariatur.
        </SidebarText>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>Categories</SidebarTitle>
        <SideBarList className="sidebarList">
          <SidebarListItem>Anime</SidebarListItem>
          <SidebarListItem>Cinema</SidebarListItem>
          <SidebarListItem>Game</SidebarListItem>
          <SidebarListItem>Music</SidebarListItem>
          <SidebarListItem>Sports</SidebarListItem>
          <SidebarListItem>Tech</SidebarListItem>
        </SideBarList>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>FOLLOW US</SidebarTitle>
        <div className="sidebarSocial">
          <SidebarIcon className="fab fa-twitch"></SidebarIcon>
          <SidebarIcon className="fab fa-youtube-square"></SidebarIcon>
          <SidebarIcon className="fab fa-instagram-square"></SidebarIcon>
          <SidebarIcon className="fab fa-twitter-square"></SidebarIcon>
        </div>
      </SidebarItem>
    </SideBarDiv>
  );
}
