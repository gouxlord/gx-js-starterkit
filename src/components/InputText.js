import React, { PropTypes } from 'react'

var InputText = React.createClass({
    propTypes: {
        placeholder: PropTypes.string,
        change: PropTypes.func
    },
    getDefaultProps: function() {
        return {
            placeholder: 'Entrez votre text',
            change: function(){return;},
            value: ""
        };
    },
    getInitialState: function() {
        return {
            value: this.props.value
        };
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
        this.props.change(event.target.value);
    },
    render: function(){
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder}/>
        )
    }
});

export default InputText;