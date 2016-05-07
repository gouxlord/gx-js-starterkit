import List from '../ui/elements/List';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
};

const TextList = connect(
    mapStateToProps
)(List);

export default TextList;