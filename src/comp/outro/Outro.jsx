import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import outroback from '../../assets/img/outroback.jpeg'
import bill from '../../assets/img/bill.png'
import smile from '../../assets/img/smile.png'
import sad from '../../assets/img/sad.png'
import { ReactComponent as AStamp } from '../../assets/img/a_stamp.svg';
import { ReactComponent as CStamp } from '../../assets/img/c_stamp.svg';

const Outro = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const time = queryParams.get('time');
    const ordersMatch = queryParams.get('ordersMatch');

    console.log('Time value:', time);
    console.log('Orders match:', ordersMatch);

    // ordersMatch 값에 따라 초기 상태 설정
    const [isSuccess, setSuccess] = useState(ordersMatch === 'true');
    
    return (
        <Back>
            <WrapperPresident>
                <President image={isSuccess ? smile : sad}></President>
                <WrapperLink>
                    <HomeLink to='/home'>홈으로 돌아가기</HomeLink>
                    <RankLink to='/rank'>랭킹 보러 가기</RankLink>
                </WrapperLink>
            </WrapperPresident>
            <WrapperBill>
                 <Bill>
                 {isSuccess ? 
                 <WrapperSuccess>
                    <AgradeStamp/>
                    <Time>{time}초!</Time>
                 </WrapperSuccess>

                 : <WrapperFail>
                    <CgradeStamp/>
                    <Text>재료가 틀렸어요!</Text>
                    </WrapperFail>} 
                 </Bill>
            </WrapperBill>
        </Back>
    );
};

export default Outro;

const Back = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: url(${outroback});
    background-size: cover;
`;

const President = styled.div`
    margin-left : 5%;
    width : 100%;
    height: 77%;
    background: url(${props => props.image});
    background-size: cover;  
`;

const HomeLink = styled(Link)`
  margin-left : 5%;  
  text-align: center;
  border-radius: 2em;
  padding: 1.5em;
  background-color: #ffd90f;
  font-size: 1.5em;
  text-decoration: none;
  font-family: "chab";
  font-weight: 700;
  color: #232323;
  width : 30%;
  
  box-shadow: 0px 5px 0px 0px #a66615;

  &:hover {
    margin-top: 10px;
    box-shadow: 0px 0px 0px 0px #a66615;
  }
`;


const RankLink = styled(HomeLink)`
`;

const AgradeStamp = styled(AStamp)`
  margin-left: 10%;
  margin-top : 10%;
  width: 30vh;
  height: 30vh;
`;

const CgradeStamp = styled(CStamp)`
    margin-top : 10%;
    width: 40vh;
    height: 40vh;
`;

const Bill = styled.div`
    display: flex;
    justify-content : center;
    align-items: center;
    margin-left: 10%;
    width : 87%;
    height: 100%;
    background: url(${bill});
    background-size : cover;
`;

const Time = styled.div`
    margin-top : 5%;
    text-align : center;
    width: 80%;
    height: 30%;
    font-size: 8.5em;
    font-family:'round';
`;

const Text = styled.div`

    text-align : center;
    width: 80%;
    height: 30%;
    font-size: 4em;
    font-family:'round';
`;

const WrapperPresident = styled.div`
    display: flex;
    flex-direction : column;
    width : 50vw;
    height : 100%;
`;

const WrapperBill = styled.div`
    width: 50%;
    height : 100%;
`;

const  WrapperSuccess = styled.div`
    display: flex;
    flex-direction:column;
    justify-content : center;
    align-items : center;
    width: 100%;
    height : 100%;
`;

const WrapperFail = styled.div`
    display: flex;
    flex-direction:column;
    justify-content : center;
    align-items : center;
    width: 100%;
    height : 100%;
`;

const WrapperLink = styled.div`
  display : flex;
  margin-top:5%;
  margin-left: 15%;
`;