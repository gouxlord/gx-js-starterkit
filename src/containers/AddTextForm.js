import { addText } from 'src/application-state/actions'
import Form from 'src/ui/modules/TextFormModule'
import { reduxForm } from 'redux-form'
import store from 'src/application-state/index'
import { Promise } from 'es6-promise';

const fields = [ 'text' ];


export default reduxForm({
    form: 'textForm',
    fields,
    onSubmit: (values) => {
        return new Promise((resolve, reject) => {
            store.dispatch(addText(values, resolve, reject));
        });
    }
})(Form)