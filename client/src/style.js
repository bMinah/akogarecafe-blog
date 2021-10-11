import styled from 'styled-components';
import CoffeeBackground from "../src/images/coffeeBackground2.jpg";

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
    display: flex;
    flex-wrap: wrap;
    flex: 9;
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
    width: 46%;
    margin: 0 2% 40px 2%;
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

/* Write */

export const WriteDiv = styled.div`
    padding-top: 50px;
`;

export const WriteForm = styled.form`
    position: relative;
`;

export const WriteFormGroup = styled.div`
    margin-left: 150px;
    display: flex;
    align-items: center;
`;

export const WriteIcon = styled.i`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #797676;
    cursor: pointer;
`;

export const WriteInput = styled.input`
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;
    &:focus {
        outline: none;
    }
`;

export const WriteText = styled.textarea`
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;
    &:focus {
        outline: none;
    }
    font-size: 20px;
    height: 100vh;
`;

export const WriteSubmit = styled.button`
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
`;

export const WriteImage = styled.img`
    margin-left: 150px;
    width: 70vw;
    height 250px;
    border-radius: 10px;
    object-fit: cover;
`;

/* Settings */

export const SettingsDiv = styled.div`
    display: flex;
`;

export const SettingsWrapper = styled.div`
    flex: 9;
    padding: 20px;
`;

export const SettingsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SettingsUpdateTitle = styled.span`
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
`;

export const SettingsDeleteTitle = styled.span`
    color: red;
    font-size: 12px;
    cursor: pointer;
`;

export const SettingsForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const SettingsPP = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

export const SettingsPPImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
`;

export const SettingsPPIcon = styled.i`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: lightcoral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
`;

export const SettingsFormLabel = styled.label`
    font-size: 20px;
    margin-top: 20px;
`;

export const SettingsFormInput = styled.input`
    color: gray;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
`;

export const SettingsSubmit = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
`;

/* Login/Register */

export const StyledInput = styled.input`
    background-color: white;
`;

export const LoginDiv = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url(${CoffeeBackground});
    background-size: cover;
`;

export const LoginTitle = styled.span`
    font-size: 50px;
`;

export const LoginForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const LoginFormLabel = styled.label`
    margin:10px 0;
`;

export const LoginInput = styled.input`
    background-color: white;
    padding: 10px;
    border: none;
`;

export const LoginButton = styled.button`
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;
    width: 165px;
`;

export const RegisterButton = styled.button`
    margin-top: 10px;
    background-color: blue;
    cursor: pointer;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px; 
    width: 165px;
`;