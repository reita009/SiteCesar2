import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;   
    flex-direction: column;
    padding-bottom: 0%;
    background: rgb(235,220,181);
    background: linear-gradient(0deg, rgba(235,220,181,1) 0%, rgba(17,17,20,1) 72%);
    padding-bottom: 30px;
    padding-top: 200px;
    .left{
        display: flex;
        flex-direction: column;
    }
    .wrap{
        display: flex;
        flex-direction: column;
        
        .body{
            margin-top: 50px;
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
    font-size: 30px;
    text-align: center;
    color: #FFDA79;
`;
export const Form = styled.form`
    height: 600px;
    width: 400px;
    background-color: #1D1C1D;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    flex-direction: column;
    .text-wrap{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

     padding: 5px;
    @media (min-width: 760px) {
                margin: 0;
            }
`;

export const Dice = styled.img`
    height: 100px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
`;
export const textForm = styled.p`
  margin-top:${props => props.large ? '18px' : '13px'};
  color: #E1E1E1;
`;
