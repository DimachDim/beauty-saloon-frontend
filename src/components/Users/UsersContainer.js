//import React from "react";
import { connect } from "react-redux";

import UsersAPIContainer from "./UsersAPIContainer";

//Экшены
import { getUsersAC } from "../../store/actions";
import { getStatusesAC } from "../../store/actions";


let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,     //Сессия
        user: state.reduserMain.user,   //Данные пользователя
        
        users: state.rediserUsers.users,            //Список пользователей
        statuses: state.rediserUsers.statuses,      //Список статусов       
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





