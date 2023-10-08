import * as actions from '../actionType'

let defState = {
    
   //Специализации
   specializations : [],

   //Услуги
   services : [],

   //Объедененны массив специализаций с услугами
   specWithServices : [],
    
   
}

export default function rediserSettings(state = defState, action){   
    switch(action.type){

        //Навигация
        case actions.TRANSFER_DATA_SPECIALIZATION:{
            let stateCopy = {...state}
            stateCopy.specializations = action.payload

            return stateCopy
        }
        
        //Передает данные о имеющихся услугах
        case actions.TRANS_DATA_SERVICES:{
            let stateCopy = {...state}
            stateCopy.services = action.payload

            return stateCopy
        }
        
        //Передает данные для объедененного массива специализаций и услуг
        case actions.TRANS_DATA_SPEC_SERVICES:{
            let stateCopy = {...state}
            stateCopy.specWithServices = action.payload

            return stateCopy
        }

        //Передает данные для массива для формы специалтиз
        case actions.TR_DATA_SERVICES_FOR_SPEC:{
            let stateCopy = {...state}

            let arrServices = action.payload        //Переданный массив
            
            stateCopy.servicesForFormSpec.push(arrServices)

            
            return stateCopy
        }


        default:
            return state
    }
}