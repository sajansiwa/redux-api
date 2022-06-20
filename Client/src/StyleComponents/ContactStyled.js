import styled from 'styled-components';
import picture from '../StyleComponents/contact.jpg'
import pic from '../StyleComponents/lbck.jpg'

export const MainConatctContainer =styled.div`
    display: flex;
    justify-content: center;
`
export const ContactPicture =styled.div`
    height: 626px;
    width: 400px;
    background-image: url(${picture});
    background-repeat:no-repeat;
    background-size: cover;
`
export const ContactFormContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* background-color: cornsilk; */
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${pic});
    height: 626px;
    width: 750px;
    align-items: center;
`
export const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Tapestry', cursive;
    font-style: bold;
    font-size: 60px;
/* text-shadow: 3px 3px 10px rgb(255, 49, 49) ; */
margin: 5px;
`
export const ContactPargraph = styled.div`
    font-family: 'Cormorant', serif;
    font-size: 30px;
    text-align: justify;
    margin: 5px;
    color: brown;
`
export const Contacts = styled.div`
    font-family: 'Cormorant', serif;
    font-style: oblique;
    font-size: 20px;
    margin:5px;
    color: brown;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: aliceblue; */
`

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;
    height: 50px;
    border-radius: 7px;
    margin: 10px;
    background-color: gainsboro;
    font-family: 'Amatic SC';
    font-size: 30px;
    /* box-shadow: 2px 2px 5px blanchedalmond; */
`
export const InputMessage = styled.textarea`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;
    height: 150px;
    border-radius: 7px;
    margin: 10px;
    background-color: gainsboro;
    font-family: 'Amatic SC';
    font-size: 30px;
    /* box-shadow: 2px 2px 3px white; */
`

export const Topic = styled.p`
    display: flex;
    justify-content: center;
    font-family: 'Amatic SC';
    font-style: bold;
    font-size: 60px;
    color: whitesmoke;
    /* text-shadow: 3px 3px 10px rgb(255, 49, 49) ; */
    margin: 0;
    
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100px;
    height: 50px;
    border-radius: 30px;
    margin: 10px;
    background-color: grey;
    font-family: 'Amatic SC';
    font-size: 30px;
`
