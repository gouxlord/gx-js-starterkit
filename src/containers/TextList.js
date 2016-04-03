import React, { PropTypes } from 'react';
import List from '../components/List';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
};

const TextList = connect(
    mapStateToProps
)(List);

export default TextList;