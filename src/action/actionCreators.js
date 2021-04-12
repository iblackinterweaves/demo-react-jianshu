import * as ui from './actionCreator_UI';
import * as home from './actionCreater_home';
import * as detail from '../pages/detail/store/actionCreators_detail';

import { actions as login } from '../pages/login/store';

export default {
    UI: ui
    ,HOME: home
    ,DETAIL: detail
    ,LOGIN: login
}