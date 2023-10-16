import * as actions from './actionType';

//============ 311 ================
export const transferDataSpecializationAC = (arrData) => ({
    type: actions.TRANSFER_DATA_SPECIALIZATION,
    payload: arrData
})



//========== 312 ==========
//Данные для настройки услуг
export const trDataForSetingServiceAC = (arrData) => ({
    type: actions.TRANSP_DATA_FOR_SETING_SERVICE,
    payload: arrData,
})