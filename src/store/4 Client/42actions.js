import * as actions from './actionType';

//============ 42 ================
//Передает данные о выбранной дате
export const transferInfoDateAC = (date) => ({
    type: actions.TRANSFER_INFO_DATE,
    payload: date
})
