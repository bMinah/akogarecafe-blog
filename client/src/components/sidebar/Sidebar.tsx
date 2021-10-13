import { SideBarDiv, SidebarIcon, SidebarImage, SidebarItem, SideBarList, SidebarListItem, SidebarText, SidebarTitle } from "../../style";
import sidebarImage from "../../images/sidebar.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);  
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
        <SideBarList /* for each post, call post component */ className="sidebarList">
          {cats.map((c: any) => (
            <Link to={`/?cat=${c.name}`}className="link">
              <SidebarListItem key={c.name}>{c.name}</SidebarListItem>
            </Link>
          ))}
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
