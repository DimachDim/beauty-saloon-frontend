import { BASE_URL } from "../paths";




//Настройка услуг
export const GET_DATA_FOR_SETTING_SERVICES_URL = BASE_URL + '/api/get-data-for-setting-serveces-master' //Получить данные для настройки услуг
export const SEND_DATA_ADD_SERVICES_URL = BASE_URL + '/api/send-data-add-serveces-master'               //Добавить в список выбранных
export const SEND_DATA_DEL_SERVICES_URL = BASE_URL + '/api/send-data-del-serveces-master'               //Удалить из списка выбранных

//Окно даты
export const GET_DATA_FORM_DATE_PLAN_URL = BASE_URL + '/api/get-data-form-date-plan-master'         //Получить для формы окна даты
