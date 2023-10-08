import * as actions from './actionType';



//============= ДЛЯ НАСТРОЙКИ УСЛУГ ==============

//Данные для настройки услуг
export const trDataForSetingServiceAC = (arrData) => ({
    type: actions.TRANSP_DATA_FOR_SETING_SERVICE,
    payload: arrData,
})

//Данные для формы окна даты
export const trDataFormDatePlanAC = (arrData) => ({
    type: actions.TRANSP_DATA_FORM_DATE_PLAN,
    payload: arrData,
})


//================ ДЛЯ ОКНА ДАТЫ =================
//Передает данные из базы расписаний на выбранную дату
export const transferDataDateAC = (arrData) => ({
    type: actions.TRANSP_DATA_DATE,
    payload: arrData
})
