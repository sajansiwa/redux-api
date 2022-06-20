import styled from 'styled-components';
import LoginBack from './1.png'
import loginPhoto from './logp.webp'

export const MainLoginFormContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;

    height:627px;
    width: 1536px;
    background-image:url(${LoginBack});
    background-repeat: no-repeat;
    background-size: cover;
`
export const Form = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    border-radius: 20px;
    box-shadow: 3px 3px 10px blanchedalmond;
    height:500px;
    width: 500px;
    margin: 100px;
    background-image:url(${loginPhoto}) ;
    background-size: cover;
`
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;
    height: 50px;
    border-radius: 7px;
    margin: 10px;
    background-color: burlywood;
    font-family: 'Amatic SC';
    font-size: 30px;
    box-shadow: 2px 2px 5px blanchedalmond;
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100px;
    height: 50px;
    border-radius: 30px;
    margin: 10px;
    background-color: burlywood;
    font-family: 'Amatic SC';
    font-size: 30px;
`

export const Topic = styled.p`
    display: flex;
    justify-content: center;
    font-family: 'Amatic SC';
    font-style: bold;
    font-size: 60px;
    color: black;
    /* text-shadow: 3px 3px 10px rgb(255, 49, 49) ; */
    margin: 0;
    
`