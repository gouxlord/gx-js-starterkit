import React from 'react'
import { Link } from 'react-router'

var MainLayout = React.createClass({
    render: function(){
        return (
            <div className='page-container'>
                <div className='view-container'>
                    { this.props.children }
                </div>
            </div>
        )
    }
});

export default MainLayout;