import styled from 'styled-components';
import Aboutimage from './AboutBackground.jpg'

export const AboutPageContainer = styled.div`
    display: flex;
    margin: 7px;
    height: 610px;
    width: 99%;  
    justify-content:space-between; 
`
export const AboutParagraph = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:black;
    height: 612px;
    width:800px;
`
export const Imagecontent = styled.div`
    display: flex;
    background-image: url(${Aboutimage});
    background-repeat: no-repeat; 
    background-size: cover;
    background-color: blue;
    height: 612px;
    width:800px;
`
export const Topic = styled.p`
    display: flex;
    justify-content: center;
    font-family: 'Amatic SC';
    font-style: bold;
    font-size: 60px;
    color: rgb(254, 245, 231 );
    /* text-shadow: 3px 3px 10px rgb(255, 49, 49) ; */
    margin: 0;
    
`
export const TextContent = styled.p`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: justify;
    font-family: 'Amatic SC';
    font-size: 40px;
    font-style: initial;
    color: rgb(254, 245, 231 );
    width: 90%;
`