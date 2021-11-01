import styled from 'styled-components';

export const Box = styled.div`
	margin-top: -10%;
    padding: 80px 60px;
    background: black;
    position: absolute;
	min-height: 100%;
    margin-bottom: -100px;
    width: 100%;
	z-index: 1;


@media (max-width: 1000px) {
	padding: 70px 30px;
	margin-top: auto;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	background: transparent;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill,
	minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill,
		minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: #26eaeb;
		transition: 200ms ease-in;
}
`;

export const ButtonLink = styled.a`
	width: 70%;
    background: #26aeeb;
    white-space: nowrap;
    padding: 14px 48px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex; 
    justify-content: center;
	text-decoration: none;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover {
        transition: all 0.2 ease-in-out;
        color: black;
        background: #fff;
        outline: 2px solid #26aeeb;
    }
`

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;


export const BottomBox = styled.div`
	margin-top: 30%;
    padding: 80px 60px;
	text-align: center;
    background: transparent;
    position: absolute;
	z-index: 999;
`;

export const LinkBox = styled.div`
	padding-bottom: 2%;
`;


export const BoxP = styled.p`	
	font-size: 15px;
	color: gray;
	font-weight: bold;
`

