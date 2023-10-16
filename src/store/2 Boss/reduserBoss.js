import * as actionTypes from './actionType'

let defState = {   
   
    //========== 211 ==========
    //Специализации
    specializations : [],


    //===== 212 =====
    //Услуги
    services : [],

    //Объедененны массив специализаций с услугами
    specWithServices : [],

    
}

export default function reduserBoss(state = defState, action){   
    switch(action.type){

        //========== 211 ==========
        //Передача специализаций
        case actionTypes.TRANSFER_DATA_SPECIALIZATION:{
            let stateCopy = {...state}
            stateCopy.specializations = action.payload
            return stateCopy
        }
        


        //===== 212 =====
        //Передает данные о имеющихся услугах
        case actionTypes.TRANS_DATA_SERVICES:{
            let stateCopy = {...state}
            stateCopy.services = action.payload

            return stateCopy
        }

        //Передает данные для объедененного массива специализаций и услуг
        case actionTypes.TRANS_DATA_SPEC_SERVICES:{
            let stateCopy = {...state}
            stateCopy.specWithServices = action.payload

            return stateCopy
        }

        default:
            return state
    }
}