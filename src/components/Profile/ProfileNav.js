import React from "react";
import { navAC } from "../../store/actions";


//Компанента отвечает за отображение интерфейса входа

let NavBar = (props) => {
    //console.log(props)
    
    
    
    return (
        <div className="">

            {/* АВАТАР */}

            {/* ИМЯ И ФАМИЛИЯ */}
            {props.info.name + ' ' + props.info.lastName}

            {/* СТАТУС ПРОФИЛЯ */}
            <p>{props.info.status}</p>

        </div>
    )    
    
}

export default NavBar;







