import * as actions from './actionType';
//===== App =====
//Передает информацию о пользователе
export const getInfoProfileAC = (info) => ({
    type: actions.GET_INFO_PROFILE,
    payload: info
})




//===== 1 =====
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





//=====    =====
//Передает сессию
export const getSidAC = (sid) => ({
    type: actions.GET_SID,
    payload: sid,
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



//===== 14 =====
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