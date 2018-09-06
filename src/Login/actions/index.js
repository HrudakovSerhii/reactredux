export const LoginType = {
	FB_LOGIN    : 'FB_LOGIN',
	INSTA_LOGIN : 'INSTA_LOGIN',
	TWITT_LOGIN : 'TWITT_LOGIN',
	FB_LOGOUT   : 'FB_LOGOUT',
	INSTA_LOGOUT: 'INSTA_LOGOUT',
	TWITT_LOGOUT: 'TWITT_LOGOUT'
};

export const loginFacebook = () => {
	return ({
		type: LoginType.FB_LOGIN
	});
};

export const loginInstagram = () => {
	return ({
		type: LoginType.INSTA_LOGIN
	});
};

export const loginTwitter = () => {
	return ({
		type: LoginType.TWITT_LOGIN
	});
};

export const logoutFacebook = () => {
	return ({
		type: LoginType.FB_LOGIN
	});
};

export const logoutInstagram = () => {
	return ({
		type: LoginType.INSTA_LOGIN
	});
};

export const logoutTwitter = () => {
	return ({
		type: LoginType.TWITT_LOGIN
	});
};

