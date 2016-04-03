import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

var Button = React.createClass({
    propTypes: {
        text: PropTypes.string,
        clickFn: PropTypes.func
    },
    getDefaultProps: function() {
        return {
            text: 'Ok'
        };
    },
    render: function(){
        return (
            <button onClick={this.props.clickFn}> {this.props.text}</button>
        )
    }
});


export default Button;