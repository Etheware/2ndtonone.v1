
import Video2 from '../../videos/3.mp4';

// import Image from '../../images/herologo.jpg';
import { 
    BottomContainer,
    BottomBg, 
    BottomVideoBg,
    BottomContent,
    BottomH1
  } from './bottomElements';




const BottomElement = () => {

     return (
        <BottomContainer>
                <BottomBg>
                    <BottomVideoBg autoPlay loop muted src={Video2} type='video/mp4' id='home'/>
                </BottomBg>    

                <BottomContent>
                    <BottomH1>Get back to doing what you love with 2nd To None PT.</BottomH1>      
                </BottomContent>   
        </BottomContainer>  
    );
};
    

export default BottomElement;


