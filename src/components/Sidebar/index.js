import React from 'react';
import { NavBtn2, NavBtnLink2 } from '../Navbar/NavbarElements';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarLink, 
    SidebarWrapper, 
    SidebarMenu, 
    SideBtnWrap, 
    SidebarRoute,
    SidebarRoute2,
} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink to="testimonials" onClick={toggle}>Testimonials</SidebarLink>
                    <SidebarLink to="mission" onClick={toggle}>Our Mission</SidebarLink>
                    <SidebarLink to="values" onClick={toggle}>How It Works</SidebarLink>
                    <SidebarLink to="resources" onClick={toggle}>Free Resources</SidebarLink>
                    <SidebarLink to="social-media" onClick={toggle}>Social Media</SidebarLink>                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/register">Get Started </SidebarRoute>           
                </SideBtnWrap>
                <SideBtnWrap>
                   <SidebarRoute2 to="/self-schedule">Self Schedule </SidebarRoute2>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
