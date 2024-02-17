import React from "react";
import styled from "styled-components";
import loginback from "../../assets/img/loginback.png";
import {Link} from  "react-router-dom";


const Rank = (props) => {



  return (
    <Back>
       <BackLink to="/home">{"<-"}</BackLink>
      <WrapperRank>
        <First>1등 : 이름 : 시간: </First>
        <Second>2등 : 이름 : 시간: </Second>
        <Third>3등 : 이름 : 시간: </Third>
        <Fourth>4등 : 이름 : 시간: </Fourth>
        <MyRank>5등 : 이름 : 시간: </MyRank>
      </WrapperRank>
    </Back>
  );
};

export default Rank;

const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${loginback});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const WrapperRank = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  background-color: #ffef9b;
  border-radius: 30px;
  padding: 20px;
  font-family: "hs";
  font-weight: 900;
  font-size: 12em;
  color: #232323;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFD90F;
  border-radius: 30px;
  padding: 20px;
  font-family: "hs";
  font-size: 30px;
  color: #232323;
`;

const Second = styled(First)`
    margin-top : 10%;

`;

const Third = styled(Second)`
`;

const Fourth = styled(Second)`
`;

const MyRank = styled(Second)`
`;

const BackLink = styled(Link)`
position : absolute;
 left:1.5em;
 top:1.5em;
  text-align: center;
  border-radius: 30px;
  padding: 20px;
  width: 5%;

  background-color: #ffef9b;
  font-size: 3em;
  text-decoration: none;
  font-family: "chab";
  font-weight: 700;
  color: #232323;

  &:hover {
    background-color: #ff8e00;
    color: #ffffff;
  }
`;
