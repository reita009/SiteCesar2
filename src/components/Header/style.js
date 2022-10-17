import styled from "styled-components";


export const Container = styled.header`
    width: 100vw;
    height: 130px;
    padding: 10px;
    background-color: #060607;

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
    background-color: #f6e58d;
    padding: 2px;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    align-self: center;
    margin-right: 20px;

    &:hover{
        background-color: #f9ca24;
            cursor: pointer;
            transition: 0.6s ease-in;
    }
    @media (max-width: 760px) {
        width: 80%;
        margin-left: 27px;
    }
   
`;