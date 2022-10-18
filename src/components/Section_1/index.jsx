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
                            <div className="left pt-10  ">                  
                                <C.Title className="text-3xl" color="#FFDA79" size="20px">Inglês do básico ao avançado</C.Title>                          
                                <C.Title className="text-6xl" color="#C6E1DA" size="37px">Aprenda inglês e bla bla bla, + bla bla</C.Title>
                                <C.Title color="#C6E1DA" size="16px">Alfrid renowned 14th fairest altogether pints mother's grandfather's affects omen reign. Legends weren't secret Ent juicy witchcraft malice unfair high break put contains! Prancing Pony plumbing bury? I was there the day the strength of Men failed.</C.Title>
                                <C.Btn bg="#f6e58d" bgHover="#f9ca24" size="200px">ASSINAR AGORA</C.Btn>
                                <C.Img  src={ Children }/>
                            </div>
                            <C.Form >
                                <C.Dice src={imageDice} />
                                <div className="text-wrap">
                                    <C.textForm className="text-4xl">Junte-se a essa aventura!</C.textForm>
                                    <C.textForm className="text-2xl" mid>Assinatura por apenas</C.textForm>
                                    <C.textForm className="text-5xl" large>R$:00,00</C.textForm>
                                    <C.textForm className="text-2xl">Ou R$:00,00 à vista</C.textForm> 
                                    <C.Btn className="mt-9" color="#C6E1DA" bg="#A80316" size="280px">ASSINAR ENGLISH WITH DICE</C.Btn>
                                </div>
                            </C.Form>
                    </div>
                 </div>
            </C.Container>
        </>
    )
}