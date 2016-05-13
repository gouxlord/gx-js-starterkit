import React from 'react';
import AddTextForm from 'src/containers/AddTextForm';
import TextList from 'src/containers/TextList';

var HomeView = React.createClass({
    render () {
        return (
            <div className="homeView">
                <AddTextForm className="form">
                </AddTextForm>
                <TextList/>
            </div>
        )
    }
});

export default HomeView;