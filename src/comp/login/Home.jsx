import React from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Kakao } from '../../assets/icon/kakao.svg';

const Home = (props) => {

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return (
        <Back>
            <Title>머거버거</Title>
            <RegisterBox>
            <LoginLink to='/login'>로그인</LoginLink>
            <KakaoLink onClick={handleLogin}>
            <KakaoIcon/>카카오 로그인</KakaoLink>
            </RegisterBox>
        </Back>
    );
};

export default Home;

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

const LoginLink = styled(StyledLink)`
    width : 300px;
    hegiht : 300px;
    top: 62%;
`;
const KakaoLink = styled(StyledLink)`
    display : flex;
    justify-content: space-evenly;
    width : 300px;
    hegiht : 300px;
    top : 75%;
`;

const KakaoIcon = styled(Kakao)`
    width : 32px;
    height: 32px;
`;



