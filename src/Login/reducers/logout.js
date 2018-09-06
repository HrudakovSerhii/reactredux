import {LoginType} from '../actions';

const logout = (state = {loginStatus: false, loginType: '', loginData: {}}, action) => {
	switch (action.type) {
	case LoginType.FB_LOGOUT: break;
	case LoginType.INSTA_LOGOUT: break;
	case LoginType.TWITT_LOGOUT: break;
	default:
		return state;
	}

	return {
		loginStatus: false,
		loginType  : '',
		loginData  : {}
	};
};

export default logout;
