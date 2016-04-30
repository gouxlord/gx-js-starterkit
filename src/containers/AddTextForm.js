import Form from '../ui/modules/TextFormModule'
import { connect } from 'react-redux'
import { updateCurrentText, addText } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        currentText: state.currentText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        change : function(e){
            dispatch(updateCurrentText(e.target.value))
        },
        onSubmit: function(e){
            e.preventDefault
        },
        clickButton: (e) => {
            e.preventDefault();
            dispatch(addText())
        }
    }
};

const AddTextForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default AddTextForm;