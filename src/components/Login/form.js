import React from 'react';

export const LoginForm = React.createClass({
	render: function() {
		return (
			<form>
				<input type='email' name='email' ref='email' />
				<input type='password' name='password' ref='password' />
				<a className="btn btn-danger" onClick={this.handleLogin}>Submit</a>
			</form>);
	},
	handleLogin: function(e) {
		this.props.login(this.refs.email, this.refs.password)
	}
})

export default LoginForm;