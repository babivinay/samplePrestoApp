const View = require("presto-ui").baseView;

class Profile_Screen extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = Profile_Screen;
