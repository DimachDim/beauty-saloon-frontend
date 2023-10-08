import * as actions from '../actionType'

let defState = {
    
    //Вбранная дата (при клике даты в календаре)
    selectDate : undefined, 

}

export default function rediserSchedule(state = defState, action){   
    switch(action.type){

        //Передает данные о выбранной дате
        case actions.TRANSFER_INFO_DATE:{
            let stateCopy = {...state}
            stateCopy.selectDate = action.payload

            return stateCopy
        }

        

        default:
            return state
    }
}