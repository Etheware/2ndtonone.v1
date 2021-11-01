import React,  { useState } from 'react';
import BottomElement from '../components/BottomSection';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjTestimonial1, homeObjTestimonial2,  homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven } from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { missionSectionObjOne } from '../components/MissionSection/data';
import MissionSection from '../components/MissionSection';
import Values from '../components/ValuesSection/steps';
import FooterBox from '../components/footer/footer';
import VideoElement from '../components/VideoSection';
import Seminar from '../components/Seminar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    ;

    return (
    
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} /> 
            <InfoSection {...homeObjTwo} /> 
            <InfoSection {...homeObjTestimonial1} /> 
            <InfoSection {...homeObjTestimonial2} /> 
            <MissionSection {...missionSectionObjOne}/>
            <Values/>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFive} /> 
            <BottomElement />
            <InfoSection {...homeObjSeven} /> 
            <InfoSection {...homeObjFour} /> 
            <VideoElement />
            <InfoSection {...homeObjSix} /> 
            <Seminar />
            <FooterBox />
        </>
    );
};

export default Home;