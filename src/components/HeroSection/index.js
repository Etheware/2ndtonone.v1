import React, { useState, useEffect }  from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../buttonElement';
import Video from '../../videos/2.mp4';

// import Image from '../../images/herologo.jpg';
import { 
    HeroContainer,
    HeroBg, 
    VideoBg,
    // ImageBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroH2,
    HeroP,
    ArrowForward,
    ArrowRight  } from './heroElements';

const HeroSection = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else { 
            setScrollNav(false);
        }
    };

    const [hover, setHover] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    const toggleBottom = () => {
        scroll.scrollToBottom()
    };

    const onHover = () => {
        setHover(!hover)


    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src= {Video} type='video/mp4' id='home'/>         
            </HeroBg>    
            <HeroContent>
                <HeroH1>2nd to None PT | San Marcos, CA</HeroH1>
                <HeroH2>Physical Therapy and Wellness</HeroH2>
                <HeroP>
                    Tired of fearing pain?          
                    Tired of not being able to do the things you love? Tired of missing out on life?
                    2nd to None Physical Therapy provides top of the line physical therapy, sports rehabilitation and strength & conditioning.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='about'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get Started  {hover ? <ArrowForward /> : <ArrowRight
                        />}
                    </Button>
                </HeroBtnWrapper>       
            </HeroContent>      
        </HeroContainer>  
    );
};

export default HeroSection;
