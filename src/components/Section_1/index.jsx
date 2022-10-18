import React from "react";
import * as C from "./style";
import Children from "../../assets/children.svg"
import imageDice from "../../assets/dice.png"

export const SectionOne = () =>{
    return(
        <>
            <C.Container className=" flex">
                 <div className="wrap">
                    <div className="body ">
                            <div className="left">
                            <C.Title>O melhor curso do mundo!!</C.Title>
                            <C.Img  src={ Children }/>
                            </div>
                            <C.Form >
                                <C.Dice src={imageDice} />
                                <div className="text-wrap">
                                    <C.textForm className="text-4xl">Junte-se a essa aventura!</C.textForm>
                                    <C.textForm className="text-2xl" mid>Assinatura por apenas</C.textForm>
                                    <C.textForm className="text-5xl" large>R$:00,00</C.textForm>
                                    <C.textForm className="text-2xl">Ou R$:00,00 à vista</C.textForm> 
                                </div>
                            </C.Form>
                    </div>
                 </div>
            </C.Container>
        </>
    )
}