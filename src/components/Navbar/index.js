import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import Image from '../../logo/logo.png';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    LogoImg,
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavBtn2,
    NavBtnLink2,
} from './NavbarElements';
import {IconContext} from 'react-icons/lib';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else { 
            setScrollNav(false);
        }
    };
        
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    const toggleBottom = () => {
        scroll.scrollToBottom()
    };
    
    return (
        <>
            <IconContext.Provider value={{ color: 'black'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <LogoImg src=
                            {Image} type='image' />
                        </NavLogo>
                        
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="home" 
                                    smooth={true}
                                    duration={100}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    onClick={toggleHome}>Home</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth={true}
                                    duration={100}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    About 2nd to None
                                </NavLinks>
                            </NavItem> 
                            
                            <NavItem>
                                <NavLinks 
                                    to="testimonials"
                                    smooth={true}
                                    duration={100}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >Testimonials
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                    to="mission"
                                    smooth={true}
                                    duration={100}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >Our Mission
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="values"
                                    smooth={true}
                                    duration={100}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >How It Works
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavBtn>
                                    <NavBtnLink 
                                        to='/register'
                                        // onClick={toggleHome}
                                        onClick={toggleBottom}
                                        smooth={true}
                                        duration={100}
                                        spy={true}
                                        exact='true'
                                        offset={-80}>Get Started</NavBtnLink>
                                </NavBtn>
                            </NavItem>
                            <NavItem>
                                <NavBtn2>
                                    <NavBtnLink2 
                                        to='/self-schedule'
                                        onClick={toggleBottom}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}>Self Schedule
                                    </NavBtnLink2>
                                </NavBtn2>
                            </NavItem>           
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
