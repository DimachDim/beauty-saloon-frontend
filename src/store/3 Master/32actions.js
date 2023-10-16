import * as actions from './actionType';

//========= 32 ============
//Передает данные о выбранной дате
export const transferInfoDateAC = (date) => ({
    type: actions.TRANSFER_INFO_DATE,
    payload: date
})