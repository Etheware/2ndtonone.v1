import styled from 'styled-components';

export const MissionContainer = styled.div`
    color: '#000000';
    background: ${({darkBg}) => (darkBg ? '#fff' : '#000000')};
    padding-top: 10%;
    

    @media screen and (max-width: 1200px) {
        padding: 100px 0;
        margin-bottom: 10%;
    }
`;

export const MissionWrapper = styled.div`
    display: grid;
    z-index: 1;
    max-width: 2000px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const MissionRow = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'`: `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2'` `'col1'` : `'col2 col2' 'col1 col1'`)};
    }
`

export const MissionColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 65px;
    grid-area: col2;
`
    
export const MissionColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const MissionTextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
`;

    
export const MissionTopLine = styled.p`
    color: #26aeeb;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const MissionHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#fff' : 'black')
};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const MissionSubtitle = styled.p`
    max-width: 440;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const MissionImgWrap = styled.div`
    max-width: 755px;
    height: 100%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const MissionImg = styled.img `
    width: 100%;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const MissionImg2 = styled.img `
    width: 100%;
    margin-top: -50%;

 @media screen and (max-width: 1200px) {
        width: 100%;
    }
`
