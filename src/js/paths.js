export const BASE_URL = 'http://ce09056-django-m87qv.tw1.ru/nails'    //'http://127.0.0.1:8000/nails'    //Домаен бекенда

export const LOGIN_URL = BASE_URL + '/api/login'            //login
export const REG_URL = BASE_URL + '/api/reg'                //registration
export const LOGOUT_URL = BASE_URL + '/api/logout'          //logout


export const PROFILE_INFO_URL = BASE_URL + '/api/profile-info'                //Информация о пользователе




export const GET_USERS_URL = BASE_URL + '/api/get-users'                //Получение списка пользователей
export const DEL_USER_URL = BASE_URL + '/api/del-user'                  //Удаление пользователя
export const MASTER_USER_URL = BASE_URL + '/api/master-user'            //Назначение мастера


//Расписание для мастера
export const TRANSFER_TIME_URL = BASE_URL + '/api/transfer-time'        //Передает свободное время и дату
export const GET_DATA_DATE_URL = BASE_URL + '/api/get-data-date-master'        //Получаем данные из расписания за указанную дату
export const DEL_DATA_DATE_URL = BASE_URL + '/api/del-data-date'        //Удаляем данные из расписания за указанную дату

//DataPlanClient
export const GET_DATA_DATE_CLIENT_URL = BASE_URL + '/api/get-data-date-client'  //Получаем данные из расписания за указанную дату для клиента
export const SEND_TO_BOOK_URL = BASE_URL + '/api/send-to-book'                  //Зписаться 
export const SEND_CANCEL_BOOK_URL = BASE_URL + '/api/send-cancel-book'          //Отменить запись 

//РАСШИРЕННЫЕ НАСТРОЙКИ
export const GET_SPECIALIZATION_URL = BASE_URL + '/api/get-specialization'      //Запрос специализаций
export const ADD_SPECIALIZATION_URL = BASE_URL + '/api/add-specialization'      //Создание специализации
export const DEL_SPECIALIZATION_URL = BASE_URL + '/api/del-specialization'      //Удаление специализации

export const GET_SERVICES_URL = BASE_URL + '/api/get-services'                  //Запрос услуг
export const ADD_SERVICE_URL = BASE_URL + '/api/add-service'                    //Создание услуги
export const DEL_SERVICE_URL = BASE_URL + '/api/del-service'                    //Удаление услуги


//ДЛЯ МАСТЕРА
//специализации
export const GET_SPECIALIZATION_MASTER_URL = BASE_URL + '/api/get-specialization-master'        //Запрос специализаций для мастера
export const CHENGE_SPECIALIZATION_MASTER_URL = BASE_URL + '/api/chenge-specialization-master'  //Изменить специализацию для мастера
//услуги




