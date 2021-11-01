import styled from "styled-components";

export const InsuranceContainer = styled.div `
    color: #000000;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#000000')};
    
    @media screen and (max-width: 130px) {
        padding: 100px 0;
    }
`;
export const InsuranceWrapper = styled.div`
    padding-top: 10%;
    display: grid;
    z-index: 1;
    height: 10000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;


export const Column1 = styled.div`
    padding-top: 10%;
    text-align: center;

    
`;

export const TextWrapper = styled.div`
    max-width: auto;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #26aeeb;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    @media screen and (max-width: 780px) {
        padding-top: 10%;  
    }

`;

export const Heading = styled.h1`
    margin-top: 2%;
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

export const Subtitle = styled.p`
     max-width: 100%;
     padding: 0 25px;
     margin-bottom: 35px;
     font-size: 18px;
     line-height: 24px;
     color: ${({darkText}) => (darkText ? '#26aeeb' : 'gray')}; 

     @media screen and (max-width: 1280px) {
        font-size: 18px;
    }
`;


export const Vid = styled.video`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
    opacity: .5;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;