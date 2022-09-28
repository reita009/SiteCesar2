import React from "react";
import Logo from "../../assets/logo.jpeg"
import * as C from "./style";


export const Header = () =>{

    return(
        <>
            <C.Container className="bg-gray-800 flex shadow-xl ">
                <C.Img src={ Logo } className=""/>
                <C.Btn>ASSINAR</C.Btn>
            </C.Container>
        </>
    )
}