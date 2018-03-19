const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/Page 1/Login_Signup');
const STR = require('./../../res/string').values;
const HINT = require('./../../res/accessibility').values;
const Font = require('./../../res/fontStyle').values;
const Color = require('./../../res/color').values;
const FontSize = require('./../../res/fontSize').values;
const FontColor = require('./../../res/fontColor').values;

class Login_Signup extends Controller {

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
				padding="20,19,20,20"
				background={Color.A__FFFFFFFF}
				cornerRadius="0"
				root={true}
				clickable="true"
				{...this.style_MainScreen}>
				<TextView
					id={this.id("Header_Text")}
					height="25"
					width="match_parent"
					text={STR.Header_Text1}
					textSize={FontSize.A_20}
					color={FontColor.A__FF000000}
					fontStyle={Font.SOURCESANSPRO_BOLD}
					gravity="left"
					{...this.style_Header_Text} />
				<LinearLayout
					id={this.id("Username_Input")}
					height="54"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					margin="0,39,0,0"
					{...this.style_Username_Input}>
					<TextView
						id={this.id("UsernameText")}
						height="20"
						width="match_parent"
						text={STR.UsernameText2}
						textSize={FontSize.A_16}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						{...this.style_UsernameText} />
					<TextView
						id={this.id("UsernameInput")}
						height="25"
						width="match_parent"
						margin="0,3,0,0"
						text={STR.UsernameInput3}
						textSize={FontSize.A_20}
						color={FontColor.A__FFDE7145}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						{...this.style_UsernameInput} />
					<LinearLayout
						id={this.id("Underline")}
						height="2"
						width="match_parent"
						background={Color.A__FFAAAAAA}
						margin="0,4,0,0"
						cornerRadius="0"
						{...this.style_Underline} />
				</LinearLayout>
				<LinearLayout
					id={this.id("Password_Input")}
					height="54"
					width="match_parent"
					orientation="vertical"
					gravity="center_horizontal"
					margin="0,20,0,0"
					{...this.style_Password_Input}>
					<TextView
						id={this.id("Password_Text")}
						height="20"
						width="match_parent"
						text={STR.Password_Text4}
						textSize={FontSize.A_16}
						color={FontColor.A__FF000000}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						{...this.style_Password_Text} />
					<TextView
						id={this.id("PasswordInput")}
						height="25"
						width="match_parent"
						margin="0,3,0,0"
						text={STR.PasswordInput5}
						textSize={FontSize.A_20}
						color={FontColor.A__FFDE7145}
						fontStyle={Font.SOURCESANSPRO_REGULAR}
						gravity="left"
						{...this.style_PasswordInput} />
					<LinearLayout
						id={this.id("Underline100000000ø")}
						height="2"
						width="match_parent"
						background={Color.A__FFAAAAAA}
						margin="0,4,0,0"
						cornerRadius="0"
						{...this.style_Underline100000000ø} />
				</LinearLayout>
				<LinearLayout
					id={this.id("Space")}
					weight="1"
					{...this.style_Space} />
				<LinearLayout
					id={this.id("Button_Group")}
					height="44"
					width="match_parent"
					orientation="horizontal"
					{...this.style_Button_Group}>
					<LinearLayout
						id={this.id("Login")}
						height="44"
						width="150"
						orientation="horizontal"
						gravity="center"
						weight="1"
						background={Color.A__FFDF7244}
						cornerRadius="4"
						{...this.style_Login}>
						<TextView
							id={this.id("Login_Text")}
							height="25"
							width="match_parent"
							text={STR.Login_Text6}
							textSize={FontSize.A_20}
							color={FontColor.A__FFFFFFFF}
							fontStyle={Font.SOURCESANSPRO_BOLD}
							gravity="center"
							{...this.style_Login_Text} />
					</LinearLayout>
					<LinearLayout
						id={this.id("Sign_up")}
						height="44"
						width="150"
						orientation="horizontal"
						gravity="center"
						margin="20,0,0,0"
						weight="1"
						background={Color.A__FFDF7244}
						cornerRadius="4"
						{...this.style_Sign_up}>
						<TextView
							id={this.id("Signup_Text")}
							height="25"
							width="match_parent"
							text={STR.Signup_Text7}
							textSize={FontSize.A_20}
							color={FontColor.A__FFFFFFFF}
							fontStyle={Font.SOURCESANSPRO_BOLD}
							gravity="center"
							{...this.style_Signup_Text} />
					</LinearLayout>
				</LinearLayout>
			</LinearLayout>
		);
		this.containerId = this.layout.idSet.id;
		return this.layout.render();
	}

};

module.exports = Login_Signup;
