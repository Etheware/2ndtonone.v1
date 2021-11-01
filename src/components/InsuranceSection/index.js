import React from 'react';
import Video2 from '../../videos/surfing.mp4';

import { 
    InsuranceContainer,
    InsuranceWrapper,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Vid
 } from './insuranceElements';



const InsuranceSection = ({
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
            <InsuranceContainer lightBg={lightBg} id={id} path={path}>  
                <Column1>
                    <TextWrapper>
                        <TopLine>Why We Don't Accept Insurance</TopLine>
                        <Heading lightText>2nd to None PT Policy:{headline}</Heading>
                        <Subtitle darkText={darkText}>You have good reason to be hesitant to go to an out-of-network Physical Therapist, especially since you pay good money for your health insurance. The gist of it is, when you go in-network,
                                        the clinic provides their PT’s with productivity standards. What does that mean for you and the
                                        PT? For you, it means that during your initial evaluation the PT will more than likely only have
                                        about 20-30 minutes to provide you with a thorough evaluation. After that, you’re handed off to
                                        a licensed PT Assistant (PTA) or a PT tech/aide. A PTA does have formal schooling, but is not
                                        able to diagnose, evaluate or discharge you at all. A PT tech/aide, more often than not, does
                                        not have ANY formal training and is kind of considering becoming a PT, but maybe not. And
                                        even then, if your PT becomes busy, there’s a change in schedule, etc. they may not even end
                                        up working with you throughout your entire plan of care. This tends to be frustrating and an
                                        inconvenience. For the PT, it means that they have to truly trust the person they are handing
                                        their patient over to. But, as previously mentioned, it is hard to fully trust a PT tech/aide who
                                        does not have any formal training in exercises and their intention with the exercises. To make
                                        things even more frustrating, the PTs are encouraged to keep the patient at least one hour so
                                        they can bill the insurance company a certain amount of “units” (medical term used for what
                                        insurances reimburse for over a period of time). How do they keep you for an hour? They have
                                        you sit around for 10-15 minutes with Ice, Heat, E-Stim or a combination of the three. All three
                                        of these passive interventions have very low carry-over into the success of your plan of care.
                                        Furthermore, that PT has anywhere from 13-20 patients they need to see each day in order to
                                        meet the clinic productivity standard. Lastly, the insurance companies continue to cut
                                        reimbursement rates. In 2021, Medicare has proposed an additional 8% cut to
                                        reimbursements. And if Medicare cuts rates, most other insurance companies follow suit.
                                        Again, further straining the outpatient clinic by making them increase the number of patients
                                        seen by each PT on a daily basis in order to meet productivity standards. At 2nd to None PT,
                                        we don’t have any of the aforementioned issues. Plus, since we don’t deal with insurance, we
                                        don’t have some non-medical personnel at Kaiser telling us how many times you’re authorized
                                        to see us, how much time we can spend with you per visit or whether or not the services will
                                        be covered at all. We provide you with a super bill (aka an invoice of your treatment) at the end
                                        of each visit that you can submit to your insurance provider. If you have met your deductible for
                                        the year, you get reimbursed a certain amount (usually between 50-80% of your visit). If you
                                        don’t, you still get better quality of service than going to an in-network provider.
                        </Subtitle>
                    </TextWrapper>
                </Column1>
                    <Vid autoPlay loop muted src={Video2} type='video/mp4' />
            </InsuranceContainer>
        </>
    );
}

export default InsuranceSection;
