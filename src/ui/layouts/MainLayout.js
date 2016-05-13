import React from 'react'
import Header from 'src/ui/views/HeaderView';
import ReduxDevTool from 'src/dev-tools/ReduxDevTool';

var MainLayout = React.createClass({
    render: function(){
        return (
            <div>

                <ReduxDevTool/>
                <Header/>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
});

export default MainLayout;