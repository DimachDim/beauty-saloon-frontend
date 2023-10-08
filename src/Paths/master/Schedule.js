import { BASE_URL } from "../Base";

//Расписание для мастера

//Передает свободное время и дату
export const TRANSFER_TIME_URL = BASE_URL + '/api/transfer-time'                

//Получаем данные из расписания за указанную дату
export const GET_DATA_DATE_URL = BASE_URL + '/api/get-data-date-master'         

//Удаляем данные из расписания за указанную дату
export const DEL_DATA_DATE_URL = BASE_URL + '/api/del-data-date'                
