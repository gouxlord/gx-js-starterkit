import { addText } from '../redux/actions'
import Button from '../components/Button'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        clickFn: (e) => {
            e.preventDefault();
            dispatch(addText())
        },
        text: 'OK'
    }
};

const AddTextButton = connect(
    null,
    mapDispatchToProps
)(Button);

export default AddTextButton;