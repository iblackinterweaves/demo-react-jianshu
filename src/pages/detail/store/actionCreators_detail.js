import ActionTypes from '../../../action/actionTypes';
import axios from 'axios';

export function changeTitleValue(value) {
    return {type: ActionTypes.DETAIL.CHANGE_TITLE_VALUE, value}
}

export function changeContentValue(value) {
    return {type: ActionTypes.DETAIL.CHANGE_CONTENT_VALUE, value}
}


export function getDetailData() {
    return (dispatch) => {
        axios.get('/api/004Detail.json').then((res) => {
            const data = res.data.data;

            dispatch(changeTitleValue(data.title));
            dispatch(changeContentValue(data.content));

        }).catch(()=> {
            console.log('detail错误');
        })
    }
}