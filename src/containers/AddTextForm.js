import Form from '../ui/molecules/TextForm'
import { connect } from 'react-redux'
import { updateCurrentText, addText } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        change : function(e){
            dispatch(updateCurrentText(e.target.value))
        },
        onSubmit: function(e){e.preventDefault},
        clickButton: (e) => {
            e.preventDefault();
            dispatch(addText())
        }
    }
};

const AddTextForm = connect(
    null,
    mapDispatchToProps
)(Form);

export default AddTextForm;