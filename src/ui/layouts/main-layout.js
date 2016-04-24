import React from 'react'
import { Link } from 'react-router'
import Header from '../views/header-view';

var MainLayout = React.createClass({
    render: function(){
        return (
            <div className='page-container'>
                <Header/>
                <div className='view-container'>
                    { this.props.children }
                </div>
            </div>
        )
    }
});

export default MainLayout;