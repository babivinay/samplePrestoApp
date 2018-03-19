
module UI.Types where

import Control.Monad.Eff.Exception (Error)
import Data.Foreign.Class (class Decode, class Encode)
import Data.Foreign.Generic (defaultOptions, genericDecode, genericEncode)
import Data.Generic.Rep (class Generic)
import Presto.Core.Flow (class Interact, defaultInteract)
import Product.Types 

data SplashScreen = SplashScreen
data SplashScreenAction = SplashScreenClicked | SplashScreenAbort

data ProfileScreen = ProfileScreen LoginCreds
data ProfileScreenAction = ProfileScreenAbort

data LoginScreen = LoginScreen
data LoginScreenAction = LoginClick LoginCreds | SignUpClick | LoginScreenAbort


-- Interact typeclass to tie input and output of the screen
instance splashScreenInteract :: Interact Error SplashScreen SplashScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI 
derive instance genericSplashScreen  :: Generic SplashScreen _
instance encodeSplashScreen :: Encode SplashScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericSplashScreenAction  :: Generic SplashScreenAction _
instance decodegenericSplashScreenAction :: Decode SplashScreenAction where
  decode = genericDecode defaultOptions


instance chooseOperatorScreenInteract :: Interact Error LoginScreen LoginScreenAction where
  interact x = defaultInteract x

derive instance genericLoginScreen  :: Generic LoginScreen _
instance encodeLoginScreen :: Encode LoginScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

derive instance genericLoginScreenAction  :: Generic LoginScreenAction _
instance decodegenericLoginScreenAction :: Decode LoginScreenAction where
  decode = genericDecode defaultOptions


instance askMobileNumberScreenInteract :: Interact Error ProfileScreen ProfileScreenAction where
  interact x = defaultInteract x

derive instance genericProfileScreen  :: Generic ProfileScreen _
instance encodeProfileScreen :: Encode ProfileScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

derive instance genericProfileScreenAction  :: Generic ProfileScreenAction _
instance decodeGenericProfileScreenAction :: Decode ProfileScreenAction where
  decode = genericDecode defaultOptions

