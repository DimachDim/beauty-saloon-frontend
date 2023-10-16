import * as actions from './actionType';

//============ 41 ================
//Очищает состояние
export const cleanState = () => ({
    type: actions.CLEAN_STATE,
})


//========== 411 ==========
//Передает данные для выбора услуги
export const trSpecWithServAC = (arrData) => ({
    type: actions.TR_SPECIALIZATION_WITH_SERVICE,
    payload: arrData,
})
//Передает Свободные даты на выбранную услугу
export const trFreeDatesAC = (arrData) => ({
    type: actions.TR_FREE_DATES,
    payload: arrData,
})



//========== 4111 ==========
//Передает данные о выбранной дате
export const transferInfoDateAC = (date) => ({
    type: actions.TRANSFER_INFO_DATE,
    payload: date
})
//Передает id выбранной усдуги
export const trIdServeceAC = (id) => ({
    type: actions.TR_ID_SERVECE,
    payload: id,
})
//Передает информацию для плана даты            '4121'
export const trDataDateAC = (arr) => ({
    type: actions.TR_DATA_DATE,
    payload: arr,
})


//============ 412 ================
//Передает информацию о мастерах
export const trDataMastersAC = (arrDate) => ({
    type: actions.TR_DATA_MASTERS,
    payload: arrDate,
})
//Передает информацию для календаря
export const trDataForCalendarAC = (arrDate) => ({
    type: actions.TR_DATA_FOR_CALENDAR,
    payload: arrDate,
})


//========== 4121 ==========
//Передает id выбранного мастера
export const trIdMasterAC = (id) => ({
    type: actions.TR_ID_MASTER,
    payload: id,
})
