import React from "react";
import {MainHomeContainer,HomePageContent,HomeParagraph,Button} from '../StyleComponents/home_styled'

const Home = ({logoutStatus}) =>{
    const logout = (e) => {
        e.preventDefault();
        logoutStatus(false)
    }
    return(
    <MainHomeContainer >
        <HomePageContent>
            <HomeParagraph>Espresso Yourself</HomeParagraph>
            <Button onClick={logout}> logout</Button>
        </HomePageContent>
    </MainHomeContainer>   
    );  
}

export default Home;