import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;   
    flex-direction: column;
    padding-bottom: 0%;
    background: rgb(235,220,181);
    background: linear-gradient(0deg, rgba(235,220,181,1) 0%, rgba(17,17,20,1) 72%);
    .wrap{
        display: flex;
        flex-direction: column;

        .body{
            margin-top: 20px;
            justify-content: space-between;
             display: flex;
             flex-direction: column;

            @media (min-width: 760px) {
                flex-direction: row;
            }
        }

        @media (min-width: 760px) {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export const Img = styled.img`
    height: 600px;
    width: 400px;
`;
export const Title = styled.h1`
    font-size: 60px;
    text-align: center;
    margin-top: 15px;
    color: #ccc;
`;
export const Form = styled.form`
    height: 600px;
    width: 300px;
    background-color: #1F2937;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 760px) {
                margin: 0;
            }
`;