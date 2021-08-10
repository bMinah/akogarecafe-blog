import styled from 'styled-components';

/* Top Bar */ 

export const TopDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
    z-index: 1;
`;

export const TopSide = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
`;

export const TopCenter = styled.div`
    flex: 6;
`;

export const TopIcon = styled.i`
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
`;

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

export const TopList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const TopListItem = styled.li`
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
`;

export const TopSearchIcon = styled.i`
    margin-top: auto;
    margin-bottom: auto;
    font-size: 18px;
    color: #666;
    cursor: pointer;
    margin-left: 15px;
`;

/* Header */ 

export const HeaderDiv = styled.div`
    margin-top: 60px;
`;

export const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lato', sans-serif;
    color: #444;
`;

export const HeaderTitleSm = styled.span`
    position: absolute;
    top: 12%;
    font-size: 20px
`;

export const HeaderTitleLg = styled.span`
    position: absolute;
    top: 12.5%;
    font-size: 100px;
`;

export const HeaderImage = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
`;

/* Home */

export const HomeDiv = styled.div`
    display: flex;
`;

/* Posts */

export const PostsDiv = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`;

/* Sidebar */

export const SidebarIcon = styled.i`
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
`;

export const SideBarDiv = styled.div`
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background-color: #fdfbfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SidebarImage = styled.img`
    width: 100%;
    object-fit: cover;
    margin-top: 15px;
`;

export const SidebarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SidebarTitle = styled.div`
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top 1px solid #a7a4a4;
    border-bottom 1px solid #a7a4a4;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    color #222;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
`;

export const SidebarText = styled.p`
    padding: 30px;
`;

export const SideBarList = styled.ul`
    list-style: none;
    margin-bottom: 30px;
    text-align: center;
    padding: 0;
`;

export const SidebarListItem = styled.li`
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;
`;

export const SidebarSocial = styled.div`
    margin-top: 15px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/* Post */

export const PostDiv = styled.div`
    width: 385px;
    margin: 0 25px 40px 25px;
`;

export const PostImg = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostCat = styled.span`
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    color: #be9656;
    line-height: 20px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
`;

export const PostTitle = styled.span`
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
`;

export const PostDate = styled.span`
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-size: 13px;
    color: #999;
    margin-top: 15px;
`;

export const PostDesc = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #444;
    line-height: 24px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

/* Single Post */

export const SinglePostDiv = styled.div`
    flex: 9;
`;

export const SinglePostImg = styled.img`
    width:100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
`;

export const SinglePostWrapper = styled.div`
    padding: 20px;
    padding-rght: 0;
`;

export const SinglePostTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    margin: 10px;
    text-align: center;
    font-size: 28px;
`;

export const SingePostEdit = styled.div`
    float: right;
    font-size: 16px;
`;

export const SinglePostIcon = styled.i`
    cursor: pointer;
    margin-left: 10px;
    &:first-child {
        color: teal;
    }
    &:last-child {
        color: tomato;
    }
`;

export const SinglePostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 16px;
    color: #b39656;
    font-family: 'Lato', sans-serif;
`;

export const SinglePostDesc = styled.div`
    color: #666;
    font-size: 18px;
    line-height: 25px;
    &::first-letter {
        margin-left: 20px;
        font-size: 30px;
        font-weight: 600;
    }
`;

/* Landing */

export const LandingDiv = styled.div`
    display: flex;
`;