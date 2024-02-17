
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import background from "../../assets/img/gamebackground.png";
import IngredientStack from "./IngredientStack";
import OrderStack from "./OrderStack";
import axios from 'axios'

const GamePage = () => {



  const [orders, setOrders] = useState([]);

  const generateOrders = () => {
    const newOrders = Array.from({ length: 10 }, (_, index) => {
      if (index === 0) return 0;
      if (index === 9) return 7;
      return Math.floor(Math.random() * 6) + 1;
    });
    setOrders(newOrders);
  };

  useEffect(() => {
    generateOrders();
  }, []);

  return (
    <Back>
      <IngredientStack orders={orders} />
      <OrderWrapper>
        <OrderStack orders={orders} />
      </OrderWrapper>
    </Back>
  );
};

export default GamePage;

const Back = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e3dfdf;
  background-size: cover;
`;

const OrderWrapper = styled.div`
  width: 650px;
  height: 400px;
  right: 80px;
  top: 130px;
  position: absolute;
`;



