import React from "react";
import {MainConatctContainer,ContactPicture,ContactFormContainer, Topic,Input, Button,Form,InputMessage} from '../StyleComponents/ContactStyled';

const ContactPage = () => {
    return(
        <MainConatctContainer>
            <ContactPicture/>
            <ContactFormContainer>
                <Form>
                <Topic>Contact us</Topic>
                <Input type="text" placeholder="name"  required />
                <Input type="password" placeholder="email"  required />
                <InputMessage type="text" placeholder="Message"  required />
                <Button type="submit" >Submit</Button>
                </Form>
            </ContactFormContainer>
            <ContactPicture/>
        </MainConatctContainer>    
    );
}

export default ContactPage;