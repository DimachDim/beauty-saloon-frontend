//import React from "react";
import { connect } from "react-redux";

import UsersAPIContainer from "./UsersAPIContainer";

//Экшены
import { getUsersAC } from "../../store/1 General/actions";
import { getStatusesAC } from "../../store/1 General/actions";


let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,     //Сессия
        user: state.rGeneral.user,   //Данные пользователя
        users: state.rGeneral.users,            //Список пользователей
        statuses: state.rGeneral.statuses,      //Список статусов       
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает список пользователей
        getUsersAC: (arrUsers) =>{
            dispatch(getUsersAC(arrUsers))
        }, 

        //Передает список статусов
        getStatusesAC: (arrStatuses) =>{
            dispatch(getStatusesAC(arrStatuses))
        },
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)





