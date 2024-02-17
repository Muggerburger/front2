import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IngredientStack from "./IngredientStack";
const OrderStack = ({ orders }) => {
  const mapNumberToIngredient = (number) => {
    switch (number) {
      case 0:
        return "윗빵";
      case 1:
        return "토마토";
      case 2:
        return "양상추";
      case 3:
        return "양파";
      case 4:
        return "베이컨";
      case 5:
        return "치즈";
      case 6:
        return "패티";
      case 7:
        return "아랫빵";
      default:
        return "";
    }
  };

  return (
    <div>
      <Bill>
        {orders.map((order, index) => (
          <div key={index}>
            {index === 9 ? (
              <>
                {10 - index}층: {mapNumberToIngredient(order)}
                <span style={{ color: "red" }}> start</span>
              </>
            ) : (
              <>
                {10 - index}층: {mapNumberToIngredient(order)}
              </>
            )}
          </div>
        ))}
      </Bill>
      <ZeroWrapper>
        <IngredientStack orders={orders} />
      </ZeroWrapper>
    </div>
  );
};

export default OrderStack;

const Bill = styled.div`
  font-size: 20px;
  right: 200px;
  position: absolute;
  width: 200px;
  height: 300px;
  background-size: cover;
`;
const ZeroWrapper = styled.div`
  display: none;
`;
