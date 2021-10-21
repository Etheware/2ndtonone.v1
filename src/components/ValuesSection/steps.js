import React from 'react';
import Icon1 from '../../images/courage.svg';
import Icon2 from '../../images/integrity.svg';
import Icon3 from '../../images/transparency.svg';

import { 
    ValuesCard,
    ValuesContainer,
    ValuesWrapper,
    ValuesIcon,
    ValuesH1,
    ValuesH2,
    ValuesP
} from './valuesElements';

const Values = () => {
    return (
        <>
            <ValuesContainer id='values'>
                <ValuesH1>How It Works</ValuesH1>
                <ValuesWrapper>
                    <ValuesCard>
                        <ValuesIcon src={Icon1}/>
                        <ValuesH2>Part 1: Decrease symptoms! </ValuesH2>
                        <ValuesP>If you’re suffering in pain and don’t know why, this phase will help you decrease symptoms and allow you to manage them on your own. </ValuesP>
                    </ValuesCard>

                    <ValuesCard>
                        <ValuesIcon src={Icon2}/>
                        <ValuesH2>Part 2: Find the root cause! </ValuesH2>
                        <ValuesP>Often, we think knee pain is cause by the knee (duh). This is a common misconception. Dr. Rick will perform a thorough 75-min evaluation to determine where the pain is coming from and how to correct any movement faults.</ValuesP>
                    </ValuesCard>

                    <ValuesCard>
                        <ValuesIcon src={Icon3}/>
                        <ValuesH2>Part 3: Self-Management!</ValuesH2>  
                        <ValuesP>Self-Management! Throughout your personalized treatment plan, Dr. Rick will provide you with the tools and resources to assist you in becoming pain-free and return to your active-lifestyle.</ValuesP>
                    </ValuesCard>
                </ValuesWrapper>               
            </ValuesContainer>
            
        </>
    )
}

export default Values;
