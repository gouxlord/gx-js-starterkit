import React, { PropTypes } from 'react';
import AddTextButton from '../containers/AddTextButton';
import TextInputText from '../containers/TextInputText';
import TextList from '../containers/TextList';

var HomeView = React.createClass({
    render () {
        return (
            <div className='homeView'>
                <div className='form'>
                    <AddTextButton/>
                    <TextInputText/>
                </div>
                <TextList/>
            </div>
        )
    }
});

export default HomeView;