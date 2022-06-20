import React from "react";
import { MainLogoContainer,HeaderContainer,Img,Ul,Li,MainImg,LogoContainer } from "../StyleComponents/home_styled";
import Logo from './Logo.png';
import Facebook from'./facebook.png';
import coffee from'./coffee.png';
import {LiStyle,linkStyle} from '../StyleComponents/home_styled'
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return(
    <HeaderContainer>

        <MainLogoContainer>
            <MainImg id="mainlogo" src={coffee} alt="logo"></MainImg>
        </MainLogoContainer>
        
        <Ul>
            {/* <Link to='/' style={linkStyle}><Li style={LiStyle}>login</Li></Link> */}
            <Link to='/components/Homepage' style={linkStyle}><Li style={LiStyle}>Home</Li></Link>
            <Link to='/components/AboutUs' style={linkStyle}><Li style={LiStyle}>About Us</Li></Link>
            <Link to='/components/Contact' style={linkStyle}><Li style={LiStyle}>Contact Us</Li></Link>
            {/* <Link to='/' style={linkStyle}><Li style={LiStyle}>Logout</Li></Link> */}
        </Ul>
        nav
        <LogoContainer>
            <Img src={Logo} alt="logo"></Img>
            <Img src={Facebook} alt="logo"></Img>
        </LogoContainer>

    </HeaderContainer>
    );
}

export default  HeaderComponent;
