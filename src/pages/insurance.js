import React,  { useState } from 'react';
import BottomElement from '../components/BottomSection';
import InfoSection from '../components/InfoSection';
import { homeObjSix } from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FooterBox from '../components/footer/footer';
import { insuranceObject1 } from '../components/InsuranceSection/data';
import InsuranceSection from '../components/InsuranceSection';

const Insurance = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
    
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <InsuranceSection {...insuranceObject1} /> 
            <FooterBox />
        </>
    );
};

export default Insurance;