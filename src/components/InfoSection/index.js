import React from 'react';
import { Button } from '../buttonElement';

import { 
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
 } from './infoElements';



const InfoSection = ({
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
            <InfoContainer lightBg={lightBg} id={id} path={path}>
                <InfoWrapper >
                    <InfoRow imgStart={imgStart}>
                    
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {/* <Button to={path}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 0 : 1}
                                        dark={dark ? 0 : 1}
                                        dark2={dark2 ? 1 : 0}>
                                        {buttonLabel}
                                    </Button> */}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection;
