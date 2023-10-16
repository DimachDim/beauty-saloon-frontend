import { combineReducers, createStore } from 'redux';
//Редюсеры
import reduserGeneral from './1 General/reduserGeneral';
import reduserBoss from './2 Boss/reduserBoss';
import reduserMaster from './3 Master/reduserMaster';
import reduserClient from './4 Client/reduserClient';



/*
Основные методы для работы со store

store.dispatch() — диспатч какого-либо экшена
store.getState() — получение данных, которые хранятся в store
store.subscribe() — подписка на изменения store.
*/

const rootReduser = combineReducers({
    


    rGeneral:reduserGeneral,
    rBoss: reduserBoss,
    rMaster: reduserMaster,
    rClient: reduserClient,
})

const store = createStore(rootReduser)


export default store;