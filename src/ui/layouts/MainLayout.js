import React from 'react'
import Header from '../views/HeaderView';

var MainLayout = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
});

export default MainLayout;