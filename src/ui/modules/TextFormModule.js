import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import AddTextButton from '../elements/Button';
import TextInputText from '../elements/InputText';

var Form = React.createClass({
    render: function(){
        return (
            <form>
                <AddTextButton text='ok' {...this.props}/>
                <TextInputText {...this.props}/>
            </form>
        )
    }
});


export default Form;