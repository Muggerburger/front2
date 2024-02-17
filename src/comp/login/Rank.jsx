import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import loginback from "../../assets/img/loginback.png";
import { Link } from "react-router-dom";

const Rank = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 서버에서 사용자 랭킹을 가져오는 함수 정의
    const fetchRanking = async () => {
      try {
        const response = await axios.get("http://localhost:8080/ranking");
        // 받아온 사용자 목록을 상태에 설정
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching ranking:", error);
      }
    };

    // 페이지가 로드될 때 랭킹을 불러옴
    fetchRanking();
  }, []);

  return (
    <Back>
      <BackLink to="/home">{"<-"}</BackLink>
      <WrapperRank>
        {/* 서버에서 받아온 사용자 목록을 매핑하여 화면에 표시 */}
        {users.map((user, index) => (
          <RankItem key={index}>
            {index + 1}등 : 이름 : {user.nickname} : 시간: {user.time}
          </RankItem>
        ))}
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
  flex-direction: column;
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

const RankItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd90f;
  border-radius: 30px;
  padding: 20px;
  font-family: "hs";
  font-size: 30px;
  color: #232323;
  margin-top: 10%;
`;

const BackLink = styled(Link)`
  position: absolute;
  left: 1.5em;
  top: 1.5em;
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
