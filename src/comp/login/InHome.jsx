import React, { useEffect } from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';
import { Link } from 'react-router-dom';


const InHome = (props) => {
    
    return (
        <Back>
            <Title>머거버거</Title>
            <RegisterBox>
            <StartLink to='/gamepage'>Game Start</StartLink>
            </RegisterBox>
        </Back>
    );
};

export default InHome;

const Back = styled.div`   
    display : flex;
    justify-content : center;
    align-items: center; 
    flex-direction: column;
    background : url(${loginback});
    background-size : cover;
    width : 100%;
    height : 100%;
`;

const Title = styled.div`
    width : 800px;
    height : 300px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #FFEF9B;
    border-radius : 30px;
    padding : 20px;
    font-family:'hs';
    font-weight: 900;
    font-size : 200px;
    color : #232323;
`;

const RegisterBox = styled.form`
    display : flex;
    justify-content : space-evenly;
    align-items: center;
    flex-direction: column;
    width : 400px;
    height : 260px;
    margin-top : 30px;
    border-radius : 30px;
    background-color : #FFEF9B;
`;



const StyledLink = styled(Link)`
    position : absolute;
    text-align : center;
    border-radius : 30px;
    padding : 20px;
    background-color : #FFD90F;
    font-size:25px;
    text-decoration : none;
    font-family:'chab';
    font-weight : 700;
    color : #232323;
    box-shadow: 0px 5px 0px 0px #A66615;

    &:hover{
        margin-top: 10px;
        box-shadow: 0px 0px 0px 0px #A66615;
	}

`;


const StartLink = styled(StyledLink)`
    background-color : #F13737;
    color : #FFFFFF;
    width : 250px;
    hegiht : 250px;
`;