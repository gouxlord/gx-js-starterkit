import React from 'react';
import styles from './HeaderView.css';

var HeaderView = React.createClass({
    render () {
        return (
            <div className={styles.wrapper}>
                <h1 className={styles.title}>header</h1>
            </div>
        )
    }
});

export default HeaderView;