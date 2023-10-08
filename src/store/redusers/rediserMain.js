import * as actions from '../actionType'

let defState = {
    
    //Сессия
    SID: undefined,

    //Данные о пользователе
    user:{
        name: '',
        lastName:'',
    },

    //Навигация
    nav: 'home',
    
    //Текст ошибки
    textEror: '',

    //Всплывющее окно
    popUp : {
        active: false,
        text: '',
        closeText: '',
        okText: '',
        func: undefined,
        dataFunc: undefined
    }
}

export default function rediser1Main(state = defState, action){   
    switch(action.type){

        //Навигация
        case actions.NAV:{
            let stateCopy = {...state}
            stateCopy.nav = action.payload

            return stateCopy
        }
        
        //Текст ошибки
        case actions.TEXT_EROR:{
            let stateCopy = {...state}
            stateCopy.textEror = action.payload
            
            return stateCopy
        }

        //Передача сессии
        case actions.GET_SID:{
            let stateCopy = {...state}
            stateCopy.SID = action.payload
            
            return stateCopy
        }

        //Передача инфо о профиле
        case actions.GET_INFO_PROFILE:{
            let stateCopy = {...state}
            stateCopy.user = {...state.user}

            //Меняем значения
            stateCopy.user = action.payload
            
            return stateCopy
        }
        
        //Передача информации о всплывающем окне
        case actions.DATA_POP_UP:{
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

        default:
            return state
    }
}