import React, { PropTypes } from 'react'

var Button = React.createClass({
    propTypes: {
        text: PropTypes.string,
        clickFn: PropTypes.func
    },
    render: function(){
        return (
            <button onClick={this.props.clickButton}> {this.props.text}</button>
        )
    }
});


export default Button;