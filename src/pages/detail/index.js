import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Actions from '../../action/actionCreators';

import {
    DetailWrapper,
    Header,
    Content
} from './style';



class Detail extends Component{

    componentDidMount() {
        // const { getDetailData } = this.props;
        this.props.getDetailData();
    }

    render() {
        console.log(this.props.match.params.id, "555555555555554444");
        const {
            title,
            content
        } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>

                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.DETAIL.title,
        content: state.DETAIL.content
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailData: () => {
            dispatch(Actions.DETAIL.getDetailData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));