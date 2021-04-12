import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommend extends Component{
    render() {

        const {
            recommendList
        } = this.props

        return (
            <RecommendWrapper>
                {
                    recommendList.map((item, index) => (
                        <RecommendItem key={index} src={item.urlImage}/>
                    ))
                }

            </RecommendWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.HOME.recommendList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);