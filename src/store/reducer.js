import { combineReducers } from 'redux';
import ui from './reducer_UI';
import { home } from '../pages/home/store/';
import { detail } from '../pages/detail/store';
import { reducer as login } from '../pages/login/store';


export default combineReducers({
    UI: ui
    ,HOME: home
    ,DETAIL: detail/*这个是对的*/
    ,LOGIN: login
})