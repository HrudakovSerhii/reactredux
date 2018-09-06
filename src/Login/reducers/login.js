import {LoginType} from '../actions';

const login = (state = {loginStatus: false, loginType: '', loginData: {}}, action) => {
	console.log(state);
	let loginStatus;
	let loginType;
	let loginData;

	switch (action.type) {
	case LoginType.FB_LOGIN:
		loginStatus = true;
		loginType = 'facebook';
		loginData = {userName: 'Serhii', userSurname: 'Hrudakov'}; break;
	case LoginType.INSTA_LOGIN:
		loginStatus = true;
		loginType = 'instagram';
		loginData = {userName: 'Serhii', userSurname: 'Hrudakov'}; break;
	case LoginType.TWITT_LOGIN:
		loginStatus = true;
		loginType = 'twitter';
		loginData = {userName: 'Serhii', userSurname: 'Hrudakov'}; break;
	default:
		return state;
	}

	return {
		loginStatus,
		loginData,
		loginType
	};
};

export default login;
