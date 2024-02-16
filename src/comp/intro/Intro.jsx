import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/loginback.png';
import { Link } from 'react-router-dom';

const Intro = () => {

    return (
        <Back>
            <RegisterLink to='/gamepage'>game start</RegisterLink>
        </Back>
    );
};

export default Intro;

const Back = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 100%;
    height : 100%;
    background : url(${background});
    background-size: cover;
`;
const  RegisterLink = styled(Link)`
    padding: 10px 20px;
    font-size: 30px;
    background-color: #f2f2f2;
    color: black;
    border: none;
    text-decoration-line: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
`;
