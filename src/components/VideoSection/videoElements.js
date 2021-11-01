import styled from "styled-components";


export const VideoContainer = styled.div`
    background: #0c0c0c;
    margin-top: -5%;
    margin-bottom: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

   
    /* @media screen and (max-width: 960px) {
        margin-top: 20%;
    } */
    /* @media screen and (max-width: 480px) {
        margin-top: 100%; */
    /* }
    @media screen and (max-width: 689px) {
        margin-top: 120%;
    } */
    
`;

export const VideoSection = styled.div`    
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoSectionBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
    opacity: .5;
`;

export const VideoSectionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const VideoSectionH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768pxx) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
    
`;