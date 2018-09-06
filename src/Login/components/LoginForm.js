import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {loginFacebook, loginInstagram, loginTwitter, LoginType} from '../actions';

class LoginForm extends React.Component {
	handleOnClick = event => {
		event.preventDefault();

		switch (event.target.name) {
		case LoginType.FB_LOGIN: this.props.loginFacebook(); break;
		case LoginType.INSTA_LOGIN: this.props.loginInstagram(); break;
		case LoginType.TWITT_LOGIN: this.props.loginTwitter(); break;
		default: this.props.loginFacebook();
		}
	};

	render() {
		return (
			<div className="login-form_c">
				<div className="login-status">
					{this.props.loginStatus ? ('Logged with '+ this.props.loginType) : 'Please Login'}
				</div>
				<div className="login-form">
					<div className="login-fb_c">
						<button name={LoginType.FB_LOGIN} onClick={this.handleOnClick}>Login Facebook</button>
					</div>
					<div className="login-instagramm_c">
						<button name={LoginType.INSTA_LOGIN} onClick={this.handleOnClick}>Login Instagram</button>
					</div>
					<div className="login-twitter_c">
						<button name={LoginType.TWITT_LOGIN} onClick={this.handleOnClick}>Login Twitter</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loginStatus: state.LoginReducer.login.loginStatus,
		loginType  : state.LoginReducer.login.loginType,
		loginData  : state.LoginReducer.login.loginData
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loginFacebook: () => {
			dispatch(loginFacebook());
		},
		loginInstagram: () => {
			dispatch(loginInstagram());
		},
		loginTwitter: () => {
			dispatch(loginTwitter());
		}
	};
};

LoginForm.propTypes = {
	loginFacebook : PropTypes.func.isRequired,
	loginInstagram: PropTypes.func.isRequired,
	loginTwitter  : PropTypes.func.isRequired,
	loginStatus   : PropTypes.bool.isRequired,
	loginType     : PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
