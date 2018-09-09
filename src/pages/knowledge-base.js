import React from 'react';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import KnowledgeBaseComponent from '../components/KnowledgeBaseComponent';


const KnowledgeBase = () => (

    <div>
        <Header knowledgebase />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <KnowledgeBaseComponent />
        </ReactCssTransitionGroup>
    </div>
)

export default KnowledgeBase;