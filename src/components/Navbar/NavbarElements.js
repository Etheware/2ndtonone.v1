
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav `
    background: white;
    width: 100%;
    outline: 6px solid whitesmoke;
    height: 150px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 40px;
    margin: 10 0 0 0;
    max-width: 1100px;   
`;

export const NavLogo = styled(LinkR) `
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: -110px;
    object-fit: contain;
    margin-top: -90px;
    z-index: 999;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #26aeeb;
    }  
    @media screen and (max-width: 1200px) {
        margin-left: 0px;
    }

`
export const LogoImg = styled.img `
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    object-fit: contain;
    height: 200px;
    width: 100%;
    margin-top: 97px;

    &:hover {
        transition: all 0.2s ease-in-out;
    }  

`

export const MobileIcon = styled.div`
    display: none;
    color: black;
    padding-top: 10px;
    
    @media screen and (max-width: 1200px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size:2.8rem;
        cursor: pointer;
        color: black;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -75px;
    

    @media screen and (max-width: 1300px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 40px;
`;

export const NavLinks = styled(LinkS)`
    color: 'black';
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 250%;
    padding-bottom: 55px;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #26aeeb;
        transition: all 0.02s ease-in-out;
        
    }
    &:hover {
        transition: all 0.02s ease-in-out;
        color: #26aeeb;
    }  
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 20%;
    margin-top: 3px;;
    
    
    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #26aeeb;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transform: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: black;
        border: 2px solid black;
    }    
`

export const NavBtn2 = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 20%;
    margin-top: 3px;;
    
    
    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink2 = styled(LinkR)`
    border-radius: 50px;
    background: orange;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transform: all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: black;
        border: 2px solid black;
    }    
`
