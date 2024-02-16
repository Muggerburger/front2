import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/gamebackground.jpg';
import IngredientStack from './IngredientStack';
import OrderStack from './OrderStack';


const GamePage = () => {
    
    return (
        <div>
            <Back>
                <IngredientStack/>    
                <OrderStack/>
            </Back>
        </div>
    );
};

export default GamePage;

const Back = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 1280px;
    height : 720px;
    background : url(${background});
    background-size: cover;
`;
