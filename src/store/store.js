import { combineReducers, createStore } from 'redux';
//Редюсеры
import rediserMain from './redusers/rediserMain';
import rediserUsers from './redusers/rediserUsers';
import rediserSchedule from './redusers/rediserSchedule';
import rediserSettings from './redusers/rediserSettings';

import clientReduser from '../store/Client/clientReduser'
import masterReduser from './Master/masterReduser';



/*
Основные методы для работы со store

store.dispatch() — диспатч какого-либо экшена
store.getState() — получение данных, которые хранятся в store
store.subscribe() — подписка на изменения store.
*/

const rootReduser = combineReducers({
    reduserMain: rediserMain,
    rediserUsers: rediserUsers,   
    rediserSchedule: rediserSchedule, 
    rediserSettings: rediserSettings,

    masterR: masterReduser,
    clientR: clientReduser,
})

const store = createStore(rootReduser)


export default store;