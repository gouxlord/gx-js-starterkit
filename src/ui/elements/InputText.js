import React, { PropTypes } from 'react'

var InputText = React.createClass({
    propTypes: {
        placeholder: PropTypes.string,
        change: PropTypes.func
    },
    render: function(){
        return (
            <input type="text" value={this.props.currentText} onChange={this.props.change} placeholder={this.props.placeholder}/>
        )
    }
});

export default InputText;