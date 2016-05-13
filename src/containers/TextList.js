import { connect } from 'react-redux'
import List from 'src/ui/elements/List';

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
};

const TextList = connect(
    mapStateToProps
)(List);

export default TextList;