import { BASE_URL } from "../Base";

//ВЫБОР УСЛУГ
export const GET_DATA_SERVICES_URL = BASE_URL + '/api/get-data-serveces-client'     //Получить данные о специализациях и их услугах
export const SEND_ID_SERVICE_URL = BASE_URL + '/api/send-id-servece-client'         //Отправляем id выбранной услуги

//Дата план выбор услуг
export const GET_DATA_FOR_DATE_URL = BASE_URL + '/api/get-data-date-client'                             //Получить данные за выбранную дату
export const SEND_DATA_APPOINTMENT_URL = BASE_URL + '/api/send-data-appointment-client'                 //Записаться на прием
export const SEND_DATA_CANCEL_APPOINTMENT_URL = BASE_URL + '/api/send-data-cancel-appointment-client'   //Отменить записаться на прием






//ВЫБОР МАСТЕРА
export const GET_LIST_MASTERS_URL = BASE_URL + '/api/get-list-masters'              //Получить список всех мастеров
export const GET_DATA_FOR_CALENDAR_URL = BASE_URL + '/api/get-data-for-calendar'    //Получить данные для календаря

//Дата план выбор мастера
export const GET_DATA_FOR_DATE_MASTER_URL = BASE_URL + '/api/get-master-data-date-client'               //Получить все окна мастера за указанную дату
//Взято выше
//export const SEND_DATA_APPOINTMENT_URL = BASE_URL + '/api/send-data-appointment-client'               //Записаться на прием
//export const SEND_DATA_CANCEL_APPOINTMENT_URL = BASE_URL + '/api/send-data-cancel-appointment-client' //Отменить записаться на прием
