import React from "react";
import {MainLoginFormContainer,Form,Inputs,Input,Topic,Button} from '../StyleComponents/LoginStyled'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({authenticate}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();

    const submitForm = (e) =>{
    e.preventDefault();
        if(username === "admin" && password === "admin123"){
            nav("/components/Homepage")
            authenticate();
        }
    else
        {
            nav("/")
        }
    }

   
    return(
        <MainLoginFormContainer>
            <Form onSubmit={submitForm}>
            <Inputs className="input-container">
                <Topic>Login</Topic>
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Button type="submit" >Login</Button>
            </Inputs>
            </Form>
      </MainLoginFormContainer>
    );
}
   
export default LoginPage;