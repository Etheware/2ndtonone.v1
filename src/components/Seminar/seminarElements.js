import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const SeminarContainer = styled.div `
    color: #000000;
    background: ${({lightBg}) => (lightBg ? '#000000' : '#fff')};
    margin-top: -5%;
    
    @media screen and (max-width: 1200px) {
        padding: 100px 0;
    }
`;
export const SeminarWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 900px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const SeminarInfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 
    col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1'
        'col2` : `'col1 col1' 'col2 col2'` )}
        
    }
    

`

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const SeminarTextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
`;

export const SeminarTopLine = styled.p`
    color: #26aeeb;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`;

export const SeminarHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#fff' : '#000000')
    };

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const SeminarSubtitle = styled.p`
     max-width: 440px;
     font-size: 18px;
     line-height: 24px;
     color: ${({darkText}) => (darkText ? '#26aeeb' : 'gray')}; 

     @media screen and (max-width: 1200px) {
        font-size: 18px;
    }

`;

export const SeminarBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

`

export const SeminarImgWrap = styled.div`
    max-width: 855px;
    margin-top: -14%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    
`;

export const SeminarImg = styled.img`
    width: 130%;

    
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;

export const SeminarBtnLink = styled(LinkR)`
    margin-top: 10px;      
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