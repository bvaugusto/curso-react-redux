import React from "react";
import { filhosCompProps } from "../utils/utils";

export default props => 
    <>
        <h1>Família</h1>
        {filhosCompProps(props)}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome })} */}
        {/* {props.children} */}
    </>