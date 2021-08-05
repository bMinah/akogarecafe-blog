import styled from 'styled-components';

export const TopDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    font-family: 'Lato', sans-serif;
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