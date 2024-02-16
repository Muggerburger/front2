import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IngredientStack from './IngredientStack';

const OrderStack = () => {
    const [orders, setOrders] = useState([]);

    const generateOrders = () => {
        const newOrders = Array.from({ length: 10 }, (_, index) => {
            if (index === 0) return 0;
            if (index === 9) return 7; 
            return Math.floor(Math.random() * 6) + 1;
        });
        setOrders(newOrders);
    };
    
    const mapNumberToIngredient = (number) => {
        switch(number) {
            case 0:
                return '빵';
            case 1:
                return '토마토';
            case 2:
                return '양상추';
            case 3:
                return '양파';
            case 4:
                return '베이컨';
            case 5:
                return '치즈';
            case 6:
                return '패티';
            case 7:
                return '빵';
            default:
                return '';
        }
    };

    useEffect(() => {
        generateOrders();
    }, []);

    return (
        <div>
            <h2>주문 내역</h2>
            <Bill>
                {orders.map((order, index) => (
                 <div key={index}>{index + 1}층: {mapNumberToIngredient(order)}</div>
                ))}
            </Bill>
            <IngredientStack orders={orders} />
        </div>
    );
};

export default OrderStack;

const Bill = styled.div`
    
`;
