import * as actions from './actionType';

//Очищает состояние
export const cleanState = () => ({
    type: actions.CLEAN_STATE,
})


//============= ВЫБОР УСЛУГИ ==============

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
//Передает id выбранной усдуги
export const trIdServeceAC = (id) => ({
    type: actions.TR_ID_SERVECE,
    payload: id,
})



//============= ВЫБОР МАСТЕРА ==============
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



//============= ДАТА ПЛАН ==============
//Передает информацию для плана даты
export const trDataDateAC = (arr) => ({
    type: actions.TR_DATA_DATE,
    payload: arr,
})