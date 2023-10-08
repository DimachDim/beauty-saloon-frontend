import * as actions from '../actionType'

let defState = {
    
    //Список пользователей
    users: [],

    //Статусы
    statuses: []
}

export default function rediserUsers(state = defState, action){   
    switch(action.type){

        //Передает список пользователей
        case actions.GET_USERS:{
            let stateCopy = {...state}
            stateCopy.users = [...state.users]

            stateCopy.users = action.payload

            return stateCopy
        }

        //Передает список статусов пользователей
        case actions.GET_STATUSES:{
            let stateCopy = {...state}
            stateCopy.statuses = [...state.statuses]

            stateCopy.statuses = action.payload

            return stateCopy
        }

        default:
            return state
    }
}