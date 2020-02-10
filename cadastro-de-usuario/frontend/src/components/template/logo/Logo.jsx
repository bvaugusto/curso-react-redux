import "./Logo.css";
import React from "react";
import { Image } from 'semantic-ui-react';

const src = '../../../assets/imgs/logo.png';


export default props => 
    <aside className="logo">
        <Image src={src} size='small' />
    </aside>
