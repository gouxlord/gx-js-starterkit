import InputText from '../components/InputText'
import { connect } from 'react-redux'
import { updateCurrentText } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        value : state.currentText
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        change : function(text){
            dispatch(updateCurrentText(text))
        }
    }
};

const TextInputText = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputText);

export default TextInputText;