const View = require("presto-ui").baseView;

class Login_Signup extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;

		this.style_Login = {
			onClick : this.login
		}

	}

	login = () => {
      var whatToSend= {"username":"vinay","password": "vinay"}
      var event = { "tag": "LoginClick", contents : whatToSend};
      window.__runDuiCallback(JSON.stringify(event));
	}

}

module.exports = Login_Signup;
