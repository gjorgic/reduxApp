import { connect } from 'react-redux';
import {login, logout, check} from '../modules/login.js';

import LoginForm from 'components/Login';

const mapActionCreators = {
	login: (usename, password) => login(usename, password)
}

const mapStateToProps = (store) => ({
})

export default connect(mapStateToProps, mapActionCreators)(LoginForm);