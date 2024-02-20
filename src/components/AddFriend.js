import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { axiosWithAuth } from "../axiosAuth";

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
`
const StyledButton = styled.button`
    margin: 10px;
    border: solid black 2px;
    width: 204px;
    height: 44px;
    background-color: black;
    color: white;
`;

const initialFormValues = {
    name: '',
    email: '',
    age: '',
}

export default function AddFriend() {

    let [formValues, setFormValues] = useState(initialFormValues)

    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("SUBBINT")
        axiosWithAuth().post(`http://localhost:9000/api/friends`, formValues)
            .then((res) => {
                console.log(res.data);
            })
    }

    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    return (
        <>
            <StyledHeader >ADD FRIEND</StyledHeader >
            <form onSubmit={onSubmit}>
                <StyledInput>
                    <label htmlFor="name-input" >FRIEND NAME:</label>
                    <input name="name" onChange={changeHandler} value={formValues.name} type="text" id="friend-name-input" />
                </StyledInput>
                <StyledInput>
                    <label htmlFor="email-input" >FRIEND EMAIL:</label>
                    <input name="email" onChange={changeHandler} value={formValues.email} type="text" id="email-input" />
                </StyledInput>
                <StyledInput>
                    <label htmlFor="age-input" >FRIEND AGE:</label>
                    <input name="age" onChange={changeHandler} value={formValues.age} type="text" id="age-input" />
                </StyledInput>
                <StyledButton type="submit" className="submit-button" >SUBMIT</StyledButton>
            </form>
        </>

    )
} 