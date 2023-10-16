import * as actions from './actionType';

//============ 211 ================
//Передает данные о имеющихся специализациях
export const transferDataSpecializationAC = (arrData) => ({
    type: actions.TRANSFER_DATA_SPECIALIZATION,
    payload: arrData
})



//===== 212 =====
//Передает данные о имеющихся услугах
export const transDataServicesAC = (arrData) => ({
    type: actions.TRANS_DATA_SERVICES,
    payload: arrData
})
//Передает данные для объедененного массива специализаций и услуг
export const transDataSpecServicessAC = (arrData) => ({
    type: actions.TRANS_DATA_SPEC_SERVICES,
    payload: arrData
})