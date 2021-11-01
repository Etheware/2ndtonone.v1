import React from 'react';
import { Button } from '../buttonElement';
import Image1 from '../../images/whitelogo.jpg';
import { 
    SeminarContainer,
    SeminarWrapper,
    SeminarInfoRow,
    Column1,
    Column2,
    SeminarTextWrapper,
    SeminarTopLine,
    SeminarHeading,
    SeminarSubtitle,
    SeminarBtnWrap,
    SeminarBtnLink,
    SeminarImgWrap,
    SeminarImg
 } from './seminarElements';



const Seminar = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    path,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <SeminarContainer lightBg={lightBg} id={id} path={path}>
                <SeminarWrapper >
                    <SeminarInfoRow imgStart={imgStart}>
                    
                        <Column1>
                            <SeminarTextWrapper>
                                <SeminarTopLine>Upcoming Events</SeminarTopLine>
                                <SeminarHeading lightText={lightText}>Sign Up for any Upcoming Events!</SeminarHeading>
                                <SeminarSubtitle darkText={darkText}>Click the link in our footer below to sign up for our newsletter informing of any upcoming physical therapy events near you.</SeminarSubtitle>
                                {/* <SeminarBtnWrap>
                                    <SeminarBtnLink 
                                        to='/seminar-signup'
                                        smooth={true}
                                        duration={100}
                                        spy={true}
                                        exact='true'
                                        offset={-80}>Sign up
                                    </SeminarBtnLink>
                                </SeminarBtnWrap> */}
                            </SeminarTextWrapper>
                        </Column1>
                        <Column2>
                            <SeminarImgWrap>
                                <SeminarImg src={Image1} type='image' />
                            </SeminarImgWrap>
                        </Column2>
                    </SeminarInfoRow>
                </SeminarWrapper>
            </SeminarContainer>
        </>
    );
}

export default Seminar;
