import { BASE_URL } from "../Base";


export const TRANSFER_TIME_URL = BASE_URL + '/api/transfer-time'                            //Передает свободное время и дату
export const GET_DATA_DATE_URL = BASE_URL + '/api/get-data-date-master'                     //Получаем данные из расписания за указанную дату
export const DEL_DATA_DATE_URL = BASE_URL + '/api/del-data-date'                            //Удаляем данные из расписания за указанную дату
export const GET_DATA_FORM_DATE_PLAN_URL = BASE_URL + '/api/get-data-form-date-plan-master' //Получить для формы окна даты
