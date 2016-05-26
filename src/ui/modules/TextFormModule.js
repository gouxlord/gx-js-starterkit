import React, { Component, PropTypes } from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label>Text</label>
                    <div>
                        <input type="text" placeholder="First Name" {...this.props.fields.text}/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={this.props.submitting}>
                        {this.props.submitting ? <i/> : <i/>} Submit
                    </button>
                </div>
                <div style={{height: '200px', width: '200px', backgroundColor: this.props.submitting ? 'red':'white'}}></div>
            </form>
        )
    }
}

Form.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default Form;