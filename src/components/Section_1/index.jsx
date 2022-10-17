import React from "react";
import * as C from "./style";
import Children from "../../assets/children.svg"

export const SectionOne = () =>{
    return(
        <>
            <C.Container className=" flex">
                 <div className="wrap">
                    <C.Title>O melhor curso do mundo!!</C.Title>
                    <div className="body ">
                        <C.Img  src={ Children }/>
                        <C.Form>a</C.Form>
                    </div>
                 </div>
            </C.Container>
        </>
    )
}