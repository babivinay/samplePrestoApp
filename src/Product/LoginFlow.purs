module Product.LoginFlow where

import UI.Flow as UI
import Prelude
import Engineering.Types.App (liftLeft)
import UI.Types

loginFlow = do
	UI.splashScreen 
	action <- UI.loginScreen
	case action of
		LoginClick loginCreds -> UI.profileScreen loginCreds
		SignUpClick -> pure unit
		LoginScreenAbort -> pure unit
	