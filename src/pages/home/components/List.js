import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Actions from '../../../action/actionCreater_home';

import listImage from '../../../statics/04list.png';

import {
    ListItem
    ,ListInfo
    ,LoadMore
} from '../style';

class List extends Component{
    render() {
        const {
            articleList
            ,getMoreList
        } = this.props
        return (
            <Fragment>
                {
                    articleList.map((item, index) => (
                        <Link key={item.id} to={'/detail/' + item.id}>
                            <ListItem >
                                <img className='pic' src={listImage} alt=''/>
                                <ListInfo>
                                    <h3 className='title'>{item.title}</h3>
                                    <p className='desc'>{item.desc}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={getMoreList}>更多加载</LoadMore>
            </Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.HOME.articleList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList: () => {
            dispatch(Actions.getMoreList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);