import ActionTypes from '../action/actionTypes';
import * as ActionUtils from '../action/actionUtils';
// import { fromJS } from 'immutable';

const defaultState = {
    HEADER: {
        focused: false
        ,itemList: []
        ,mouseInfo: false
        ,itemPageInfo: {
            pageNo: 0
            ,pageTotal: 0
            ,temporaryItem: []
        }
    }
};

const ui = (state = defaultState, action) => {
    return {
        HEADER: change_head_value(state.HEADER, action)
    };
}

const change_head_value = (state, action)=> {
    switch (action.type) {
        case ActionTypes.UI.CHANGE_FOCUSED_STATE:
            return Object.assign({}, state, {focused:action.state});
            // return state.set('focused', action.state);
        case ActionTypes.UI.CHANGE_ITEM_LIST:
            return Object.assign({}, state, {itemList: action.value});
        case ActionTypes.UI.CHANGE_MOUSE_STATE_INFO:
            return Object.assign({}, state, {mouseInfo: action.state});
        case ActionTypes.UI.INIT_ITEM_PAGE_INFO:
            return Object.assign({}, state, {itemPageInfo:action.value})
        case ActionTypes.UI.HANDLE_ITEM_PAGE_INFO:
            const pageTotal = state.itemPageInfo.pageTotal;
            const itemList = state.itemList;
            const pageNo = state.itemPageInfo.pageNo + 1 >= pageTotal ? 0: state.itemPageInfo.pageNo + 1;
            const temp =  ActionUtils.circlePushList(pageNo * 10, 10, itemList);
            const option = {
                pageNo: pageNo
                ,pageTotal: pageTotal
                ,temporaryItem: temp
            }
            return Object.assign({}, state, {itemPageInfo: option});
        default:
            return state;
    }
}

export default ui;