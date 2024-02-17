import React, { useEffect } from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const InHome = (props) => {

    const navigate = useNavigate();
    const logoutHandle = () => {
        axios.post(`http://localhost:8080/logout`, {"accessToken" : localStorage.getItem('TOKEN')}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('TOKEN')

            },
        })
            .then(response => {
                if (response.data.message === 'success') {
                    localStorage.removeItem('TOKEN');
                    alert('로그아웃 성공');
                    navigate("/");
                } else {
                    alert('로그아웃 실패');
                }
            })
            .catch(error => {
                console.error('로그아웃 에러:', error);
                alert('로그아웃 중 오류가 발생했습니다.');
            });
    };


    return (
        <Back>
            <WrapperHaeader>
                <InfoLink to='/info'>i</InfoLink>
                <RankLink to='/rank'>🏆</RankLink>
            </WrapperHaeader>
            <Title>머거버거</Title>
            <RegisterBox>
            <StartLink to='/gamepage'>Game Start</StartLink>
            <LogoutLink onClick={logoutHandle}>로그아웃</LogoutLink>
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

const WrapperHaeader = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
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

const RegisterBox = styled.div`
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
    text-align : center;
    border-radius : 30px;
    padding : 20px;
    background-color : #FFD90F;
    font-size:1.5em;
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

const RankLink = styled(Link)`
    margin-right:5%;
    text-align : center;
    border-radius : 30px;
    padding : 20px;
    width : 5%;
    background-color : #FFEF9B;
    font-size:3em;
    text-decoration : none;
    font-family:'chab';
    font-weight : 700;
    color : #232323;

    &:hover{
        background-color : #FF8E00;
        color : #FFFFFF;
	}
`;


const InfoLink = styled(RankLink)`
    margin-left:5%;
    `;


const StartLink = styled(StyledLink)`
    background-color : #F13737;
    color : #FFFFFF;
    width : 250px;
`;

const LogoutLink = styled(StyledLink)`
    width : 250px;
`;