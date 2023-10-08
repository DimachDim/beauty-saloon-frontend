import { BASE_URL } from "../Base";

//НАСТРОЙКА СПЕЦИАЛИЗАЦИЙ
export const GET_SPECIALIZATION_MASTER_URL = BASE_URL + '/api/get-specialization-master'        //Запрос специализаций для мастера
export const CHENGE_SPECIALIZATION_MASTER_URL = BASE_URL + '/api/chenge-specialization-master'  //Изменить специализацию для мастера

//НАСТРОКА УСЛУГ
export const GET_DATA_FOR_SETTING_SERVICES_URL = BASE_URL + '/api/get-data-for-setting-serveces-master' //Получить данные для настройки услуг
export const SEND_DATA_ADD_SERVICES_URL = BASE_URL + '/api/send-data-add-serveces-master'               //Добавить в список выбранных
export const SEND_DATA_DEL_SERVICES_URL = BASE_URL + '/api/send-data-del-serveces-master'               //Удалить из списка выбранных
