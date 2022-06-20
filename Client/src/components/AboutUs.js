import React from "react";
import {AboutPageContainer,Imagecontent,AboutParagraph,Topic,TextContent} from '../StyleComponents/About_styled';

const AboutPage = () => {
    return(
        <AboutPageContainer>
            <Imagecontent/>
            <AboutParagraph>
                <Topic>About Nimble Coffee</Topic>
                <TextContent>Nimble Coffee is formed by a group is coffee lovers 
                    with the motive of providing the best coffee experience to fellow
                    coffee consumers all around the world. Each pack of Nimble coffee
                    if picked with love by passionate farmers and baked with expertise.
                </TextContent>
            </AboutParagraph>
        </AboutPageContainer>
    );
}

export default AboutPage;