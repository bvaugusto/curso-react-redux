import React from "react";

const links = [
    { 'link': '#/', 'icon': 'home', 'name': 'Início' },
    { 'link': '#/users', 'icon': 'home', 'name': 'Usuários' },
];

export default props => {

    return (
        <>
            {links.map((option, index) => {
                let icon = `fa fa-${option.icon}`;
                return (
                    <a href={option.link}> <i className={icon}></i> {option.name} </a>
                )
            })}
        </>
    )
}