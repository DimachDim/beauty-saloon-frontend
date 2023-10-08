import * as actions from './actionType'

let defState = {   
   
    //========== ВЫБОР УСЛУГИ ==========
    //Данные для окна выбора услуг
    specWithServ: [],

    //Хранит свободные даты на выбранную услугу
    arrFreeDates: [],

    //Хранит id выбранной услуги или Выбранного мастера
    idSelectServ: undefined,

    //========== ВЫБОР МАСТЕРА ==========
    //Хранит информацию о мастерах
    arrDataMasters: [],

    //Хранит данные о календаре
    arrDataForCalendar: [],

    
    
    //========== ДАТА ПЛАН ==============
    //Хранит информацию для плана даты
    arrDataDate: [],
}

export default function clientReduser(state = defState, action){   
    switch(action.type){

        case actions.CLEAN_STATE:{
            let stateCopy = {...state}
            stateCopy.arrDataForCalendar = []
            stateCopy.arrDataDate = []
            return stateCopy
        }

        //========== ВЫБОР УСЛУГИ ==========
        //Передает данные для выбора услуги
        case actions.TR_SPECIALIZATION_WITH_SERVICE:{
            let stateCopy = {...state}
            stateCopy.specWithServ = action.payload
            return stateCopy
        }

        //Передает Свободные даты на выбранную услугу
        case actions.TR_FREE_DATES:{
            let stateCopy = {...state}
            stateCopy.arrFreeDates = action.payload
            return stateCopy
        }

        //Передает id выбранной усдуги
        case actions.TR_ID_SERVECE:{
            let stateCopy = {...state}
            stateCopy.idSelectServ = action.payload
            return stateCopy
        }

        //========== ВЫБОР МАСТЕРА ==========
        //Передает информацию о мастерах
        case actions.TR_DATA_MASTERS:{
            let stateCopy = {...state}
            stateCopy.arrDataMasters = action.payload
            return stateCopy
        }

        //Передает информацию для календаря
        case actions.TR_DATA_FOR_CALENDAR:{
            let stateCopy = {...state}
            stateCopy.arrDataForCalendar = action.payload
            return stateCopy
        }

        
        //========== ДАТА ПЛАН ==============
        //Передает информацию для плана даты
        case actions.TR_DATA_DATE:{
            let stateCopy = {...state}
            stateCopy.arrDataDate = action.payload
            return stateCopy
        }
        default:
            return state
    }
}