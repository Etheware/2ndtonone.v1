import React from 'react';
import { 
    MissionContainer,
    MissionWrapper,
    MissionRow,
    MissionColumn1,
    MissionColumn2,
    MissionTextWrapper,
    MissionTopLine,
    MissionHeading,
    MissionSubtitle,
    MissionImgWrap,
    MissionImg,
} from './missionElements';

const MissionSection = ({
    id,
    topLine2,
    TextHeading,
    TextSubtitle,
    headline2,
    description2,
    headline3,
    description3,
    headline4,
    description4,
    description5,
    description6,
    description7,
    lightBg,
    lightText, 
    darkText,
    darkBg,
    imgStart,
    img,
    img2,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <MissionContainer lightBg={lightBg} id={id}>
                <MissionWrapper>
                    <MissionRow imgStart={imgStart}>
                        <MissionColumn1>
                            <MissionTextWrapper>
                                <MissionTopLine>{topLine2}</MissionTopLine>
                                <MissionHeading lightText={lightText}>{headline2}</MissionHeading>
                                <MissionSubtitle darkText={darkText}>{description2}</MissionSubtitle>
                                <MissionHeading lightText={lightText}>{headline3}</MissionHeading>
                                <MissionSubtitle darkText={darkText}>{description3}</MissionSubtitle>
                                <MissionHeading lightText={lightText}>{headline4}</MissionHeading>
                                <MissionSubtitle darkText={darkText}>{description4}</MissionSubtitle>
                                <MissionSubtitle darkText={darkText}>{description5}</MissionSubtitle>
                                <MissionSubtitle darkText={darkText}>{description6}</MissionSubtitle>
                                <MissionSubtitle darkText={darkText}>{description7}</MissionSubtitle>
                            </MissionTextWrapper>
                        </MissionColumn1>     
                        <MissionColumn2>
                            <MissionImgWrap>
                                <MissionImg src={img} alt={alt} />
                                <MissionImg src={img2} alt={alt} />
                            </MissionImgWrap>
                        </MissionColumn2>
                    </MissionRow>
                </MissionWrapper>
            </MissionContainer>
        </>
    )
}

export default MissionSection;