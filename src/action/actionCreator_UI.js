import ActionTypes from '../action/actionTypes';
import axios from 'axios';

import * as ActionUtils from '../action/actionUtils';

export function changeFocusedState(state) {
    return {type: ActionTypes.UI.CHANGE_FOCUSED_STATE, state}
}

export function changeItemList(value) {
    return {type: ActionTypes.UI.CHANGE_ITEM_LIST, value}
}

/*初始化页面*/
export function initItemPageInfo(value) {
    return {type: ActionTypes.UI.INIT_ITEM_PAGE_INFO, value}
}

export function changeMouseStateInfo(state) {
    return {type: ActionTypes.UI.CHANGE_MOUSE_STATE_INFO, state}
}

export function handleChangePage() {
    return {type: ActionTypes.UI.HANDLE_ITEM_PAGE_INFO}
}

export function getAndInitItemList() {
    return (dispatch)=> {
        axios.get('/api/001HeaderList.json').then((res) => {
            const data = res.data.data;
            dispatch(changeItemList(data));

            const pageTotal = Math.ceil(data.length / 10);
            const list = ActionUtils.circlePushList(0, 10, data);
            const option = {pageNo: 0, pageTotal, temporaryItem: list};
            dispatch(initItemPageInfo(option))
        }).catch(() => {
            console.log('错误');
        })
    }
}