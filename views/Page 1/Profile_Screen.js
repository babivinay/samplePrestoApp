const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;
const ImageView = require("presto-ui").views.ImageView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Page 1/Profile_Screen');
const STR = require('./../../res/string').values;
const HINT = require('./../../res/accessibility').values;
const Font = require('./../../res/fontStyle').values;
const Color = require('./../../res/color').values;
const FontSize = require('./../../res/fontSize').values;
const FontColor = require('./../../res/fontColor').values;

class Profile_Screen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
	}

	onPop = () => {}

	render = () => {
		if (typeof this.preRender === "function") { this.preRender(); }
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				gravity="center_horizontal"
				padding="20,19,20,220"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				clickable="true"
				{...this.style_MainScreen}>
				<TextView
					id={this.id("Profile_text")}
					height="25"
					width="match_parent"
					text={STR.Profile_text8}
					textSize={FontSize.A_20}
					color={FontColor.A__FF000000}
					fontStyle={Font.SOURCESANSPRO_BOLD}
					gravity="left"
					{...this.style_Profile_text} />
				<LinearLayout
					id={this.id("Group")}
					height="100"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					margin="0,56,0,0"
					cornerRadius="0"
					{...this.style_Group}>
					<ImageView
						id={this.id("Bitmap")}
						height="100"
						width="100"
						imageUrl="bitmapE9611480"
						{...this.style_Bitmap} />
				</LinearLayout>
				<LinearLayout
					id={this.id("Name_Group")}
					height="45"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					margin="0,47,0,0"
					{...this.style_Name_Group}>
					<TextView
						id={this.id("Name")}
						height="18"
						width="match_parent"
						text={STR.Name9}
						textSize={FontSize.A_14}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_BOLD}
						gravity="left"
						{...this.style_Name} />
					<TextView
						id={this.id("John_Doe")}
						height="25"
						width="match_parent"
						margin="0,2,0,0"
						text={STR.John_Doe10}
						textSize={FontSize.A_20}
						color={FontColor.A__FF92C38C}
						fontStyle={Font.SOURCESANSPRO_BOLD}
						gravity="left"
						{...this.style_John_Doe} />
				</LinearLayout>
				<LinearLayout
					id={this.id("Mobile_Group")}
					height="45"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					margin="0,19,0,0"
					{...this.style_Mobile_Group}>
					<TextView
						id={this.id("Mobile")}
						height="18"
						width="match_parent"
						text={STR.Mobile11}
						textSize={FontSize.A_14}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_BOLD}
						gravity="left"
						{...this.style_Mobile} />
					<TextView
						id={this.id("A_9876543210")}
						height="25"
						width="match_parent"
						margin="0,2,0,0"
						text={STR.A_987654321012}
						textSize={FontSize.A_20}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						{...this.style_A_9876543210} />
				</LinearLayout>
				<LinearLayout
					id={this.id("Email_Group")}
					height="45"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					margin="0,19,0,0"
					{...this.style_Email_Group}>
					<TextView
						id={this.id("Email")}
						height="18"
						width="match_parent"
						text={STR.Email13}
						textSize={FontSize.A_14}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_BOLD}
						gravity="left"
						{...this.style_Email} />
					<TextView
						id={this.id("Myemail_gmail_com")}
						height="25"
						width="match_parent"
						margin="0,2,0,0"
						text={STR.Myemail_gmail_com14}
						textSize={FontSize.A_20}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						{...this.style_Myemail_gmail_com} />
				</LinearLayout>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = Profile_Screen;
