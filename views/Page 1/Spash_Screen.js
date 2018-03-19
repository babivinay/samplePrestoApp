const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Page 1/Spash_Screen');
const STR = require('./../../res/string').values;
const HINT = require('./../../res/accessibility').values;
const Font = require('./../../res/fontStyle').values;
const Color = require('./../../res/color').values;
const FontSize = require('./../../res/fontSize').values;
const FontColor = require('./../../res/fontColor').values;

class Spash_Screen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		console.log("hello")
	}

	onPop = () => {}


	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="horizontal"
				gravity="center"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				clickable="true"
				{...this.style_Splash_Screen_Group}>
				<LinearLayout
					id={this.id("Group")}
					height="100"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					cornerRadius="0"
					{...this.style_Group}>
					<ImageView
						id={this.id("Logo")}
						height="100"
						width="100"
						imageUrl="1cb790f9b3ea4e63c20541fd342566ce124c7d10"
						{...this.style_Logo} />
				</LinearLayout>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = Spash_Screen;
