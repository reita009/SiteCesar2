import styled from "styled-components";

export const Container = styled.section`
    width: 100%;   
    flex-direction: column;
    background: rgb(235,220,181);
    background: linear-gradient(0deg, rgba(235,220,181,1) 0%, rgba(17,17,20,1) 72%);
    overflow: hidden;
    padding-top: 140px;
    .left{
        display: flex;
        flex-direction: column;
        margin: auto;
        height: 800px;
        width:370px ;
        @media (min-width: 760px) {
            margin-left: 70px;
            width: 600px;
         
        }
    }
 
    .wrap{
        display: flex;
        flex-direction: column;
        @media (max-width: 760px) {
                width: 400px;
                margin: auto;
            }

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
    @media (max-width: 760px) {
            margin-left: auto;
            margin-right: auto;
        }
`;
export const Title = styled.h1`
    text-align: center;
    color: ${props => props.color};
    margin-bottom: 20px;
    @media (max-width: 760px) {
            font-size: ${props => props.size };
            
        }

`;
export const Form = styled.form`
    height: 600px;
    width: 370px;
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
export const Btn = styled.button`
    background-color: ${props=> props.bg};
    padding: 2px;
    height: 55px;
    width: ${props=> props.size};
    border-radius: 10px;
    align-self: center;
    color:${props=> props.color};
    &:hover{
        background-color: ${props=> props.bgHover};
            cursor: pointer;
            transition: 0.6s ease-in;
    }
    @media (max-width: 760px) {
        width: 80%;
        margin-left: 27px;
    }
   
`;
