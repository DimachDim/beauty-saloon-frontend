import { BASE_URL } from "../Base";

//DataPlanClient

//Получаем данные из расписания за указанную дату для клиента
export const GET_DATA_DATE_CLIENT_URL = BASE_URL + '/api/get-data-date-client'  

//Зписаться 
export const SEND_TO_BOOK_URL = BASE_URL + '/api/send-to-book'                  

//Отменить запись 
export const SEND_CANCEL_BOOK_URL = BASE_URL + '/api/send-cancel-book'          
