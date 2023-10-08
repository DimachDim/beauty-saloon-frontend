import * as actions from './actionType';



//======================= reduserMain =================

//Навигация
export const navAC = (path) => ({
    type: actions.NAV,
    payload: path,
})

//Текст ошибки
export const textErorAC = (text) => ({
    type: actions.TEXT_EROR,
    payload: text,
})

//Передает сессию
export const getSidAC = (sid) => ({
    type: actions.GET_SID,
    payload: sid,
})

//Передает информацию о пользователе
export const getInfoProfileAC = (info) => ({
    type: actions.GET_INFO_PROFILE,
    payload: info
})

//Передает о всплывающем окне
export const dataPopUpAC = (active, text, closeText, okText, func, dataFunc) => {

       
    return {
        type: actions.DATA_POP_UP,
        active: active,
        text: text,
        closeText: closeText,
        okText: okText,
        func: func,
        dataFunc: dataFunc
    }

}
//======================= reduserMain end =============


//======================= USERS =================
//Передает список пользователей
export const getUsersAC = (arrUsers) => ({
    type: actions.GET_USERS,
    payload: arrUsers
})

//Передает список статусов пользователей
export const getStatusesAC = (arrStatuses) => ({
    type: actions.GET_STATUSES,
    payload: arrStatuses
})
//======================= USERS end =============




//======================= Schedule ==========================
//Передает данные о выбранной дате
export const transferInfoDateAC = (date) => ({
    type: actions.TRANSFER_INFO_DATE,
    payload: date
})

//======================= Schedule end ======================







//======================= Settings ==========================
//Передает данные о имеющихся специализациях
export const transferDataSpecializationAC = (arrData) => ({
    type: actions.TRANSFER_DATA_SPECIALIZATION,
    payload: arrData
})

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
//Передает данные для массива для формы специалтиз
export const trDataServicesForSpecAC = (arrData) => ({
    type: actions.TR_DATA_SERVICES_FOR_SPEC,
    payload: arrData
})
//======================= Settings end ==========================






