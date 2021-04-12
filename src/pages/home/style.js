import styled from 'styled-components';
import homeWrapper from '../../statics/02homeWrapper.jpg'
import topicImage from '../../statics/03topic.jpg';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    margin-top: 30px
`;


export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    
`;

export const HomeTopImage = styled.img`
    width: 625px;
    height: 240px;
    background: url(${homeWrapper});
    background-size: contain;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    
`;

export const BackTop = styled.div`
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #ccc
    border-radius: 5px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`;

/*Topic*/

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc
`;

export const TopicImg = styled.img`
    width: 32px;
    height: 32px;
    background: url(${topicImage});
    background-size: contain;
    display: block;
    float: left;
    margin-right: 10px;
`;

export const TopicItem = styled.div`
    margin-top: 18px
    margin-right: 18px
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px
    padding: 0 0 0 10px
`;

/*list*/
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc
    .pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 20px;
    }
    
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5
    border-radius: 20px;
    color: #fff
    margin: 30px 0;
    cursor: pointer;
`;

/*Recommend*/
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px
`;

export const RecommendItem = styled.div`
    margin: 30px 0;
    width: 280px;
    height: 50px;
    background: url(${(props)=> props.urlImage});
    background-size: contain;
`;

/*Writer*/

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;
