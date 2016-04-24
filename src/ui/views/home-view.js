import React, { PropTypes } from 'react';
import AddTextForm from '../../containers/AddTextForm';
import TextList from '../../containers/TextList';

var HomeView = React.createClass({
    render () {
        return (
            <div className='homeView'>
                <AddTextForm className='form'>
                </AddTextForm>
                <TextList/>
            </div>
        )
    }
});

export default HomeView;