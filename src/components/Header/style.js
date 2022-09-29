import styled from "styled-components";


export const Container = styled.header`
    width: 100vw;
    height: 130px;
    padding: 10px;

    @media (min-width: 760px) {
        justify-content: space-between;
    }
    @media (max-width: 760px) {
        flex-direction: column;
        height: 180px;
    }
`;

export const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 30px;
    margin: auto;


    @media (min-width: 760px) {
        margin: 0;
    }
`;
export const Btn = styled.button`
    background-color: #eb2f06;
    padding: 2px;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    align-self: center;
    margin-right: 20px;
    color: #ccc;

    &:hover{
        background-color:#b53428;
    }
    @media (max-width: 760px) {
        width: 80%;
        margin-left: 27px;
    }
   
`;