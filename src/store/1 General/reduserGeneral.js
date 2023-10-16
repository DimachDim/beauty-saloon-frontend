import * as actionTypes from './actionType'

let defState = {   
    
    //===== App ====
    //Данные о пользователе
    user:{
        name: '',
        lastName:'',
    },



    //===== 1 =====
    //Навигация
    nav: 'home',

    //Текст ошибки
    textEror: '',
    
    //Сессия
    SID: undefined,



    //===== 13 =====
    //Всплывющее окно
    popUp : {
        active: false,
        text: '',
        closeText: '',
        okText: '',
        func: undefined,
        dataFunc: undefined
    },


    //===== 14 =====
    //Список пользователей
    users: [],

    //Статусы
    statuses: []
}

export default function reduserGeneral(state = defState, action){   
    switch(action.type){

        //===== App =====
        //Передача инфо о профиле
        case actionTypes.GET_INFO_PROFILE:{
            let stateCopy = {...state}
            stateCopy.user = {...state.user}

            //Меняем значения
            stateCopy.user = action.payload
            
            return stateCopy
        }



        //===== 1 =====
        //Навигация
        case actionTypes.NAV:{
            let stateCopy = {...state}
            stateCopy.nav = action.payload

            return stateCopy
        }

        //Текст ошибки
        case actionTypes.TEXT_EROR:{
            let stateCopy = {...state}
            stateCopy.textEror = action.payload
            
            return stateCopy
        }

        //Передача сессии
        case actionTypes.GET_SID:{
            let stateCopy = {...state}
            stateCopy.SID = action.payload
            
            return stateCopy
        }



        //===== 13 =====
        //Передача информации о всплывающем окне
        case actionTypes.DATA_POP_UP:{
            let stateCopy = {...state}
            stateCopy.popUp = {...state.popUp}

            stateCopy.popUp.active = action.active
            stateCopy.popUp.text = action.text
            stateCopy.popUp.closeText = action.closeText
            stateCopy.popUp.okText = action.okText
            stateCopy.popUp.func = action.func
            stateCopy.popUp.dataFunc = action.dataFunc
            
            
            return stateCopy
        }

        
        
        //===== 14 =====
        //Передает список пользователей
        case actionTypes.GET_USERS:{
            let stateCopy = {...state}
            stateCopy.users = [...state.users]

            stateCopy.users = action.payload

            return stateCopy
        }

        //Передает список статусов пользователей
        case actionTypes.GET_STATUSES:{
            let stateCopy = {...state}
            stateCopy.statuses = [...state.statuses]

            stateCopy.statuses = action.payload

            return stateCopy
        }
        
       
        
        default:
            return state
    }
}