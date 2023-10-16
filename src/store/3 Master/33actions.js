import * as actions from './actionType';

//========== 33 ==========
//Передает данные о выбранной дате
export const transferInfoDateAC = (date) => ({
    type: actions.TRANSFER_INFO_DATE,
    payload: date
})
//Передает данные из базы расписаний на выбранную дату
export const transferDataDateAC = (arrData) => ({
    type: actions.TRANSP_DATA_DATE,
    payload: arrData
})
//Данные для формы окна даты
export const trDataFormDatePlanAC = (arrData) => ({
    type: actions.TRANSP_DATA_FORM_DATE_PLAN,
    payload: arrData,
})