import {connect} from 'react-redux';

import LoginForm from '../components/LoginForm';
import {loginFacebook, loginInstagram, loginTwitter, LoginType} from '../actions';

const getLoginData = (data, type) => {
	switch (type) {
	case LoginType.FB_LOGIN:
		return {};
	case LoginType.INSTA_LOGIN:
		return {};
	case LoginType.TWITT_LOGIN:
		return {};
	default:
		throw new Error('Unknown Login type: ' + type);
	}
};

const mapStateToProps = state => ({
	fbLoginData       : getLoginData(state.login, LoginType.FB_LOGIN),
	instagramLoginData: getLoginData(state.login, LoginType.INSTA_LOGIN),
	twitterLoginData  : getLoginData(state.login, LoginType.TWITT_LOGIN)
});

const mapDispatchToProps = dispatch => ({
	fbLogin: () => {
		dispatch(loginFacebook());
	},
	instagramLogin: () => {
		dispatch(loginInstagram());
	},
	twitterLogin: () => {
		dispatch(loginTwitter());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
