const View = require("presto-ui").baseView;

class Spash_Screen extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
		this.style_Logo = {
			onClick : this.changeScreen
		}
	}

	changeScreen = () => {
	      window.__runDuiCallback(JSON.stringify({ tag: "SplashScreenClicked" }));
	}

}

module.exports = Spash_Screen;
