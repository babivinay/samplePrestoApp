const RootScreen = require("./views/RootScreen");
// Screens of page: Page 1
const SplashScreen = require("./views/Page 1/Spash_Screen");
const LoginScreen = require("./views/Page 1/Login_Signup");
const ProfileScreen = require("./views/Page 1/Profile_Screen");

const screens = {
	SplashScreen,
	LoginScreen,
	ProfileScreen,
	RootScreen
};

const INIT_UI = "SplashScreen";

module.exports = {
	screens,
	INIT_UI
};
