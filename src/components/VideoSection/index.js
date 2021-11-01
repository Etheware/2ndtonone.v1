
import Video3 from '../../videos/1.mp4';

// import Image from '../../images/herologo.jpg';
import { 
    VideoContainer,
    VideoSection, 
    VideoSectionBg,
    VideoSectionContent,
    VideoSectionH1
  } from './videoElements';




const VideoElement = () => {

     return (
        <VideoContainer>
                <VideoSection>
                    <VideoSectionBg autoPlay loop muted src={Video3} type='video/mp4' id='home'/>
                </VideoSection>    

                <VideoSectionContent>
                    <VideoSectionH1></VideoSectionH1>      
                </VideoSectionContent>   
        </VideoContainer>  
    );
};
    

export default VideoElement;


