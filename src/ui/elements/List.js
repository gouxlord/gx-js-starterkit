import React, { PropTypes } from 'react';

var List = React.createClass({
    propTypes: {
        texts: PropTypes.array
    },
    render: function(){
        return (
            <div>
                <h3>List</h3>
                <ul className="list">
                    {this.props.texts.map((text, index) =>
                        <li key={index}>{text.text}</li>
                    )}
                </ul>
            </div>
        )
    }
});

export default List;