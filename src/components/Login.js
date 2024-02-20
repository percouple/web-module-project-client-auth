import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const StyledHeader = styled.h1`
    font-size: 10vh
`

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        margin-bottom: 5px;
        text-align: left;
    }

    input {
        margin-bottom: 10px;
        background-color: #000000;
        color: #ffffff;
        font-family: 'Work Sans', sans-serif;
        width: 200px;
        height: 40px;
        border: none;
    }
`;
const StyledButton = styled.button`
    margin: 10px;
    border: solid black 2px;
    width: 204px;
    height: 44px;
    background-color: black;
    color: white;
`;
const initialFormValues = {
    username: '',
    password: '',
}

const dummyFormValues = {
    username: 'Bloom', 
    password: 'Tech'
}

export default function Login () {

    let [formValues, setFormValues] = useState(initialFormValues)
    const navigate = useNavigate();

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormValues({...formValues, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:9000/api/login`, formValues)
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                setFormValues(initialFormValues);
                navigate('/friendsList');
            })

    }

    useEffect(() => {
        console.log(formValues)
    })

    return (
        <div>
            <StyledHeader>LOGIN</StyledHeader>
            <StyledInput>
                <label htmlFor="username-input" >USERNAME:</label>
                <input name="username" onChange={changeHandler} value={formValues.username} type="text" id="username-input" />
            </StyledInput>
            <StyledInput>
                <label htmlFor="password-input" >PASSWORD:</label>
                <input name="password" onChange={changeHandler} value={formValues.password} type="password" id="password-input" />
            </StyledInput>
            <StyledButton className="submit-button" onClick={submitHandler}>SUBMIT</StyledButton>
        </div>
    )
}