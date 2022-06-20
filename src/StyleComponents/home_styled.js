import styled from 'styled-components';
import Background from './background.jpg'

export const LiStyle = {
    display: "flex",
    justifyContent: "center",
    fontFamily: 'Monoton', 
    fontSize: 25,
    textDecoration: "none",
    listStyleType: "none",
    color: 'white',
    margin: 10,
    padding: 2,
    backgroundColor: 'black',
    height: 40, 
    width: 180,
}
export const linkStyle = {
    textDecoration: "none",
}

export const HeaderContainer = styled.div` 
    display:flex;
    justify-content: space-between;
    align-items: center; 
    background-color: black;
    height: 90px;
    width:100%;

`

export const MainHomeContainer = styled.div`
    display: flex;
    margin: 7px;
    height: 610px;
    width: 99%;  
    flex-direction: column;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    width: 80%;
`
export const Li = styled.li`
    margin: 10px;
    color: white;
   
`

export const Img = styled.img`
    height: 55px;
    width: 55px;
    margin: 7px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 400px;
`

export const MainLogoContainer = styled.div`

    display: flex;
    justify-content: start;
    width: 400px;
`

export const MainImg = styled.img`
    height: 75px;
    width: 75px;
    margin: 7px;
`

export const HomePageContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 400px;
    width: 100%;
    margin: 10px;
    margin: 0px;
`
export const HomeParagraph = styled.p`
    display: flex;
    align-items: flex-end;
    font-size: 150px;
    font-style: oblique;
    height: 400px;
    width: 500px;
`
export const ButtonContainer = styled.p`
    display: flex;
`

export const Button = styled.button`
    text-decoration: none;
    display: flex; 
    height: 50px;
    width: 150px;
    align-items: flex-end;
    font-size: 30px;
    font-family: 'Monoton';
    background-color: blanchedalmond;
    border-radius: 2px;
    border-width: 3px;
    &:hover{
    background-color: brown;
  }
`
