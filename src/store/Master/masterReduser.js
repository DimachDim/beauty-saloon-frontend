import * as actions from './actionType'

let defState = {   
   
    //Массив с данными для настройки услуг
    dataForSetingServices: [], 

    //Массив с данными для формы добавления времени для окна даты
    dataFormDatePlan: [],

    //Данные за выбранную дату
    dataDate: []
}

export default function masterReduser(state = defState, action){   
    switch(action.type){

        //Передаем данные для настройки услуг
        case actions.TRANSP_DATA_FOR_SETING_SERVICE:{
            let stateCopy = {...state}
            stateCopy.dataForSetingServices = action.payload

            return stateCopy
        }

        //Передаем данные для формы окна даты
        case actions.TRANSP_DATA_FORM_DATE_PLAN:{
            let stateCopy = {...state}
            stateCopy.dataFormDatePlan = action.payload
            return stateCopy
        }

        //Передает данные из базы расписаний на выбранную дату
        case actions.TRANSP_DATA_DATE:{
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


        default:
            return state
    }
}