import * as actionTypes from './actionType'

let defState = {   
   
    //========== 411 ==========
    //Данные для окна выбора услуг
    specWithServ: [],


    //========== 4111 ==========
    //Вбранная дата (при клике даты в календаре)        '4121'
    selectDate : undefined, 
    //Хранит id выбранной услуги или Выбранного мастера
    idSelectServ: undefined,
    //Хранит информацию для плана даты                  '4121'
    arrDataDate: [],


    //========== 412 ==========
    //Хранит информацию о мастерах
    arrDataMasters: [],


    //========== 4121 ==========
    //Хранит id выбранного мастера
    idSelectMaster: undefined,


    //========== 42 ==========
    //Хранит свободные даты на выбранную услугу
    arrFreeDates: [],
    //Хранит данные о календаре
    arrDataForCalendar: [],
}

export default function reduserClient(state = defState, action){   
    switch(action.type){

        //========== 41 ==========
  


        //========== 411 ==========
        //Передает данные для выбора услуги
        case actionTypes.TR_SPECIALIZATION_WITH_SERVICE:{
            let stateCopy = {...state}
            stateCopy.specWithServ = action.payload
            return stateCopy
        }
        //Передает Свободные даты на выбранную услугу       '42'
        case actionTypes.TR_FREE_DATES:{
            let stateCopy = {...state}
            stateCopy.arrFreeDates = action.payload
            return stateCopy
        }
 

        //========== 4111 ==========
        //Передает данные о выбранной дате
        case actionTypes.TRANSFER_INFO_DATE:{
            let stateCopy = {...state}
            stateCopy.selectDate = action.payload
            return stateCopy
        }
        //Передает id выбранной усдуги
        case actionTypes.TR_ID_SERVECE:{
            let stateCopy = {...state}
            stateCopy.idSelectServ = action.payload
            return stateCopy
        }
        //Передача инф. для плана даты      '42'
        case actionTypes.CLEAN_STATE:{
            let stateCopy = {...state}
            stateCopy.arrDataForCalendar = []
            stateCopy.arrDataDate = []
            return stateCopy
        }
        //Передает информацию для плана даты
        case actionTypes.TR_DATA_DATE:{
            let stateCopy = {...state}
            stateCopy.arrDataDate = action.payload
            return stateCopy
        }


        //========== 412 ==========
        //Передает информацию о мастерах        '42'
        case actionTypes.TR_DATA_MASTERS:{
            let stateCopy = {...state}
            stateCopy.arrDataMasters = action.payload
            return stateCopy
        }
        //Передает информацию для календаря
        case actionTypes.TR_DATA_FOR_CALENDAR:{
            let stateCopy = {...state}
            stateCopy.arrDataForCalendar = action.payload
            return stateCopy
        }


        //========== 4121 ==========
        //Передает id выбранного мастера
        case actionTypes.TR_ID_MASTER:{
            let stateCopy = {...state}
            stateCopy.idSelectMaster = action.payload
            return stateCopy
        }

        default:
            return state
    }
}