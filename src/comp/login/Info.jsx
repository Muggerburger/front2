import React from "react";
import styled from "styled-components";
import infoback from '../../assets/img/infoback.png';
import info from "../../assets/img/info.jpg";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <Back>
        <InfoLink to="/home">{"<-"}</InfoLink>
        <ImgWrapper/>
    </Back>
  );
};

export default Info;

const Back = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url(${infoback});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  height: 1000px;
  width: 100vh;
  background: url(${info});
  background-size: cover;
`;
const InfoLink = styled(Link)`
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

