import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import outroback from '../../assets/img/outroback.jpeg'
import bill from '../../assets/img/bill.png'
import smile from '../../assets/img/smile.png'
import sad from '../../assets/img/sad.png'
import stamp from '../../assets/img/stamp.png'

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
            <WrapperPre>
                <President image={isSuccess ? smile : sad}></President>
            </WrapperPre>
            <WrapperBill>
                 <Bill>
                 {isSuccess && <Time>
                   {time}초</Time> && <img src={stamp}></img>} 
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
    text-align : center;
    width: 80%;
    height: 30%;

    font-size: 200px;
`;

const WrapperPre = styled.div`
    display: flex;
    width : 50vw;
    height : 100%;
`;

const WrapperBill = styled.div`
    width: 50%;
    height : 100%;
`;
