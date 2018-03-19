module UI.Flow where

import Prelude (bind, pure, Unit, ($), unit)
import Engineering.Helpers.Commons (runUI')
import Engineering.Types.App (Flow,liftLeft)
import Product.Types 
import UI.Types 


splashScreen :: Flow BillPayFailure Unit
splashScreen = do
	action <- runUI' SplashScreen
	case action of
		SplashScreenClicked -> pure unit
		SplashScreenAbort -> liftLeft UserAbort


loginScreen :: Flow BillPayFailure LoginScreenAction
loginScreen = do
	action <- runUI' LoginScreen
	case action of
		LoginClick loginCreds -> pure $ LoginClick loginCreds
		SignUpClick -> pure SignUpClick
		LoginScreenAbort -> pure LoginScreenAbort

profileScreen :: LoginCreds -> Flow BillPayFailure Unit
profileScreen loginCreds = do
	action <- runUI' $ ProfileScreen loginCreds
	case action of
		ProfileScreenAbort -> liftLeft UserAbort
