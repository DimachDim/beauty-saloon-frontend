import React from "react";
import { useNavigate } from "react-router-dom";
//import './Login.css'

//Компанента отвечает за отображение интерфейса входа

let UserBox = (props) => {
    //console.log(props)
    
    //Кнопка назначения мастером
    let butMaster

    //Кнопка удаления пользователя
    let delUser 

    //Условия отрисовки кнопки удаления и назначения мастером
    if(props.user.id != props.id && (props.user.status == 'admin' || props.user.status == 'boss')){
        butMaster = <button onClick={() => props.clickMaster(props.id)}>
                        {props.status == 'client' ? 'Назначить мастером' : 'Назначить клиентом'}
                    </button>

        delUser = <button onClick={() => props.clickDeleteUser(props.id)}>X</button> 
    }
    //Удалить все для админа
    if(props.status == 'admin'){
        butMaster =''
        delUser = ''
    }
    

    const nav = useNavigate()

    let handClick = (e) => {
        nav('/schedule')
    }

    return (
        <div>
            {props.name + ' ' + props.lastName + ' ' + props.phone + ' ' + props.status}
            
            {/* КНОПКА НАЗНАЧЕНИЯ МАСТЕРОМ */}
            {butMaster}

            {/* КНОПКА УДАЛЕНИЯ ПОЛЬЗОВАТЕЛЯ */}
            {delUser}


            
        </div>
    )    
    
}

export default UserBox;







