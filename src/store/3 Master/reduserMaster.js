import * as actionTypes from './actionType'

let defState = {   
   
    //========== 311 ==========
    //Специализации
    specializations : [],


    //========== 312 ==========
    //Массив с данными для настройки услуг
    dataForSetingServices: [], 


    
    
    //========== 33 ==========
    //Вбранная дата (при клике даты в календаре)
    selectDate : undefined,

    //Данные за выбранную дату
    dataDate: [],

    //Массив с данными для формы добавления времени для окна даты
    dataFormDatePlan: [],
}

export default function reduserMaster(state = defState, action){   
    switch(action.type){

        //========== 311 ==========
        case actionTypes.TRANSFER_DATA_SPECIALIZATION:{
            let stateCopy = {...state}
            stateCopy.specializations = action.payload
            return stateCopy
        }



        //========== 312 ==========
        //Передаем данные для настройки услуг
        case actionTypes.TRANSP_DATA_FOR_SETING_SERVICE:{
            let stateCopy = {...state}
            stateCopy.dataForSetingServices = action.payload
            return stateCopy
        }



        //========= 33 ============
        //Передает данные о выбранной дате
        case actionTypes.TRANSFER_INFO_DATE:{
            let stateCopy = {...state}
            stateCopy.selectDate = action.payload

            return stateCopy
        }

         //Передает данные из базы расписаний на выбранную дату
         case actionTypes.TRANSP_DATA_DATE:{
            let stateCopy = {...state}
            //Получаем массив
            let arr = action.payload
           
            
            //Перебираем массив
            for(let n = 0; n < arr.length; n++){
                
                //Один проход по массиву
                for(let i = 0; i < arr.length -1 - n; i++){
                    //Преобразуем число
                    let num = Number(arr[i].time.substr(0,5).replace(':',''))
                    let num2 = Number(arr[i+1].time.substr(0,5).replace(':',''))  
                    //Если интерируемое число больше следующего
                    if(num > num2){
                        //Сохраняем итерируемый объект
                        let t = arr[i]
                        //Меняем элементы местами
                        arr[i] = arr[i+1]
                        arr[i+1] = t
                    }
                }
            }
            
            stateCopy.dataDate = arr
            
            return stateCopy
        }

        //Передаем данные для формы окна даты
        case actionTypes.TRANSP_DATA_FORM_DATE_PLAN:{
            let stateCopy = {...state}
            stateCopy.dataFormDatePlan = action.payload
            return stateCopy
        }
       

        default:
            return state
    }
}